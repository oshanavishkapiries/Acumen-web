"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Data import
import { techStackData } from "@/data/TechStackData";

const TechItem = ({ Icon, label }: { Icon: string; label: string }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center space-y-2 aura-animation w-20 h-20 rounded-md shadow-lg"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Image src={Icon} alt={label} width={50} height={50} />
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
    <section className="w-full py-12 flex flex-col items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold  tracking-wide text-foreground sm:text-4xl">
              Tech garden
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl lg:text-lg">
              The technologies we use to build amazing products.
            </p>
          </div>
        </div>

        <motion.div
          className="grid items-center gap-6 mt-6 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {techStackData.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center"
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
