import Image from "next/image";
import FunctionsCard from "./functionCard";
import Carousel from "./carousel";
import { usaImg } from "../images";

export default function WeddingCard() {
  const year: number = new Date().getFullYear();
  return (
    <>
      <div className=" flex min-h-screen z-10 flex-col items-center justify-between p-2">
        <div className="flex w-full max-w-5xl items-center justify-center lg:flex mt-12 p-4">
          <Image
            className="rounded-lg"
            src="/mit-2.png"
            alt="Mit and Poonam image"
            width={0}
            height={0}
            priority
            sizes="100vw"
            style={{ width: "50rem", height: "auto" }} // optional
          />
        </div>
        <div className="flex ">
          <div className="w-full max-w-5xl items-center justify-center lg:flex flex-col">
            <h1 className={`lg:text-4xl font-semibold p-2 text-xl backdrop-blur-2xl dark:bg-slate-300/30 rounded-lg border border-transparent`}>
              ॐ श्रीम गम सौभाग्य गणपतये वर्वर्द सर्वजन्म में वषमान्य नमः॥
            </h1>
            {/* <h4 className="font-semibold text-2xl p-2">
              We ask for good fortune and many blessings and wishes for our
              current life and future lives. We bow in Homage to Lord Ganesha
              who blesses us with long lives, health and happiness.
            </h4> */}
          </div>
        </div>
        <Carousel images={usaImg.img} delay={4000} />
        <FunctionsCard />
        <footer className="w-full justify-center flex m-4 pb-4 text-white font-semibold sm:text-inherit">
          Developed by Kashyap @{year}
        </footer>
      </div>
    </>
  );
}
