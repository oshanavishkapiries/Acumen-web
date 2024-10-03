import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <>
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-muted-foreground">
            Oops, the page you were looking for doesn&apos;t exist. Let&apos;s
            get you back on track.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center rounded-md bg-DarkBlue px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-DarkBlue/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default notFound;
