import React from "react";
import clsx from "clsx";

interface DotProps {
  color: string;
  className?: string;
}

const Dot: React.FC<DotProps> = ({ color, className }) => {
  return (
    <div
      className={clsx("w-3 h-3 rounded-full inline-block", className)}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default Dot;
