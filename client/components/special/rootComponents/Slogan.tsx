"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Slogan() {
  const titleParts = ["Get Smart", "Get Fast", "Get Acumen"];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4" ref={ref}>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {titleParts.map((part, index) => (
            <motion.span
              key={index}
              className="block mb-2"
              variants={itemVariants}
            >
              {part}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </div>
  );
}
