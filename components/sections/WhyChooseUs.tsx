"use client";

import React from "react";
import { Zap, Shield, Target } from "lucide-react";
import { motion, Variants } from "framer-motion";

const reasons = [
  {
    icon: <Zap size={20} />,
    title: "Performance First",
    desc: "We build for speed. No bloat, just code that converts.",
  },
  {
    icon: <Shield size={20} />,
    title: "Future Proof",
    desc: "Scalable architecture that evolves with your brand.",
  },
  {
    icon: <Target size={20} />,
    title: "Precision Design",
    desc: "Every pixel serves a purpose. No decorative noise.",
  },
];

// Strictly typed container for staggered entrance
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Strictly typed item variants
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="px-6 md:px-12 py-32 bg-black relative overflow-hidden">
      {/* Background Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)`,
          backgroundSize: '50px 50px' 
        }} 
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 border border-zinc-900 relative z-10 bg-black"
      >
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover="hover"
            className="group relative p-12 border-b md:border-b-0 md:border-r border-zinc-900 overflow-hidden cursor-default"
          >
            {/* The Sliding Background Fill */}
            <motion.div 
              variants={{
                hover: { y: 0 }
              }}
              initial={{ y: "100%" }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="absolute inset-0 bg-zinc-900/50 z-0"
            />

            <div className="relative z-10">
              {/* Icon with white background shift */}
              <motion.div 
                variants={{ hover: { scale: 1.1 } }}
                className="w-10 h-10 mb-10 flex items-center justify-center relative"
              >
                <div className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-sm group-hover:bg-white group-hover:border-white transition-colors duration-500" />
                <div className="relative z-10 text-white group-hover:text-black transition-colors duration-500">
                  {r.icon}
                </div>
              </motion.div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-[10px] text-zinc-600">0{i + 1}</span>
                  {/* The growing accent line */}
                  <div className="h-px w-6 bg-zinc-800 group-hover:w-12 group-hover:bg-white transition-all duration-500" />
                </div>
                
                <h3 className="text-2xl font-bold uppercase tracking-tighter text-white">
                  {r.title}
                </h3>
                
                <p className="text-zinc-500 font-mono text-[11px] uppercase leading-relaxed tracking-wider opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {r.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;