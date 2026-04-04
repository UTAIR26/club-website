import { Rocket, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-primary/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Rocket className="w-8 h-8 text-primary" />
              <span className="text-2xl font-display font-bold tracking-tighter">UTAIR</span>
            </Link>
            <p className="text-gray-400 max-w-md leading-relaxed">
              University of Toronto Aerospace & Robotics. Pushing the boundaries of engineering through innovation, collaboration, and hands-on experience.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-primary transition-colors">Exec Team</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-white mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-dark rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-dark rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-dark rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-dark rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} UTAIR. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-500 text-sm hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
