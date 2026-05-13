import { BrowserRouter, Route, Routes } from "react-router-dom"; //npm install react-router-dom

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Front.css";
import Index from "./Index.jsx";

import Layout from "./routes/Layout.jsx";
import NotFound from "./routes/NotFound.jsx";
import SWE from "./routes/SWEData.jsx";
import PMAnalyst from "./routes/PMAnalyst.jsx";
import Programmatics from "./routes/Programmatics.jsx";
import Blog from "./routes/Blog.jsx";

// Software Engineering Project Pages
import LexingtonLinks from "./components/SWE/LexingtonLinks.jsx";
import Findr from "./components/SWE/Findr.jsx";
import CodepathApps from "./components/SWE/CodepathApps.jsx";
import FoodTracker from "./components/SWE/FoodTracker.jsx";
import ReciPal from "./components/SWE/ReciPal.jsx";
import TruthLens from "./components/SWE/TruthLens.jsx";
import FocusTube from "./components/SWE/FocusTube.jsx";
import TheThankfulForestMod from "./components/SWE/TheThankfulForestMod.jsx";

// Data Project Pages
import SpringFoliageMap from "./components/Data/SpringFoliageMap.jsx";
import StellarSearch from "./components/Programmatics/StellarSearch.jsx";
import LetterBuddy from "./components/Data/LetterBuddy.jsx";
import DenCity from "./components/Data/DenCity.jsx";
import GroupWisdom from "./components/Data/GroupWisdom.jsx";

// Programmatics Project Pages
import NASALSPACEMCA from "./components/Programmatics/NASALSPACEMCA.jsx";
import NASAProposalWriting from "./components/Programmatics/NASAProposalWriting.jsx";
import NPWEE from "./components/Programmatics/NPWEE.jsx";
import MinecraftMoon from "./components/Programmatics/MinecraftMoon.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Index />} />
          <Route path="/swe" element={<SWE />} />
          <Route path="/data" element={<PMAnalyst />} />
          <Route path="/programmatics" element={<Programmatics />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* Software Engineering Project Routes */}
          <Route path="/swe/lexington-links" element={<LexingtonLinks />} />
          <Route path="/swe/findr" element={<Findr />} />
          <Route path="/swe/codepath-apps" element={<CodepathApps />} />
          <Route path="/swe/foodtracker" element={<FoodTracker />} />
          <Route path="/swe/recipal" element={<ReciPal />} />
          <Route path="/swe/truthlens" element={<TruthLens />} />
          <Route path="/swe/focustube" element={<FocusTube />} />
          <Route path="/swe/thankful-forest-mod" element={<TheThankfulForestMod />} />
          
          {/* Data Project Routes */}
          <Route path="/data/spring-foliage-map" element={<SpringFoliageMap />} />
          <Route path="/data/stellar-search" element={<StellarSearch />} />
          <Route path="/data/letterbuddy" element={<LetterBuddy />} />
          <Route path="/data/dencity" element={<DenCity />} />
          <Route path="/data/groupwisdom" element={<GroupWisdom />} />
          
          {/* Programmatics Project Routes */}
          <Route path="/programmatics/nasa-lspace-mca" element={<NASALSPACEMCA />} />
          <Route path="/programmatics/nasa-proposal-writing" element={<NASAProposalWriting />} />
          <Route path="/programmatics/npwee" element={<NPWEE />} />
          <Route path="/programmatics/minecraft-moon" element={<MinecraftMoon />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
