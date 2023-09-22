import Image from "next/image";
import FunctionsCard from "./functionCard";
import Carousel from "./carousel";
import { usaImg } from "../images";

export default function WeddingCard() {
  const year: number = new Date().getFullYear();
  return (
    <>
      <div className="fixed z-50 left-0 top-0 p-2 content-between flex justify-center from-zinc-200  backdrop-blur-xl dark:bg-zinc-800/30 dark:from-inherit static w-full lg:bg-gray-200 lg:dark:bg-zinc-800/30">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/ganesh.svg"
          alt="Ganesh Logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "1.875rem", height: "auto" }} // optional
        />
        &nbsp;
        <p className="flex items-center font-semibold text-white">
          ॐ श्री गणेशाय नमः
        </p>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-2">
        <div className="flex w-full max-w-5xl items-center justify-center lg:flex mt-12 p-4">
          <Image
            className="rounded-lg"
            src="/Mit_poonam.webp"
            alt="Mit and Poonam image"
            width={0}
            height={0}
            loading="lazy"
            sizes="100vw"
            style={{ width: "50rem", height: "auto" }} // optional
          />
        </div>
        <div className="flex ">
          <div className="w-full max-w-5xl items-center justify-center lg:flex">
            <h1 className={`text-4xl font-semibold p-2`}>Happy Moments</h1>
          </div>
        </div>
        <Carousel images={usaImg.img} delay={4000} />
        <FunctionsCard />
        <footer className="w-full justify-center flex mt-3 p-1">
          Developed by Kashyap @{year}
        </footer>
      </main>
    </>
  );
}
