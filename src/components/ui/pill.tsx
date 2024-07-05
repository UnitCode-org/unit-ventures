import React from "react";
import clsx from "clsx";

type PillProps = {
  children: React.ReactNode;
  color: "white" | "black";
};

const Pill: React.FC<PillProps> = ({ children, color }) => {
  const baseStyles =
    "inline-block px-3 py-1 border rounded-full text-xs md:text-sm font-poppins font-normal";
  const colorStyles = clsx({
    "text-[#bababa] border-[#bababa]": color === "white",
    "text-black border-black": color === "black",
  });

  return <span className={`${baseStyles} ${colorStyles}`}>{children}</span>;
};

export default Pill;
