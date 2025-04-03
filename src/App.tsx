import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CodingProblems from "./pages/CodingProblems";
import Archives from "./pages/Archives";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="app" />} />
          <Route path="/app" element={<CodingProblems />} />{" "}
          <Route path="/archives" element={<Archives />} />{" "}
          <Route path="/how-it-works" element={<HowItWorks />} />{" "}
          <Route path="/about" element={<About />} />{" "}
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
