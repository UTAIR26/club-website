import { motion } from "motion/react";
import { Search, Filter, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Robotics", "Aerospace", "Software", "Hardware"];

const projects = [
  {
    id: 1,
    title: "Drone Swarm",
    category: "Aerospace",
    desc: "Autonomous coordination system for multi-agent aerial vehicles using decentralized control algorithms.",
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2070&auto=format&fit=crop",
    tags: ["ROS", "Python", "PX4"]
  },
  {
    id: 2,
    title: "Rover Titan",
    category: "Robotics",
    desc: "Next-gen planetary exploration vehicle with advanced rocker-bogie suspension and autonomous navigation.",
    img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1954&auto=format&fit=crop",
    tags: ["SolidWorks", "C++", "Lidar"]
  },
  {
    id: 3,
    title: "STASIS System",
    category: "Hardware",
    desc: "Stabilization and tracking system for high-altitude payloads, ensuring steady data collection in extreme conditions.",
    img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop",
    tags: ["Embedded", "PCB Design", "Control"]
  },
  {
    id: 4,
    title: "Neural Navigator",
    category: "Software",
    desc: "Deep learning based path planning for robots in dynamic environments with real-time obstacle avoidance.",
    img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2070&auto=format&fit=crop",
    tags: ["PyTorch", "OpenCV", "AI"]
  },
  {
    id: 5,
    title: "Vortex Engine",
    category: "Aerospace",
    desc: "Experimental propulsion system focusing on high efficiency and low emission for sub-orbital flight.",
    img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop",
    tags: ["Fluid Dynamics", "Thermodynamics"]
  },
  {
    id: 6,
    title: "Exo-Frame V2",
    category: "Robotics",
    desc: "Wearable robotic exoskeleton designed to assist in heavy lifting and rehabilitation applications.",
    img: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=2012&auto=format&fit=crop",
    tags: ["Biomechanics", "Actuators"]
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(p => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-display font-bold mb-6 tracking-tighter">Our Projects</h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            From autonomous rovers to high-altitude rockets, explore the technical challenges we're tackling.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? "bg-primary text-dark" 
                    : "bg-dark-lighter text-gray-400 border border-primary/10 hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-lighter border border-primary/10 rounded-full py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-primary/40 transition-colors"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group bg-dark-lighter rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-dark/80 backdrop-blur-md rounded-full text-[10px] font-bold text-primary border border-primary/20 uppercase tracking-widest">
                  {project.category}
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-primary/5 border border-primary/10 rounded text-[10px] font-mono text-primary/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-32">
            <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
