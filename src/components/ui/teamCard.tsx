import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface TeamCardProps {
  country: string;
  name: string;
  role: string;
  link: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ country, name, role, link }) => {
  return (
    <div
      className="p-6 rounded-3xl shadow-md border border-unit-grey-40 w-72 md:w-96 ml-6 md:ml-8"
      style={{
        background:
          "linear-gradient(to right, black 35%, rgba(130, 71, 255, 0.5) 100%)",
      }}
    >
      <p className="text-unit-grey-40 text-sm md:text-base mb-1 text-left">
        {country}
      </p>
      <h2 className="text-white text-xl md:text-2xl font-medium mb-1 text-left">
        {name}
      </h2>
      <div className="flex items-end justify-between">
        <p className="text-unit-grey-40 text-lg md:text-xl text-left">{role}</p>
        <div className="flex items-center gap-2">
          <Link href={link} className="text-sm md:text-base" target="_blank">
            View
          </Link>
          <FaArrowRight style={{ rotate: "-45deg" }} />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
