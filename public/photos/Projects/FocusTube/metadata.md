# FocusTube Metadata

## Project Classification
- **Category:** Browser Extension / Productivity Tool
- **Type:** User Behavior Modification / Local AI
- **Domain:** EdTech / Productivity / Machine Learning

## Technical Stack
- **Extension Framework:** Browser extension (Manifest V3)
- **Frontend (Website):** React 19.2.4 + Vite 8.0.1
- **Backend (Proxy Server):** Express 5.2.1
- **Local ML Runtime:** Ollama (client-side inference)
- **APIs:** YouTube Data API v3, Chrome Storage API, Chrome Messaging API
- **Content Filtering:** DOM manipulation via MutationObserver, CSS injection
- **Brand Identity:** Koala mascot (UI element, thumbnail replacement image)

## Program Analysis

### GitHub Repository: https://github.com/luoshuyi1124/google-project

**Repository Structure:**
- `/extension` - Chrome MV3 extension (content script, service worker, popup UI)
- `/client` - React + Vite frontend companion website
- `/server` - Express.js backend for Ollama proxying and YouTube API caching
- `/Version_1` - Legacy implementation

**Tech Stack Details:**

**Extension (MV3):**
- `content.js` (~600 lines) - Main DOM manipulation, filtering logic
- `background.js` - Service worker handling Ollama proxying, shorts redirection
- `manifest.json` - MV3 config with content scripts, permissions, declarative net request rules
- `popup.html/js` - Settings UI for 4 focus modes + AI theme selector

**Backend Server:**
- Express 5.2.1 with CORS support
- YouTube Data API v3 client (`@googleapis/youtube`)
- Ollama HTTP proxy (localhost:11434)
- In-memory caching (search results, video metadata)

**Local ML Inference:**
- **100% client-side**: Ollama runs locally, no cloud APIs
- **Model Selection**: Auto-detects installed models (preference: deepseek → mistral → qwen → gemma → phi → llama3)
- **Inference Approach**: Complete JSON responses (not streaming)

**Key Implementation Details:**

**1. Thumbnail Blocking (Productivity Mode)**
```javascript
// CSS content property overrides YouTube's JS manipulation
ytd-thumbnail img { 
  content: url('koala.png') !important;
  object-fit: cover !important;
}
#inline-preview-player { display: none !important; }
```
- Elegant approach: CSS `content:` property can't be overridden by JavaScript
- Replaces all video thumbnails with cute koala image
- Hides video preview popups

**2. Shorts Blocking (Multi-layered Strategy)**
- **CSS injection**: `ytd-rich-shelf-renderer[is-shorts] { display: none }`
- **DOM queries**: Multiple selectors for evolving YouTube shelf renderers
- **Declarative Net Request**: Redirect `/shorts/*` URLs to homepage
- **Video pausing**: Explicit pause + currentTime reset
- **MutationObserver**: Catches dynamically-added shorts as YouTube lazy-loads

**3. AI Filter Pipeline (Custom Filter Mode)**
```
Video Card Collection → Title Extraction → Cache Check → Batch Sending
→ Ollama Classification → Response Parsing → Apply Decision → Cache Results
```

Process:
1. Queries DOM for video cards (handles `ytd-rich-item-renderer`, `ytd-video-renderer`, `ytd-compact-video-renderer`, `ytd-grid-video-renderer`)
2. Extracts titles from `#video-title` attribute/textContent
3. Checks in-memory Map for cached classification
4. Groups uncached titles, batches 10 at a time → POST `/ollama/api/generate`
5. Parses JSON array from response (handles reasoning models with `<think>` blocks)
6. Sets `display: none` on mismatches, stores decision in cache

**Prompt Engineering Example:**
```
You are a strict video content filter. User ONLY wants: [Education, Technology, Science].
Reply with JSON array of indices to HIDE (not matching themes).
Be strict — if unclear, hide it.
Titles:
0: "Learn Python in 10 minutes"
1: "Cat funny moments compilation"
2: "JavaScript ES2024 features"
JSON array: [1]
```

**4. Novel MV3 Service Worker Persistence Pattern**
```javascript
// Content script keeps port open to prevent service worker termination
swKeepalivePort = chrome.runtime.connect({ name: "keepalive" });
// Open port alone prevents SW from being unloaded during long Ollama requests
// Addresses MV3 limitation: SW killed after 300s inactivity
```

**5. Race Condition Prevention with Run IDs**
```javascript
let aiFilterRunId = 0;
async function runAiFilter() {
  const runId = ++aiFilterRunId;
  // ... make requests ...
  if (runId !== aiFilterRunId) return; // discard stale results if filter changed
}
```

**6. Defensive JSON Parsing**
```javascript
const matches = [...raw.matchAll(/\[[\d,\s]*\]/g)];
const result = JSON.parse(matches[matches.length - 1][0]); // Last array = answer
```
- Handles models that output reasoning before final JSON
- Grabs the last bracket pair to extract the answer

**Storage & Caching:**

**Chrome Sync Storage (cloud-synced):**
- `productivityMode`, `blockShorts`, `blockShortsEverywhere` (booleans)
- `focusKeywords`, `blockKeywords` (comma-separated strings)
- `aiFilterEnabled`, `aiThemes`, `aiCustomThemes` (arrays)
- `ollamaModel` (selected model name)

**In-Memory Caching (Content Script):**
- `aiDecisionCache`: Map<title, boolean> prevents re-classifying same titles
- Cleared on page navigation (`yt-navigate-finish` event)

**Server-Side Caching (Express):**
- `searchCache`: Map<searchTerm, ytApiResult>
- `videoCache`: Map<videoIds, ytApiResult>
- No TTL - persists for app lifetime

**Performance Optimizations:**

1. **Model Selection Strategy** - Auto-selects fastest models (deepseek preferred)
2. **Batch Processing** - 10 titles/request balances latency vs throughput
3. **Decision Caching** - In-memory Map prevents re-classifying same titles within session
4. **MutationObserver Debouncing** - 900ms debounce prevents classification spam during lazy-loading
5. **CSS-based Productivity Mode** - Instant visual feedback (no repaint delay)
6. **Asynchronous Ollama Calls** - Non-blocking inference

**Performance Characteristics:**
- **Inference Latency**: 2-5 seconds per 10 video titles (depends on model size)
- **Cache Hit Rate**: High for repeated sessions (same recommendations feed)
- **Memory Usage**: ~5-10MB per 1000 cached decisions
- **DOM Observation**: 900ms debounce handles YouTube's lazy-loading architecture

**Interesting Design Patterns:**

1. **Port-based Keepalive** - Prevents MV3 service worker termination
2. **Run ID-based Invalidation** - Handles race conditions from rapid filter changes
3. **Defensive Regex JSON Extraction** - Robust parsing for reasoning models
4. **Multi-layered Shorts Blocking** - CSS + DOM + Declarative Net Request ensures comprehensive coverage
5. **Debounced MutationObserver** - Balances responsiveness vs performance
6. **Dual-mode Storage** - Toggle keys vs text keys with different debounce strategies

**Bottleneck Analysis:**
- **Slowest**: Ollama inference (2-5s per batch)
- **Solution**: Model selection, batching, caching
- **Secondary**: YouTube DOM rendering (impacts MutationObserver timing)
- **Solution**: 900ms debounce reduces redundant filter runs

---

## Architecture Components

### Extension Architecture
- **Content Script:** Injects filtering logic into YouTube
- **Background Service Worker:** Manages state and API calls
- **Popup UI:** User control panel (Enable/Disable modes)
- **Storage:** Local browser storage for settings

### Local AI System
- **Model Type:** Likely TensorFlow.js or ONNX runtime (browser-compatible)
- **Task:** Video categorization/theme classification
- **Input:** Video metadata (title, description, tags, transcript if available)
- **Output:** Category probability, filtering decision

### Filtering Mechanisms

#### Focus Mode
- **Target:** YouTube thumbnail elements
- **Method:** DOM selector and CSS manipulation (hide/blur)
- **Scope:** Main feed, search results, recommendations
- **Koala Integration:** Visual indicator (Koala badge/overlay)

#### Block Shorts Mode
- **Target:** YouTube Shorts feed and auto-play
- **Method:** Redirect or DOM removal
- **Fallback:** Show message or redirect to main content

#### Custom Filters Mode (Experimental)
- **Input:** User-selected topic (e.g., "Calculus", "Programming")
- **Processing:** Classify video against user's selected theme
- **Decision:** Show/hide based on relevance score threshold
- **Challenge:** Low accuracy with smaller models (acknowledged)

## Skills Demonstrated
- **Extension Development:** Browser API, Manifest configuration
- **Local ML Inference:** Running models in-browser without servers
- **DOM Manipulation:** JavaScript for content modification
- **UI/UX Design:** User controls, visual feedback
- **Content Classification:** ML-based categorization
- **Performance Optimization:** Lightweight processing to maintain 60fps
- **Data Privacy:** All processing local (no data sent to servers)

## Technical Challenges Documented
- **Model Size vs. Accuracy Trade-off:** Smaller models are faster/more scalable but less accurate
- **Theme Classification Difficulty:** Current models struggle with user-selected theme specificity
- **Real-time Processing:** Filtering must happen without lag

## Development Responsibilities
- **Koala Extension:** Full development
- **Local-AI Integration:** Model selection and deployment
- **Feature Testing:** QA and iteration cycles

## Use Cases & Applications
- **Student Focus:** Study sessions without distraction
- **Productivity:** Reduce procrastination through content blocking
- **Content Curation:** Filter to specific topic interests
- **Accessibility:** Support ADHD/focus-related needs

## Planned Enhancements (Roadmap)

### Phase 1: Model Improvement
- **Goal:** Train custom models for better video categorization
- **Approach:** Fine-tune smaller models on YouTube metadata
- **Benefit:** Higher accuracy while maintaining speed

### Phase 2: GPU Acceleration
- **Goal:** Leverage GPU for inference
- **Approach:** WebGL/WebGPU for computation
- **Benefit:** Sub-millisecond inference times, handle more complex models

### Phase 3: Platform Expansion
- **Goal:** Support other video platforms (Twitch, TikTok, etc.)
- **Challenge:** Platform-specific selectors and APIs

## Metrics for Success
- Extension installation count
- Active usage duration
- User satisfaction (reviews)
- Filter accuracy (% correct classifications)
- Performance (inference latency)

## Technology Trends
- **Local ML:** Privacy-preserving ML in browsers
- **WebGPU:** Next-gen GPU access for web applications
- **Extension APIs:** Manifest V3 compliance and security
- **Focus Technology:** Growing market for distraction-blocking tools
