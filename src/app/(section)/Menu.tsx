// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { motion } from "framer-motion";

// const menuData = {
//   food: [
//     {
//       name: "Beef Burger Meal",
//       price: 32,
//     },
//     {
//       name: "Roasted Lamb Rump",
//       price: 25,
//     },
//     {
//       name: "Pan Seared Sea Bass",
//       price: 38,
//     },
//     {
//       name: "King Prawns and Lobster",
//       price: 38,
//     },
//     {
//       name: "Citrus Cured Salmon",
//       price: 41,
//     },
//   ],
//   drinks: [
//     {
//       name: "Pan Seared Scallops",
//       price: 29,
//     },
//     {
//       name: "Baked Camembert",
//       price: 25,
//     },
//     {
//       name: "Braised Ox Cheek Ravioli",
//       price: 23,
//     },
//     {
//       name: "Corn Fed Chicken",
//       price: 17,
//     },
//     {
//       name: "Nduja Pork Chicken Terrine",
//       price: 41,
//     },
//   ],
// };

// const Menu: React.FC = () => {
//   return (
//     <section className="relative h-full w-full bg-[#fff] px-4 py-12 md:px-24 md:py-20 2xl:px-40">
//       <div className="relative z-40 flex h-full w-full flex-col items-center gap-4">
//         <div className="flex flex-col items-center justify-center gap-1 md:pb-8">
//           <div className="flex flex-col items-center justify-center gap-2">
//             <motion.h6
//               className="text-center font-playfair text-4xl font-[400] uppercase text-[#000] md:text-5xl md:tracking-[3px]"
//               initial={{ y: -50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               viewport={{ once: false, amount: 0.5 }}
//               transition={{ duration: 1 }}
//             >
//               From our menu
//             </motion.h6>
//           </div>
//         </div>

//         <div className="mt-6 grid w-full gap-8 md:grid-cols-2 md:gap-20 2xl:gap-40">
//           {/* Food Items */}
//           <motion.div
//             className="flex flex-col gap-6 md:gap-14"
//             initial={{ x: -50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             viewport={{ once: false, amount: 0.5 }}
//             transition={{ duration: 1 }}
//           >
//             {menuData.food.map((item, index) => (
//               <div
//                 key={`food-item-${index}`}
//                 className="flex w-full flex-row items-center gap-4"
//               >
//                 {/* Left Content */}
//                 <div className="flex flex-col md:w-[488px]">
//                   <p className="font-inter text-base font-[600] uppercase text-[#000] md:text-lg md:tracking-[3px]">
//                     {item.name}
//                   </p>
//                 </div>

//                 {/* Spacer with Lines */}
//                 <div className="flex flex-1 items-center">
//                   <div className="flex w-full items-center gap-2">
//                     <div className="flex-1">
//                       <div className="h-[1px] w-full bg-[#715B3E]" />
//                       <div className="mt-1 h-[1px] w-full bg-[#715B3E]" />
//                     </div>
//                     {/* Price */}
//                     <p className="whitespace-nowrap font-inter text-lg font-medium uppercase tracking-[0.57px] text-[#000]">
//                       £{item.price}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>

//           {/* Drink Items */}
//           <motion.div
//             className="flex flex-col gap-6 md:gap-14"
//             initial={{ x: 50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             viewport={{ once: false, amount: 0.5 }}
//             transition={{ duration: 1 }}
//           >
//             {menuData.drinks.map((item, index) => (
//               <div
//                 key={`food-item-${index}`}
//                 className="flex w-full flex-row items-center gap-4"
//               >
//                 {/* Left Content */}
//                 <div className="flex flex-col md:w-[488px]">
//                   <p className="font-inter text-base font-[600] uppercase text-[#000] md:text-lg md:tracking-[3px]">
//                     {item.name}
//                   </p>
//                 </div>

//                 {/* Spacer with Lines */}
//                 <div className="flex flex-1 items-center">
//                   <div className="flex w-full items-center gap-2">
//                     <div className="flex-1">
//                       <div className="h-[1px] w-full bg-[#715B3E]" />
//                       <div className="mt-1 h-[1px] w-full bg-[#715B3E]" />
//                     </div>
//                     {/* Price */}
//                     <p className="whitespace-nowrap font-inter text-lg font-medium uppercase tracking-[0.57px] text-[#000]">
//                       £{item.price}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         <div>
//           <Link href={"/menu"}>
//             <Button className="relative z-40 mt-10 flex items-center justify-center gap-3 rounded-none bg-[#000] px-7 py-7 uppercase text-white hover:bg-[#2d2b2b]">
//               View Menu
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Menu;

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const menuData = {
  food: [
    { name: "Beef Burger Meal", price: 32 },
    { name: "Roasted Lamb Rump", price: 25 },
    { name: "Pan Seared Sea Bass", price: 38 },
    { name: "King Prawns and Lobster", price: 38 },
    { name: "Citrus Cured Salmon", price: 41 },
  ],
  drinks: [
    { name: "Pan Seared Scallops", price: 29 },
    { name: "Baked Camembert", price: 25 },
    { name: "Braised Ox Cheek Ravioli", price: 23 },
    { name: "Corn Fed Chicken", price: 17 },
    { name: "Nduja Pork Chicken Terrine", price: 41 },
  ],
};

const Menu: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] px-4 py-12 md:px-24 md:py-20 2xl:px-40">
      <div className="absolute inset-0 flex items-center justify-center md:mr-28">
        <Image
          src={"/images/home/highlights/bgb.png"}
          width={281}
          height={74}
          alt="logo"
          className="z-0 h-[400px] w-[400px] md:h-[700px] md:w-full"
        />
      </div>
      <div className="relative z-40 flex h-full w-full flex-col items-center gap-4">
        <div className="flex flex-col items-center justify-center gap-1 md:pb-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <motion.h6
              className="text-center font-playfair text-4xl font-[400] uppercase text-[#000] md:text-5xl md:tracking-[3px]"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1 }}
            >
              From our menu
            </motion.h6>
          </div>
        </div>

        <div className="mt-6 grid w-full gap-8 md:grid-cols-2 md:gap-20 2xl:gap-40">
          {/* Food Items */}
          <motion.div
            className="flex flex-col gap-6 md:gap-14"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            {menuData.food.map((item, index) => (
              <div
                key={`food-item-${index}`}
                className="flex w-full flex-row items-center gap-4"
              >
                {/* Left Content */}
                <div className="flex flex-shrink-0 flex-col">
                  <p className="font-inter text-base font-[600] uppercase text-[#000] md:text-lg md:tracking-[3px]">
                    {item.name}
                  </p>
                </div>

                {/* Spacer with Lines */}
                <div className="flex flex-1 items-center">
                  <div className="flex w-full items-center gap-2">
                    <div className="flex-1">
                      <div className="h-[1px] w-full bg-[#715B3E]" />
                      <div className="mt-1 h-[1px] w-full bg-[#715B3E]" />
                    </div>
                    {/* Price */}
                    <p className="whitespace-nowrap font-inter text-lg font-medium uppercase tracking-[0.57px] text-[#000]">
                      £{item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Drink Items */}
          <motion.div
            className="flex flex-col gap-6 md:gap-14"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            {menuData.drinks.map((item, index) => (
              <div
                key={`drink-item-${index}`}
                className="flex w-full flex-row items-center gap-4"
              >
                {/* Left Content */}
                <div className="flex flex-shrink-0 flex-col">
                  <p className="font-inter text-base font-[600] uppercase text-[#000] md:text-lg md:tracking-[3px]">
                    {item.name}
                  </p>
                </div>

                {/* Spacer with Lines */}
                <div className="flex flex-1 items-center">
                  <div className="flex w-full items-center gap-2">
                    <div className="flex-1">
                      <div className="h-[1px] w-full bg-[#715B3E]" />
                      <div className="mt-1 h-[1px] w-full bg-[#715B3E]" />
                    </div>
                    {/* Price */}
                    <p className="whitespace-nowrap font-inter text-lg font-medium uppercase tracking-[0.57px] text-[#000]">
                      £{item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div>
          <Link href={"/menu"}>
            <Button className="relative z-40 mt-10 flex items-center justify-center gap-3 rounded-none bg-[#000] px-7 py-7 uppercase text-white hover:bg-[#2d2b2b]">
              View Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
