"use client";

import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import Dot from "@/components/ui/dot";
import Pill from "@/components/ui/pill";
import { Separator } from "@/components/ui/separator";

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const Shaping = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <section
        className={cn(
          "relative z-40 w-full overflow-hidden px-8 py-16 pb-56 sm:px-16 sm:py-24 sm:pb-56 lg:py-24 xl:py-32",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="mx-auto max-w-screen-2xl px-32">
          <div className="flex flex-col items-center justify-center gap-y-2 text-center md:pr-0 lg:items-start lg:text-start">
            <div className="flex items-center gap-x-2">
              <Dot color="#00FFC2" />
              <Pill color="white">OUR</Pill>
              <Pill color="white">INVESTMENT</Pill>
              <Pill color="white">FOCUS</Pill>
            </div>
            <div className="grid grid-cols-2 gap-4 items-start w-full">
              <h2
                className="text-2xl sm:text-5xl font-medium min-w-96"
                style={{ lineHeight: "1.375" }}
              >
                Shaping the Future
              </h2>
              <p className="mt-3 text-lg">
                We are dedicated to pioneering advancements in key areas that
                drive innovation and growth. Explore our strategic focus areas
                below.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-20 mt-36">
              <div className="w-full">
                <h3 className="font-medium text-3xl">
                  <br />
                  Technology
                </h3>
                <Separator className="w-full bg-[#DEDEDE] mt-8" />
                <p className="text-lg mt-12 min-h-64">
                  We are in the technology sector, where innovation is the
                  backbone of tomorrow’s breakthroughs.
                  <br />
                  <br />
                  Capitalize on endless opportunities for growth in the
                  ever-evolving tech industry.
                </p>
                <Separator className="w-full bg-[#DEDEDE] mt-12" />
              </div>
              <div className="w-full">
                <h3 className="font-medium text-3xl">
                  Artificial
                  <br />
                  Intelligence
                </h3>
                <Separator className="w-full bg-[#DEDEDE] mt-8" />
                <p className="text-lg mt-12 min-h-64">
                  Our focus on AI taps into the transformative power of
                  intelligent systems.
                  <br />
                  <br />
                  Partner with us to revolutionize industries and enhance human
                  capabilities through cutting-edge AI technologies.
                </p>
                <Separator className="w-full bg-[#DEDEDE] mt-12" />
              </div>
              <div className="w-full">
                <h3 className="font-medium text-3xl">
                  <br />
                  Blockchain
                </h3>
                <Separator className="w-full bg-[#DEDEDE] mt-8" />
                <p className="text-lg mt-12 min-h-64">
                  We are committed to the blockchain space, supporting a
                  decentralized future that ensures transparency, security, and
                  trust in digital transactions.
                  <br />
                  <br />
                  Invest with us to build the foundation for a new era of
                  digital trust.
                </p>
                <Separator className="w-full bg-[#DEDEDE] mt-12" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default Shaping;
