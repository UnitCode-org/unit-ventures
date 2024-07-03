import React from "react";

interface DotProps {
  color: string;
}

const Dot: React.FC<DotProps> = ({ color }) => {
  return (
    <div
      className="w-3 h-3 rounded-full inline-block"
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default Dot;
