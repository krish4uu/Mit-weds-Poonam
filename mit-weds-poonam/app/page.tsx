import Functions from "./Components/Functions/page";
import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* <div>
        <Image
          className="flex bg-fixed -z-10"
          src="/weeding-bg.png"
          alt="Weeding background image"
          fill={true}
        />
      </div> */}

      <Functions />
    </>
  );
}
