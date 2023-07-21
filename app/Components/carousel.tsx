"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */

export type weddingImgType = {
  images: { id: number; src: string }[];
  country: string;
  delay?: number;
};

export default function Carousel({
  images,
  country,
  delay = 4000,
}: weddingImgType) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

//   useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setCurrentSlide((prevIndex) =>
//           prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         ),

//       delay
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [currentSlide]);
  return (
    <>
      <div className=" relative w-full max-w-5xl items-center justify-center p-2">
        <AiOutlineLeft
          onClick={handlePrevSlide}
          className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
        />
        <div className="w-full h-[45vh] md:h-[60vh] lg:h-[80vh] flex overflow-hidden relative m-auto">
          <Swipe
            onSwipeLeft={handleNextSlide}
            onSwipeRight={handlePrevSlide}
            className="relative w-full h-full"
          >
            {images.map((image: any, index: number) => {
              if (index === currentSlide) {
                return (
                  <Image
                    key={image.id}
                    src={image.src}
                    alt="Wedding Images"
                    fill={true}
                    style={{ objectFit: "contain" }}
                    placeholder="blur"
                    blurDataURL={image.src}
                  />
                );
              }
            })}
          </Swipe>
        </div>
        <AiOutlineRight
          onClick={handleNextSlide}
          className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
        />
        <section className="flex -mt-8 lg:mt-4">
          <div className="rounded-md w-full flex justify-center p-1 backdrop-blur-2xl dark:bg-cyan-400/30 lg:mx-12 md:mx-8">
            <h3
              className={`"text-2xl font-semibold font-serif md:text-3xl lg:text-5xl"`}
            >
              {country}
            </h3>
          </div>
        </section>
      </div>
    </>
  );
}
