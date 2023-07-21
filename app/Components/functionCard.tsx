import Image from "next/image";

export default function FunctionsCard() {
  return (
    <>
      <div className="flex flex-col justify-center place-items-center mt-6">
        <div className="relative flex ">
          <div className=" w-full max-w-5xl items-center justify-between text-sm lg:flex">
            <h1 className={`mb-3 text-4xl font-semibold p-4 text-teal-300`}>
              Functions
            </h1>
          </div>
        </div>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-sky-500 hover:bg-sky-500/75  hover:dark:bg-neutral-800/30">
            <h2 className={`mb-3 text-2xl font-semibold text-teal-200`}>
              Mehendi{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <Image
              className="rounded-lg"
              src="/mahendi.jpeg"
              alt="Mahendi image"
              width={300}
              height={300}
              loading="lazy"
            />
            <div className="flex justify-center item-center pt-2 text-lg">
              <ul>
                <li className="flex p-1">
                  <Image
                    className="rounded-lg"
                    src="/calender.png"
                    alt="Calender image"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                  &nbsp;
                  <span>This is date</span>
                </li>
                <li className="flex p-1 justify-center">
                  <span>This is Time</span>
                </li>
                <li className="flex p-1">
                  <Image
                    className="rounded-lg"
                    src="/place.png"
                    alt="Address image"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                  &nbsp;
                  <span>This is date</span>
                </li>

                <li className="flex p-1 justify-center">
                  <span>This is dress code</span>
                </li>
              </ul>
            </div>
            {/* <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Come to our Mehendi.
            </p> */}
          </div>
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-sky-500 hover:bg-sky-500/75  hover:dark:bg-neutral-800/30">
            <h2 className={`mb-3 text-2xl font-semibold text-teal-200`}>
              Sangeet{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <Image
              className="rounded-lg"
              src="/sangeet.jpeg"
              alt="Sangeet image"
              width={300}
              height={300}
            />
            <div className="flex justify-center item-center pt-2 text-lg ">
              <ul>
                <li className="flex p-1">
                  <Image
                    className="rounded-lg"
                    src="/calender.png"
                    alt="Calender image"
                    width={20}
                    height={20}
                  />
                  &nbsp;
                  <span>This is date</span>
                </li>
                <li className="flex p-1 justify-center">
                  <span>This is Time</span>
                </li>
                <li className="flex p-1">
                  <Image
                    className="rounded-lg"
                    src="/place.png"
                    alt="Address image"
                    width={20}
                    height={20}
                  />
                  &nbsp;
                  <span>This is date</span>
                </li>

                <li className="flex p-1 justify-center">
                  <span>This is dress code</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-sky-500 hover:bg-sky-500/75  hover:dark:bg-neutral-800/30">
            <h2 className={`mb-3 text-2xl font-semibold text-teal-200`}>
              Haldi{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <Image
              className="rounded-lg"
              src="/haldi.jpeg"
              alt="Haldi image"
              width={300}
              height={300}
            />
            <div className="flex justify-center item-center pt-2 text-lg ">
              <ul>
                <li className="flex p-1">
                  <Image
                    className="rounded-lg"
                    src="/calender.png"
                    alt="Calender image"
                    width={20}
                    height={20}
                  />
                  &nbsp;
                  <span>This is date</span>
                </li>
                <li className="flex p-1 justify-center">
                  <span>This is Time</span>
                </li>
                <li className="flex p-1">
                  <Image
                    className="rounded-lg"
                    src="/place.png"
                    alt="Address image"
                    width={20}
                    height={20}
                  />
                  &nbsp;
                  <span>This is date</span>
                </li>

                <li className="flex p-1 justify-center">
                  <span>This is dress code</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-sky-500 hover:bg-sky-500/75  hover:dark:bg-neutral-800/30">
            <h2 className={`mb-3 text-2xl font-semibold text-teal-200`}>
              Weeding{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <Image
              className="rounded-lg"
              src="/weeding.jpeg"
              alt="Weeding image"
              width={300}
              height={300}
            />
            <div className="flex justify-center item-center pt-2 text-lg ">
              <ul>
                <li className="flex p-1">
                  <Image
                    className="rounded-lg"
                    src="/calender.png"
                    alt="Calender image"
                    width={20}
                    height={20}
                  />
                  &nbsp;
                  <span>This is date</span>
                </li>
                <li className="flex p-1 justify-center">
                  <span>This is Time</span>
                </li>
                <li className="flex p-1">
                  <Image
                    className="rounded-lg"
                    src="/place.png"
                    alt="Address image"
                    width={20}
                    height={20}
                  />
                  &nbsp;
                  <span>This is date</span>
                </li>

                <li className="flex p-1 justify-center">
                  <span>This is dress code</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-sky-500 hover:bg-sky-500/75  hover:dark:bg-neutral-800/30">
            <h2 className={`mb-3 text-2xl font-semibold text-teal-200`}>
              Reception{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <Image
              className="rounded-lg"
              src="/reception.jpeg"
              alt="Reception image"
              width={300}
              height={300}
            />
            <div className="flex justify-center item-center pt-2 text-lg ">
              <ul>
                <li className="flex p-1">
                  <Image
                    className="rounded-lg"
                    src="/calender.png"
                    alt="Calender image"
                    width={20}
                    height={20}
                  />
                  &nbsp;
                  <span>This is date</span>
                </li>
                <li className="flex p-1 justify-center">
                  <span>This is Time</span>
                </li>
                <li className="flex p-1">
                  <Image
                    className="rounded-lg"
                    src="/place.png"
                    alt="Address image"
                    width={20}
                    height={20}
                  />
                  &nbsp;
                  <span>This is date</span>
                </li>
                <li className="flex p-1 justify-center">
                  <span>This is dress code</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
