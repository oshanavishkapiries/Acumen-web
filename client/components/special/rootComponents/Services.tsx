"use client"
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      className="w-full py-12 flex flex-col items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          variants={itemVariants}
        >
          <div className="space-y-2">
            <h2 className="text-3xl tracking-wide font-semibold text-foreground sm:text-4xl">
              We craft you quality products <br></br> with the dedicated
              marketing expertise.
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl lg:text-lg">
              We leverage you with the best tools and strategies to drive
              growth and success.
            </p>
          </div>
        </motion.div>

        <div className="grid items-center gap-6 mt-6 grid-cols-1 lg:grid-cols-2">
          <motion.div
            className="w-full relative overflow-hidden h-full rounded-md"
            variants={itemVariants}
          >
            <div className="w-full flex h-full flex-col gap-3 bg-[#e8f9f9] p-4 sm:p-6 md:p-8 lg:p-10">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Start with us
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-foreground">
                Turn your product idea into reality with the expertise of top
                developers.
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground w-full">
                With expert teams, tailored guidance, and the right tools, we
                turn your product vision into reality. From concept to launch,
                we&apos;re with you at every step.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full h-full bg-green-500/10 rounded-md p-4 sm:p-6 md:p-8 lg:p-10"
            variants={itemVariants}
          >
            <div className="w-full h-full flex flex-col gap-3">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                Grow with us
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-foreground">
                Expand your reach and grow your brand with expert digital
                marketing strategies
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground w-full">
                We provide tailored marketing solutions, expert advice, and
                the support to grow your brand. Whether you&apos;re starting
                fresh or scaling up, we&apos;re here to guide your success
              </p>
              <div id="contact-us"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;