import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
            <Image
              src={"/images/home/antephan/1.png"}
              width={281}
              height={74}
              alt="logo"
              className="z-50 h-auto w-full"
            />
            <h4
              className="font-playfair text-lg font-[400] tracking-[1px] text-[#fff] md:text-xl"
              style={{ fontVariant: "small-caps" }}
            >
              Baklava
            </h4>
          </motion.div>
          <motion.div
            className="flex w-[33%] flex-col items-start justify-start gap-4 md:gap-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <Image
              src={"/images/home/antephan/2.png"}
              width={281}
              height={74}
              alt="logo"
              className="z-50 h-auto w-full"
            />
            <h4
              className="font-playfair text-lg font-[400] tracking-[1px] text-[#fff] md:text-xl"
              style={{ fontVariant: "small-caps" }}
            >
              KUNEFE
            </h4>
          </motion.div>
          <motion.div
            className="flex w-[33%] flex-col items-start justify-start gap-4 md:gap-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <Image
              src={"/images/home/antephan/3.png"}
              width={281}
              height={74}
              alt="logo"
              className="z-50 h-auto w-full"
            />
            <h4
              className="font-playfair text-lg font-[400] tracking-[1px] text-[#fff] md:text-xl"
              style={{ fontVariant: "small-caps" }}
            >
              Antephan SPECIALS
            </h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Antephan;
