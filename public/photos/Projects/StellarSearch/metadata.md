# StellarSearch Metadata

## Project Classification
- **Category:** Data Analysis / NLP Application
- **Type:** Community Intelligence Platform
- **Domain:** Team Collaboration / Semantic Search / Information Retrieval

## Technical Stack
- **Backend:** Supabase (or self-hosted database)
- **NLP/ML:** Latent topic modeling (LDA, LSA, or neural topic models)
- **APIs:** Slack API, Discord API (message ingestion)
- **Search Engine:** Semantic search capabilities (likely embedding-based)
- **Clustering:** Unsupervised learning for topic discovery

## Architecture Components

### Data Ingestion Pipeline
- **Slack Integration:** OAuth, message history API
- **Discord Integration:** Bot integration, message scraping
- **Data Collection:** Full message history with metadata (timestamps, users, channels)
- **Storage:** Supabase (cloud) or self-hosted database

### Processing Pipeline
1. **Message Ingestion:** Fetch messages from Slack/Discord
2. **Text Preprocessing:** Tokenization, normalization, stopword removal
3. **Embedding Generation:** Convert text to semantic vectors
4. **Clustering:** Group semantically similar messages into topics
5. **Topic Extraction:** Identify theme/label for each cluster

### Topic Modeling Approaches (Potential)
- **Latent Dirichlet Allocation (LDA):** Classical topic modeling
- **Neural Networks:** Neural topic models for better quality
- **Embeddings-based:** Use transformer models (BERT, MPNet) for semantic similarity
- **Hierarchical Clustering:** Create topic hierarchies for navigation

### Search & Navigation
- **Semantic Search:** Find similar messages/themes
- **Topic Browsing:** Navigate clusters like "stellar systems"
- **Cross-Channel Topics:** Identify discussions spanning multiple channels
- **Historical Context:** Build topic evolution over time

## Program Analysis

### GitHub Repository: https://github.com/oleksiisud/slack-cluster-finder

**Tech Stack:**
- **Backend**: FastAPI (async REST)
- **NLP**: Sentence-Transformers (`all-MiniLM-L6-v2`, 384-dim embeddings)
- **Clustering**: scikit-learn (hierarchical Ward linkage)
- **Labels**: Google Gemini API (primary) + HuggingFace Inference (fallback)
- **Ingestion**: Slack SDK, Discord.py
- **Database**: Supabase PostgreSQL + SQLite (local dev)
- **Frontend**: React + Vite with D3.js visualization

**Message Processing Pipeline:**
- Extract from Slack/Discord APIs → Clean & preprocess → Generate embeddings
- Hierarchical clustering with Ward linkage (2-level: conversations → topics)
- Generate topic labels via Gemini API
- Build search index with semantic similarity

**Embedding & Clustering:**
- **Model**: all-MiniLM-L6-v2 (384-dim, ~1000 msg/sec, lightweight)
- **Clustering**: Hierarchical Ward linkage with configurable distance threshold
  - 0.3 = many small clusters (high granularity)
  - 0.6 = fewer large clusters (high abstraction)
- **Performance**: 1,000 msgs in 5-8 seconds, ~200MB memory for 10k messages

**Topic Labeling Strategy:**
- **Primary**: Google Gemini API (free tier: 15 req/minute)
- **Fallback**: TF-IDF + HuggingFace Inference (faster, deterministic)
- **Caching**: Store labels to avoid re-labeling same clusters

**Semantic Search:**
- **Algorithm**: Cosine similarity against all message embeddings
- **Complexity**: O(n) where n = message count
- **Optimization**: FAISS approximate nearest neighbor for >100k messages
- **Latency**: <100ms per query (with vector index)

**Database Schema:**
- `messages`: platform, user_id, text, channel_id, timestamp, embedding vector
- `clusters`: label, message_ids, centroid embedding, created_at
- `search_index`: cached results with 1-hour TTL

**Notable Patterns:**
- Orchestrator pattern: service layer coordinates embedding → clustering → labeling
- Caching layer for expensive computations
- Dual database: SQLite (dev) vs Supabase (prod)
- Fault tolerance: fallback algorithms if Gemini fails

**Known Trade-offs:**
- Hierarchical clustering doesn't always match human intuition
- O(n²) distance computation slow for >100k messages
- English-only (Sentence-Transformers training bias)
- Real-time re-clustering required for new messages

---

## Skills Demonstrated
- **NLP Engineering:** Text preprocessing, embedding generation, topic modeling
- **API Integration:** Third-party platform integration (Slack, Discord)
- **Database Design:** Schema for message storage and metadata
- **Semantic Search:** Similarity-based retrieval
- **Distributed Processing:** Handling large message histories
- **User Experience:** Intuitive navigation of complex data
- **Data Privacy:** Database ownership options (self-hosted vs. cloud)

## Data Model (Inferred)

### Messages Table
```
- id (unique identifier)
- channel_id
- user_id
- content (message text)
- timestamp
- metadata (reactions, threads, etc.)
```

### Topics Table
```
- id
- label (inferred theme)
- keywords (top terms)
- message_ids (associated messages)
- created_at
- engagement_metrics
```

### Clusters Table
```
- id
- topic_id
- messages (linked messages)
- similarity_score
```

## Use Cases & Applications

### Enterprise
- **Knowledge Discovery:** Find expertise and past solutions
- **Cross-team Communication:** Identify discussions spanning departments
- **Project Archaeology:** Recover context from old conversations
- **Onboarding:** New employees discover institutional knowledge

### Community Management
- **Moderation:** Identify discussion trends and toxicity
- **Engagement:** Surface popular topics and discussions
- **Growth:** Understand community interests
- **Analytics:** Community sentiment and health metrics

### Research & Analysis
- **Discourse Analysis:** Study communication patterns
- **Trend Detection:** Identify emerging topics over time
- **Consensus Building:** Find alignment on issues
- **Decision Support:** Historical context for decisions

## Technical Challenges
- **Scale:** Large message histories (millions of messages)
- **Quality:** Accurate topic extraction from short messages
- **Privacy:** Handling sensitive organizational data
- **Real-time:** Updating topics as new messages arrive
- **Language:** Non-English communities and multilingual content

## Differentiation from Standard Search
- **Beyond Keywords:** Semantic understanding, not just string matching
- **Discovery:** Find unknown topics, not just known queries
- **Context:** Understand conversation flow and relationships
- **Visualization:** Intuitive "stellar systems" metaphor
- **Multi-platform:** Works across Slack, Discord, and potentially others

## Database Options & Trade-offs

### Cloud (Supabase)
- **Pros:** Managed, scalable, automatic backups
- **Cons:** Data leaves organization, subscription costs
- **Use Case:** Small to medium communities

### Self-Hosted
- **Pros:** Data ownership, privacy, no per-message costs
- **Cons:** Infrastructure management, scaling responsibility
- **Use Case:** Large enterprises, regulated industries

## Performance Considerations
- **Indexing:** Fast search requires pre-computed embeddings
- **Updates:** Incremental topic update strategies
- **Query Latency:** Sub-second response times
- **Memory:** Efficient storage of large embedding vectors

## Future Enhancements
- **Real-time Clustering:** Update topics as new messages arrive
- **Hierarchical Topics:** Multi-level topic organization
- **Sentiment Analysis:** Emotional tone of discussions
- **Recommendation Engine:** Suggest relevant discussions to users
- **Integration:** Connect to other tools (Jira, GitHub issues)
- **Analytics Dashboard:** Community health metrics
- **Multi-language Support:** Topic modeling for diverse languages
