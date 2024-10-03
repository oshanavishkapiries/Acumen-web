"use client";

import React from "react";
import { AuroraBackground } from "./aurora-background";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <AuroraBackground className="bg-DarkBlue text-white h-screen">
        <section className="py-24 lg:py-32 xl:py-48 container">
          <div className="flex flex-col items-center justify-center px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="font-bold tracking-tighter text-4xl md:text-5xl lg:text-7xl">
                  Your{" "}
                  <span className="aura-animation-text">
                    Technology Partner
                  </span>{" "}
                  for Growth and Digital Excellence
                </h1>
                <p className="mx-auto max-w-[700px] py-3 font-semibold text-xl md:text-2xl lg:text-3xl opacity-75">
                  Acumen turns your ideas into reality, guiding you from concept
                  to successful implementation.
                </p>
                {/* mobile contact us button */}
                <Link
                  href="#contact-us"
                  className="items-center text-sm justify-center rounded-sm bg-LightPink px-4 py-2
               focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
               disabled:pointer-events-none disabled:opacity-50 hover:bg-LightPink/95 lg:hidden inline-flex "
                  prefetch={false}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AuroraBackground>
    </>
  );
};

export default Hero;
