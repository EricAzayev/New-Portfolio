# Findr Metadata

## Project Classification
- **Category:** Full-Stack Mobile Application
- **Type:** Hackathon Project (DivHacks)
- **Domain:** EdTech / Environmental Science / Gamification

## Technical Stack
- **Frontend:** React Native
- **Backend:** Supabase (database, real-time sync)
- **AI/ML:** Google Gemini API (species identification)
- **Location Services:** Native geolocation, mapping integration
- **Image Processing:** Real-time photo recognition
- **Gamification Engine:** Rarity scoring algorithms, leaderboard system

## Architecture Components

### User Interaction Flow
1. **Photo Capture**: Native camera integration
2. **API Call**: Image → Gemini API for identification
3. **Species Data**: Return species name, rarity score, ecological info
4. **Location Tagging**: Geolocation capture with sighting
5. **Social Sharing**: "Flex" sightings on community map

### Database Schema (Inferred)
- User profiles (with ranking scores)
- Species database (with rarity metrics, migration patterns)
- Sighting records (location, timestamp, species, user)
- Leaderboard data (aggregated by rarity)
- Community feed / social features

### Core Algorithms
- **Rarity Ranking:** Species scarcity + migration status weighting
- **Leaderboard Logic:** Points based on rarity tier
- **Recommendation Engine:** Suggest unexplored species for user's region

## Key Features Breakdown

### Species Identification
- Real-time AI recognition via Gemini API
- Confidence scores for identification
- Ecological insights per species
- Historical data integration (known range, behaviors)

### Location Services
- Geolocation pinning (GPS + map integration)
- Heatmap generation from aggregated sightings
- Regional species distribution mapping
- Community hotspot identification

### Gamification System
- **Rarity-based scoring:** Rare species > common species
- **Migratory bonuses:** Extra points for catching travelers
- **Leaderboard:** User rankings visible to community
- **Social proof:** "Flex" mechanism for sharing achievements

## Program Analysis

### GitHub Repository: https://github.com/BorowskiKacper/divhacks

**Tech Stack:**
- **Framework**: React Native + Expo with TypeScript
- **Routing**: Expo Router (file-based navigation)
- **State Management**: React Context API + custom hooks
- **Database**: Supabase (PostgreSQL) + Object Storage
- **Animations**: React Native Reanimated (GPU-accelerated)
- **AI Integration**: Google Gemini 2.5 Flash API

**Species Identification Pipeline:**
- Camera capture → Convert to base64 → Call Gemini API → Parse structured JSON response
- **Timeout**: 30-second max with fallback parsing
- **Response format**: {"species": "...", "rarity": 1-10, "habitat": "..."}

**Geolocation & Storage:**
- **Accuracy**: Balanced mode (~100m)
- **Database indexes**: (user_id), (timestamp), (location), (rarity) for fast queries
- **Image upload**: ArrayBuffer-based transfer to Supabase Storage with user/timestamp organization

**Leaderboard & Gamification:**
- **Rarity scoring**: Rare species = 2x point multiplier
- **Migratory bonus**: Additional multiplier for migration-season species
- **Day streak**: Tracks consecutive days with ≥1 sighting
- **Time-windowed leaderboard**: Weekly/monthly resets possible

**Database Schema:**
- `users`: username, total_sightings, leaderboard_rank, day_streak
- `creature_sightings`: user_id, species_id, lat/lng, image_url, ai_confidence, rarity_tier, timestamp
- `leaderboard_cache`: pre-computed user scores with 5-minute refresh

**Notable Patterns:**
- Reanimated entrance animations (splash screen)
- Unified modal for both sighting detection and viewing history
- Google Maps custom markers for each sighting
- Haptic feedback on tab navigation
- Query optimization: Indexed database lookups <100ms

---

## Skills Demonstrated
- **Mobile Development:** Cross-platform development (React Native)
- **API Integration:** Third-party ML services (Gemini)
- **Real-time Systems:** Supabase sync and data consistency
- **Geolocation:** GPS integration and mapping
- **Data Visualization:** Heatmaps and interactive maps
- **Game Design:** Scoring systems, engagement mechanics
- **Education Design:** Learning through gamification

## Use Cases & Applications
- **Personal:** Wildlife education, outdoor engagement
- **Community:** Local biodiversity tracking, citizen science
- **Conservation:** Species monitoring, population tracking
- **Education:** Biology curriculum, ecology teaching
- **Urban Planning:** Green space and wildlife corridor analysis

## Hackathon Context
- **Event:** DivHacks
- **Challenge:** Likely tech/innovation competition
- **Scope:** Completed within hackathon timeframe (typically 24-48 hours)
- **Validation:** Demonstrated working prototype with real data

## Future Enhancement Opportunities
- Offline mode (cache species data)
- AR integration for field identification
- Integration with citizen science databases
- ML model training on local sighting data
- Social features (friend competitions, sharing)
- Blockchain for achievement verification
