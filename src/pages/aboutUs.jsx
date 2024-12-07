import React from "react";
import { TeamCard } from "../components/teamCard";
import { CardHoverEffect } from "../components/cards";
import { team } from "../data/teamdata";

const AboutUs = () => {
  return (
    <>
      <CardHoverEffect />
      <div className=" min-h-screen flex flex-col items-center p-6">
        <div className="text-center text-4xl my-4 text-white">Team Members</div>
        <div className=" my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
