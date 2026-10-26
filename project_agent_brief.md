# Project Agent Brief

Use this file as a compact project knowledge base for cover-letter or application agents. Prefer projects with `High` confidence when writing specific claims. Use `Medium` confidence projects for broader positioning. Avoid inventing implementation details for `Low` confidence projects.

## Quick Selection Guide

- Best for software engineering roles: The Thankful Forest Mod, LetterBuddy, ReciPal, FocusTube, SpringFoliage Map
- Best for data, ML, and analytics roles: StellarSearch, DenCity, SpringFoliage Map, Findr, GroupWisdom
- Best for systems and performance roles: SpringFoliage Map, The Thankful Forest Mod, FocusTube, DenCity
- Best for stakeholder, planning, and structured communication roles: The LCAVEMAN Mission (MCA), NPWEE
- Best for consumer product and UX storytelling: Findr, TruthLens, FoodTracker, FocusTube, ReciPal

## Common Strengths Across Projects

- Repeatedly builds end-to-end systems spanning frontend, backend, data flow, and external APIs
- Strong pattern of turning ambiguous ideas into working technical prototypes with clear user value
- Frequent use of AI-assisted pipelines, but usually grounded in product workflows rather than model experimentation alone
- Good signal in performance thinking, privacy-aware design, and requirement tradeoff communication
- Strongest reusable narrative themes: full-stack execution, systems thinking, applied ML, product initiative, rapid prototyping

## Projects

### DenCity

- Confidence: High
- One-line summary: Privacy-first crowd-density telemetry platform that turns opt-in Bluetooth signals into real-time urban heatmaps.
- Problem solved: Gives pedestrians, planners, and commuters a live view of crowded areas without permanent user tracking.
- Core stack: Next.js 15, TypeScript, Google Maps, deck.gl HeatmapLayer, Python async Bluetooth sniffer, Supabase PostgreSQL
- Key implementation details: Edge-cleaned Bluetooth telemetry, 30-minute TTL storage, latest-2500-row windowing, deck.gl `MEAN` aggregation to avoid false hotspots, ground-truth validation against manual headcounts.
- Best role signals: Real-time systems, geospatial data handling, privacy engineering, full-stack integration, data validation.
- Cover-letter angles: Built a data product under real-world ambiguity, balanced privacy against usefulness, and validated a noisy telemetry proxy before visualization.
- Caution notes: Do not claim exact production scale beyond hackathon or prototype validation.

### Findr

- Confidence: High
- One-line summary: Gamified wildlife discovery app that uses AI species recognition to turn walks into educational scavenger hunts.
- Problem solved: Helps users identify local wildlife and learn ecological context through a rewards-driven mobile experience.
- Core stack: React Native, Expo, Supabase, Gemini API, geolocation, mapping, Reanimated
- Key implementation details: Camera-to-base64 AI pipeline, structured JSON response parsing, location pinning, rarity-weighted scoring, migratory-species bonus logic, indexed Supabase queries, leaderboard cache.
- Best role signals: Mobile product development, API integration, geospatial UX, gamification logic, user engagement design.
- Cover-letter angles: Designed a user-facing AI workflow that translated classification output into a social, educational product with clear retention hooks.
- Caution notes: Avoid overstating biological accuracy or long-term user adoption metrics.

### FocusTube

- Confidence: High
- One-line summary: YouTube productivity extension that blocks distractions and uses local AI to filter content by theme.
- Problem solved: Reduces distraction loops on YouTube through thumbnail blocking, Shorts suppression, and experimental theme-based filtering.
- Core stack: Manifest V3 extension, JavaScript, React, Vite, Express, Ollama, YouTube API, Chrome storage and messaging APIs
- Key implementation details: CSS-based thumbnail replacement, multi-layer Shorts blocking, batched title classification through local Ollama models, MV3 service-worker keepalive via open port, run-ID invalidation for race conditions, defensive JSON extraction from reasoning-model output.
- Best role signals: Browser-platform constraints, applied AI integration, asynchronous workflow design, defensive engineering, user-product iteration.
- Cover-letter angles: Solved around platform limitations instead of idealized architecture, especially MV3 lifecycle issues and noisy local-model outputs.
- Caution notes: Treat the custom AI filter as experimental; do not oversell precision.

### FoodTracker

- Confidence: Medium
- One-line summary: Personal nutrition and meal logging app built as a CodePath-style full-stack web application.
- Problem solved: Makes food logging and nutrition review more structured through persistent backend-backed workflows rather than isolated client state.
- Core stack: React, Node.js, Express, MongoDB, REST API, authentication
- Key implementation details: Meal and portion logging flows, API-driven state updates, persistent storage, `.exe` release packaging noted in docs, and planned AI-assisted food-entry ideas.
- Best role signals: CRUD product development, backend integration, API design, data persistence, iterative product building.
- Cover-letter angles: Good example of moving from interface work into data-backed application design and user workflow persistence.
- Caution notes: Source material is thin; keep claims broad and avoid detailed architectural specifics not present in the repo docs.

### GroupWisdom / WisdomBot / Parry

- Confidence: High
- One-line summary: Discord bot that fine-tunes models on server history to mimic an individual user’s communication style.
- Problem solved: Demonstrates how raw social chat history can be converted into a context-aware “digital twin” system.
- Core stack: Python, Discord.py, Unsloth, LoRA fine-tuning, LLM inference
- Key implementation details: Real-time Discord data ingestion, automated message cleaning, user-targeted fine-tuning, 6-message context window, hidden invocation flow, adapter-style personalization over a shared base model.
- Best role signals: ML systems experimentation, data pipeline design, inference orchestration, conversational product thinking.
- Cover-letter angles: Strong for research-minded AI roles or any application emphasizing rapid experimentation with real user data and model-behavior tradeoffs.
- Caution notes: Use carefully for conservative employers; the strongest value is pipeline design and fine-tuning strategy, not novelty alone.

### LetterBuddy

- Confidence: High
- One-line summary: Full-stack handwriting analysis platform that uses vision AI to score writing quality and generate practice guidance.
- Problem solved: Helps children improve handwriting through image upload, structured analysis, and personalized practice generation.
- Core stack: Next.js 15, React 19, FastAPI, PostgreSQL, Docker Compose, Supabase auth, OpenAI GPT-4o vision
- Key implementation details: Three-format image handling pipeline, deterministic analysis prompt versus higher-temperature practice generation, delimiter-based response parsing, progress simulation during long API waits, SQLAlchemy-backed analysis history, fallback parsing defaults.
- Best role signals: Full-stack delivery, API and database design, multimodal AI integration, reliability-minded prompt engineering, UX around slow external dependencies.
- Cover-letter angles: Strong example of translating AI capability into a complete user workflow instead of a one-off model demo.
- Caution notes: Some docs reference both GPT-4o vision and a homemade TensorFlow character-recognition angle; describe the app at a high level unless the target role specifically values experimentation.

### The LCAVEMAN Mission (MCA)

- Confidence: High
- One-line summary: NASA-oriented preliminary design review effort for a lunar exploration and habitability mission concept.
- Problem solved: Structured a complex mission proposal around scope, schedule, interfaces, budget, risks, and documentation quality under formal constraints.
- Core stack: Program analysis methods, Gantt charts, N-squared interface matrices, NASA engineering handbooks, PMI-aligned planning
- Key implementation details: $225M mission scope, 70-plus pages reviewed per deliverable, schedule and critical-path assessment, change control, bases of estimate, interface control, documentation consistency work.
- Best role signals: Stakeholder communication, systems thinking, requirements management, formal planning, regulated-environment discipline.
- Cover-letter angles: Excellent for roles needing analytical structure, cross-functional coordination, or comfort operating inside rigorous process.
- Caution notes: This is not a software build; use it to demonstrate program analysis and systems discipline, not coding depth.

### NPWEE

- Confidence: Medium
- One-line summary: NASA LSPACE proposal-writing project focused on compressing mission rationale and engineering tradeoffs into concise reviewable materials.
- Problem solved: Turned a larger technical concept into a stakeholder-readable proposal artifact emphasizing objectives, feasibility, and research framing.
- Core stack: Proposal writing, quad-chart communication, systems framing, mission narrative design
- Key implementation details: Short-form proposal materials, visual communication through quad-chart style presentation, explicit emphasis on scope, risks, mission value, and readable systems communication.
- Best role signals: Technical communication, synthesis, stakeholder framing, business-analysis style clarity.
- Cover-letter angles: Useful support project for roles that value concise communication of technical concepts to mixed audiences.
- Caution notes: Source material is lighter than MCA; keep claims centered on communication and systems framing.

### ReciPal

- Confidence: High
- One-line summary: Full-stack recipe extraction app that converts social-media cooking videos into structured recipes and pantry recommendations.
- Problem solved: Removes the friction of saving and rewatching food videos by extracting recipe content into searchable structured data.
- Core stack: React, Django REST Framework, SQLite, JWT auth, yt-dlp, FFmpeg, Gemini 2.5 Flash
- Key implementation details: Video download pipeline, audio-only extraction to reduce payload size, transcription and structured JSON recipe parsing, JSONField storage for flexible schemas, custom login supporting email or username, pantry and ingredient recommendation concepts.
- Best role signals: Multi-step backend orchestration, API-first design, media-processing workflow design, practical product iteration.
- Cover-letter angles: Strong example of decomposing a messy real-world problem into explicit pipeline stages with clear engineering tradeoffs.
- Caution notes: Performance is measured in minutes per recipe, so frame it as a robust pipeline prototype rather than a low-latency system.

### SpringFoliage Map

- Confidence: High
- One-line summary: GPU-accelerated geospatial map for visualizing seasonal foliage data from large raster datasets.
- Problem solved: Makes large environmental datasets interactively explorable by replacing slow CPU tile generation with browser-based GPU rendering.
- Core stack: React 19, MapLibre GL, WebGL, GLSL, GeoTIFF.js, Three.js, optional Python pre-generation scripts
- Key implementation details: GeoTIFF-to-texture encoding, fragment shader with inverse Web Mercator math, 30-50ms GPU tile generation versus 3-5 seconds on CPU, generation-counter invalidation, plus-or-minus 7 day idle pre-rendering, Y-axis coordinate reconciliation.
- Best role signals: Performance optimization, graphics and systems thinking, geospatial math, frontend architecture under heavy data loads.
- Cover-letter angles: One of the strongest technical projects for proving depth, measurable performance gains, and comfort owning difficult computational workflows.
- Caution notes: This is highly technical; tailor explanations to the audience and avoid overloading non-graphics roles with shader detail.

### StellarSearch

- Confidence: High
- One-line summary: Semantic search and clustering platform for Slack and Discord communities.
- Problem solved: Helps users discover discussions, expertise, and latent topics that keyword search misses in large chat histories.
- Core stack: FastAPI, Sentence-Transformers, scikit-learn, FAISS, Supabase, SQLite, Slack SDK, Discord.py, D3.js
- Key implementation details: `all-MiniLM-L6-v2` embeddings, hierarchical Ward-linkage clustering, threshold tuning for abstraction versus granularity, Gemini topic labeling with TF-IDF and HuggingFace fallback, sub-100ms FAISS retrieval on large corpora, self-hosting option for data ownership.
- Best role signals: NLP engineering, analytics product design, search and retrieval systems, scale-minded architecture, graceful fallback design.
- Cover-letter angles: Strong for roles needing data-intensive thinking, information retrieval, or turning raw enterprise collaboration data into usable insights.
- Caution notes: Do not imply production deployment at enterprise scale unless asked to discuss the design intent rather than confirmed usage.

### Team Cats

- Confidence: Low
- One-line summary: Project folder exists in the portfolio, but no structured documentation was found in the accessible repo materials.
- Problem solved: Unknown from current sources.
- Core stack: Unknown from current sources.
- Key implementation details: None documented in accessible markdown or component files.
- Best role signals: None reliable.
- Cover-letter angles: Exclude unless separate documentation is added.
- Caution notes: Treat as undocumented and do not use in generated application materials.

### The Thankful Forest Mod

- Confidence: High
- One-line summary: Java Minecraft Forge mod adding custom entities, boss AI, world generation, and biome integration.
- Problem solved: Builds a cohesive gameplay system with custom content, procedural generation, and combat mechanics inside a complex modding framework.
- Core stack: Java 17, Gradle, Minecraft Forge 47.3.0, TerraBlender, Parchment mappings
- Key implementation details: Deferred registry pattern, event-bus architecture, goal-based AI for passive and boss entities, synchronized attack state, 20-tick animation timing, weighted biome blending, custom tree generation, data-generation tooling for assets and loot tables.
- Best role signals: Object-oriented design, modular architecture, event-driven systems, game or simulation logic, Java depth.
- Cover-letter angles: Excellent proof of systems-oriented software engineering, especially for roles that value architecture, OOP, and owning complex internal frameworks.
- Caution notes: Best framed as a technical systems project rather than a pure game-design exercise.

### TruthLens

- Confidence: High
- One-line summary: Browser-extension concept for detecting AI-generated video, image, and text content and alerting parents in real time.
- Problem solved: Shifts parental controls from keyword filtering toward authenticity verification in an era of deepfakes and synthetic media.
- Core stack: Browser extension, multimodal detection models, cross-platform content extraction, notification and device-sync concepts
- Key implementation details: Multi-modal classification framing across TikTok, Instagram, and YouTube, silent background operation, parent-alert workflow, market differentiation as a “cognitive parental control” tool.
- Best role signals: Product vision, AI safety framing, trust-and-safety storytelling, cross-device workflow design.
- Cover-letter angles: Useful when emphasizing initiative in emerging problem spaces and ability to frame technical work around a clear user-risk model.
- Caution notes: The accessible source material is more product and concept focused than implementation deep; avoid claiming detailed deployed detection infrastructure.

## Usage Notes For Agents

- For technical roles, lead with 2 to 4 `High` confidence projects that match the job's system, data, or product emphasis.
- For conservative employers, prioritize The Thankful Forest Mod, SpringFoliage Map, LetterBuddy, ReciPal, StellarSearch, MCA, and DenCity.
- For AI-forward roles, use GroupWisdom, LetterBuddy, StellarSearch, Findr, and FocusTube, but keep claims tied to product workflows and engineering decisions.
- Use MCA and NPWEE as supporting evidence for communication, planning, and structured analysis rather than as primary coding examples.
- Exclude Team Cats unless new documentation is added.