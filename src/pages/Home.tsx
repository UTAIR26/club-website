import { motion } from "motion/react";
import { ArrowRight, Cpu, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Active Projects", value: "12+", icon: Cpu },
  { label: "Team Members", value: "30+", icon: Users },
  { label: "Future competition planned", value: "1", icon: Globe },
];

const featuredProjects = [
  {
    title: "Drone Swarm",
    desc: "Autonomous coordination system for multi-agent aerial vehicles.",
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop",
    color: "primary",
  },
  {
    title: "Rover Titan",
    desc: "Next-gen planetary exploration vehicle with advanced suspension.",
    img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=800&auto=format&fit=crop",
    color: "secondary",
  },
  {
    title: "STASIS System",
    desc: "Stabilization and tracking system for high-altitude payloads.",
    img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&auto=format&fit=crop",
    color: "tertiary",
  },
] as const;

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="blueprint-grid min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Engineering the Future
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 tracking-tighter">
                University of Toronto <br />
                <span className="text-primary text-glow">Aerospace & Robotics Club</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                We are a multidisciplinary team of students dedicated to pushing the boundaries of aerospace engineering and robotics through hands-on innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="px-8 py-4 bg-primary text-dark font-bold rounded-full hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2 group"
                >
                  Explore Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 bg-dark-lighter border border-primary/20 text-white font-bold rounded-full hover:bg-primary/10 transition-all"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-primary/20 glow-blue">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop"
                  alt="Robotic Arm"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-lighter border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-3 bg-primary/5 rounded-xl mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-4 tracking-tight">Featured Projects</h2>
              <p className="text-gray-400 max-w-md">Our latest breakthroughs in autonomous systems and aerospace design.</p>
            </div>
            <Link to="/projects" className="text-primary font-bold hover:underline flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-dark-lighter rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    Read Case Study <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-primary/5 border border-primary/20 rounded-3xl p-16 backdrop-blur-sm glow-blue"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tighter">Ready to Build the Future?</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              We're always looking for passionate engineers, designers, and innovators to join our team. No experience required—just curiosity.
            </p>
            <button className="px-12 py-5 bg-primary text-dark font-bold text-lg rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20">
              Join the Crew
            </button>
          </motion.div>
        </div>
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      </section>
    </motion.div>
  );
}
