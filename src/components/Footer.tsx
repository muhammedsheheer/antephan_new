"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";
import { FaTiktok } from "react-icons/fa";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#002A32] px-4 py-12 md:py-20 lg:px-20">
      {/*mobile screen */}
      <div className="flex flex-col items-center justify-center gap-14 md:hidden">
        <div className="flex flex-col items-center justify-center gap-2">
          <Link href={"/"}>
            <Image
              src={"/images/home/hero/logo.png"}
              width={281}
              height={74}
              alt="logo"
              className="w-20 md:w-28"
            />
          </Link>
          <h2 className="text-center font-montserrat text-lg font-[600] uppercase tracking-[0.888px] text-[#fff] md:text-xl">
            Special Taste <br /> from Gaziantep
          </h2>
        </div>
        <div className="flex flex-row items-center justify-center gap-10">
          <div className="rotate-45 border-2 border-[#C19D56] bg-transparent p-1">
            <Link
              href={"https://www.instagram.com/antephan.baklava.uk/"}
              target="_blank"
            >
              <Icons.instagram className="-rotate-45 text-[#C19D56]" />
            </Link>
          </div>
          <div className="rotate-45 border-2 border-[#C19D56] bg-transparent p-3">
            <Link
              href={" https://www.tiktok.com/@antephan2024"}
              target="_blank"
            >
              <FaTiktok size={28} className="-rotate-45 text-[#C19D56]" />
            </Link>
          </div>
          <div className="rotate-45 border-2 border-[#C19D56] bg-transparent p-1">
            <Link href={"https://g.co/kgs/oTZfr5e"} target="_blank">
              <Icons.google className="-rotate-45 text-[#C19D56]" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-center font-montserrat text-lg font-[600] uppercase tracking-[0.888px] text-[#fff] md:text-xl">
            Contact
          </h2>
          <div className="flex flex-col items-center justify-center gap-1">
            <Link
              className="text-center font-cormorant text-base font-[400] text-[#C8C8C8] md:text-base"
              href={"https://g.co/kgs/oTZfr5e"}
            >
              240 Hertford Road Enfield EN3 5BL
            </Link>
            <span className="text-center font-cormorant text-base font-[400] text-[#C8C8C8] md:text-base">
              08:00-23:00 OPEN EVERYDAY
            </span>
            <Link
              className="text-center font-cormorant text-base font-[400] text-[#C8C8C8] md:text-base"
              href={"tel:+442083749043"}
            >
              Phone:+44 20 8374 9043
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-8">
          <Link href={"/"}>
            <Image
              src={"/images/home/hero/frame1.png"}
              width={281}
              height={74}
              alt="logo"
              className="w-48 md:w-40"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src={"/images/home/hero/frame2.png"}
              width={281}
              height={74}
              alt="logo"
              className="w-48 md:w-40"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-start font-cormorant text-base font-[400] text-[#C8C8C8] md:text-base">
            © 2025 Antephankunefe , All Rights Reserved
          </span>
          <Link href={"https://foodo.ai"} target="_blank">
            <span className="text-start font-cormorant text-base font-[400] text-[#C8C8C8] md:text-base">
              Powerd By Foodo
            </span>
          </Link>
        </div>
      </div>
      {/*big screen */}
      <div className="hidden flex-row items-center justify-between md:flex">
        <div className="flex flex-col items-start justify-start gap-4">
          <h2 className="text-center font-montserrat text-lg font-[600] uppercase tracking-[0.888px] text-[#fff]">
            Contact
          </h2>
          <div className="flex flex-col items-start justify-start gap-1">
            <Link
              className="text-start font-cormorant text-base font-[400] text-[#C8C8C8] md:text-base"
              href={"https://g.co/kgs/oTZfr5e"}
            >
              240 Hertford Rd, London EN3 <br /> 5BL, United Kingdom
            </Link>
            <span className="text-start font-cormorant text-base font-[400] text-[#C8C8C8] md:text-base">
              08:00-23:00 OPEN EVERYDAY
            </span>
            <Link
              className="text-start font-cormorant text-base font-[400] text-[#C8C8C8] md:text-base"
              href={"tel:+442083749043"}
            >
              Phone:+44 20 8374 9043
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-28">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center justify-center gap-2">
              <Link href={"/"}>
                <Image
                  src={"/images/home/hero/logo.png"}
                  width={281}
                  height={74}
                  alt="logo"
                  className="w-20 md:w-28"
                />
              </Link>
              <h2 className="text-center font-montserrat text-lg font-[600] uppercase tracking-[0.888px] text-[#fff] md:text-xl">
                Special Taste <br /> from Gaziantep
              </h2>
              <Image
                src={"/images/home/hero/line.svg"}
                width={281}
                height={74}
                alt="logo"
                className="w-20 md:w-28"
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-16">
              <Link
                href={"/"}
                className={
                  "text-center font-montserrat text-xs font-[500] uppercase tracking-[2px] text-[#fff] hover:text-[#c19d56] hover:underline"
                }
              >
                Home
              </Link>
              <Link
                href={"/menu"}
                className={
                  "text-center font-montserrat text-xs font-[500] uppercase tracking-[2px] text-[#fff] hover:text-[#c19d56] hover:underline"
                }
              >
                Menu
              </Link>

              <Link
                href={"/about-us"}
                className={
                  "text-center font-montserrat text-xs font-[500] uppercase tracking-[2px] text-[#fff] hover:text-[#c19d56] hover:underline"
                }
              >
                Our Story
              </Link>

              <Link
                href={"/contact"}
                className={
                  "text-center font-montserrat text-xs font-[500] uppercase tracking-[2px] text-[#fff] hover:text-[#c19d56] hover:underline"
                }
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-row items-center justify-center gap-10 pt-6">
              <div className="rotate-45 border-2 border-[#C19D56] bg-transparent p-1">
                <Link
                  href={"https://www.instagram.com/antephan.baklava.uk/"}
                  target="_blank"
                >
                  <Icons.instagram className="-rotate-45 text-[#C19D56]" />
                </Link>
              </div>
              <div className="rotate-45 border-2 border-[#C19D56] bg-transparent p-3">
                <Link
                  href={" https://www.tiktok.com/@antephan2024"}
                  target="_blank"
                >
                  <FaTiktok size={28} className="-rotate-45 text-[#C19D56]" />
                </Link>
              </div>
              <div className="rotate-45 border-2 border-[#C19D56] bg-transparent p-1">
                <Link href={"https://g.co/kgs/oTZfr5e"} target="_blank">
                  <Icons.google className="-rotate-45 text-[#C19D56]" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-start font-cormorant text-base font-[400] text-[#C8C8C8] md:text-base">
              © 2025 Antephankunefe , All Rights Reserved
            </span>
            <Link href={"https://foodo.ai"} target="_blank">
              <span className="text-start font-cormorant text-base font-[400] text-[#C8C8C8] md:text-base">
                Powerd By Foodo
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-16">
          <Link href={"https://g.co/kgs/oTZfr5e"}>
            <Image
              src={"/images/home/hero/frame1.png"}
              width={281}
              height={74}
              alt="logo"
              className="w-48 md:w-60"
            />
          </Link>
          <Link href={"/menu"}>
            <Image
              src={"/images/home/hero/frame2.png"}
              width={281}
              height={74}
              alt="logo"
              className="w-48 md:w-60"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
