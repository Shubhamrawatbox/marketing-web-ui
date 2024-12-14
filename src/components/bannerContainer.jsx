import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScrollBanner() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-extrabold text-white dark:text-white">
              Building <span className=" bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">Trust and Hype</span> for Web3 and <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Blockchain{" "}
              </span>
            </h1>
          </>
        }
      >
        <img
          src={"https://stfalcon.com/img/blog3.webp"}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top object-fill"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
