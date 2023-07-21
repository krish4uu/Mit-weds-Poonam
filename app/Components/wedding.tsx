import Image from "next/image";
import FunctionsCard from "./functionCard";
import Carousel from "./carousel";
import { indiaImg, usaImg} from "../images";


export default function WeddingCard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <div className="z-10 p-6 w-full h-auto max-w-5xl items-center justify-between text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center from-zinc-200 p-4 backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/ganesh.svg"
            alt="Ganesh Logo"
            width={50}
            height={20}
            priority
          />
          &nbsp;
          <span className="flex items-center font-semibold">
            ॐ श्री गणेशाय नमः
          </span>
        </div>

        <div className="fixed bottom-0 left-0 flex h-20 w-full items-center justify-center font-bold backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <p className={`text-2xl font-semibold p-2`}>
            Invitation By Mit ♥ Poonam
          </p>
        </div>
      </div>

      <div className="flex w-full max-w-5xl items-center justify-center lg:flex mt-12 p-4">
        <Image
          className="rounded-lg"
          src="/Mit_poonam.png"
          alt="Mit and Poonam image"
          width={800}
          height={800}
          priority
        />
      </div>
      <div className="relative flex ">
        <div className=" w-full max-w-5xl items-center justify-center lg:flex">
          <h1 className={`mb-3 text-4xl font-semibold p-4 text-teal-300`}>
            Happy Moments
          </h1>
        </div>
      </div>
      <Carousel images={indiaImg.img} country="India 🇮🇳" delay={3000}/>
      <Carousel images={usaImg.img} country="USA 🇺🇸" delay={3000}/>
      <FunctionsCard />
    </main>
  );
}
