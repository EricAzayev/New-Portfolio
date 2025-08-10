import { BrowserRouter, Route, Routes } from "react-router-dom"; //npm install react-router-dom

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Index from "./Index.jsx";

import Layout from "./routes/Layout.jsx";
// import Data from "./routes/FullStack&Data.jsx";
// import Game from "./routes/ProjectManagement&Analysis.jsx";
import NotFound from "./routes/NotFound.jsx";
import FullStack from "./routes/FullStackData.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Index />} />
          {/* <Route index={false} path="/edit/:id" element={<Data />} />
          <Route index={false} path="/create-post" element={<Game />} />
          <Route index={false} path="/create-post" element={<FullStack />} /> */}
          {/* <Route
            index={false}
            path="/path_detail/:id"
            element={<PostDiscussion />}
          /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
