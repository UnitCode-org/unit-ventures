import { forwardRef } from "react";
import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";

const words = [
  "Asset Digitization",
  "Token Economy",
  "Decentralized Ecosystem",
  "AI Integration",
  "Revolutionizing the Blockchain",
  "Fintech Innovation",
  "Team of Visionaries",
  "Tokenized Projects",
  "Decentralized Future",
  "Transparent and Secure Digital Transactions",
];

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const WordMarquee = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <section
        className={cn("relative w-full font-poppins", className)}
        ref={ref}
        {...props}
      >
        <Marquee
          play
          className="flex items-center px-8 md:px-16 xl:px-32 2xl:px-96"
        >
          {words.map((word, index) => (
            <div
              key={word}
              className={cn(
                "mr-16 text-base font-medium sm:text-2xl",
                index % 2 === 0 ? "text-[#ababab]" : "text-[#464646]"
              )}
            >
              {word}
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute top-0 z-10 h-[-webkit-fill-available] w-full bg-gradient-to-r from-transparent from-70% to-[#01000A]" />
        <div className="pointer-events-none absolute top-0 z-10 h-[-webkit-fill-available] w-full bg-gradient-to-l from-transparent from-70% to-[#01000A]" />
      </section>
    );
  }
);

export default WordMarquee;
