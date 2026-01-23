"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header className="px-6 md:px-12 pt-40 pb-32 border-b border-zinc-900 relative">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-[13vw] font-bold leading-[0.75] tracking-tighter uppercase mb-12">
          Renoh
          <br />
          <span className="flex items-center text-zinc-800">
            Studio
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "8vw" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-[1vw] bg-white ml-6 hidden md:block"
            />
          </span>
        </h1>

        <div className="max-w-md ml-auto md:mr-20">
          <p className="text-xs font-plex text-zinc-500 uppercase tracking-[0.3em]">
            Architecting <span className="text-white italic ">high-performance</span>{" "}
            digital ecosystems.
          </p>
        </div>
      </motion.div>

      <div className="absolute top-1/2 right-10 -translate-y-1/2 text-[20vw] font-black text-zinc-900/30 select-none">
        01
      </div>
    </header>
  );
};

export default Hero;
