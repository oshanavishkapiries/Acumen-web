import { LightbulbIcon, RocketIcon, UsersIcon } from "lucide-react";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <section
        id="about-us"
        className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center"
      >
        <div className="container grid items-center justify-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              From Acumen to Accelerating Growth
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Acumen started as a software development company focused on our
              own goals. But over the years, we&apos;ve evolved into a team
              dedicated to helping other businesses succeed. Our mission is no
              longer just about building great products - it&apos;s about making
              a real difference in the lives of our clients and their customers.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-DarkBlue rounded-md p-3 flex items-center justify-center">
                  <LightbulbIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Innovation</h3>
              </div>
              <p className="text-muted-foreground">
                We&apos;re always exploring new technologies and ideas to help
                our clients stay ahead of the curve.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-DarkBlue rounded-md p-3 flex items-center justify-center">
                  <UsersIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Collaboration</h3>
              </div>
              <p className="text-muted-foreground">
                We work closely with our clients to understand their unique
                needs and challenges.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-DarkBlue rounded-md p-3 flex items-center justify-center">
                  <RocketIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Growth</h3>
              </div>
              <p className="text-muted-foreground">
                Our smart growth strategies help our clients scale their
                businesses and reach new heights.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
