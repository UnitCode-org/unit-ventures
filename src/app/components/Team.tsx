"use client";

import { motion } from "framer-motion";
import { forwardRef, useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { cn } from "@/lib/utils";

import Dot from "@/components/ui/dot";
import Pill from "@/components/ui/pill";
import { useIndexRefStore } from "@/store/useIndexRefStore";
import TeamCard from "@/components/ui/teamCard";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

const teamMembers = [
  {
    country: "Dubai",
    name: "Michael Healy",
    role: "Venture Partner",
    link: "",
  },
  {
    country: "New York",
    name: "Ekaterina Miroshnikova",
    role: "Venture Partner",
    link: "",
  },
  {
    country: "Hong Kong",
    name: "Roy Weissbach",
    role: "Venture Partner",
    link: "",
  },
  {
    country: "Hong Kong",
    name: "Marc David",
    role: "Venture Partner",
    link: "",
  },
  {
    country: "Hong Kong",
    name: "Jeff Chan",
    role: "Venture Partner",
    link: "",
  },
  {
    country: "London",
    name: "Lucy Coulden",
    role: "Venture Partner",
    link: "",
  },
];

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const Team = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => {
    const teamRef = useRef<HTMLDivElement>(null);
    const { setTeamRef } = useIndexRefStore();

    useEffect(() => {
      setTeamRef(teamRef);
    }, [setTeamRef]);

    const [emblaRef, emblaApi] = useEmblaCarousel({
      align: "start",
      loop: true,
    });

    const scrollNext = () => {
      if (emblaApi) emblaApi.scrollNext();
    };

    return (
      <section
        className={cn(
          "relative z-40 w-full overflow-hidden py-24 pb-28 lg:pt-24 lg:pb-28 xl:pt-32 xl:pb-36",
          className
        )}
        ref={teamRef}
        {...props}
      >
        <motion.div
          className="mx-auto max-w-screen-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center justify-center gap-y-2 text-center md:pr-0 lg:items-start lg:text-start">
            <div className="flex items-center gap-x-2 px-8 sm:px-16 xl:px-48">
              <Dot color="#781EDC" />
              <Pill color="white">WHO</Pill>
              <Pill color="white">WE</Pill>
              <Pill color="white">ARE</Pill>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start w-full px-8 sm:px-16 xl:px-48">
              <h2
                className="text-3xl sm:text-5xl font-medium xl:min-w-96"
                style={{ lineHeight: "1.375" }}
              >
                Meet the Unit Team
              </h2>
              <p className="mt-3 text-lg">
                Unit Ventures is a global collective of diverse cultures,
                bringing together some of the brightest minds in blockchain
                technology.
              </p>
            </div>
            <div className="relative mt-12 md:mt-20 w-full">
              <div className="overflow-hidden relative" ref={emblaRef}>
                <div className="flex">
                  {teamMembers.map((member) => (
                    <div key={member.name} className="flex-shrink-0 w-auto">
                      <TeamCard
                        country={member.country}
                        name={member.name}
                        role={member.role}
                        link={member.link}
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-64 bg-gradient-to-l from-black via-black/90 to-transparent pointer-events-none z-10 hidden lg:block" />
              </div>
              <button
                className="absolute right-10 top-1/2 transform -translate-y-1/2 z-20 text-white hidden lg:block"
                onClick={scrollNext}
              >
                <IoChevronForwardCircleOutline size={40} />
              </button>
            </div>
            <div className="flex w-full justify-end lg:hidden mt-4 mr-8">
              <button className="text-white" onClick={scrollNext}>
                <IoChevronForwardCircleOutline size={40} />
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }
);

Team.displayName = "Team";

export default Team;
