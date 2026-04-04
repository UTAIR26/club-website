import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X, Rocket } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About Us", path: "/about" },
  { name: "Exec Team", path: "/team" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-display font-bold tracking-tighter text-white">
              UTAIR
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-gray-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="px-4 py-2 bg-primary text-dark font-bold text-sm rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95">
              Join Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark-lighter border-b border-primary/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-gray-400 hover:bg-primary/5 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full mt-4 px-4 py-3 bg-primary text-dark font-bold rounded-md">
              Join Us
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
