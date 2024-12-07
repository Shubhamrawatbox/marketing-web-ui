import { projects } from "../data/teamdata";
import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center text-4xl mt-20 text-white">
          Defining who we are, what we do, and why we do it.
        </div>
        <HoverEffect items={projects} />
      </div>
    </>
  );
}
