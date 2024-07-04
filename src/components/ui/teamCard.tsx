import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface TeamCardProps {
  country: string;
  name: string;
  role: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ country, name, role }) => {
  return (
    <div
      className="p-6 rounded-3xl shadow-md border border-unit-grey-40 w-96 ml-8"
      style={{
        background:
          "linear-gradient(to right, black 30%, rgba(130, 71, 255, 0.5) 100%)",
      }}
    >
      <p className="text-unit-grey-40 text-base mb-1">{country}</p>
      <h2 className="text-white text-2xl font-medium mb-1">{name}</h2>
      <div className="flex items-end justify-between">
        <p className="text-unit-grey-40 text-xl">{role}</p>
        <div className="flex items-center gap-2">
          <Link href="" className="text-base">
            View
          </Link>
          <FaArrowRight style={{ rotate: "-45deg" }} />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
