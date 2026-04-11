import { motion } from "motion/react";
import { Search, ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";

const categories = ["All", "Robotics", "Aerospace", "Software", "Hardware"];

const projects = [
  {
    id: 1,
    title: "Marvin",
    phase: "In build" as const,
    category: "Robotics",
    desc: "Our first club robot: a 2WD obstacle-avoiding rover on an Arduino Uno, with an HC-SR04 ultrasonic sensor on a servo, two DC motors via an L298N H-bridge, and separate motor vs logic power as in the reference build.",
    img: "/marvin-circuit.png",
    imageContain: true,
    tags: ["Arduino Uno", "HC-SR04", "L298N", "Servo"]
  },
  {
    id: 2,
    title: "Mini obstacle-avoidance drone",
    phase: "Planned" as const,
    category: "Aerospace",
    desc: "A small multirotor build focused on sensing its surroundings and maneuvering clear of obstacles—hardware, flight stack, and autonomy details to be nailed down as we finish Marvin.",
    img: "https://images.unsplash.com/photo-1473968510367-eeac244d6fb7?q=80&w=2070&auto=format&fit=crop",
    tags: ["UAV", "Obstacle avoidance", "Planning"]
  },
  {
    id: 3,
    title: "Rocket simulation",
    phase: "Planned" as const,
    category: "Aerospace",
    desc: "A software-first project simulating rocket dynamics and flight so we can explore trajectories, staging, and performance without a physical launch vehicle—tooling and scope TBA.",
    img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop",
    tags: ["Simulation", "Rocket", "Planning"]
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

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
            One robot in active development today, two more builds on the roadmap—follow along as we grow.
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
              <div className="aspect-video overflow-hidden relative bg-dark">
                <img
                  src={project.img}
                  alt={project.title}
                  className={`w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ${
                    "imageContain" in project && project.imageContain
                      ? "object-contain object-center p-4 group-hover:scale-[1.02]"
                      : "object-cover group-hover:scale-105"
                  }`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-dark/80 backdrop-blur-md rounded-full text-[10px] font-bold text-gray-200 border border-primary/20 uppercase tracking-widest">
                  {"phase" in project ? project.phase : ""}
                </div>
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
