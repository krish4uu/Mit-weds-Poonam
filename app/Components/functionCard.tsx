import Image from "next/image";
import { functionDetail } from "../functionDetail";

export default function FunctionsCard() {
  return (
    <>
      <div className="flex flex-col justify-center place-items-center mt-6">
        <div className="flex ">
          <div className=" w-full max-w-5xl items-center justify-between text-sm lg:flex">
            <h1 className={`mb-3 text-4xl font-semibold p-4 dark:bg-slate-950/30 rounded-3xl sm:bg-transparent`}>Functions</h1>
          </div>
        </div>
        <div className=" grid gap-4 mb-0 md:grid-cols-2 lg:grid-cols-3 sm:text-left">
          {functionDetail.map((item) => (
            <div className="group rounded-3xl border border-transparent px-5 py-4 backdrop-blur-3xl dark:bg-slate-600/30  sm:dark:bg-slate-100/30 transition-colors sm:hover:bg-sky-500 sm:hover:bg-sky-500/75  sm:hover:dark:bg-neutral-800/30">
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {item.name}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <Image
                className="rounded-lg"
                src={item.img}
                alt={item.imgAlt}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "18rem", height: "14rem" }} // optional
              />
              <div className="flex pt-2 text-lg">
                <ul>
                  <li className="flex p-1">
                    <Image
                      className="rounded-lg"
                      src="./calendar-lines.png"
                      alt="Calender image"
                      width={0}
                      height={0}
                      loading="lazy"
                      sizes="100vw"
                      style={{ width: "2rem", height: "auto" }} // optional
                    />
                    <span className="pl-2">{item.date}</span>
                  </li>
                  <li className="flex p-1">
                    <Image
                      className="rounded-lg"
                      src="./clock-three.png"
                      alt="Clock image"
                      width={0}
                      height={0}
                      loading="lazy"
                      sizes="100vw"
                      style={{ width: "2rem", height: "auto" }} // optional
                    />
                    <span className="pl-2">{item.time}</span>
                  </li>
                  <li className="flex p-1">
                    <Image
                      className="rounded-lg"
                      src="./marker-home.png"
                      alt="Address image"
                      width={0}
                      height={0}
                      loading="lazy"
                      sizes="100vw"
                      style={{ width: "2rem", height: "auto" }} // optional
                    />
                    <span className="pl-2">{item.address}</span>
                  </li>
                  <li className="flex p-1">
                    <a href={item.map} target="blank" className="pt-3 flex">
                      <span className="pl-2">Click here To Open Map</span>
                      <Image
                        className="rounded-lg"
                        src="./pin.png"
                        alt="Address image"
                        width={0}
                        height={0}
                        loading="lazy"
                        sizes="100vw"
                        style={{ width: "2rem", height: "auto" }} // optional
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
