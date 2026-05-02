
import React from "react";
import BlogPage from "../components/BlogPage.jsx";
import usePageViewMetric from "../hooks/usePageViewMetric";

const Blog = () => {
  usePageViewMetric("Blog");
  return (
    <div>
      <BlogPage />
    </div>
  );
};

export default Blog;
