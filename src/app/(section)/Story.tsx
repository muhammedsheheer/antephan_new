"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Story: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] px-4 pb-12 pt-32 md:px-8 md:pb-24 md:pt-52">
      {/* big screen */}
      <div className="absolute left-2 right-2 top-8 z-40 md:left-10 md:right-10 md:top-16">
        <h1 className="text-center font-playfair text-4xl font-[400] uppercase tracking-[3px] text-[#000] md:text-8xl md:tracking-[5px]">
          DISCOVER THE TASTE <br />
          OF <span className="text-[#079EBC]">TRADITION</span>
        </h1>
      </div>
      <div className="z-50 hidden w-full flex-row items-center justify-center gap-6 md:flex">
        <motion.div
          className="w-full md:w-[20%]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <p className="w-full max-w-[350px] text-center font-inter text-sm font-[300] tracking-[0.36px] text-[#000] md:text-right md:text-base">
            Each creation is a testament to our dedication to quality and our
            love for sharing the sweet flavors of our heritage.Whether you`re
            indulging in our crispy, syrup-soaked baklava or the warm, cheesy
            delight of künefe, every bite offers a taste of tradition and a
            moment of joy.
          </p>
        </motion.div>
        <div className="z-50 w-full md:w-[60%]">
          <motion.img
            src={"/images/home/story/imageb.png"}
            width={160}
            height={160}
            alt="logo"
            className="z-50 h-auto w-full object-cover md:h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
        <motion.div
          className="flex w-full flex-col gap-6 md:w-[20%] md:gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <p className="w-full max-w-[350px] text-center font-inter text-sm font-[300] tracking-[0.36px] text-[#000] md:text-start md:text-base">
            At Antephan Baklava UK, nestled in the heart of Enfield, we bring
            the rich tapestry of Turkish dessert traditions to London. Our
            passion lies in crafting authentic sweets like baklava and künefe,
            using time-honored recipes and the finest ingredients.
          </p>
          <div>
            <Button className="rounded-none bg-[#000] px-6 py-6 text-center font-poppins text-sm font-[500] uppercase tracking-[1.276px] text-[#FFFAF0] hover:bg-[#2d2b2b] md:px-7 md:py-6">
              <Link href={"/menu"}>VIEW MENU</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      {/*mobile screen */}
      <div className="flex flex-col items-center justify-center gap-5 md:hidden">
        <div className="z-50 w-full md:w-[60%]">
          <motion.img
            src={"/images/home/story/imageb.png"}
            width={160}
            height={160}
            alt="logo"
            className="z-50 h-auto w-full object-cover md:h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
        <motion.div
          className="w-full md:w-[20%]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <p className="w-full max-w-[350px] text-center font-inter text-sm font-[300] tracking-[0.36px] text-[#000] md:text-right md:text-base">
            Each creation is a testament to our dedication to quality and our
            love for sharing the sweet flavors of our heritage.Whether you`re
            indulging in our crispy, syrup-soaked baklava or the warm, cheesy
            delight of künefe, every bite offers a taste of tradition and a
            moment of joy.
          </p>
        </motion.div>
        <motion.div
          className="flex w-full flex-col items-center justify-center gap-6 md:w-[20%] md:gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <p className="w-full max-w-[350px] text-center font-inter text-sm font-[300] tracking-[0.36px] text-[#000] md:text-start md:text-base">
            At Antephan Baklava UK, nestled in the heart of Enfield, we bring
            the rich tapestry of Turkish dessert traditions to London. Our
            passion lies in crafting authentic sweets like baklava and künefe,
            using time-honored recipes and the finest ingredients.
          </p>
          <div>
            <Button className="rounded-none bg-[#000] px-6 py-6 text-center font-poppins text-sm font-[500] uppercase tracking-[1.276px] text-[#FFFAF0] hover:bg-[#2d2b2b] md:px-7 md:py-6">
              <Link href={"/menu"}>VIEW MENU</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
