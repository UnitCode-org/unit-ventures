"use client";
import Image from "next/image";
import { forwardRef } from "react";
import { FaPlay } from "react-icons/fa6";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { useIndexRefStore } from "@/store/useIndexRefStore";

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const Hero = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => {
    const { contactUsRef, aboutRef } = useIndexRefStore();

    return (
      <section
        className={cn(
          "flex w-full max-w-screen-2xl grid-cols-1 flex-col-reverse items-center gap-x-8 gap-y-8 overflow-hidden px-8 pb-12 pt-32 sm:px-16 sm:pt-36 lg:grid lg:min-h-screen lg:grid-cols-2 lg:pb-0 lg:pt-0",
          className
        )}
        ref={ref}
        {...props}
      >
        tes
      </section>
    );
  }
);

export default Hero;
