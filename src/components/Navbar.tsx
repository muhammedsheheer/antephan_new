"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import clsx from "clsx";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const d = localStorage.getItem("positiond");
    if (d !== null) {
      setPositiond(d);
    }
  }, []);
  const [positiond, setPositiond] = useState<string>("");
  useEffect(() => {
    if (positiond) {
      localStorage.setItem("positiond", positiond);
    }
  }, [positiond]);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cn(
        `${position} top-0 z-50 h-[10vh] w-full pt-4`,
        pathname === "/" ? "bg-transparent" : "pt-4",
      )}
    >
      {/*big screen */}
      <div className="hidden px-4 md:block md:px-12">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logo.png"}
                width={281}
                height={74}
                alt="logo"
                className="w-20"
              />
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center gap-16">
            <Link
              href={"/"}
              className={
                pathname === "/" || pathname === "/table-booking"
                  ? "font-montserrat text-center text-xs font-[500] uppercase tracking-[2px] text-[#fff] hover:text-[#c19d56] hover:underline"
                  : "font-montserrat text-center text-xs font-[500] uppercase tracking-[2px] text-[#000] hover:text-[#c19d56] hover:underline"
              }
            >
              Home
            </Link>
            <Link
              href={"/menu"}
              className={
                pathname === "/" || pathname === "/table-booking"
                  ? "font-montserrat text-center text-xs font-[500] uppercase tracking-[2px] text-[#fff] hover:text-[#c19d56] hover:underline"
                  : "font-montserrat text-center text-xs font-[500] uppercase tracking-[2px] text-[#000] hover:text-[#c19d56] hover:underline"
              }
            >
              Menu
            </Link>

            <Link
              href={"/about-us"}
              className={
                pathname === "/" || pathname === "/table-booking"
                  ? "font-montserrat text-center text-xs font-[500] uppercase tracking-[2px] text-[#fff] hover:text-[#c19d56] hover:underline"
                  : "font-montserrat text-center text-xs font-[500] uppercase tracking-[2px] text-[#000] hover:text-[#c19d56] hover:underline"
              }
            >
              Our Story
            </Link>

            <Link
              href={"/contact"}
              className={
                pathname === "/" || pathname === "/table-booking"
                  ? "font-montserrat text-center text-xs font-[500] uppercase tracking-[2px] text-[#fff] hover:text-[#c19d56] hover:underline"
                  : "font-montserrat text-center text-xs font-[500] uppercase tracking-[2px] text-[#000] hover:text-[#c19d56] hover:underline"
              }
            >
              Contact
            </Link>
            <div>
              <Button className="font-montserrat rounded-none bg-[#C19D56] px-5 py-6 text-center text-xs font-[500] uppercase tracking-[2px] text-[#fff] ring-1 ring-[#C19D56] hover:bg-[#e9b87c] md:px-5 md:py-6">
                <Link href={"/table-booking"}>Book Now</Link>
              </Button>
            </div>
            <div>
              <Sidebar>
                <Button
                  variant="ghost"
                  className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
                >
                  <div className="flex flex-row gap-2">
                    <EqualizerIcon />
                  </div>
                </Button>
              </Sidebar>{" "}
            </div>
          </div>
        </div>
      </div>

      {/*mobile screen */}
      <div className="block px-4 md:hidden md:px-20">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logo.png"}
                width={281}
                height={74}
                alt="logo"
                className="w-14"
              />
            </Link>
          </div>
          <div>
            <Sidebar>
              <Button
                variant="ghost"
                className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="equalizer-icon rotate">
      <div
        className={clsx(
          "bar",
          pathname === "/" ? "bg-[#C19C55]" : "bg-[#079EBC]",
        )}
      ></div>
      <div
        className={clsx(
          "bar",
          pathname === "/" ? "bg-[#C19C55]" : "bg-[#079EBC]",
        )}
      ></div>
      <div
        className={clsx(
          "bar",
          pathname === "/" ? "bg-[#C19C55]" : "bg-[#079EBC]",
        )}
      ></div>
    </div>
  );
};
