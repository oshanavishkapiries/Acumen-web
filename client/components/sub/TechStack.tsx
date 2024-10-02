"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Data import
import { techStackData } from "@/data/TechStackData";

const TechItem = ({ Icon, label }: { Icon: string; label: string }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center space-y-2 aura-animation w-32 h-32 md:w-40 md:h-40 rounded-md shadow-lg"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Image src={Icon} alt={label} width={60} height={60}  />
    </motion.div>
  );
};

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full py-12 flex flex-col items-center justify-center md:mt-[100px]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-xl tracking-wide font-bold text-[#364969] sm:text-4xl">
              Tech garden
            </h2>
            <p className="max-w-[700px] text-[#81859E] text-sm font-semibold md:text-xl lg:text-lg">
              The technologies we use to build amazing products.
            </p>
          </div>
        </div>

        <motion.div
          className="grid items-center gap-3 md:gap-6 mt-12 grid-cols-3 md:grid-cols-4  xl:grid-cols-6 "
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {techStackData.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center  "
            >
              <TechItem Icon={tech.image} label={tech.name} />
            </motion.div>
          ))}
        </motion.div>

        {/* service scroll pointer start */}
        <div id="services"></div>
        {/* service scroll pointer end */}
      </div>
    </section>
  );
};

export default TechStack;
