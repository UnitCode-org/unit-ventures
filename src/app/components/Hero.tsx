"use client";
import Image from "next/image";
import { forwardRef, useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa6";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { useIndexRefStore } from "@/store/useIndexRefStore";
import Pill from "@/components/ui/pill";

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const Hero = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => {
    const homeRef = useRef<HTMLDivElement>(null);

    const { setHomeRef } = useIndexRefStore();

    useEffect(() => {
      setHomeRef(homeRef);
    }, []);

    const { contactUsRef, aboutRef } = useIndexRefStore();

    return (
      <>
        <section
          className={cn(
            "relative flex w-full max-w-screen-2xl grid-cols-1 flex-col-reverse items-center gap-x-2 gap-y-8 overflow-hidden px-8 pt-32 sm:px-16 sm:pt-36 lg:grid lg:grid-cols-3 lg:pt-28",
            className
          )}
          ref={homeRef}
          {...props}
        >
          <div className="absolute inset-0 z-0 flex justify-center pointer-events-none mt-28">
            <div className="w-1/2 h-full relative">
              <Image
                src="/images/stars.png"
                alt="Stars"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
                priority={true}
                quality={100}
              />
            </div>
          </div>
          <div className="absolute inset-0 z-10 mt-28">
            <Image
              src="/images/gradient-1.png"
              alt="Background Gradient"
              layout="fill"
              objectFit="cover"
              priority={true}
              quality={100}
              className="w-full h-full animate-pulse-slow"
            />
          </div>

          <div className="relative z-20">
            <Pill color="white">UNIT VENTURES</Pill>
            <h1 className="text-5xl mt-4 leading-snug font-medium">
              Invest in the future
            </h1>
          </div>

          <div className="relative z-20">
            <Image
              src="/images/hero-image.png"
              alt="hero"
              width={500}
              height={500}
              className="w-full max-w-lg object-cover"
            />
          </div>

          <div className="relative z-20">
            <h1 className="text-5xl pt-10 leading-snug font-medium">
              of Technology, AI, and Blockchain
            </h1>
          </div>
        </section>
        <section className="flex w-full max-w-screen-2xl justify-between items-center px-8 sm:px-16">
          <p className="text-lg">
            Driving innovation through strategic investments
            <br />
            in cutting-edge technologies.
          </p>
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="default"
              className="w-fit"
              onClick={() => aboutRef?.current?.scrollIntoView()}
            >
              Explore Opportunities
            </Button>
            <Button
              variant="outline"
              className="w-fit"
              onClick={() => contactUsRef?.current?.scrollIntoView()}
            >
              Contact Us
            </Button>
          </div>
        </section>
      </>
    );
  }
);

export default Hero;
