import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const ExecTeam = lazy(() => import("./pages/ExecTeam"));

function RouteFallback() {
  return (
    <div
      className="min-h-[50vh] flex items-center justify-center text-gray-500 text-sm"
      aria-busy="true"
    >
      Loading…
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Suspense fallback={<RouteFallback />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<ExecTeam />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
