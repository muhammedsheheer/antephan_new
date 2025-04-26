"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";
import { motion } from "framer-motion";

const Reviews = () => {
  const { reviews } = useRestaurant();

  const headingVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative flex h-full w-full justify-center bg-[#fff] pb-10 md:bg-[#079EBC]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-t-full py-12 md:py-44 md:pt-24">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <motion.h6
              variants={headingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              className="pb-6 text-center font-marcellus text-4xl font-[400] uppercase text-[#000] md:text-6xl md:text-[#fff]"
            >
              Customer Reviews
            </motion.h6>
          </div>
        </div>
        <div className="relative hidden w-full items-center justify-center md:flex">
          <div className="absolute -top-6 z-50">
            <Image
              src={"/images/home/highlights/Frame.png"}
              width={281}
              height={74}
              alt="logo"
              className="z-50 w-12"
            />
          </div>
          {reviews && (
            <Carousel className="w-full px-0 md:px-60">
              <CarouselContent className="flex w-full justify-center gap-4">
                {reviews
                  .filter((review) => review.rating >= 4)
                  .map((review, index) => (
                    <CarouselItem
                      key={index}
                      className="flex h-[500px] w-full basis-full flex-col items-center justify-center gap-6 rounded-none bg-[url('/images/home/hero/bgr.png')] bg-center py-6 md:py-12"
                    >
                      <div className="flex flex-col gap-3 bg-transparent px-6 pb-6">
                        <div className="flex w-full justify-center">
                          {Array.from({ length: review.rating }).map(
                            (_, index) => (
                              <Icons.star
                                key={index}
                                className="text-[#F5CA71]"
                              />
                            ),
                          )}
                        </div>
                        <div className="flex flex-col gap-4 pt-6">
                          <p className="line-clamp-6 w-full max-w-[350px] text-center font-poppins text-sm font-[500] uppercase tracking-[2px] text-[#000] md:px-4 lg:leading-[120%]">
                            {review.text.text}
                          </p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4 pt-14">
                          <Image
                            src={review.authorAttribution.photoUri}
                            alt="profileimage"
                            width={80}
                            height={80}
                            className="w-14 rounded-full object-cover"
                          />
                          <p className="line-clamp-6 w-full max-w-[350px] text-center font-poppins text-sm font-[500] uppercase tracking-[2px] text-[#000] md:px-4 lg:leading-[120%]">
                            {review.authorAttribution.displayName}
                          </p>
                          <p className="line-clamp-6 w-full max-w-[350px] text-center font-poppins text-xs font-[500] uppercase tracking-[2px] text-[#000] md:px-4 lg:leading-[120%]">
                            {review.relativePublishTimeDescription}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 pb-8 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#194129] text-[#194129] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#194129] text-[#194129] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
        {/* mobile screen */}
        <div className="relative flex w-full items-center justify-center md:hidden">
          <div className="absolute top-2 z-50">
            <Image
              src={"/images/home/highlights/Frame.png"}
              width={281}
              height={74}
              alt="logo"
              className="z-50 w-12"
            />
          </div>
          {reviews && (
            <Carousel className="w-full px-0 md:px-60">
              <CarouselContent className="ml-2 flex w-full justify-center gap-0">
                {reviews
                  .filter((review) => review.rating >= 4)
                  .map((review, index) => (
                    <CarouselItem
                      key={index}
                      className="flex h-[500px] w-full basis-full flex-col items-center justify-center gap-6 rounded-none py-6 md:py-12"
                    >
                      <div className="flex flex-col gap-3 bg-[#079EBC] px-6 py-10">
                        <div className="flex w-full justify-center">
                          {Array.from({ length: review.rating }).map(
                            (_, index) => (
                              <Icons.star key={index} className="text-[#fff]" />
                            ),
                          )}
                        </div>
                        <div className="flex flex-col gap-4 pt-6">
                          <p className="line-clamp-6 w-full max-w-[350px] text-center font-poppins text-sm font-[500] uppercase tracking-[2px] text-[#fff] md:px-4 lg:leading-[120%]">
                            {review.text.text}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-4 pt-2">
                        <Image
                          src={review.authorAttribution.photoUri}
                          alt="profileimage"
                          width={80}
                          height={80}
                          className="w-14 rounded-full object-cover"
                        />
                        <p className="line-clamp-6 w-full max-w-[350px] text-center font-poppins text-sm font-[500] uppercase tracking-[2px] text-[#000] md:px-4 lg:leading-[120%]">
                          {review.authorAttribution.displayName}
                        </p>
                        <p className="line-clamp-6 w-full max-w-[350px] text-center font-poppins text-xs font-[500] uppercase tracking-[2px] text-[#000] md:px-4 lg:leading-[120%]">
                          {review.relativePublishTimeDescription}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 pb-8 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#194129] text-[#194129] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#194129] text-[#194129] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
