import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <section className="h-full w-full bg-[#fff] px-3 py-8 md:px-10">
      <div className="flex items-center justify-center pb-8 md:pb-16">
        <h1 className="text-center font-playfair text-4xl font-[400] uppercase tracking-[3px] text-[#000] md:text-7xl">
          ANTEPHAN GALLERY
        </h1>
      </div>
      {/*big screen */}
      <div className="hidden flex-row gap-2 md:flex md:gap-6">
        <div className="flex w-full flex-col gap-2 md:w-[30%] md:gap-6">
          <div className="border border-[#D3A641] p-2">
            <motion.img
              src={"/images/home/gallery/1.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[350px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="border border-[#D3A641] p-2">
            <motion.img
              src={"/images/home/gallery/2.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[350px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 md:w-[40%] md:gap-6">
          <div className="border border-[#D3A641] p-2">
            <motion.img
              src={"/images/home/gallery/3.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[350px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="border border-[#D3A641] p-2">
            <motion.img
              src={"/images/home/gallery/4.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[350px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 md:w-[30%] md:gap-6">
          <div className="border border-[#D3A641] p-2">
            <motion.img
              src={"/images/home/gallery/5.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[200px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="border border-[#D3A641] p-2">
            <motion.img
              src={"/images/home/gallery/6.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[500px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
      {/* mobile screen */}
      <div className="flex flex-row gap-2 md:hidden md:gap-6">
        <div className="flex w-full flex-col gap-2 md:w-[30%] md:gap-6">
          <div className="border border-[#D3A641] p-2">
            <motion.img
              src={"/images/home/gallery/1s.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[190px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="border border-[#D3A641] p-2">
            <motion.img
              src={"/images/home/gallery/2s.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[190px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="border border-[#D3A641] p-2">
            <motion.img
              src={"/images/home/gallery/3s.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[195px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-2 md:w-[30%] md:gap-6">
          <div className="border border-[#D3A641] p-2">
            <motion.img
              src={"/images/home/gallery/4s.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[400px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="border border-[#D3A641] p-2">
            <motion.img
              src={"/images/home/gallery/5s.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[200px] w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
