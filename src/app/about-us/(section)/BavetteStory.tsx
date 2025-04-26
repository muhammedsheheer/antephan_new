"use client";
import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#fff] p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#fff]">
        <h2 className="text-center font-marcellus text-4xl text-[#079EBC] md:left-[15%] md:text-8xl">
          The Antephan
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#fff] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/3.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="max-w-[500px] text-center font-marcellus text-4xl text-[#079EBC] md:text-start md:text-7xl">
              From Passion
              <br />
              to Perfection{" "}
            </h1>
            <p className="max-w-[450px] text-center font-playfair font-light leading-[160%] text-[#079EBC] md:text-start">
              What began as a vision — a quest to create deeper connections
              through food — has blossomed into Antephan, a place where flavors
              and souls beautifully intertwine. Rooted in timeless wisdom, our
              journey is about more than preparing meals; it is about crafting
              experiences that nourish both the heart and spirit.
              <br />
              From humble beginnings to a sanctuary for those who seek meaning
              in every bite, our devotion to craftsmanship, warmth, and
              authenticity remains steadfast. Every ingredient is thoughtfully
              chosen, every dish lovingly prepared, and each flavor carries the
              poetry of tradition and the spirit of togetherness.
              <br />
              At Antephan, we don`t just serve food — we offer moments of
              reflection, a taste of harmony, and a celebration of life`s
              endless beauty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
