import Image from "next/image";

export default function Functions() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center from-zinc-200 pb-4 pt-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
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

        <div className="fixed bottom-0 left-0 flex h-20 w-full items-end justify-center font-bold backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <p className={`mb-3 text-1xl font-semibold pb-4`}>
            Invitation By Mit ♥ Poonam
          </p>
        </div>
      </div>

      <div className="flex w-full max-w-5xl items-center justify-center lg:flex mt-5 pt-5">
        <Image
          src="/Mit_poonam.png"
          alt="Mit and Poonam image"
          width={800}
          height={800}
        />
      </div>
      <div className="flex flex-col justify-center place-items-center">
        <div className="relative flex ">
          <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
            <h1 className={`mb-3 text-4xl font-semibold mt-10 pt-5`}>
              Functions
            </h1>
          </div>
        </div>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Mehendi{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Come to our Mehendi.
            </p>
          </div>
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Sangeet{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Come to our Sangeet
            </p>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Haldi{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Come to our Haldi
            </p>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Weeding{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Come to our Weeding
            </p>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Reception{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Come to our Reception
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
