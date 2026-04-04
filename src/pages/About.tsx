import { motion } from "motion/react";
import { Target, Lightbulb, ShieldCheck, Zap, Layers, Code, Settings } from "lucide-react";

const foundations = [
  {
    title: "Mechanical",
    icon: Settings,
    desc: "Precision engineering and structural design for extreme environments.",
    color: "primary"
  },
  {
    title: "Electrical",
    icon: Zap,
    desc: "Power systems, PCB design, and sensor integration for complex robotics.",
    color: "secondary"
  },
  {
    title: "Software",
    icon: Code,
    desc: "Autonomous navigation, computer vision, and real-time control systems.",
    color: "tertiary"
  }
];

const timeline = [
  { year: "2018", event: "UTAIR Founded", desc: "A small group of students united by a passion for aerospace." },
  { year: "2020", event: "First Competition", desc: "Ranked top 10 in the National Rover Challenge." },
  { year: "2022", event: "Expansion", desc: "Grew to 50+ members and established our dedicated lab space." },
  { year: "2024", event: "Global Recognition", desc: "Partnered with industry leaders for autonomous flight research." },
  { year: "2026", event: "The Future", desc: "Launching our first sub-orbital payload mission." }
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-32"
    >
      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-display font-bold mb-8 tracking-tighter">Our Mission</h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              At UTAIR, we believe that the best way to learn engineering is to build it. Our mission is to provide students with the resources, mentorship, and community needed to tackle real-world aerospace and robotics challenges.
            </p>
            <div className="space-y-6">
              {[
                { icon: Target, text: "Excellence through hands-on technical projects." },
                { icon: Lightbulb, text: "Fostering innovation and creative problem solving." },
                { icon: ShieldCheck, text: "Building a supportive and inclusive engineering community." }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-gray-300 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-primary/20 glow-blue">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
                alt="Team working"
                className="w-full h-auto grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl hidden md:block">
              <Layers className="w-12 h-12 text-dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Foundations Section */}
      <section className="bg-dark-lighter py-32 border-y border-primary/10 mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold mb-4 tracking-tight">Technical Foundations</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our work is built on three core engineering pillars.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {foundations.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center p-8 rounded-2xl border border-primary/5 hover:border-primary/20 transition-all bg-dark"
              >
                <div className={`inline-flex p-4 rounded-2xl mb-6 bg-primary/5`}>
                  <f.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-bold mb-4 tracking-tight">Origins & Evolution</h2>
          <p className="text-gray-400">The journey of UTAIR from a student club to a research powerhouse.</p>
        </div>
        
        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:left-1/2">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className={`relative mb-16 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right md:ml-[-50%]" : "md:pl-12 md:ml-[50%]"}`}
            >
              <div className="absolute top-0 w-4 h-4 bg-primary rounded-full -left-[9px] md:left-auto md:right-[-9px] border-4 border-dark"></div>
              <div className={`absolute top-0 w-4 h-4 bg-primary rounded-full -left-[9px] border-4 border-dark ${i % 2 === 0 ? "md:right-[-9px]" : "md:left-[-9px]"}`}></div>
              
              <div className="bg-dark-lighter p-6 rounded-2xl border border-primary/10">
                <span className="text-primary font-display font-bold text-xl mb-2 block">{item.year}</span>
                <h4 className="text-white font-bold mb-2">{item.event}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
