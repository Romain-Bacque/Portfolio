import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Home";
import Projects from "../Projects";
import { AnimatePresence } from "framer-motion";
import About from "../About";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
