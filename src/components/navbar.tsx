import Link from "next/link";
import { useState } from "react";

const HamburgerButton = (props: { isButtonClicked?: boolean }) => {
  return (
    <button className="group relative">
      <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded bg-red-900 shadow-md">
        <div
          className={`flex h-[20px] w-[20px] flex-col justify-between overflow-hidden transition-all duration-200 ${
            props.isButtonClicked ? "-translate-y-1.5 -rotate-90" : ""
          }`}
        >
          <div
            className={`h-[2px] bg-white transition-all duration-200 ${
              props.isButtonClicked
                ? "w-2/3 origin-left rotate-[42deg]"
                : "w-7 rotate-0"
            }`}
          ></div>
          <div
            className={`h-[2px] w-7 bg-white transition-all duration-200 ${
              props.isButtonClicked ? "hidden" : "block"
            }`}
          ></div>
          <div
            className={`h-[2px] bg-white transition-all duration-200 ${
              props.isButtonClicked
                ? "w-2/3 origin-left -rotate-[42deg]"
                : "w-7 rotate-0"
            }`}
          ></div>
        </div>
      </div>
    </button>
  );
};

export default function Navbar() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  return (
    <nav className="sticky top-0 w-full bg-red-700 text-white">
      <div className="flex h-14 md:hidden">
        <div className="grow self-center">
          <Link href="/" className="flex w-fit px-2">
            <h1 className="text-lg">Vörös Tölgy</h1>
          </Link>
        </div>
        <div
          className="px-2"
          onClick={() => setIsButtonClicked(!isButtonClicked)}
        >
          <HamburgerButton isButtonClicked={isButtonClicked} />
        </div>
      </div>
      <div
        className={`flex flex-col justify-center transition-all duration-200 md:h-12 md:flex-row md:gap-6 ${
          isButtonClicked ? "" : "hidden md:flex"
        }`}
      >
        <Link href="/" className="self-center p-2 md:p-0">
          Rólunk
        </Link>
        <Link href="/etlap" className="self-center p-2 md:p-0">
          Étlap
        </Link>
        <Link href="/galeria" className="self-center p-2 md:p-0">
          Galéria
        </Link>
        <Link href="/elerhetosegek" className="self-center p-2 md:p-0">
          Elérhetőségek
        </Link>
      </div>
    </nav>
  );
}
