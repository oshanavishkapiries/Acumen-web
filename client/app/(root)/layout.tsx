import React from "react";

const MainLayouts = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="w-full min-h-screen">{children}</main>;
};

export default MainLayouts;
