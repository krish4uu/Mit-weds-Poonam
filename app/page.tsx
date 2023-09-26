import WeddingCard from "./Components/wedding";
import Image from "next/image";
export default function Home() {
  return (
    <>
    <div className="bg"></div>
    <div className="fixed z-50 left-0 top-0 p-2 content-between flex justify-center from-zinc-200  backdrop-blur-xl dark:bg-zinc-800/30 dark:from-inherit static w-full lg:bg-gray-200 lg:dark:bg-zinc-800/30">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="./ganesh.svg"
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
    <div className="content">
    <WeddingCard />
    </div>

    </>
  );
}
