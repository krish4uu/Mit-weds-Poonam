import Image from "next/image";
import FunctionsCard from "./functionCard";
import Carousel from "./carousel";
import { usaImg } from "../images";
import CountdownTimer from "./countdownTimer";
import { functionDetail } from "../functionDetail";

export default function WeddingCard() {
  const year: number = new Date().getFullYear();
  const weddingObj = functionDetail.find((obj) => obj.id === 5);
  const targetDateTime = weddingObj?.countdownTime;
  // const eventName = weddingObj?.name

  return (
    <>
      <div className=" flex min-h-screen z-10 flex-col items-center justify-between p-2">
        <div className="flex w-full sm:max-w-5xl items-center justify-center lg:flex mt-12 pt-4 pb-4">
          <Image
            className="rounded-lg"
            src="./mit-poonam.webp"
            alt="Mit and Poonam image"
            width={0}
            height={0}
            priority
            sizes="100vw"
            style={{ width: "55rem", height: "auto" }} // optional
          />
        </div>
        <div className="flex flex-col justify-center item-center text-3xl sm:text-4xl p-4 w-full pl-6 md:w-fit font-semibold  dark:bg-slate-950/30 rounded-3xl sm:bg-transparent">
          <CountdownTimer
            targetDateTime={targetDateTime}
            event="Wedding"
          />
        </div>

        <Carousel images={usaImg.img} delay={2000} />
        <FunctionsCard />
        <footer className="w-full justify-center flex m-4 p-3 text-white text-xl font-semibold sm:text-inherit backdrop-blur-sm dark:bg-slate-900/30 rounded-xl sm:bg-transparent">
          Developed by Kashyap @{year}
        </footer>
      </div>
    </>
  );
}
