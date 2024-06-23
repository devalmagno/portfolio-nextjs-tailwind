import { poppins500, poppins600 } from "@/app/fonts";
import React from "react";
import ExperienceItem from "./ExperienceItem";

export default function Hero() {
  return (
    <section
      className={`px-6 mb-8 mt-20 flex flex-col gap-4 items-start justify-center text-title-100 sm:items-center ${poppins600.className}`}
    >
      <h1 className="text-4xl sm:text-5xl">Lucio Magno</h1>
      <h1 className="text-2xl sm:text-3xl">{"¯\\_(ツ)_/¯"}</h1>
      <div
        className={`flex flex-col bg-dark-300 py-2 px-4 rounded-sm shadow-xl text-title-100 text-xs ${poppins500.className}`}
      >
        <p className="text-bash-green">
          devalmagno@DESKTOP-77DEV77
          <span className="text-bash-purple"> MINGW64 </span>
          <span className="text-bash-yellow"> ~ </span>
        </p>
        <p className="max-w-[640px]">
          $ --with{" "}
          {
            '"over 2 years of professional experience in full-stack development, I am seeking an opportunity to tackle new challenges."'
          }
        </p>
      </div>
      <h1 className="text-4xl sm:text-3xl">
        <span className="text-primary-300">Professional</span>
        {""} Experience
      </h1>
      <ExperienceItem />
    </section>
  );
}
