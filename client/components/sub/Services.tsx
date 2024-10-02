

const Services = () => {
  return (
    <>
      <section className="w-full py-12 flex flex-col items-center justify-center md:mt-[100px]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-xl tracking-wide font-bold text-[#364969] sm:text-4xl">
                We craft you quality products  with the <br className="hidden lg:block"></br> dedicated
                marketing expertise.
              </h2>
              <p className="max-w-[700px] text-[#81859E] text-sm font-semibold md:text-xl lg:text-lg">
                We leverage you with the best tools and strategies 
                <br className="hidden sm:block"></br> to drive
                growth and success.
              </p>
            </div>
          </div>

          <div className="grid items-center gap-6 sm:mt-20 mt-10 grid-cols-1 lg:grid-cols-2">
            {/* start with us */}
            <div className="w-full relative overflow-hidden h-full rounded-md gap-2">
              <div className="w-full flex h-full flex-col  bg-[#e8f9f9] p-4 sm:p-6 md:p-8 lg:p-10">
                <h3 className="text-md sm:text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Start with us
                </h3>
                <h2 className="text-xl text-[#364969] sm:text-2xl md:text-3xl  font-semibold   ">
                  Turn your product idea into reality with the expertise of top
                  developers.
                </h2>

                <p className="text-sm text-[#81859E]  sm:text-base md:text-lg text-muted-foreground w-full mt-3">
                  With expert teams, tailored guidance, and the right tools, we
                  turn your product vision into reality. From concept to launch,
                  we&apos;re with you at every step.
                </p>
              </div>
            </div>

            {/* Grow with us */}
            <div className="w-full h-full bg-green-500/10 rounded-md p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="w-full h-full flex flex-col ">
                <h3 className="text-md sm:text-xl font-semibold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                  Grow with us
                </h3>
                <h2 className="text-xl text-[#364969] sm:text-2xl md:text-3xl font-semibold ">
                  Expand your reach and grow your brand with expert digital
                  marketing strategies
                </h2>

                <p className="text-sm text-[#81859E]  sm:text-base md:text-lg text-muted-foreground w-full mt-3">
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
