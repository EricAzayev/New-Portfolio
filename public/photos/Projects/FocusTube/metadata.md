# FocusTube Metadata

## Project Classification
- **Category:** Browser Extension / Productivity Tool
- **Type:** User Behavior Modification / Local AI
- **Domain:** EdTech / Productivity / Machine Learning

## Technical Stack
- **Extension Framework:** Browser extension (Manifest V3 likely)
- **Backend:** Local AI model inference
- **UI/UX:** React or vanilla JS (extension UI)
- **Content Filtering:** DOM manipulation, video categorization
- **Brand Identity:** Koala mascot (UI element)

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
