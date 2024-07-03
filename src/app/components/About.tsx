"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { forwardRef, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

import { useIndexRefStore } from "@/store/useIndexRefStore";
import Pill from "@/components/ui/pill";

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const About = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, _ref) => {
    const aboutRef = useRef<HTMLDivElement>(null);

    const { setAboutRef } = useIndexRefStore();

    useEffect(() => {
      setAboutRef(aboutRef);
    }, []);

    return (
      <section
        className={cn(
          "relative w-full overflow-clip px-8 pb-48 pt-80 sm:px-16",
          className
        )}
        ref={aboutRef}
        {...props}
      >
        <motion.div
          className="relative z-50 mx-auto flex max-w-screen-2xl flex-col items-center gap-y-12 text-center"
          //   initial={{ opacity: 0, y: 50 }}
          //   whileInView={{ opacity: 1, y: 0 }}
          //   transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-2 items-center px-32 gap-32">
            <div className="flex flex-col justify-start gap-2 mx-auto">
              <div className="flex gap-2">
                <Pill color="white">ABOUT</Pill>
                <Pill color="white">US</Pill>
              </div>
              <h2
                className="z-50 text-2xl font-medium sm:text-5xl text-start"
                style={{ lineHeight: "1.375" }}
              >
                About Unit Ventures
              </h2>
              <div className="z-50 flex max-w-screen-md flex-col gap-y-6 text-sm text-[#dedede] sm:text-lg text-start mt-8">
                <p>
                  “The people who are crazy to think they can change the world
                  are the ones who do” ~ Steve Jobs
                </p>
              </div>
            </div>
            <Image
              src="/images/about-coin.png"
              alt="About Coin"
              priority={true}
              quality={100}
              width={400}
              height={400}
              className="z-10 mx-auto"
            />
          </div>
          <Image
            src="/images/gradient-2.png"
            alt="Gradient"
            priority={true}
            quality={100}
            width={0}
            height={0}
            sizes="100vw"
            className="pointer-events-none absolute -top-52 left-80 right-0 bottom-0 z-0 mx-auto w-[75rem] h-auto object-cover animate-pulse-slow"
          />
        </motion.div>
        <Image
          src="/images/stars.png"
          alt=""
          priority={true}
          quality={100}
          width={0}
          height={0}
          sizes="100vw"
          className="pointer-events-none absolute left-0 right-0 top-0 z-10 mx-auto w-4/5 object-cover"
        />
        <Image
          src="/images/gradient-3.png"
          alt=""
          priority={true}
          quality={100}
          width={0}
          height={0}
          sizes="100vw"
          className="pointer-events-none absolute left-0 right-0 top-[-7rem] z-20 mx-auto hidden w-full animate-pulse-slow object-cover sm:block"
        />
        <Image
          src="/images/gradient-3.png"
          alt=""
          priority={true}
          quality={100}
          width={0}
          height={0}
          sizes="100vw"
          className="pointer-events-none absolute left-0 right-0 top-[-7rem] z-20 mx-auto hidden w-full animate-pulse-slow object-cover sm:block"
        />
        <Image
          src="/images/gradient-3.png"
          alt=""
          priority={true}
          quality={100}
          width={0}
          height={0}
          sizes="100vw"
          className="pointer-events-none absolute left-[-50vw] right-0 top-[-7rem] z-20 mx-auto w-[200vw] max-w-none animate-pulse-slow object-cover sm:left-0 sm:w-full"
        />
        <div className="absolute left-[-50vw] top-0 z-30 mx-auto mt-40 size-[200vw] rounded-full bg-[#0a0004]" />

        <div className="relative z-50 px-32 mt-20">
          <div className="relative flex items-start gap-x-8 sm:gap-x-12 md:gap-x-16">
            <div className="h-44 w-[1px] mr-10 bg-unit-grey-30" />
            <div className="absolute -left-1.5 top-0 size-3 rounded-full border border-unit-grey-10 bg-unit-black-100" />
          </div>
          <div className="relative flex items-start gap-x-8 sm:gap-x-12 md:gap-x-16">
            <div className="h-96 w-[1px] bg-unit-grey-30" />
            <div className="absolute -left-1.5 top-0 size-3 rounded-full border border-unit-grey-10 bg-unit-black-100" />
            <motion.div
              className="relative flex items-start gap-x-20 -mt-5"
              //   initial={{ opacity: 0, x: -10 }}
              //   whileInView={{ opacity: 1, x: 0 }}
              //   transition={{ duration: 1 }}
            >
              <h2
                className="text-3xl font-medium md:text-4xl min-w-56"
                style={{ lineHeight: "1.375" }}
              >
                Our Mission.
              </h2>
              <p className="text-base font-light md:text-lg mt-1">
                Unit Ventures aims to establish the foremost tokenized venture
                fund, dedicated to supporting projects within the token economy.
                Similar to Sequoia Capital’s success in traditional venture
                capital, Unit Ventures focuses on specifically on tokenized
                projects.
                <br />
                <br />
                The team comprises top venture capitalists committed to backing
                businesses, artists, and individuals through tokenization,
                fostering innovation and growth within the digital asset space.
              </p>
            </motion.div>
          </div>
          <div className="relative flex items-start gap-x-8 sm:gap-x-12 md:gap-x-16">
            <div className="h-80 w-[1px] bg-unit-grey-30" />
            <div className="absolute -left-1.5 top-12 size-3 rounded-full border border-unit-grey-10 bg-unit-black-100" />
            <motion.div
              className="relative flex items-start gap-x-20"
              //   initial={{ opacity: 0, x: -10 }}
              //   whileInView={{ opacity: 1, x: 0 }}
              //   transition={{ duration: 1 }}
            >
              <h2
                className="text-3xl font-medium md:text-4xl min-w-56"
                style={{ lineHeight: "1.375" }}
              >
                The Challenge.
              </h2>
              <p className="text-base font-light md:text-lg mt-1">
                Investing in profitable ventures takes a lot of time due to
                growing red tape and high capital needs.
                <br />
                <br />
                The lack of liquidity in these investments makes it hard for
                both founders and investors to access opportunities, creating
                inefficiencies and financial limits.
              </p>
            </motion.div>
          </div>
          <div className="relative flex items-start gap-x-8 sm:gap-x-12 md:gap-x-16">
            <div className="h-12 w-[1px] bg-unit-grey-30" />
            <div className="absolute -left-1.5 top-12 size-3 rounded-full border border-unit-grey-10 bg-unit-black-100" />
            <motion.div
              className="relative flex items-start gap-x-20"
              //   initial={{ opacity: 0, x: -10 }}
              //   whileInView={{ opacity: 1, x: 0 }}
              //   transition={{ duration: 1 }}
            >
              <h2
                className="text-3xl font-medium md:text-4xl min-w-56"
                style={{ lineHeight: "1.375" }}
              >
                The Solution.
              </h2>
              <p className="text-base font-light md:text-lg mt-1">
                Unit Ventures speeds up capital flow using tokens, ensuring
                liquidity around the clock. Blockchain simplifies launching
                funds, raising capital, and securing investors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
);

export default About;
