import Image from "next/image";
import { functionDetail } from "../functionDetail";

export default function FunctionsCard() {
  return (
    <>
      <div className="flex flex-col justify-center place-items-center mt-6">
        <div className="flex ">
          <div className=" w-full max-w-5xl items-center justify-between text-sm lg:flex">
            <h1 className={`mb-3 text-4xl font-semibold p-4`}>Functions</h1>
          </div>
        </div>
        <div className="mb-32 grid gap-4 text-center mb-0 md:grid-cols-2 lg:grid-cols-3 lg:text-left">
          {functionDetail.map((item) => (
            <div className="group rounded-lg border border-transparent px-5 py-4 backdrop-blur-2xl dark:bg-slate-300/30 transition-colors hover:bg-sky-500 hover:bg-sky-500/75  hover:dark:bg-neutral-800/30">
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
                loading="lazy"
                sizes="100vw"
                style={{ width: "18.75rem", height: "auto" }} // optional
              />
              <div className="flex justify-center item-center pt-2 text-lg">
                <ul>
                  <li className="flex p-1">
                    <Image
                      className="rounded-lg"
                      src="/calender.png"
                      alt="Calender image"
                      width={0}
                      height={0}
                      loading="lazy"
                      sizes="100vw"
                      style={{ width: "1.25rem", height: "auto" }} // optional
                    />
                    &nbsp;
                    <span>{item.date}</span>
                  </li>
                  <li className="flex p-1">
                    <Image
                      className="rounded-lg"
                      src="/clock1.png"
                      alt="Clock image"
                      width={0}
                      height={0}
                      loading="lazy"
                      sizes="100vw"
                      style={{ width: "1.25rem", height: "auto" }} // optional
                    />
                    &nbsp;
                    <span>{item.time}</span>
                  </li>
                  <li className="flex p-1">
                    <Image
                      className="rounded-lg"
                      src="/place.png"
                      alt="Address image"
                      width={0}
                      height={0}
                      loading="lazy"
                      sizes="100vw"
                      style={{ width: "1.25rem", height: "auto" }} // optional
                    />
                    &nbsp;
                    <span>{item.address}</span>
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
