"use client";

import React from "react";
import Lottie from "react-lottie";

import rocket from "@/public/lottie/rocket.json";
import graph from "@/public/lottie/graph.json";

const Services = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
  };

  return (
    <>
      <section className="w-full py-12 flex flex-col items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
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
          </div>

          <div className="grid items-center gap-6 mt-6 grid-cols-1 md:grid-cols-2">
            {/* start with us */}
            <div className="w-full h-auto bg-blue-500/10 rounded-md p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="w-full h-full flex flex-col gap-3">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Start with us
                </h3>
                <h2 className="text-3xl font-semibold  tracking-wide text-foreground sm:text-4xl">
                  Launch your tech-product, hire your 1st or 100th developer.
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <p className="text-muted-foreground md:text-xl lg:text-lg">
                    Surge provides flexible teams, advice, and support to take
                    you from launching your MVP and sprint planning to handling
                    large-scale enterprise projects.
                  </p>

                  <Lottie
                    options={{ ...defaultOptions, animationData: rocket }}
                  />
                </div>
              </div>
            </div>

            {/* Grow with us */}
            <div className="w-full h-auto bg-green-500/10 rounded-md p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="w-full h-full flex flex-col gap-3">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                  Grow with us
                </h3>
                <h2 className="text-3xl font-semibold  tracking-wide text-foreground sm:text-4xl">
                  Launch your tech-product, hire your 1st or 100th developer.
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <p className="text-muted-foreground md:text-xl lg:text-lg">
                    Surge provides flexible teams, advice, and support to take
                    you from launching your MVP and sprint planning to handling
                    large-scale enterprise projects.
                  </p>
                  <Lottie
                    options={{ ...defaultOptions, animationData: graph }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
