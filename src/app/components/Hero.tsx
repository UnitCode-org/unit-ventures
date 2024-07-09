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
            "relative flex w-full max-w-screen-2xl grid-cols-1 flex-col items-center gap-x-2 gap-y-8 overflow-hidden px-8 pt-28 sm:px-16 pb-20 lg:pb-0 lg:grid lg:grid-cols-3",
            className
          )}
          ref={homeRef}
          {...props}
        >
          <div className="absolute inset-0 z-0 flex justify-center pointer-events-none lg:mt-28">
            <div className="w-1/2 h-56 lg:h-auto relative -bottom-32 hidden lg:block">
              <Image
                src="/images/stars.png"
                alt="Stars"
                layout="fill"
                objectFit="cover"
                className=""
                priority={true}
                quality={100}
              />
            </div>
            <Image
              src="/images/stars.png"
              alt=""
              priority={true}
              quality={100}
              width={0}
              height={0}
              sizes="100vw"
              className="pointer-events-none absolute left-0 right-0 bottom-40 z-10 mx-auto w-4/5 object-cover lg:hidden"
            />
            <Image
              src="/images/stars.png"
              alt=""
              priority={true}
              quality={100}
              width={0}
              height={0}
              sizes="100vw"
              className="pointer-events-none absolute left-0 right-0 bottom-0 z-10 mx-auto w-4/5 object-cover lg:hidden"
            />
          </div>
          <div className="absolute inset-0 z-10 -top-48 lg:hidden">
            <Image
              src="/images/gradient-5.png"
              alt="Background Gradient"
              layout="fill"
              objectFit="cover"
              priority={true}
              quality={100}
              className="w-full animate-pulse-slow"
            />
          </div>
          <div className="absolute inset-0 z-10 -bottom-48 lg:bottom-0 lg:mt-28 hidden lg:block">
            <Image
              src="/images/gradient-1.png"
              alt="Background Gradient"
              layout="fill"
              objectFit="cover"
              priority={true}
              quality={100}
              className="animate-pulse-slow"
            />
          </div>

          <div className="relative z-20">
            <Pill color="white">UNIT VENTURES</Pill>
            <h1 className="text-5xl mt-4 leading-snug font-medium hidden lg:block">
              Invest in the future
            </h1>
            <h1 className="text-4xl mt-4 leading-snug font-medium lg:hidden text-left">
              Invest in the future of Technology, AI, and Blockchain
            </h1>
            <div className="flex lg:hidden flex-col gap-6 w-full max-w-screen-2xl justify-between items-center sm:items-start mt-4">
              <p className="text-left text-base sm:text-lg">
                Driving innovation through strategic investments in cutting-edge
                technologies.
              </p>
              <div className="flex justify-center items-stretch gap-2 md:gap-4">
                <Button
                  variant="default"
                  className="break-words whitespace-normal w-auto max-w-56"
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
            </div>
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

          <div className="relative z-20 hidden lg:block">
            <h1 className="text-5xl pt-10 leading-snug font-medium">
              of Technology, AI, and Blockchain
            </h1>
          </div>
        </section>

        <section className="hidden lg:flex gap-6 w-full max-w-screen-2xl justify-between items-center px-8 sm:px-16 pb-40">
          <p className="text-lg">
            Driving innovation through strategic investments
            <br />
            in cutting-edge technologies.
          </p>
          <div className="flex justify-center items-center gap-2 md:gap-4">
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

Hero.displayName = "Hero";

export default Hero;
