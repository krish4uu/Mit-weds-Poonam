
import Image from "next/image";

export default function Functions() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <div className="z-10 p-6 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center from-zinc-200 p-4 backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
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
        </p>

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
        />
      </div>
      <div className="flex flex-col justify-center place-items-center mt-6">
        <div className="relative flex ">
          <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
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
    </main>
  );
}
