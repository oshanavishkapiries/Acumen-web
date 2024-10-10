import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimatedCodeSnippet from "./AnimatedCodeSnippet";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneIcon,
} from "lucide-react";

const Hero = () => {
  return (
    <>
      <section className="relative w-full min-h-screen bg-gradient-to-r from-DarkBlue to-NavyBlue text-white flex flex-col items-center justify-center overflow-hidden">
        <div className="matrix-effect absolute top-0 left-0 w-full h-full"></div>

        {/* Overlay for gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-DarkBlue to-NavyBlue opacity-90"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col max-lg:items-center justify-center space-y-4 text-center lg:text-left lg:py-12">
              <Link href="/" prefetch={false}>
                <Image
                  src="/img/logo.png"
                  width="170"
                  height="50"
                  alt="logo"
                  className="w-24 md:w-36 h-auto"
                />
              </Link>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Hello World!
              </h1>
              <p className="mx-auto max-w-[600px] text-white/80 md:text-xl lg:text-base xl:text-xl lg:mx-0">
                Discover the power of our innovative solutions. We&apos;re here
                to help you achieve your goals and transform your ideas into
                reality.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                <div className="flex items-center gap-4">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#25D366] px-4 text-sm font-medium text-DarkBlue shadow transition-colors hover:bg-[#1da851] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    <PhoneIcon className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Link>
                  <div className="flex items-center gap-4">
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                      prefetch={false}
                    >
                      <InstagramIcon className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                      prefetch={false}
                    >
                      <FacebookIcon className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                      prefetch={false}
                    >
                      <LinkedinIcon className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <AnimatedCodeSnippet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
