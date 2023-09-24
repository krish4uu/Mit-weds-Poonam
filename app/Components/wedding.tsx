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
          <div className="w-full max-w-5xl items-center justify-center lg:flex">
            <h1 className={`text-4xl font-semibold p-2`}>Happy Moments</h1>
          </div>
        </div>
        <Carousel images={usaImg.img} delay={4000} />
        <FunctionsCard />
        <footer className="w-full justify-center flex mt-3 p-1">
          Developed by Kashyap @{year}
        </footer>
      </div>
    </>
  );
}
