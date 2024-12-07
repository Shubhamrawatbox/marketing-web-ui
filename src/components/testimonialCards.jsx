import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials } from "../data/homepageData";

export function TestimonialCards() {
  return (
    <>
      <div className="h-[40rem] rounded-md flex flex-col antialiase dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="text-center text-4xl my-4 text-white">Testimonials</div>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
}
