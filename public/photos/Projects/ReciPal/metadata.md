# ReciPal - Project Metadata

## Program Analysis

### GitHub Repository: https://github.com/EricAzayev/reciPal

**Frontend Stack:**
- **React 18** with Hooks (functional components)
- **Vite** (fast build tool)
- **React Router** (SPA navigation)
- **Barcode Detection API**: Native browser barcode scanning (EAN-13, UPC-A)
- **localStorage**: JWT token persistence

**Backend Stack:**
- **Django 5.1.6** REST Framework
- **SQLite3** (development database)
- **JWT Authentication**: `rest_framework_simplejwt` (access: 30 days, refresh: 210 days)
- **yt-dlp**: Download videos from Instagram/YouTube
- **FFmpeg**: Extract audio from downloaded videos
- **Google Generative AI (Gemini 2.5 Flash)**: Recipe extraction from audio

**Recipe Extraction Pipeline:**
1. User submits Instagram reel URL
2. Backend downloads video using yt-dlp
3. FFmpeg extracts audio to MP3 format
4. Uploads MP3 to Google's file API
5. Gemini transcribes and extracts structured JSON:
   - {"name", "ingredients", "steps", "caption"}
6. Response saved to SQLite
7. Frontend fetches and displays recipe

**Key Design Decisions:**
- **Audio-only extraction**: Reduces file size (2MB vs 50MB video)
- **Structured output**: Prompt Gemini to return JSON directly
- **Flexible storage**: JSONField stores entire recipe object (no schema migrations)

**Pantry Management:**
- **Barcode scanning**: Native browser API (Chrome/Edge only)
- **Current state**: Client-side React state only (no backend persistence)
- **Barcode lookup**: Mock implementation (waiting for full integration)

**Grocery Recommendation Engine:**
- Find missing ingredients across user's recipes
- Rank by frequency (which ingredient unlocks most recipes)
- Use Gemini API to suggest substitutions
- Example: butter → coconut oil

**Authentication System:**
- **Custom login**: Supports email OR username in single field
- **Token flow**: JWT access/refresh pattern
- **Storage**: localStorage (XSS vulnerable but common in SPAs)

**API Endpoints:**
- Authentication: /signup/, /signin/, /refresh/, /me/
- Recipes: /get/all/, /get/<id>, /get/search/<title>, /create, /edit

**Database Schema:**
- `auth_user`: Django built-in with username/email
- `recipes_recipe`: title, data (JSON), timestamps
- Note: user_id field removed in migration (recipes not tied to users)

**Data Flow:**
```
React Frontend → Django API → yt-dlp + FFmpeg → Gemini API → SQLite → Frontend Display
```

**Cross-Functional Patterns:**
- Service layer architecture (`services.py`): complex logic separated from views
- API-first frontend: centralized request function with standard error handling
- Flexible JSON storage: no type safety at DB level but schema-flexible

**Error Handling:**
- Backend: try/except with mock data fallback
- Frontend: standardized error parsing (detail → error → statusText)

**Known Limitations:**
- User-recipe association removed (no ownership tracking)
- Pantry persistence: client-side only
- Barcode lookup: mock data
- No real-time updates (polling-based)
- FFmpeg dependency: requires system installation
- Environment: .env required with GEMINI_API_KEY

**Performance:**
- Video download: 1-3 minutes
- Audio extraction: 30 seconds (FFmpeg CPU-bound)
- Gemini call: 5-10 seconds
- End-to-end: ~2-4 minutes per recipe

---

## Project Classification
- **Category:** Full-Stack Web Application
- **Type:** AI-Powered Recipe Extraction
- **Domain:** Food Tech / Machine Learning Integration

## Overview
ReciPal is a full-stack application that leverages AI to extract recipes from social media video content, combining video/audio processing, machine learning, and pantry management.

## Key Technologies
- React 18, Django REST Framework, Google Gemini API, SQLite, yt-dlp, FFmpeg

## Use Cases
- Extract recipes from Instagram reels and TikTok videos
- Manage personal pantry with barcode scanning
- Get smart grocery recommendations based on recipes and pantry items
- Discover ingredient substitutions

## Technical Challenges Solved
- Streaming audio from video URLs in real-time
- Extracting structured recipe data from unstructured video content
- Barcode detection without external libraries (browser native API)
- JWT token management with email/username login flexibility
