import React from "react";

const Services = () => {
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

          <div className="grid items-center gap-6 mt-6 grid-cols-1 lg:grid-cols-2">
            {/* start with us */}
            <div className="w-full h-full bg-blue-500/10 rounded-md p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="w-full h-full flex flex-col gap-3">
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
            </div>

            {/* Grow with us */}
            <div className="w-full h-full bg-green-500/10 rounded-md p-4 sm:p-6 md:p-8 lg:p-10">
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
                  fresh or scaling up, we’re here to guide your success
                </p>

                {/* contact-us scroll pointer start */}
                <div id="contact-us"></div>
                {/* contact-us scroll pointer end */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
