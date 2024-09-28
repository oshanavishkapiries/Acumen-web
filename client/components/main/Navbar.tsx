"use client";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";

//Data Imports
import { NavLinkData } from "@/data/NavLinkData";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop navbar */}
      <header
        className={`w-full transsition-colors duration-300 ease-in-out text-white py-4 shadow-sm fixed top-0 left-0 right-0 z-50 ${
          isScrolled ? "bg-DarkBlue" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <Link href="#" className="text-4xl font-bold" prefetch={false}>
            acumen.
          </Link>
          <nav className="hidden lg:flex items-center space-x-6">
            {NavLinkData.map((navLink) => (
              <Link
                key={navLink.name}
                href={navLink.path}
                className="font-semibold hover:scale-110 transition-all delay-75"
                prefetch={false}
              >
                {navLink.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-row items-center space-x-4">
            <Link
              href="#"
              className=" items-center font-semibold justify-center rounded-sm bg-LightPink px-10 py-3 
               focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
               disabled:pointer-events-none disabled:opacity-50 hover:bg-LightPink/95 hidden lg:inline-flex"
              prefetch={false}
            >
              Contact Us
            </Link>

            {/* Mobile navbar */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="bg-transparent shadow-none" size="icon">
                    <MenuIcon className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  className="bg-DarkBlue text-white border-none"
                  side="right"
                >
                  <div className="grid gap-4 p-4">
                    {NavLinkData.map((navLink) => (
                      <Link
                        key={navLink.name}
                        href={navLink.path}
                        className="hover:text-primary transition-colors"
                        prefetch={false}
                      >
                        {navLink.name}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
