import { BrowserRouter, Route, Routes } from "react-router-dom"; //npm install react-router-dom

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Front.css";
import Index from "./Index.jsx";

import Layout from "./routes/Layout.jsx";
import NotFound from "./routes/NotFound.jsx";
import FullStack from "./routes/FullStackData.jsx";
import PMAnalyst from "./routes/PMAnalyst.jsx";
import Programmatics from "./routes/Programmatics.jsx";
import Blog from "./routes/Blog.jsx";

// Fullstack Project Pages
import LexingtonLinks from "./components/Fullstack/LexingtonLinks.jsx";
import Findr from "./components/Fullstack/Findr.jsx";
import CodepathApps from "./components/Fullstack/CodepathApps.jsx";

// Data Project Pages
import SpringFoliageMap from "./components/Data/SpringFoliageMap.jsx";

// Programmatics Project Pages
import NASALSPACEMCA from "./components/Programmatics/NASALSPACEMCA.jsx";
import NASAProposalWriting from "./components/Programmatics/NASAProposalWriting.jsx";
import NPWEE from "./components/Programmatics/NPWEE.jsx";
import StellarSearch from "./components/Programmatics/StellarSearch.jsx";
import MinecraftMoon from "./components/Programmatics/MinecraftMoon.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Index />} />
          <Route path="/fullstack" element={<FullStack />} />
          <Route path="/data" element={<PMAnalyst />} />
          <Route path="/programmatics" element={<Programmatics />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* Fullstack Project Routes */}
          <Route path="/fullstack/lexington-links/:inSlideshow" element={<LexingtonLinks />} />
          <Route path="/fullstack/findr/:inSlideshow" element={<Findr />} />
          <Route path="/fullstack/codepath-apps/:inSlideshow" element={<CodepathApps />} />
          
          {/* Data Project Routes */}
          <Route path="/data/spring-foliage-map/:inSlideshow" element={<SpringFoliageMap />} />
          
          {/* Programmatics Project Routes */}
          <Route path="/programmatics/nasa-lspace-mca/:inSlideshow" element={<NASALSPACEMCA />} />
          <Route path="/programmatics/nasa-proposal-writing/:inSlideshow" element={<NASAProposalWriting />} />
          <Route path="/programmatics/npwee/:inSlideshow" element={<NPWEE />} />
          <Route path="/programmatics/stellar-search/:inSlideshow" element={<StellarSearch />} />
          <Route path="/programmatics/minecraft-moon/:inSlideshow" element={<MinecraftMoon />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
