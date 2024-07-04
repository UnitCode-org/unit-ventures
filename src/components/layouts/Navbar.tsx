"use client";
import unitVenturesIcon from "@public/images/unit-ventures-icon.svg";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

import { useIndexRefStore } from "@/store/useIndexRefStore";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";

function Navbar() {
  const { homeRef, aboutRef, whyUsRef, teamRef, contactUsRef } =
    useIndexRefStore();

  return (
    <Sheet>
      <nav className="fixed left-0 top-0 z-[60] w-screen bg-black/10 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-screen-2xl items-center gap-x-8 px-8 py-6 font-poppins transition-all sm:px-16">
          <div className="mr-auto flex items-center gap-x-3">
            <div
              className="relative size-8 cursor-pointer"
              onClick={() => {
                if (homeRef && homeRef.current) {
                  const top =
                    homeRef.current.getBoundingClientRect().top +
                    window.scrollY;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
            >
              <Image
                src={unitVenturesIcon}
                alt="Unit Network"
                fill
                sizes="100vw"
                priority={true}
                quality={100}
              />
            </div>
            {/* <h1 className="hidden text-xl sm:block">Unit Ventures</h1> */}
          </div>
          <div className="hidden items-center gap-x-14 md:flex">
            <div
              className="cursor-pointer"
              onClick={() => {
                if (aboutRef && aboutRef.current) {
                  const top =
                    aboutRef.current.getBoundingClientRect().top +
                    window.scrollY;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
            >
              About Us
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                if (whyUsRef && whyUsRef.current) {
                  const top =
                    whyUsRef.current.getBoundingClientRect().top +
                    window.scrollY;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
            >
              Why Us
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                if (teamRef && teamRef.current) {
                  const top =
                    teamRef.current.getBoundingClientRect().top +
                    window.scrollY;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
            >
              Team
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                if (contactUsRef && contactUsRef.current) {
                  const top =
                    contactUsRef.current.getBoundingClientRect().top +
                    window.scrollY;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
            >
              Contact Us
            </div>
            <Link href="https://www.unit.network/">Unit Network</Link>
          </div>
          <SheetTrigger>
            <IoMenu className="block size-8 md:hidden" />
          </SheetTrigger>
        </div>
      </nav>
      <SheetContent className="z-[60] w-full border-0 bg-[#0a0004] text-white">
        <ul className="mt-12 flex flex-col items-start justify-start gap-y-6 font-poppins text-xl font-semibold">
          <li>
            <SheetClose>
              <div
                onClick={() => {
                  if (aboutRef && aboutRef.current) {
                    const top =
                      aboutRef.current.getBoundingClientRect().top +
                      window.scrollY;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
              >
                About
              </div>
            </SheetClose>
          </li>
          <li>
            <SheetClose>
              <div
                onClick={() => {
                  if (whyUsRef && whyUsRef.current) {
                    const top =
                      whyUsRef.current.getBoundingClientRect().top +
                      window.scrollY;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
              >
                Why Us
              </div>
            </SheetClose>
          </li>
          <li>
            <SheetClose>
              <div
                onClick={() => {
                  if (teamRef && teamRef.current) {
                    const top =
                      teamRef.current.getBoundingClientRect().top +
                      window.scrollY;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
              >
                Team
              </div>
            </SheetClose>
          </li>
          <li>
            <SheetClose>
              <div
                onClick={() => {
                  if (contactUsRef && contactUsRef.current) {
                    const top =
                      contactUsRef.current.getBoundingClientRect().top +
                      window.scrollY;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
              >
                Contact Us
              </div>
            </SheetClose>
          </li>
          <li>
            <Link href="https://www.unit.network/">Unit Network</Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default Navbar;
