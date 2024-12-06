import React from "react";

export const TeamCard = ({ name, position, description, image, linkedin }) => {
  return (
    <div className="max-w-xs p-6 bg-neutral-900 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl hover:shadow-indigo-500/50 cursor-pointer">
      <img
        className="rounded-md"
        src={image}
        alt={`${name}`}
      />
      <h2 className="mt-4 text-xl font-semibold text-white">{name}</h2>
      <p className="text-sm text-white">{position}</p>
      <p className="mt-2 text-sm text-white">{description}</p>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center mt-4 text-indigo-500 hover:underline"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.762-2.239-5-5-5zm-11 20h-3v-10h3v10zm-1.5-11.268c-.967 0-1.75-.783-1.75-1.75s.783-1.75 1.75-1.75 1.75.783 1.75 1.75-.783 1.75-1.75 1.75zm13.5 11.268h-3v-5.68c0-1.353-.027-3.096-1.889-3.096-1.89 0-2.179 1.475-2.179 2.996v5.78h-3v-10h2.882v1.365h.041c.402-.762 1.384-1.565 2.848-1.565 3.045 0 3.608 2.005 3.608 4.615v5.585z" />
        </svg>
        LinkedIn
      </a>
    </div>
  );
};
