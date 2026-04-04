import { motion } from "motion/react";
import { Linkedin, Mail, Twitter } from "lucide-react";

const team = [
  {
    name: "Alex Rivera",
    role: "President",
    desc: "Overseeing all technical and administrative operations. 4th year Mechanical Engineering.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Technical Director",
    desc: "Leading the software and autonomous systems division. 3rd year Computer Science.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Marcus Thorne",
    role: "Operations Lead",
    desc: "Managing logistics, partnerships, and external relations. 4th year Industrial Engineering.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    role: "Hardware Lead",
    desc: "Specializing in PCB design and embedded systems. 3rd year Electrical Engineering.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    name: "David Kim",
    role: "Aerospace Lead",
    desc: "Expert in aerodynamics and structural analysis. 4th year Aerospace Engineering.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Maya Patel",
    role: "Finance Director",
    desc: "Managing budgets and sponsorship acquisitions. 3rd year Rotman Commerce.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
  }
];

export default function ExecTeam() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">The Executive Team</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The dedicated individuals leading our mission to innovate in aerospace and robotics.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-2xl border border-primary/10 glow-blue transition-all group-hover:border-primary/40">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60"></div>
                
                {/* Social Links Overlay */}
                <div className="absolute bottom-6 left-6 flex gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <a href="#" className="p-2 bg-primary text-dark rounded-lg hover:bg-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-primary text-dark rounded-lg hover:bg-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-primary text-dark rounded-lg hover:bg-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisory Section */}
        <div className="mt-40 p-12 bg-dark-lighter rounded-3xl border border-primary/10 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Faculty Advisors</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div>
              <p className="text-white font-bold text-lg">Dr. Sarah Jenkins</p>
              <p className="text-gray-500 text-sm">Professor of Aerospace Engineering</p>
            </div>
            <div>
              <p className="text-white font-bold text-lg">Dr. Michael Chen</p>
              <p className="text-gray-500 text-sm">Director of Robotics Institute</p>
            </div>
            <div>
              <p className="text-white font-bold text-lg">Dr. Robert Vance</p>
              <p className="text-gray-500 text-sm">Lead Research Scientist</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
