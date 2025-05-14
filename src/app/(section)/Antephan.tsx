import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Antephan: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#079EBC] px-4 py-12 md:px-20 md:py-24">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="flex flex-col gap-8 md:gap-20">
        <div>
          <h1 className="text-center font-playfair text-4xl font-[400] uppercase tracking-[3px] text-[#fff] md:text-7xl">
            Antephan SPECIALS
          </h1>
        </div>
        <div className="flex w-full flex-row gap-4 md:gap-8">
          <motion.div
            className="flex w-[33%] flex-col items-start justify-start gap-4 md:gap-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <Link href={"/menu"} className="z-50 h-auto w-full">
              <Image
                src={"/images/home/antephan/4.jpg"}
                width={281}
                height={74}
                alt="logo"
                className="z-50 h-[150px] w-full md:h-[350px]"
              />
            </Link>

            <h4
              className="font-playfair text-lg font-[400] tracking-[1px] text-[#fff] md:text-2xl"
              style={{ fontVariant: "small-caps" }}
            >
              Cake
            </h4>
          </motion.div>
          <motion.div
            className="flex w-[33%] flex-col items-start justify-start gap-4 md:gap-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <Link className="z-50 h-[150px] w-full md:h-[350px]" href={"/menu"}>
              <Image
                src={"/images/home/antephan/2.jpg"}
                width={281}
                height={74}
                alt="logo"
                className="z-50 h-[150px] w-full md:h-[350px]"
              />
            </Link>

            <h4
              className="font-playfair text-lg font-[400] tracking-[1px] text-[#fff] md:text-2xl"
              style={{ fontVariant: "small-caps" }}
            >
              Cookie
            </h4>
          </motion.div>
          <motion.div
            className="flex w-[33%] flex-col items-start justify-start gap-4 md:gap-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <Link className="z-50 h-[150px] w-full md:h-[350px]" href={"/menu"}>
              <Image
                src={"/images/home/antephan/3.jpg"}
                width={281}
                height={74}
                alt="logo"
                className="z-50 h-[150px] w-full md:h-[350px]"
              />
            </Link>

            <h4
              className="font-playfair text-lg font-[400] tracking-[1px] text-[#fff] md:text-2xl"
              style={{ fontVariant: "small-caps" }}
            >
              Macarons
            </h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Antephan;
