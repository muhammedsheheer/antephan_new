import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Reserve: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] pt-12 md:pt-24">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {/* big scren */}
      <div className="relative hidden h-full w-full flex-col items-center justify-center gap-10 md:flex md:gap-16">
        <div className="absolute bottom-60 right-0">
          <Image
            src={"/images/home/reserve/image2b.png"}
            width={281}
            height={74}
            alt="image"
            className="z-40 h-[270px] w-full"
          />
        </div>
        <div className="absolute left-12 top-40">
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="w-full max-w-[400px] font-poppins text-sm font-[300] tracking-[1.28px] text-[#fff] md:text-base">
              Experience the sweet side of tradition book your table today and
              indulge in freshly made baklava and warm künefe straight from our
              kitchen. <br /> Walk-ins are welcome, but a reservation ensures
              your seat at our dessert haven.
            </p>
            <div>
              <Button className="rounded-none bg-[#fff] px-6 py-6 text-center font-poppins text-sm font-[500] uppercase tracking-[1.276px] text-[#000] hover:bg-[#dcd5d5] md:px-7 md:py-6">
                <Link href={"/table-booking"}>Reserve</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute -left-6 bottom-0 right-0 z-50 overflow-hidden">
          <h1 className="font-playfair text-7xl font-[400] tracking-[8px] text-[#fff] md:text-[300px] md:leading-[250px] md:tracking-[18px]">
            ANTEPHAN
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-center font-playfair text-4xl font-[400] uppercase tracking-[3px] text-[#fff] md:text-7xl">
            RESERVE YOUR TABLE
          </h1>
        </div>
        <div>
          <motion.img
            src={"/images/home/reserve/image1b.png"}
            width={281}
            height={74}
            alt="image"
            className="z-40 h-[600px] w-full"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </div>
      {/* mobile screen */}
      <div className="relative flex flex-col gap-10 md:hidden">
        <div className="absolute bottom-16 right-0">
          <Image
            src={"/images/home/reserve/image2s.png"}
            width={281}
            height={74}
            alt="image"
            className="z-40 h-[80px] w-full"
          />
        </div>
        <div className="absolute -left-6 bottom-0 right-0 z-50 overflow-hidden">
          <h1 className="font-playfair text-7xl font-[400] tracking-[8px] text-[#fff] md:text-[300px] md:leading-[250px] md:tracking-[18px]">
            ANTEPHAN
          </h1>
        </div>
        <div>
          <h1 className="text-center font-playfair text-4xl font-[400] uppercase tracking-[3px] text-[#fff] md:text-7xl">
            RESERVE YOUR TABLE
          </h1>
        </div>
        <div className="flex flex-col gap-4 px-4 md:gap-6">
          <p className="w-full max-w-[400px] font-poppins text-sm font-[300] tracking-[1.28px] text-[#fff] md:text-base">
            Experience the sweet side of tradition book your table today and
            indulge in freshly made baklava and warm künefe straight from our
            kitchen. <br /> Walk-ins are welcome, but a reservation ensures your
            seat at our dessert haven.
          </p>
          <div>
            <Button className="rounded-none bg-[#fff] px-6 py-6 text-center font-poppins text-sm font-[500] uppercase tracking-[1.276px] text-[#000] hover:bg-[#dcd5d5] md:px-7 md:py-6">
              <Link href={"/table-booking"}>Reserve</Link>
            </Button>
          </div>
        </div>
        <div className="px-28">
          <motion.img
            src={"/images/home/reserve/image1s.png"}
            width={281}
            height={74}
            alt="image"
            className="z-40 h-auto w-full"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Reserve;
