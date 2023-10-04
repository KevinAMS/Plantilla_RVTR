import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../components/index/Index";
import About from "../components/about/About";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
