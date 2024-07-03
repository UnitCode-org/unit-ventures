"use client";

import Image from "next/image";
import { forwardRef, useRef, useEffect } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import Dot from "@/components/ui/dot";
import Pill from "@/components/ui/pill";
import { useIndexRefStore } from "@/store/useIndexRefStore";

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const WhyUs = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => {
    const whyUsRef = useRef<HTMLDivElement>(null);

    const { setWhyUsRef } = useIndexRefStore();

    useEffect(() => {
      setWhyUsRef(whyUsRef);
    }, []);

    const { contactUsRef } = useIndexRefStore();

    return (
      <section
        className={cn(
          "relative z-40 w-full overflow-hidden bg-white px-8 py-16 pb-56 sm:px-16 sm:py-24 sm:pb-56 lg:py-24 xl:py-32",
          className
        )}
        ref={whyUsRef}
        {...props}
      >
        <div className="mx-auto max-w-screen-2xl px-32">
          <div className="flex flex-col items-center justify-center gap-y-2 text-center md:pr-0 lg:items-start lg:text-start">
            <div className="flex items-center gap-x-2">
              <Dot color="#781EDC" />
              <Pill color="black">WHY</Pill>
              <Pill color="black">US</Pill>
            </div>
            <div className="flex items-center justify-between w-full">
              <h2
                className="text-2xl text-black sm:text-5xl font-medium"
                style={{ lineHeight: "1.375" }}
              >
                Why choose Unit
                <br />
                Ventures
              </h2>
              <Button
                variant="secondary"
                onClick={() => contactUsRef?.current?.scrollIntoView()}
              >
                LETS TALK OPPORTUNITIES
              </Button>
            </div>
            <div className="flex flex-col items-start w-full mt-8">
              <div className="flex items-center gap-x-12 pb-8 pt-8 border-b w-full">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image
                    src="/images/icons/star.png"
                    alt="Star"
                    priority={true}
                    quality={100}
                    width={40}
                    height={40}
                    className="w-8 h-auto"
                  />
                </div>

                <h6 className="text-black text-xl font-medium">
                  Proven track record of successful investments
                </h6>
              </div>
              <div className="flex items-center gap-x-12 pb-8 pt-8 border-b w-full">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image
                    src="/images/icons/arrow.png"
                    alt="Arrow"
                    priority={true}
                    quality={100}
                    width={40}
                    height={40}
                    className="w-6 h-auto"
                  />
                </div>
                <h6 className="text-black text-xl font-medium">
                  Expertise in AI Technology
                </h6>
              </div>
              <div className="flex items-center gap-x-12 pb-8 pt-8 border-b w-full">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image
                    src="/images/icons/circles.png"
                    alt="Arrow"
                    priority={true}
                    quality={100}
                    width={40}
                    height={40}
                    className="w-7 h-auto"
                  />
                </div>
                <h6 className="text-black text-xl font-medium">
                  Comprehensive support and resources for portfolio companies
                </h6>
              </div>
              <div className="flex items-center gap-x-12 pb-8 pt-8 w-full">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image
                    src="/images/icons/squares.png"
                    alt="Arrow"
                    priority={true}
                    quality={100}
                    width={40}
                    height={40}
                    className="w-7 h-auto"
                  />
                </div>
                <h6 className="text-black text-xl font-medium">
                  Strong network of industry leaders and innovators
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default WhyUs;
