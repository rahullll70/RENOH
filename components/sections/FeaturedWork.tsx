"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const FeaturedWork = () => {
  return (
    <section className="py-32 border-b border-zinc-900">
      <h2 className="text-xs font-mono text-zinc-600 uppercase mb-16 tracking-widest">
        / Featured Work
      </h2>

      <div className="grid grid-cols-1">
        {[1].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group cursor-pointer"
          >
            <div className="aspect-video bg-zinc-900 relative overflow-hidden mb-6">
              <div className="absolute inset-0 bg-zinc-800 group-hover:scale-105 transition-transform duration-1000" />
            </div>

            <div className="flex justify-between items-center px-5">
              <h3 className="text-2xl font-bold uppercase">Archive_{i}</h3>
              <ArrowUpRight />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
