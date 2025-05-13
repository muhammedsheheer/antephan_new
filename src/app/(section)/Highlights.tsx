import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Highlights: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] px-4 py-8 md:px-40 md:py-20">
      <div className="absolute right-5 top-10 hidden md:right-6 md:top-20 md:block">
        <Image
          src={"/images/home/highlights/bgb.png"}
          width={281}
          height={74}
          alt="logo"
          className="z-0 h-[1100px] w-full"
        />
      </div>
      <div className="absolute -right-6 top-16 md:right-6 md:top-20 md:hidden">
        <Image
          src={"/images/home/highlights/bgb.png"}
          width={281}
          height={74}
          alt="logo"
          className="z-0 h-auto w-full"
        />
      </div>
      {/*big screen */}
      <div className="hidden flex-col items-center justify-center gap-8 md:flex md:gap-12">
        <div>
          <h1 className="text-center font-playfair text-5xl font-[400] uppercase tracking-[3px] text-[#000] md:text-7xl">
            SIGNATURES FROM OUR MENU
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 md:gap-14">
          <Link className="z-50" href={"/menu"}>
            <motion.img
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              src={"/images/home/highlights/1b.png"}
              width={281}
              height={74}
              alt="logo"
              className="z-50 h-auto w-full"
            />
          </Link>

          <Link className="z-50" href={"/menu"}>
            <motion.img
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              src={"/images/home/highlights/2b.png"}
              width={281}
              height={74}
              alt="logo"
              className="z-50 h-auto w-full"
            />
          </Link>
          <Link className="z-50" href={"/menu"}>
            <motion.img
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              src={"/images/home/highlights/3b.png"}
              width={281}
              height={74}
              alt="logo"
              className="z-50 h-auto w-full"
            />
          </Link>
        </div>
        <motion.div
          className="z-50 flex flex-col items-center justify-center gap-4 md:gap-6"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <p className="z-50 w-full max-w-[400px] text-center font-inter text-sm font-[400] text-[#000] md:text-base">
            Tired of dessert spots that serve the same factory-made sweetg with
            no real flavor or soul? At Antephan, we break the mold with.
            handcrafted Turkish desserts made from authentic recipes, real
            ingredients, and a whole lot of love. Every bite is a journey — not
            just sugar.
          </p>
          <div>
            <Button className="z-50 rounded-none bg-[#079EBC] px-6 py-6 text-center font-poppins text-sm font-[500] uppercase tracking-[1.276px] text-[#FFFAF0] hover:bg-[#1bd9ff] md:px-7 md:py-6">
              <Link href={"/menu"}>VIEW MENU</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      {/*mobile screen */}
      <div className="flex flex-col items-center justify-center gap-8 md:hidden md:gap-12">
        <div>
          <h1 className="text-center font-playfair text-3xl font-[400] uppercase tracking-[3px] text-[#000] md:text-7xl">
            SIGNATURES FROM OUR MENU
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 md:gap-14">
          <Link className="z-50" href={"/menu"}>
            <motion.img
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              src={"/images/home/highlights/1s.png"}
              width={281}
              height={74}
              alt="logo"
              className="z-50 h-auto w-full"
            />
          </Link>
          <Link className="z-50" href={"/menu"}>
            <motion.img
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              src={"/images/home/highlights/2s.png"}
              width={281}
              height={74}
              alt="logo"
              className="z-50 h-auto w-full"
            />
          </Link>

          <Link className="z-50" href={"/menu"}>
            <motion.img
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              src={"/images/home/highlights/3s.png"}
              width={281}
              height={74}
              alt="logo"
              className="z-50 h-auto w-full"
            />
          </Link>
        </div>
        <motion.div
          className="z-50 flex flex-col items-center justify-center gap-4 md:gap-6"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <p className="w-full max-w-[400px] text-center font-inter text-sm font-[400] text-[#000] md:text-base">
            Tired of dessert spots serving the same factory-made sweets with no
            real flavor or soul? At Antephan, we break the mold with handcrafted
            Turkish desserts made from authentic recipes, real ingredients, and
            a whole lot of love. Every bite is a journey — not just a hit of
            sugar.
          </p>
          <div>
            <Button className="z-50 rounded-none bg-[#079EBC] px-6 py-6 text-center font-poppins text-sm font-[500] uppercase tracking-[1.276px] text-[#FFFAF0] hover:bg-[#1bd9ff] md:px-7 md:py-6">
              <Link href={"/menu"}>VIEW MENU</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
