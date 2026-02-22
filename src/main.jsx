import { BrowserRouter, Route, Routes } from "react-router-dom"; //npm install react-router-dom

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Front.css";
import Index from "./Index.jsx";

import Layout from "./routes/Layout.jsx";
import NotFound from "./routes/NotFound.jsx";
import FullStack from "./routes/FullStackData.jsx";
import PMAnalyst from "./routes/PMAnalyst.jsx";
import Blog from "./routes/Blog.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Index />} />
          <Route path="/fullstack" element={<FullStack />} />
          <Route path="/data" element={<PMAnalyst />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
