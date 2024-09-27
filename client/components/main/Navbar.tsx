import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

//Data Imports
import { NavLinkData } from "@/data/NavLinkData";

const Navbar = () => {
  return (
    <>
      {/* Desktop navbar */}
      <header className="w-full bg-transparent text-white py-4 shadow-sm fixed top-0 left-0 right-0 z-50">
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
              className=" items-center font-semibold justify-center rounded-sm bg-[#ea084e] px-10 py-3 
               focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
               disabled:pointer-events-none disabled:opacity-50 hover:bg-[#ea084e]/95 hidden lg:inline-flex"
              prefetch={false}
            >
              Contact Us
            </Link>

          
            {/* Mobile navbar */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="bg-transparent shadow-none " size="icon">
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  className="bg-DarkBlue/75 text-white"
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

                    {/* <div className="pt-4">
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Contact Us
                    </Link>
                  </div> */}
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
