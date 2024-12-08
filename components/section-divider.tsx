"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SectionDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Trigger animation repeatedly when in view

  return (
    <div ref={ref} className="my-20 flex flex-col items-center justify-center">
      <motion.div
        className="bg-purple-950 my-3 h-5 w-[9rem] rounded-full bg-opacity-20"
        initial={{ opacity: 0.5, y: -80 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -80 }}
        transition={{
          delay: 0.2 * 1,
          duration: 0.5,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      ></motion.div>
      <motion.div
        className="bg-purple-950 my-3 h-5 w-[7rem] rounded-full bg-opacity-40"
        initial={{ opacity: 0, y: -80 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -80 }}
        transition={{
          delay: 0.2 * 2,
          duration: 0.75,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      ></motion.div>
      <motion.div
        className="bg-purple-950 my-3 h-5 w-[5rem] rounded-full bg-opacity-60"
        initial={{ opacity: 0, y: -80 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -80 }}
        transition={{
          delay: 0.2 * 3,
          duration: 1.0,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      ></motion.div>
      <motion.div
        className="bg-purple-950 my-3 h-5 w-[1.8rem] rounded-full bg-opacity-80"
        initial={{ opacity: 0, y: -80 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -80 }}
        transition={{
          delay: 0.2 * 4,
          duration: 1.25,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      ></motion.div>
    </div>
  );
}
