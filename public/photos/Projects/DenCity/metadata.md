# DenCity Metadata

## Project Classification
- **Category:** Real-time Data Platform / Urban IoT
- **Type:** Hackathon Project (Urban Life Challenge)
- **Domain:** Smart Cities / Location Intelligence / Privacy-first Data

## Technical Stack
- **Mobile SDK:** Native geolocation APIs (iOS/Android)
- **Bluetooth Scanning:** Core Location (iOS), Nearby (Android), or lower-level Bluetooth APIs
- **Backend:** Supabase
- **Data Processing:** Edge processing (on-device cleaning)
- **Visualization:** Real-time heatmap rendering
- **Metadata Store:** User locations, device counts, timestamps

## Program Analysis

### GitHub Repository: https://github.com/BorowskiKacper/parkingsniffer

**Repository Structure:**
Monorepo containing two frontend implementations (modern Next.js + legacy React/Leaflet) and Python sniffer backend.

**Frontend Stack (Primary - DenCity/)**
- **Framework**: Next.js 15 with TypeScript (App Router, Turbopack)
- **Mapping**: Google Maps JS API via `@vis.gl/react-google-maps`
- **Heatmap Rendering**: deck.gl `HeatmapLayer` with MEAN aggregation (not additive)
- **UI Components**: Radix UI + Tailwind CSS (40+ component library)
- **Mobile UX**: Vaul drawer library with gesture support + Framer Motion animations
- **AI Integration**: Optional Genkit flows for hotspot explanations

**Backend (Python Sniffer)**
- **BLE Scanning**: Uses `pybluez` for Bluetooth device discovery
- **Geolocation**: GPS (primary) or IP-based lookup fallback
- **Async Processing**: asyncio for concurrent scanning (~10 second intervals)
- **Data Upload**: POSTs telemetry (lat, lng, signal_type, timestamp) to Supabase

**Key Algorithms & Implementation Details:**

1. **Spatial De-duplication**
   - Reduces data volume before heatmap rendering
   - Prevents duplicate markers at same location

2. **Heatmap Aggregation**
   - Uses deck.gl's **MEAN mode** (average, not sum)
   - Prevents false hotspots from clustering noise
   - Cell-based grid with automatic spatial grouping

3. **Data Lifecycle**
   - Fetches latest **2500 rows** (windowing strategy)
   - Older data naturally pruned as new signals overflow
   - Timestamp-based filtering creates TTL effect

**Database Schema** (Supabase PostgreSQL):
- `signals` table with composite index on (lat, lng, created_at)
- Stores: latitude, longitude, signal_type, timestamp, real/demo flag, parking_rule

---

## Architecture Components

### Data Collection Pipeline

#### On-Device Processing
1. **Bluetooth Scanning:** Periodic scans for nearby devices (MAC addresses)
2. **Geolocation:** GPS + cell triangulation for location
3. **Data Cleaning:** Filter noise, remove duplicates, validate
4. **Aggregation:** Count nearby devices per location
5. **Privacy Redaction:** Strip identifiable information

#### Data Transmission
- **Batching:** Queue up local data points
- **Encryption:** HTTPS + TLS for transmission
- **Minimal Payload:** Only send: `{location, device_count, timestamp}`

#### Server-Side Processing
- **Real-time Ingestion:** Stream data into Supabase
- **TTL Management:** Automatic deletion after 30 minutes
- **Aggregation:** Combine data from multiple users
- **Heatmap Generation:** Compute density gradients per geographic region

### Heatmap System
- **Grid-based:** Divide city into geographic grid cells
- **Density Calculation:** Sum device counts per cell with temporal weighting
- **Visualization:** Color intensity based on crowd density
- **Real-time Updates:** Refresh heatmap as new data arrives
- **Public Access:** No authentication needed for viewing

## Data Model (Inferred)

### Telemetry Records (ephemeral, 30-min TTL)
```
- id
- location {latitude, longitude}
- device_count (integer: # of nearby devices)
- timestamp
- user_id (optional, for personal history)
- accuracy (GPS accuracy estimate)
- expires_at (auto-delete timestamp)
```

### Heatmap Cache (computed)
```
- grid_cell_id (geographic grid reference)
- latitude_range
- longitude_range
- density_score (normalized 0-100)
- last_updated
- confidence (based on sample size)
```

## Skills Demonstrated
- **Mobile Development:** Native geolocation, Bluetooth APIs
- **Real-time Systems:** Handling continuous data streams
- **Edge Computing:** On-device data cleaning and preprocessing
- **Backend Architecture:** Supabase integration, TTL policies
- **Data Visualization:** Heatmap rendering, real-time updates
- **Privacy Engineering:** Ephemeral storage, minimal data retention
- **Geospatial Analysis:** GPS processing, location aggregation
- **Performance Optimization:** Efficient Bluetooth scanning to preserve battery

## Key Design Decisions

### Privacy-First Architecture
- **No User Tracking:** MAC addresses stripped at device
- **Ephemeral Data:** 30-minute auto-deletion (no permanent storage)
- **Anonymization:** Can't track individuals across time
- **Optional Collection:** Users opt-in to data sharing
- **Self-Hosting Option:** Organizations can run their own instance

### Edge Processing Benefits
- **Battery Efficiency:** Reduce data transmission
- **Privacy:** Sensitive processing happens locally
- **Latency:** No round-trip to server for basic operations
- **Resilience:** Works offline, syncs when available

### Crowd Density Proxy
- **Bluetooth Device Count ≈ Crowd Density:** Valid correlation (most people have Bluetooth-enabled devices)
- **Limitations:** Not perfect (some people don't have devices, disabled Bluetooth)
- **Validation:** Ground-truth testing with manual headcounts confirms accuracy

## Use Cases & Applications

### Urban Planning
- **Infrastructure:** Identify crowded areas needing expanded facilities
- **Traffic:** Optimize pedestrian flow and transit routes
- **Events:** Crowd estimation for public gatherings
- **Safety:** Emergency response coordination

### Daily Navigation
- **Commuters:** Avoid peak-hour crowded areas
- **Shoppers:** Find less-busy stores and times
- **Dining:** Choose restaurants with optimal occupancy
- **Recreation:** Identify less-crowded parks and venues

### Real Estate & Business
- **Location Analytics:** Understand foot traffic patterns
- **Retail:** Optimize store hours based on demand
- **Market Analysis:** Competitive location intelligence
- **Investment:** Data for site selection

## Technical Challenges Addressed

### Bluetooth Accuracy
- **Issue:** Bluetooth range varies (10-100m depending on obstacles)
- **Solution:** Aggregate data from multiple sources, use confidence scoring
- **Validation:** Cross-reference with manual counts

### Privacy vs. Utility
- **Tension:** More data = better heatmaps, but worse privacy
- **Solution:** 30-minute TTL balances both needs
- **Alternative:** Allow users to opt for longer storage

### Battery Drain
- **Challenge:** Frequent Bluetooth scans reduce battery life
- **Solution:** Intelligent scanning intervals (adjust based on usage)
- **Optimization:** Batch processing, aggressive caching

### Cold Start Problem
- **Issue:** New areas have no heatmap data
- **Solution:** Progressive data collection, interpolation from nearby areas
- **Growth:** Viral adoption increases coverage

## Validation Methodology

### Ground-Truth Testing
1. **Manual Headcounts:** Count people in target area
2. **Bluetooth Telemetry:** Collect simultaneous Bluetooth data
3. **Correlation Analysis:** Validate device_count ≈ actual crowd size
4. **Calibration:** Adjust confidence intervals based on variance

### Hackathon Deployment
- **Location:** Hackathon venue surroundings
- **Duration:** Real-time testing during event
- **Sample Size:** Hundreds of data points collected
- **Results:** Proof of concept validated

## Scaling Considerations

### Geographic Expansion
- **Challenge:** Need critical mass of users in each region
- **Solution:** Partner with local organizations, integrate into navigation apps
- **Metrics:** Track coverage per city/region

### Data Infrastructure
- **Current:** Supabase with 30-min TTL
- **At Scale:** May need custom data warehouse (e.g., TimescaleDB)
- **Analytics:** Historical heatmaps, trend analysis

### Real-time Performance
- **Requirement:** Sub-second heatmap updates
- **Solution:** WebSocket connections, CDN for static heatmaps
- **Load Testing:** Plan for peak events (sports, concerts)

## Competitive Positioning
- **vs. Google Maps:** Real-time local density, not aggregated traffic
- **vs. Waze:** Pedestrian focus, not vehicle-centric
- **vs. Manual Data:** Automated, continuous, no manual updates
- **Unique Value:** Privacy-first, publicly accessible, real-time

## Future Enhancement Roadmap
1. **Predictive Heatmaps:** Forecast crowding based on historical patterns
2. **Event Integration:** Automatic detection of major events
3. **Business Listings:** Link crowd data to nearby businesses
4. **Community Features:** Let users post about crowd conditions
5. **App Integration:** SDK for third-party app integration
6. **Accessibility:** Routes for people avoiding crowds (mobility, anxiety)
7. **Historical Analysis:** Trend reporting and insights
8. **Monetization:** B2B access for urban planning agencies
