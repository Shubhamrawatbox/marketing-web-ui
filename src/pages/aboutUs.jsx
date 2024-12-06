import React from "react";
import { TeamCard } from "../components/teamCard";
import { CardHoverEffect } from "../components/cards";

const team = [
  {
    name: "Sarah Chen",
    position: "Product Manager",
    description:
      "With a track record spanning over 15 years in online marketing, entrepreneurship, and innovation.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStigF_j4Q8MMsrmH-brsLXpUfXS26wBqGHMw&s",
    linkedin: "#",
  },
  {
    name: "Yana Demidovich",
    position: "CEO",
    description:
      "With a track record spanning over 15 years in online marketing, entrepreneurship, and innovation.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStigF_j4Q8MMsrmH-brsLXpUfXS26wBqGHMw&s",
    linkedin: "#",
  },
  {
    name: "Vlad Pivneev",
    position: "CMO",
    description:
      "With a track record spanning over 15 years in online marketing, entrepreneurship, and innovation.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStigF_j4Q8MMsrmH-brsLXpUfXS26wBqGHMw&s",
    linkedin: "#",
  },
];

const AboutUs = () => {
  return (
    <>
    <CardHoverEffect/>
      <div className=" min-h-screen flex flex-col items-center p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
