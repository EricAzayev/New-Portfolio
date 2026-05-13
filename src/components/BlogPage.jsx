import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowRight, Search } from "lucide-react";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "My Accenture SLP Experience",
      excerpt: "A first-pass reflection on the Accenture Student Leadership Program, the people I met, and the professional lessons that carried forward into the rest of my engineering work.",
      date: "2026-05-12",
      readTime: "6 min read",
      category: "Experience",
      tags: ["accenture", "slp", "leadership", "career"],
      image: "/photos/blog/accenture-slp-header.png",
      featured: true
    },
    {
      id: 2,
      title: "My Kohls ETS Experience",
      excerpt: "An in-progress writeup covering the interview process, what stood out about the ETS experience, and the technical and professional takeaways worth keeping.",
      date: "2026-05-12",
      readTime: "5 min read",
      category: "Experience",
      tags: ["kohls", "ets", "career", "interview"],
      image: "/photos/blog/kohls-ets-header.png",
      featured: false
    }
  ];

  const categories = ["All", "Experience"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const BlogPostCard = ({ post, index }) => {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-slate-200 group"
      >
        {/* Image section - only rendered if image exists */}
        {post.image && (
          <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                // Fallback if image doesn't load
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span class="text-slate-400 text-sm">Image</span></div>';
              }}
            />
          </div>
        )}
        
        {/* Content section */}
        <div className="p-6">
          {/* Category badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              {post.category}
            </span>
            {post.featured && (
              <span className="text-xs font-semibold uppercase tracking-wide text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {post.excerpt}
          </p>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Read more link */}
          <div className="flex items-center gap-1 text-sm font-semibold text-indigo-600 group-hover:gap-2 transition-all">
            <span>Read more</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.article>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-indigo-100 max-w-2xl mx-auto"
          >
            Notes on engineering projects, interface decisions, and the systems thinking behind the work
          </motion.p>
        </div>
      </div>

      {/* Controls Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-slate-600 mb-6">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
        </p>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">No posts found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
