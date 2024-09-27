"use client";

import React from "react";
import { AuroraBackground } from "../sub/aurora-background";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <AuroraBackground className="bg-DarkBlue text-white">
        <section className="w-full py-24 lg:py-32 xl:py-48 z-30">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Your{" "}
                  <span className="aura-animation">Technology Partner</span> for
                  Growth and Digital Excellence
                </h1>
                <p className="mx-auto max-w-[700px] py-3 font-semibold md:text-xl opacity-75">
                  Acumen turns your ideas into reality, guiding you from concept
                  to successful implementation.
                </p>
                {/* mobile contact us button */}
                <Link
                  href="#"
                  className="items-center text-sm justify-center rounded-sm bg-[#ea084e] px-4 py-2
               focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
               disabled:pointer-events-none disabled:opacity-50 hover:bg-[#ea084e]/95 lg:hidden inline-flex "
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
