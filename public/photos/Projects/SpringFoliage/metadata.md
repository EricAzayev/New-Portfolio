# Spring Foliage Map - Project Metadata

## Project Classification
- **Category:** Geospatial Data Visualization / Real-time Map Platform
- **Type:** Interactive Web Map Application with GPU Acceleration
- **Domain:** Environmental Science / Geospatial Analysis / Performance Optimization

## Technical Stack
- **Frontend**: React 19, MapLibre GL 5, WebGL, Three.js integration
- **Data Format**: GeoTIFF (geospatial raster data)
- **Rendering**: CPU mode (NumPy) + GPU mode (WebGL shaders)
- **Visualization**: Dynamic tile generation, real-time filtering
- **Deployment**: Static hosting, optional tile pre-generation

## Program Analysis

### GitHub Repository: https://github.com/EricAzayev/Spring-Foliage

**Repository Structure:**
- `/src` - React components, map integration, WebGL shaders
- `/public` - Static assets, GeoTIFF data files
- `/scripts` - Optional tile pre-generation scripts (Python)
- `/shaders` - GLSL fragment/vertex shaders for GPU rendering

**Frontend Stack (React 19):**
- **Framework**: React 19 with TypeScript
- **Mapping Library**: MapLibre GL 5 (open-source alternative to Mapbox)
- **Graphics**: WebGL for GPU-accelerated rendering
- **Data Handling**: GeoTIFF.js for loading geospatial raster files
- **State Management**: React hooks for map state, date selection, mode toggles
- **UI Components**: Date slider, legend, mode toggle buttons, loading indicators

**Core Data Pipeline:**

**1. GeoTIFF Loading & Processing**
```
GeoTIFF File (SpringBloom_30yr.tif)
  ↓ [GeoTIFF.js parser]
  ├─ Extract geospatial metadata (bounds, projection, resolution)
  ├─ Parse band data (Spring bloom dates per pixel)
  ├─ Convert to numeric array
  └─ Determine date range (e.g., Day 100-180 of year)
  
  → Two Processing Paths:
  
  Path A: CPU Mode (NumPy)
    ├─ Load full GeoTIFF into browser memory
    ├─ Apply color scale (Day → Color mapping)
    ├─ Render via Canvas 2D context
    └─ Display on MapLibre as raster layer
  
  Path B: GPU Mode (WebGL)
    ├─ Encode GeoTIFF as WebGL texture
    ├─ Load GLSL fragment shader
    ├─ Shader samples texture per pixel
    ├─ Apply color scale on GPU
    ├─ Render to canvas at target resolution
    └─ Send tiles to MapLibre as raster sources
```

**2. WebGL Shader Architecture**

The fragment shader is the performance workhorse. It runs once per output pixel in parallel on the GPU:

```glsl
precision highp float;

uniform sampler2D uGeotiffTexture;  // GeoTIFF data as texture
uniform vec4 colorScale[365];        // Color palette for each day
uniform float uSelectedDate;          // Date slider value (0-365)

varying vec2 vUV;                   // Texture coordinates (0-1)

void main() {
  // 1. Sample pixel value from texture
  float dayOfYear = texture2D(uGeotiffTexture, vUV).r * 365.0;
  
  // 2. Web Mercator math: convert screen coords → lat/lng
  vec2 latLng = screenToLatLng(gl_FragCoord);
  
  // 3. Lat/lng → GeoTIFF pixel coordinates
  vec2 pixelCoords = latLngToPixel(latLng);
  
  // 4. Sample GeoTIFF at pixel coords
  float value = texture2D(uGeotiffTexture, pixelCoords).r;
  
  // 5. Map value to color using day-based palette
  vec4 color = colorScale[int(value)];
  
  // 6. Handle out-of-bounds (no data = transparent)
  if (value < 0.0 || value > 365.0) {
    color.a = 0.0;
  }
  
  gl_FragColor = color;
}
```

**3. Tile Generation & Caching**

```javascript
// Render generation counter prevents stale tile renders
let currentRenderGeneration = 0;

async function generateTile(x, y, z, date) {
  const renderGeneration = ++currentRenderGeneration;
  
  // Start rendering
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Long rendering operation...
  for (let i = 0; i < pixelCount; i++) {
    // Apply color scale for given date
    pixels[i] = colorScale[date][sourcePixels[i]];
  }
  
  // Check if still relevant (date may have changed)
  if (renderGeneration !== currentRenderGeneration) {
    return null; // Discard stale render
  }
  
  // Cache tile for next request
  tileCache.set(`${x},${y},${z}`, canvas);
  return canvas;
}
```

**4. Idle-Time Pre-rendering**

```javascript
// After user interaction stops, pre-generate tiles for ±7 days
function schedulePrerendering() {
  clearTimeout(preRenderTimeout);
  
  preRenderTimeout = setTimeout(async () => {
    for (let offset = -7; offset <= 7; offset++) {
      const date = currentDate + offset;
      
      // Pre-render adjacent dates in background
      await generateTile(viewportTiles[0].x, viewportTiles[0].y, 
                        viewportTiles[0].z, date);
    }
  }, 500); // Wait 500ms after user stops dragging
}
```

**Key Implementation Details:**

**1. Web Mercator Math in Shaders**
```glsl
// Convert screen pixel coordinates to lat/lng
vec2 screenToLatLng(vec2 screenCoords) {
  // Normalize screen coords to [0, 1]
  vec2 normalized = screenCoords / viewportSize;
  
  // Apply Web Mercator projection
  float lng = normalized.x * 360.0 - 180.0;
  float latRadians = atan(sinh(normalized.y * 2.0 * PI - PI)) * 2.0;
  float lat = degrees(latRadians);
  
  return vec2(lat, lng);
}
```

**2. Y-Axis Flip Handling**
```javascript
// WebGL uses bottom-up coordinate system
// Canvas uses top-down
// GeoTIFF uses bottom-up (geographic standard)

// When rendering tile, flip Y-axis:
const flippedPixelY = canvasHeight - pixelY;

// When sampling from GeoTIFF texture:
const textureCoord = vec2(pixelX / width, (height - pixelY) / height);
```

**3. Color Palette Interpolation**
```javascript
// Map day-of-year (1-365) to color
const colorScale = new Array(365);

// Define key dates and colors
const keypoints = [
  { day: 0, color: [100, 150, 255] },    // Winter: blue
  { day: 90, color: [150, 255, 100] },   // Spring: green
  { day: 180, color: [255, 200, 0] },    // Summer: yellow
  { day: 270, color: [255, 100, 0] },    // Fall: orange
  { day: 365, color: [100, 50, 0] }      // Winter: brown
];

// Interpolate between keypoints
for (let day = 0; day < 365; day++) {
  const lower = keypoints.find(k => k.day <= day);
  const upper = keypoints.find(k => k.day >= day);
  const t = (day - lower.day) / (upper.day - lower.day);
  colorScale[day] = lerp(lower.color, upper.color, t);
}
```

**4. MapLibre Integration**
```javascript
// Add WebGL-rendered tiles as raster sources
map.addSource('foliage-tiles', {
  type: 'raster',
  tiles: ['tile:///{z}/{x}/{y}.png'],  // Custom tile protocol
  tileSize: 256
});

map.addLayer({
  id: 'foliage-layer',
  type: 'raster',
  source: 'foliage-tiles',
  paint: {
    'raster-opacity': 0.8
  }
});

// Listen for date changes, re-tile
dateSlider.addEventListener('change', (date) => {
  map.getSource('foliage-tiles').setTiles(generateTileUrls(date));
});
```

**Performance Optimizations:**

**Original Approach (Slow):**
- Load full GeoTIFF into browser (~100MB)
- Render 434k GeoJSON features
- CPU-bound color mapping
- Result: sluggish on mobile, 5-10s load time

**Optimized Approach (Fast):**
1. **GPU Vectorization**: WebGL shader processes all pixels in parallel
   - 100× speedup vs CPU pixel-by-pixel loop
2. **Tile Caching**: Store rendered tiles in memory
   - Smooth slider interaction without re-rendering
3. **Idle-Time Pre-rendering**: Generate nearby dates while idle
   - ±7 days cached for 15-day window of smooth interaction
4. **Lazy Loading**: Only generate visible viewport tiles
   - Don't render tiles user will never see
5. **Texture Compression**: Compress GeoTIFF data in WebGL texture
   - Reduces GPU memory usage

**Performance Benchmarks:**
- **Full GeoTIFF render (CPU)**: 3-5 seconds per frame
- **Full GeoTIFF render (GPU)**: 30-50 milliseconds per frame
- **Speedup**: **100×+ faster**
- **Memory**: 50MB GeoTIFF → 10MB GPU texture
- **Mobile performance**: Responsive on iPhone 12+

**Interesting Code Patterns:**

1. **Render Generation Counter** - Invalidates stale tile renders when date changes
2. **Coordinate Transformation** - Web Mercator math in shader + Y-axis flip
3. **Idle-time Pre-rendering** - Strategic caching during user interaction breaks
4. **Texture Tile Protocol** - Custom tile provider for MapLibre integration
5. **Vectorized Classification** - NumPy/CuPy eliminates pixel loops

**Data Flow:**
```
User moves slider (date selection)
  → Clear previous tiles from cache
  → Request new tiles for visible viewport
  → Render generation ID incremented
  → WebGL shader runs on new date
  → Tiles stored in cache
  → MapLibre displays tiles
  
Background: Pre-generate ±7 days on idle
  → User drags slider to May 15
  → Idle timeout fires
  → Generate May 8-22 in background
  → Store in tileCache
  → Next slider interaction uses cached tiles
```

**Database Design** (if persisting analysis):
```sql
-- Optional: store computed statistics per date
CREATE TABLE daily_statistics (
  date_of_year INTEGER (1-365),
  area_green_pct FLOAT,
  area_bloomed_pct FLOAT,
  mean_latitude FLOAT,
  updated_at TIMESTAMP
);

-- Avoid re-computing statistics for already-viewed dates
CREATE INDEX idx_date_of_year ON daily_statistics(date_of_year);
```

---

## Skills Demonstrated
- **Geospatial Data Handling**: GeoTIFF parsing, Web Mercator projection, coordinate transformation
- **GPU Programming**: WebGL shaders, GPU-accelerated rendering, texture mapping
- **Performance Optimization**: 100× speedup via vectorization, caching strategy, tile generation
- **Real-time Visualization**: Dynamic map updates, smooth interactions, progressive rendering
- **Frontend Architecture**: React state management, MapLibre integration, canvas manipulation
- **Data Science**: Raster data analysis, temporal data visualization, color palette interpolation

## Architecture Highlights

**Data Pipeline:**
```
GeoTIFF (Spring Bloom Data)
  ↓
Parse geospatial metadata (bounds, projection)
  ↓
GPU Path: WebGL shader renders per date
CPU Path: NumPy color mapping
  ↓
Tile generation & caching
  ↓
MapLibre displays raster tiles
  ↓
User interaction: date slider, zoom, pan
```

## Use Cases & Applications
- **Environmental Monitoring**: Track spring bloom timing across seasons
- **Climate Science**: Analyze shifting bloom patterns over 30 years
- **Agriculture**: Predict optimal planting dates by region
- **Urban Planning**: Plan landscaping based on foliage timing
- **Education**: Visualize seasonal ecosystem changes

## Technical Challenges Solved
- **Rendering Speed**: 100× optimization via GPU vectorization
- **Memory Efficiency**: Reduce 100MB GeoTIFF to 10MB GPU texture
- **Interaction Smoothness**: Pre-render adjacent dates during idle time
- **Coordinate Math**: Implement Web Mercator in shader + tile coordinate transformation
- **Data Accuracy**: Preserve geographic fidelity through all transformations

## Performance Metrics
- **Load time**: <1 second (GeoTIFF already cached)
- **Tile render time**: 30-50ms per tile (GPU mode)
- **Slider interaction**: Smooth 60fps with pre-rendered ±7 days
- **Memory footprint**: 50MB disk → 10MB GPU → responsive on mobile
- **Data points**: 30 years × 365 days × millions of pixels

## Future Enhancement Roadmap
1. **Multi-year Comparison**: Side-by-side 2020 vs 2024 bloom
2. **Region Statistics**: Show statistics panel per geographic region
3. **Time-lapse Animation**: Automatically animate through entire season
4. **User Annotations**: Mark observations, share findings
5. **Mobile Native**: React Native app with offline GeoTIFF support
6. **Cloud Tile Server**: Pre-generate all tiles on server, serve via TMS
7. **Satellite Integration**: Overlay satellite imagery alongside bloom data

## Geospatial Implementation

### Coordinate Systems
- **Source:** WGS84 (lat/lon degrees) in GeoTIFF
- **Rendering:** Web Mercator (EPSG:3857, meters) for web tiles
- **Transformations:** Proper inverse Mercator math in GLSL shaders

### Foliage Classification
7 stages based on relationship between **current slider day** and **location's bloom day**:
- None, Budding, First Leaf, First Bloom, Peak Bloom, Canopy, Post Bloom
- Smooth interpolation between stages
- Enables "traveling wave" visual effect as slider moves

### Tile System
- **Zoom Level:** Fixed zoom 4 (16 tiles cover continental US)
- **Tile Format:** Standard XYZ web tiles (256×256 PNG)
- **Dynamic Loading:** Render only visible tiles, remove off-screen ones
- **Caching:** Multi-key cache: `${z}/${x}/${y}/${dayOfYear}`

## Performance Metrics

### GPU Acceleration
- **Tile Generation:** ~100-500ms per tile on GPU vs seconds on CPU
- **Pre-generation Runtime:** 10-20 minutes for 17 days × 9 zoom levels
- **Output Size:** 50-200 MB total tiles
- **Vectorization Speedup:** ~100× via NumPy/CuPy (no pixel loops)

### Data Size
- **GeoTIFF:** ~20 MB (full continental US raster)
- **Pre-generated Tiles:** 50-200 MB (optional, can avoid client computation)
- **Browser Memory:** Depends on visible tiles + texture (manageable)

## Future Enhancement Opportunities
1. Dynamic zoom level support (currently fixed zoom 4)
2. Interactive filters by state/region/bloom stage
3. Historical data trends (min/max bloom dates over decades)
4. Topography overlay for elevation impact on bloom timing
5. Mobile-optimized version (landscape mode, touch gestures)
6. Server-side tile serving (avoid client computation entirely)

## Technology Highlights

### Frontend
- **React 19.2:** Hooks for state/effects, refs for WebGL context
- **MapLibre GL 5.14:** Open-source map rendering, layer management
- **Turf.js 7.3:** Geospatial library for grid generation and point-in-polygon tests
- **GeoTIFF.js 2.1:** Parse GeoTIFF files in browser
- **Vite 5.4:** Fast build tool with HMR

### Backend (Data Generation)
- **Rasterio:** GeoTIFF I/O and coordinate reprojection
- **NumPy:** Vectorized array operations
- **CuPy:** GPU-accelerated NumPy (CUDA 12.x)
- **Pillow:** PNG image generation
- **Mercantile:** Web tile coordinate utilities

### WebGL
- **Fragment Shader:** Complex geographic → texture coordinate math, foliage classification with smooth interpolation
- **Vertex Shader:** Simple quad rendering
- **Framebuffer Approach:** Render to texture, readback as PNG
- **Texture Formats:** RGBA 8-bit for color, single-channel for GeoTIFF data

## Deployment
- **No Backend Server:** Fully static frontend (React + assets)
- **Hosting:** Any static host (Vercel, Netlify, GitHub Pages)
- **Asset CDN:** GeoTIFF + states GeoJSON in `public/`
- **Optional:** Pre-generated tiles on CDN to eliminate client computation

## Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| Browser GeoTIFF loading slow | Use pre-generated raster tiles, eliminate texture upload |
| GeoJSON grid too large (434k features) | GPU shader approach with sparse visible tiles |
| Tile Y-axis misalignment | Proper Web Mercator inverse formula in shader |
| Slider lag on date change | Pre-render adjacent days during idle time |
| Shader coordinate bugs | GPU_DEBUG_CONSOLE.js with diagnostic tests |
| Terrain layer 403 errors | Disabled terrain (can use alternative DEM source) |

## Code Quality
- **Linting:** ESLint configured for React/JavaScript
- **Type Safety:** TypeScript types available (optional)
- **Error Handling:** Try-catch blocks, console logging for debugging
- **Performance Debugging:** GPU_DEBUG_CONSOLE.js with 7 diagnostic tests

## Learning Value
This project demonstrates:
- Full-stack geospatial engineering (data pipeline + visualization)
- GPU computing in the browser (WebGL shaders)
- Advanced React patterns (refs, closures, side effects)
- Proper geospatial coordinate systems and transformations
- Smart performance optimization (caching, idle-time pre-rendering)
- Responsive interactive map UI design
