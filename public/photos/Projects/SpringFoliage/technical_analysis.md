# Spring Foliage Map - Technical Analysis
**GitHub Repository:** https://github.com/EricAzayev/Spring-Foliage  
**Author:** EricAzayev  
**Status:** Pre-deployment optimization phase  
**Last Updated:** Yesterday (GPU mode optimization)

---

## 1. Project Structure

```
Spring-Foliage/
├── client/                          # Frontend React + MapLibre application
│   ├── public/
│   │   ├── SpringBloom_30yr.tif    # Raster data: day-of-year bloom times (1-365)
│   │   ├── us-states.json           # GeoJSON state boundaries
│   │   ├── style.json               # MapLibre style definition
│   │   └── tiles/                   # (Optional) Pre-generated tile outputs
│   │       └── day_XXX/{z}/{x}/{y}.png
│   ├── src/
│   │   ├── App.jsx                  # Main app: date slider, header, legend
│   │   ├── App.css
│   │   ├── main.jsx
│   │   ├── components/
│   │   │   ├── Map.jsx              # Core map component (MapLibre + WebGL)
│   │   │   └── Map.css
│   │   └── utils/
│   │       ├── rasterTileProcessor.js    # WebGL tile generator (GPU mode)
│   │       ├── gpuProcessor.js           # (Backup) Alternative GPU processor
│   │       └── terrainConfig.js          # Terrain configuration (disabled)
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
│
├── data_generator/                  # Python offline tile pre-generation
│   ├── SpringBloom_30yr.tif        # Source GeoTIFF
│   ├── generate_tiles.py            # CPU vectorized tile generation
│   ├── generate_tiles_gpu.py        # Alternative GPU implementation
│   ├── generate_tiles_gpu_gridded.py # Latest: GPU with grid quantization
│   ├── test_gpu.py
│   ├── verify_png.py
│   ├── requirements.txt
│   ├── README.md
│   ├── README_GPU.md
│   ├── WALKTHROUGH_GPU.md
│   └── GPU_DEBUG_GUIDE.md
│
├── GPU_DEBUG_CONSOLE.js             # Browser console debugging utilities
├── README.md
├── Deployment Plan.md
└── map.md                           # Tiling documentation
```

---

## 2. Tech Stack

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.2.0 | UI framework, state management (slider, mode toggle) |
| **MapLibre GL** | 5.14.0 | Open-source map rendering (successor to Mapbox GL) |
| **Turf.js** | 7.3.1 | Geospatial operations: grid generation, point-in-polygon |
| **GeoTIFF.js** | 2.1.4-beta.1 | Parse & read raster data in browser |
| **Mercantile** | 3.0.0 | Web tile coordinate utilities |
| **Vite** | 5.4.14 | Build tool & dev server |
| **ESLint** | 9.39.1 | Code linting |

### Backend / Data Pipeline
| Technology | Purpose |
|-----------|---------|
| **Python 3.8+** | Data generation scripts |
| **Rasterio** | GeoTIFF reading/writing, coordinate reprojection |
| **NumPy** | Vectorized raster operations |
| **CuPy** | GPU-accelerated NumPy (CUDA 12.x) |
| **Pillow** | PNG image generation |
| **Mercantile** | Tile coordinate calculations |
| **tqdm** | Progress bars |

### No Backend Server
- **Fully static/client-side** except for optional pre-generated tiles
- GeoTIFF loaded directly in browser (modern browsers support Blob API)
- All computation runs on client GPU or CPU

---

## 3. Architecture

### 3.1 High-Level Data Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER INTERACTION                          │
│                    Date Slider (Day 54-180)                     │
└────────────────────────────┬────────────────────────────────────┘
                             │ onChange: setDayOfYear, setCurrentDate
                             ▼
        ┌────────────────────────────────────────────┐
        │   App.jsx: State Management               │
        │   - currentDate, dayOfYear                │
        │   - mapMode (cpu/gpu)                    │
        │   - colorLegend                          │
        └────────────────┬─────────────────────────┘
                         │ Props: dayOfYear, mapMode
                         ▼
        ┌────────────────────────────────────────────┐
        │         Map.jsx: MapLibre Wrapper          │
        │  - Mount MapLibre instance (useEffect)    │
        │  - Toggle rendering modes                 │
        │  - Manage GPU/CPU tile generation        │
        └────────────────┬─────────────────────────┘
                         │
         ┌───────────────┴───────────────┐
         │                               │
    CPU Mode                        GPU Mode
    (Slower)                     (Faster, preferred)
         │                               │
         ▼                               ▼
┌──────────────────┐      ┌──────────────────────────┐
│ CPU RENDERING    │      │ GPU RENDERING            │
│                  │      │ (RasterTileProcessor)    │
│ 1. Load GeoTIFF  │      │                          │
│ 2. Create        │      │ 1. Load GeoTIFF as GPU   │
│    GeoJSON grid  │      │    texture               │
│ 3. Sample points │      │ 2. WebGL shader samples  │
│    (Turf.js)     │      │    texture per pixel     │
│ 4. Apply colors  │      │ 3. Renders to canvas     │
│    (MapLibre)    │      │ 4. Display canvas as     │
│                  │      │    raster source in      │
│                  │      │    MapLibre              │
│ Result: Slow,    │      │ Result: 100× faster      │
│ ~434k features   │      │ per-frame computation    │
└──────────────────┘      └──────────────────────────┘
         │                               │
         └───────────────┬───────────────┘
                         │
                         ▼
             ┌──────────────────────┐
             │   MapLibre Instance  │
             │   - Renders layers   │
             │   - Pan/zoom events  │
             │   - Displays map     │
             └─────────────┬────────┘
                           │
                           ▼
                      ┌──────────┐
                      │  Browser │
                      │  Display │
                      └──────────┘
```

### 3.2 Rendering Modes Comparison

#### **CPU Mode: GeoJSON Grid**
- **Data Structure:** Turf.js `squareGrid()` → 434k+ polygon features
- **Sampling:** Point-by-point (CPU, slow)
- **Coloring:** MapLibre data-driven paint property with `interpolate`
- **Pros:** Easy to understand, no WebGL required
- **Cons:** Memory intensive, lots of features choke MapLibre's renderer
- **Performance:** Noticeable lag on zoom/pan, slower date slider response

#### **GPU Mode: WebGL Tile Rendering (RasterTileProcessor)**
- **Data Structure:** Canvas-based raster tiles (256×256 PNG)
- **Sampling:** WebGL fragment shader (GPU, 100× faster)
- **Coloring:** Computed in shader per-pixel based on `(currentDay - bloomDay)`
- **Tile Management:** Dynamic: add tiles as viewport enters, remove on exit
- **Caching:** TileCache Map keyed by `z/x/y/dayOfYear`
- **Pros:** Responsive, scalable, works on mobile
- **Cons:** Requires WebGL support, shader coordination math
- **Performance:** Real-time tile generation + pre-rendering for adjacent days

---

## 4. Key Implementation Details

### 4.1 Data Loading & GeoTIFF Parsing

**File:** `client/src/components/Map.jsx` → `loadGeoTIFF(url)`

```javascript
async function loadGeoTIFF(url) {
  const tiff = await GeoTIFF.fromUrl(url);
  const image = await tiff.getImage();
  const rasterData = await image.readRasters();
  const bbox = image.getBoundingBox(); // [west, south, east, north]
  
  return {
    rasterData: rasterData[0],    // Uint8Array or Float32Array
    width: image.getWidth(),       // Pixel width
    height: image.getHeight(),     // Pixel height
    bbox: [bbox[0], bbox[1], bbox[2], bbox[3]]
  };
}
```

**What the GeoTIFF contains:**
- **Each pixel value:** Day-of-year bloom time (1-365)
- **No-data value:** 0 (ocean, outside continental US)
- **Resolution:** High-res raster spanning continental US (WGS84)
- **Used by:** Both CPU mode (sampling) and GPU mode (texture upload)

### 4.2 CPU Mode: GeoJSON Grid Creation

**File:** `client/src/components/Map.jsx` → `createFoliageGrid(statesGeoJSON, geoTiffData)`

```javascript
function createFoliageGrid(statesGeoJSON, geoTiffData) {
  const bbox = [-130, 24, -65, 50];  // Continental US bounds
  const cellSide = 3;                 // 3 miles per cell
  const grid = turf.squareGrid(bbox, cellSide, { units: "miles" });
  
  const filteredFeatures = [];
  for (const square of grid.features) {
    const center = turf.center(square);
    const [lon, lat] = center.geometry.coordinates;
    
    // Check if cell center is in continental US (not Alaska/Hawaii)
    const inContinent = continentalStates.some(state =>
      turf.booleanPointInPolygon(center, state)
    );
    
    if (!inContinent) continue;
    
    // Sample GeoTIFF at cell center
    const springDay = sampleGeoTIFFAtPoint(lon, lat, geoTiffData) || 90;
    const clamped = Math.max(50, Math.min(150, springDay));
    
    filteredFeatures.push({
      type: "Feature",
      geometry: square.geometry,
      properties: { spring_day: clamped }
    });
  }
  return { type: "FeatureCollection", features: filteredFeatures };
}

// Sample a single point from GeoTIFF
function sampleGeoTIFFAtPoint(lon, lat, geoTiffData) {
  const { rasterData, width, height, bbox } = geoTiffData;
  const [west, south, east, north] = bbox;
  
  const xRatio = (lon - west) / (east - west);
  const yRatio = (north - lat) / (north - south);  // North-to-south orientation
  
  const px = Math.floor(xRatio * width);
  const py = Math.floor(yRatio * height);
  
  if (px < 0 || px >= width || py < 0 || py >= height) return null;
  
  return rasterData[py * width + px];
}
```

**Result:** ~40k-50k polygon features covering continental US

### 4.3 GPU Mode: WebGL Tile Rendering

**File:** `client/src/utils/rasterTileProcessor.js`

#### **WebGL Shader: Fragment Shader Logic**

```glsl
#version 100
precision highp float;

uniform sampler2D rasterTexture;  // GeoTIFF encoded as RGBA texture
uniform vec4 bbox;                // [west, south, east, north] of GeoTIFF
uniform vec2 rasterSize;          // [width, height] of GeoTIFF
uniform vec4 tileBbox;            // [west, south, east, north] of current tile
uniform float dayOfYear;          // Current day from slider

varying vec2 vTexCoord;           // Tile pixel coords [0,1]

void main() {
  // 1. Convert tile pixel to geographic coordinates
  float lon = tileBbox.x + vTexCoord.x * (tileBbox.z - tileBbox.x);
  
  // 2. Handle Web Mercator Y-coordinate (curved, not linear)
  const float PI = 3.14159265358979323846;
  float mercSouth = log(tan(PI/4.0 + tileBbox.y*PI/360.0));
  float mercNorth = log(tan(PI/4.0 + tileBbox.w*PI/360.0));
  float mercY = mercSouth + vTexCoord.y*(mercNorth - mercSouth);
  float lat = (2.0*atan(exp(mercY)) - PI/2.0) * (180.0/PI);
  
  // 3. Clamp to GeoTIFF bounds (edge handling)
  lon = clamp(lon, bbox.x, bbox.z);
  lat = clamp(lat, bbox.y, bbox.w);
  
  // 4. Convert to texture coordinates [0,1]
  float xRatio = (lon - bbox.x) / (bbox.z - bbox.x);
  float yRatio = (bbox.w - lat) / (bbox.w - bbox.y);  // Flip Y
  
  // 5. Sample GeoTIFF texture
  float encoded = texture2D(rasterTexture, vec2(xRatio, yRatio)).r * 255.0;
  
  // 6. Handle no-data (ocean)
  if (encoded < 1.0) {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    return;
  }
  
  // 7. Decode bloom day (0-365)
  float bloomDay = ((encoded - 1.0) / 254.0) * 365.0;
  
  // 8. Compute color based on days difference
  float diff = dayOfYear - bloomDay;
  vec3 color = daysDiffToColor(diff);
  
  gl_FragColor = vec4(color, 1.0);
}
```

#### **Foliage Coloring Function**

```glsl
vec3 daysDiffToColor(float diff) {
  // diff = currentDay - bloomDay
  // Negative = before bloom, zero = at bloom, positive = after bloom
  
  if (diff >= 20.0) {
    return vec3(0.0, 100.0, 0.0) / 255.0;    // Dark green (post bloom)
  } else if (diff >= 10.0) {
    return mix(
      vec3(173.0, 255.0, 47.0),               // Green-yellow (canopy)
      vec3(0.0, 100.0, 0.0),
      (diff - 10.0) / 10.0
    );
  } else if (diff >= 3.0) {
    return mix(
      vec3(128.0, 0.0, 128.0),                // Purple (peak bloom)
      vec3(173.0, 255.0, 47.0),
      (diff - 3.0) / 7.0
    );
  } else if (diff >= -5.0) {
    return mix(
      vec3(218.0, 112.0, 214.0),              // Orchid (first bloom)
      vec3(128.0, 0.0, 128.0),
      (diff + 5.0) / 8.0
    );
  } else if (diff >= -10.0) {
    return mix(
      vec3(201.0, 217.0, 111.0),              // Yellow-green (first leaf)
      vec3(218.0, 112.0, 214.0),
      (diff + 10.0) / 5.0
    );
  } else if (diff >= -15.0) {
    return mix(
      vec3(166.0, 123.0, 91.0),               // Light brown (budding)
      vec3(201.0, 217.0, 111.0),
      (diff + 15.0) / 5.0
    );
  } else {
    return mix(
      vec3(75.0, 54.0, 33.0),                 // Dark brown (none)
      vec3(166.0, 123.0, 91.0),
      clamp((diff + 25.0) / 10.0, 0.0, 1.0)
    );
  }
}
```

#### **Tile Generation Pipeline**

```javascript
class RasterTileProcessor {
  async generateTile(z, x, y, dayOfYear) {
    // 1. Get tile geographic bounds (Web Mercator)
    const tBounds = tileBounds(x, y, z);
    const tileBbox = [tBounds.west, tBounds.south, tBounds.east, tBounds.north];
    
    // 2. Set up WebGL uniforms
    this.gl.useProgram(this.program);
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebuffer);
    
    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.geoTiffTexture);
    this.gl.uniform1i(this.uniforms.rasterTexture, 0);
    this.gl.uniform4f(this.uniforms.bbox, geoTiffBbox[0], geoTiffBbox[1], ...);
    this.gl.uniform4f(this.uniforms.tileBbox, tileBbox[0], tileBbox[1], ...);
    this.gl.uniform1f(this.uniforms.dayOfYear, dayOfYear);
    
    // 3. Render full-screen quad (256×256)
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
    
    // 4. Read pixels from framebuffer
    const pixels = new Uint8Array(256 * 256 * 4);
    this.gl.readPixels(0, 0, 256, 256, this.gl.RGBA, this.gl.UNSIGNED_BYTE, pixels);
    
    // 5. Flip Y-axis (WebGL bottom-up → canvas top-down)
    const resultCanvas = document.createElement("canvas");
    const ctx = resultCanvas.getContext("2d");
    const imageData = ctx.createImageData(256, 256);
    
    for (let py = 0; py < 256; py++) {
      for (let px = 0; px < 256; px++) {
        const glIdx = (py * 256 + px) * 4;
        const canvasIdx = ((256 - 1 - py) * 256 + px) * 4;
        imageData.data[canvasIdx] = pixels[glIdx];
        imageData.data[canvasIdx + 1] = pixels[glIdx + 1];
        imageData.data[canvasIdx + 2] = pixels[glIdx + 2];
        imageData.data[canvasIdx + 3] = pixels[glIdx + 3];
      }
    }
    
    ctx.putImageData(imageData, 0, 0);
    return resultCanvas;
  }
}
```

#### **Dynamic Tile Loading on Map Pan/Zoom**

```javascript
const updateGPUTiles = async (processor, dayOfYear) => {
  const zoom = 4;  // Fixed zoom level (no dynamic zoom-level switching)
  const bounds = map.current.getBounds();
  
  // Calculate visible tiles at zoom 4
  const nwTile = lngLatToTile(bounds.getWest(), bounds.getNorth(), zoom);
  const seTile = lngLatToTile(bounds.getEast(), bounds.getSouth(), zoom);
  
  const tileList = [];
  for (let x = minX; x <= maxX; x++) {
    for (let y = minY; y <= maxY; y++) {
      tileList.push({ x, y, z: zoom });
    }
  }
  
  // Render all visible tiles in parallel
  const canvases = await Promise.all(
    tileList.map(tile => processor.generateTile(tile.z, tile.x, tile.y, dayOfYear))
  );
  
  // Add/update MapLibre layers
  for (let i = 0; i < tileList.length; i++) {
    const tile = tileList[i];
    const canvas = canvases[i];
    const posKey = `${tile.z}-${tile.x}-${tile.y}`;
    const sourceId = `foliage-gpu-${posKey}`;
    const layerId = `foliage-layer-${posKey}`;
    
    const dataURL = canvas.toDataURL('image/png');
    
    if (map.current.getSource(sourceId)) {
      // Update existing raster source
      map.current.getSource(sourceId).updateImage({ url: dataURL });
    } else {
      // Add new raster source + layer
      const tBounds = tileBounds(tile);
      const coordinates = [
        [tBounds.west, tBounds.north],
        [tBounds.east, tBounds.north],
        [tBounds.east, tBounds.south],
        [tBounds.west, tBounds.south]
      ];
      map.current.addSource(sourceId, { type: 'image', url: dataURL, coordinates });
      map.current.addLayer({
        id: layerId,
        type: 'raster',
        source: sourceId,
        paint: { 'raster-opacity': 0.85 }
      }, 'state-borders-top');
    }
  }
  
  // Remove out-of-view tiles
  for (const posKey of activeTiles.current) {
    if (!visiblePositions.has(posKey)) {
      const layerId = `foliage-layer-${posKey}`;
      const sourceId = `foliage-gpu-${posKey}`;
      map.current.removeLayer(layerId);
      map.current.removeSource(sourceId);
    }
  }
  
  // Pre-render adjacent days for instant slider response
  processor.prerenderRange(tileList, dayOfYear);
};
```

### 4.4 Foliage Stage Classification

**Timeline (relative to bloom day):**

| Stage | Days from Bloom | Color | Hex |
|-------|-----------------|-------|-----|
| None | Before -15 | Dark brown | #4B3621 |
| Budding | -15 to -10 | Light brown | #A67B5B |
| First Leaf | -10 to -5 | Yellow-green | #C9D96F |
| First Bloom | -5 to +3 | Orchid/purplish pink | #DA70D6 |
| Peak Bloom | +3 to +10 | Purple | #800080 |
| Canopy | +10 to +20 | Green-yellow | #ADFF2F |
| Post Bloom | +20+ | Dark green | #006400 |

**Key Insight:** The color represents the **relationship between the current day on the slider and each location's bloom day**, not the absolute day. This creates the traveling wave effect as you move the slider.

---

## 5. Map Integration Details

### 5.1 MapLibre GL Setup

**Map Initialization (`Map.jsx`):**

```javascript
map.current = new maplibregl.Map({
  container: mapContainer.current,
  style: "/style.json",               // Custom basemap style
  center: [-98.5, 39.8],              // USA center
  zoom: 3,                            // Start zoom level
  pitch: 0,
  bearing: 0,
  interactive: true,
  maxBounds: [[-130, 24], [-65, 50]], // Continental US bounds
  maxPitch: 85,
  antialias: true
});
```

**Style Components:**
- Ocean background: Light blue (#D4E7F5)
- US terrain fill: Light tan (#E8DCC8)
- State borders: Gray (#666666) on top
- Foliage layers: Dynamically added (CPU: fill layers, GPU: raster layers)

### 5.2 Tile Rendering in MapLibre

**MapLibre doesn't natively support WebGL-rendered tiles**, so the architecture uses a workaround:

1. **Generate tiles via WebGL** (RasterTileProcessor)
2. **Convert to canvas** (readPixels + createImageData)
3. **Upload as raster source** via `map.addSource(..., { type: 'image' })`
4. **Display as raster layer** (`type: 'raster'`)

```javascript
// Adding a GPU-rendered tile to the map
const dataURL = canvas.toDataURL('image/png');
const coordinates = [[west, north], [east, north], [east, south], [west, south]];

map.current.addSource('foliage-gpu-4-2-3', {
  type: 'image',
  url: dataURL,
  coordinates: coordinates
});

map.current.addLayer({
  id: 'foliage-layer-4-2-3',
  type: 'raster',
  source: 'foliage-gpu-4-2-3',
  paint: { 'raster-opacity': 0.85 }
}, 'state-borders-top');  // Insert below state borders
```

### 5.3 Events & Responsiveness

**Map pan/zoom → Re-render visible tiles:**
```javascript
map.current.on("moveend", () => {
  if (mapMode === "gpu" && gpuProcessor.current && geoTiffLoaded) {
    updateGPUTiles(gpuProcessor.current, dayOfYearRef.current);
  }
});
```

**Date slider change → Update colors / regenerate tiles:**
```javascript
useEffect(() => {
  if (mapMode === "cpu") {
    // Update paint property with new color mapping
    map.current.setPaintProperty("foliage-layer-cpu", "fill-color", [
      "interpolate", ["linear"], ["get", "spring_day"],
      dayOfYear - 20, colors.postBloom,
      dayOfYear + 15, colors.none,
      // ... other stops
    ]);
  } else if (mapMode === "gpu") {
    // Re-render all visible GPU tiles with new dayOfYear
    updateGPUTiles(gpuProcessor.current, dayOfYear);
  }
}, [dayOfYear, mapMode]);
```

---

## 6. Data Pipeline

### 6.1 Source Data: SpringBloom_30yr.tif

**Characteristics:**
- **Content:** Day-of-year for spring bloom onset (1-365)
- **Format:** GeoTIFF, single band (grayscale)
- **Projection:** WGS84 (lat/lon)
- **Spatial Extent:** Continental US (~30-50°N, 125-65°W)
- **Resolution:** High-res raster (exact pixel size not specified, but sufficient for zoom levels 4-12)
- **Values:** 
  - 1-365: Valid bloom days
  - 0: No data (ocean, outside US)

**Origin:** Generated from 30-year historical climate data (hence "30yr")

### 6.2 Pre-Generation Option: Python Data Generator

**Rationale:** Pre-render tiles offline to eliminate browser computation

**Pipeline (`data_generator/generate_tiles_gpu_gridded.py`):**

```
1. Load GeoTIFF via Rasterio
   ↓
2. For each day (53-180, daily):
   ↓
3.   For each zoom level (5-5, configurable):
   ↓
4.     Calculate tile grid for continent
   ↓
5.     For each tile:
   ├── Convert Web Mercator tile bounds to geographic coords
   ├── Generate pixel grid (256×256)
   ├── For each pixel:
   │   ├── Convert tile pixel → geographic (lon, lat)
   │   ├── **Quantize to grid cells** (snap to 2-mile cells)
   │   └── Sample GeoTIFF at that location
   ├── Classify each pixel as foliage stage
   ├── Color according to (currentDay - bloomDay)
   ├── Save as PNG
   └── Output: tiles/day_XXX/{z}/{x}/{y}.png
   ↓
6. Result: ~15k-75k tiles (50-200 MB total)
```

**GPU Acceleration in Python (CuPy):**

```python
def render_tile_gpu_quantized(source_data_gpu, transform, src_width, src_height, tile, current_day):
  # Create 256×256 pixel grids in Web Mercator meters
  x_coords = cp.linspace(west_m, east_m, 256)
  y_coords = cp.linspace(north_m, south_m, 256)
  x_grid, y_grid = cp.meshgrid(x_coords, y_coords)
  
  # Convert to geographic
  lon_grid, lat_grid = web_mercator_to_geographic(x_grid, y_grid)
  
  # **Quantize to grid cells** (snap to nearest cell center)
  lat_step = CELL_SIZE_MILES / 69.0
  lon_step = CELL_SIZE_MILES / (69.0 * cos(lat))
  
  q_lon = cp.floor(lon_grid / lon_step) * lon_step + (lon_step / 2)
  q_lat = cp.floor(lat_grid / lat_step) * lat_step + (lat_step / 2)
  
  # Sample GeoTIFF at quantized coords
  col_grid, row_grid = geographic_to_pixel_gpu(q_lon, q_lat, transform, ...)
  sampled = map_coordinates(source_data_gpu, [row_grid, col_grid], order=0, ...)
  
  # Classify and color
  rgba = classify_foliage_gpu(sampled, current_day)
  
  return Image.fromarray(rgba).save(tile_path)
```

**Key Optimization: Quantization**
- Without it: Smooth transitions between cells
- With it: "Boxy" grid look (matches CPU mode visual style, also reduces aliasing)

**Performance (GPU-accelerated):**
- 15k-75k tiles total
- Runtime: 10-20 minutes (vs hours for CPU)
- Output size: 50-200 MB

---

## 7. Interesting Code Patterns & Optimizations

### 7.1 Render Generation Counter Pattern

**Problem:** User slides date → GPU starts rendering tiles A, B, C. Before completing, user slides again → should cancel A, B, C and start rendering new tiles.

**Solution:** Increment counter, cancel stale renders

```javascript
const renderGenRef = useRef(0);  // Generation counter

const updateGPUTiles = async (processor, dayOfYear) => {
  const gen = ++renderGenRef.current;  // Increment on start
  
  const canvases = await Promise.all(...);  // Render tiles
  
  if (gen !== renderGenRef.current) {
    return;  // Render was superseded, discard result
  }
  
  // Add to map only if still current
};
```

### 7.2 Tile Cache with Multi-Key Lookup

**Cache Key:** `${z}/${x}/${y}/${dayOfYear}`

```javascript
const cacheKey = `${z}/${x}/${y}/${dayOfYear}`;
if (this.tileCache.has(cacheKey)) {
  return this.tileCache.get(cacheKey);  // Return cached canvas
}
```

**Benefit:** Same tile at different days won't be cached together → always fresh color

### 7.3 Pre-Rendering Adjacent Days During Idle Time

**Observation:** Slider is smooth, but if user stops on a day with no pre-rendered neighbors, next slider move lags.

**Solution:** Use `requestIdleCallback` to render ±7 days in idle periods

```javascript
prerenderRange(tiles, centerDay, radius = 7) {
  const ric = window.requestIdleCallback || ((cb) => setTimeout(cb, 0));
  
  let offset = 1;
  const renderNext = (deadline) => {
    while (offset <= radius && deadline.timeRemaining() > 2) {
      for (const sign of [1, -1]) {
        const day = centerDay + sign * offset;
        for (const tile of tiles) {
          this.generateTile(tile.z, tile.x, tile.y, day);  // Populate cache
        }
      }
      offset++;
    }
    if (offset <= radius) ric(renderNext);  // Schedule next batch
  };
  ric(renderNext);
}
```

### 7.4 Web Mercator Math in Shaders

**Challenge:** Web Mercator projection is nonlinear in Y-axis (latitude).

**Why It Matters:** At low zoom, tile pixel Y ≠ linear latitude. You need inverse Mercator transform.

```glsl
// Web Mercator (EPSG:3857) → WGS84 conversion
const float PI = 3.14159265358979323846;
float mercSouth = log(tan(PI / 4.0 + tileBbox.y * PI / 360.0));
float mercNorth = log(tan(PI / 4.0 + tileBbox.w * PI / 360.0));
float mercY = mercSouth + vTexCoord.y * (mercNorth - mercSouth);
float lat = (2.0 * atan(exp(mercY)) - PI / 2.0) * (180.0 / PI);
```

This ensures tiles align correctly when panned/zoomed.

### 7.5 Double Ref Pattern for Closure Consistency

```javascript
const dayOfYearRef = useRef(dayOfYear);
const mapModeRef = useRef(mapMode);
const geoTiffLoadedRef = useRef(geoTiffLoaded);

useEffect(() => { dayOfYearRef.current = dayOfYear; }, [dayOfYear]);
useEffect(() => { mapModeRef.current = mapMode; }, [mapMode]);
useEffect(() => { geoTiffLoadedRef.current = geoTiffLoaded; }, [geoTiffLoaded]);

// Inside async function:
map.current.on("moveend", () => {
  if (mapModeRef.current === "gpu" && gpuProcessor.current && geoTiffLoadedRef.current) {
    updateGPUTiles(gpuProcessor.current, dayOfYearRef.current);
  }
});
```

**Why:** Event callbacks capture variables by closure. To get fresh values, maintain Refs and read them inside the handler.

### 7.6 Vectorized Classification (NumPy + CuPy)

**Python data generator avoids pixel loops:**

```python
# CPU (slow)
for py in range(height):
  for px in range(width):
    val = rasterData[py, px]
    stage = classify(val, current_day)
    # ... color pixel

# Vectorized (fast)
days_diff = current_day - spring_days  # NumPy broadcasts
none_mask = (days_diff < -15) & ~invalid
budding_mask = (days_diff >= -15) & (days_diff < -10)
# ... etc

rgba[none_mask] = FOLIAGE_COLORS["none"]
rgba[budding_mask] = FOLIAGE_COLORS["budding"]
# ... etc
```

**Speedup:** ~100× faster (all 65k pixels per tile processed in parallel)

---

## 8. Dependencies & Their Purposes

### Frontend Dependencies

| Package | Version | Purpose | Notes |
|---------|---------|---------|-------|
| **react** | 19.2.0 | UI framework | Hooks: useState, useEffect, useRef |
| **react-dom** | 19.2.0 | React DOM bindings | ReactDOM.createRoot() |
| **maplibre-gl** | 5.14.0 | Map rendering | Open-source successor to Mapbox |
| **@turf/turf** | 7.3.1 | Geospatial ops | squareGrid, center, booleanPointInPolygon |
| **geotiff** | 2.1.4-beta.1 | GeoTIFF parsing | fromUrl, getImage, readRasters |
| **mercantile** | 3.0.0 | Tile math | Utilities for web tile coords |
| **vite** | 5.4.14 | Build tool | Fast dev server + production bundling |

### Python Dependencies

| Package | Version | Purpose | Notes |
|---------|---------|---------|-------|
| **rasterio** | ≥1.3.9 | GeoTIFF I/O | Read GeoTIFF, handle CRS, reproject |
| **numpy** | ≥1.24.0 | Vectorized math | Array ops, resampling |
| **pillow** | ≥10.0.0 | PNG creation | Image.fromarray, save PNG |
| **mercantile** | ≥1.2.1 | Tile calculations | tiles(), bounds() for tile grid |
| **tqdm** | ≥4.65.0 | Progress bars | User feedback |
| **cupy-cuda12x** | ≥12.0.0 | GPU arrays | GPU-accelerated NumPy (optional) |

### Dev Dependencies
- **eslint**: Code linting (JavaScript)
- **@types/react, @types/react-dom**: TypeScript types
- **@vitejs/plugin-react**: React Fast Refresh for Vite

---

## 9. Performance Considerations

### 9.1 Map Rendering Optimization

**Challenges:**
1. **GeoJSON Grid Too Large:** 434k+ features choke MapLibre's feature layer
2. **Shader Coordination Math:** Web Mercator conversion can introduce artifacts
3. **Tile Update Frequency:** Every slider move re-renders visible tiles

**Solutions:**

| Problem | Solution | Impact |
|---------|----------|--------|
| CPU mode sluggish | Switch to GPU mode (shader) | 100× faster tile generation |
| GeoJSON features | Reduce grid density (3 miles) or use GPU | Memory-friendly |
| Tile seams | Bilinear resampling in data generator | Smooth visual |
| Slider lag | Pre-render adjacent days during idle | Instant slider response |
| Map pan lag | Render only visible tiles, cache results | Smooth panning |
| Y-axis misalignment | Use Web Mercator math in shader | Correct geographic alignment |

### 9.2 Data Update Frequency

**Current:**
- Date slider: Tile generation on every date change (or pre-cached)
- Pan/zoom: Tile generation on moveend event

**Future:**
- Could implement more granular update (e.g., throttle slider to every 5 days)
- Could load pre-generated tiles from server instead of computing

### 9.3 WebGL Context Limitations

**Considerations:**
- Single WebGL context per processor (shared state)
- Texture limits: Modern browsers support 2048×2048+ textures
- Shader compilation: ~100ms per program (cached)
- Canvas readPixels: Synchronous (can block for 256×256)

**Mitigations:**
- Tile size: 256×256 (standard, supported everywhere)
- Parallel tile generation: Promise.all() batches WebGL calls
- Result: Still faster than CPU even with blocking reads

---

## 10. User Interactions & Features

### 10.1 Date Slider

**Element:** `<input type="range" min="54" max="180" />`

**Behavior:**
- 54 = February 23 (start of season)
- 180 = June 29 (end of season)
- Continuous: User can scrub smoothly
- Shows current date + day-of-year label

**Implementation:**
```javascript
const handleSliderChange = (e) => {
  const day = parseInt(e.target.value);
  setDayOfYear(day);
  const date = new Date(2025, 0, day);  // Convert to Date object
  setCurrentDate(date);
};
```

### 10.2 Mode Toggle Buttons

**CPU vs GPU Switch:**
```javascript
const toggleMapMode = () => {
  setMapMode(prev => prev === "cpu" ? "gpu" : "cpu");
};
```

- **CPU Mode:** Shows grid of GeoJSON features
- **GPU Mode:** Shows WebGL tiles (preferred)

**2D/3D View Toggle:**
```javascript
const toggle3DView = () => {
  const newIs3D = !is3DView;
  setIs3DView(newIs3D);
  if (newIs3D) {
    map.current.easeTo({ pitch: 60, bearing: -20, zoom: 4.5, duration: 1000 });
  } else {
    map.current.easeTo({ pitch: 0, bearing: 0, zoom: 3, duration: 1000 });
  }
};
```

Note: Terrain disabled (was causing 403 errors with OpenTopoMap)

### 10.3 Color Legend

**Visual Guide:** Shows 7 stages + their colors

```javascript
const colorLegend = [
  { color: "#4a3728", label: "None" },
  { color: "#8b7355", label: "Budding" },
  { color: "#d4e157", label: "First Leaf" },
  { color: "#e91e63", label: "Bloom" },
  { color: "#9c27b0", label: "Peak Bloom" },
  { color: "#4caf50", label: "Canopy" },
  { color: "#1b5e20", label: "Post" },
];
```

### 10.4 Filtering/Searching

**Current:** None implemented.

**Potential Future Features:**
- Search by state/city name to jump to location
- Filter by bloom stage on specific dates
- Display historical range (min/max bloom dates by region)

---

## 11. Deployment Architecture

### Current State
- **Frontend:** Static React app (can be hosted on any static host: Vercel, Netlify, GitHub Pages)
- **Assets:** GeoTIFF + state boundaries in `public/` folder
- **No backend API** required (fully client-side)

### Deployment Plan (from README)
1. Build: `npm run build`
2. Output: `dist/` folder
3. Host on static CDN

### Pre-Generated Tiles Option
If deploying pre-generated tiles:
- Host tiles on CDN (`/tiles/day_XXX/{z}/{x}/{y}.png`)
- Update `Map.jsx` to load tiles instead of computing them
- Reduces client-side computation to zero

---

## 12. Known Issues & Future Plans

### Current Issue: Rendering Intensive
- Original approach: Browser loads 20MB GeoTIFF, generates grid, applies colors in real-time
- Result: Memory drag, large GPU demands
- **Solution in Progress:** Tiling + GPU shader (as implemented)

### Planned Optimizations
1. **Topography Data:** Download locally instead of querying OpenTopoMap API (reduces 403 errors)
2. **Lazy-Load Tiles:** Stream pre-generated tiles on demand
3. **Data Compression:** Use WebP or other format for tiles
4. **Zoom Level Optimization:** Support zoom 4-12 dynamically (currently fixed at zoom 4)

### Debugging Tools
- **GPU_DEBUG_CONSOLE.js:** Browser console utilities for diagnosing WebGL issues
- Available tests:
  - Coordinate mapping validation
  - GeoTIFF bounds assumptions
  - WebGL error detection
  - Pixel statistics interpretation
  - Shader formula verification
  - Tile position checks

---

## Summary

### Project Strengths
1. **Innovative:** First comprehensive spring foliage map (fall version exists, but not spring)
2. **Performance-Focused:** GPU-accelerated rendering for responsiveness
3. **Full-Stack:** End-to-end pipeline from data generation to interactive visualization
4. **Smart Architecture:** Two-mode rendering (CPU fallback, GPU preferred)
5. **Geospatial Accuracy:** Proper coordinate systems (WGS84, Web Mercator)

### Key Takeaways
- **Data:** GeoTIFF raster (day-of-year bloom times) as single source of truth
- **Frontend:** React + MapLibre for UI, WebGL shaders for computation
- **Rendering:** Dynamic tile generation per viewport, cached results
- **Optimization:** 100× speedup via GPU vectorization + pre-rendering
- **No Backend:** Fully client-side, can be hosted statically

### Tech Excellence
- Proper use of Web APIs (WebGL, Blob, Canvas)
- Correct geospatial math (Mercator projection, tile coordinates)
- Smart caching and idle-time pre-rendering
- Graceful CPU fallback if GPU unavailable
