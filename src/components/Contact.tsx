import { poppins600, roboto400 } from "@/app/fonts";
import React from "react";

export default function Contact() {
  return (
    <div className="max-w-96">
      <h1 className={`text-white font-semibold text-2xl ${poppins600.className}`}>
        Innovating Experiences,
      </h1>
      <h1 className={`text-primary-300 font-semibold text-2xl ${poppins600.className}`}>
        Crafting Solutions.
      </h1>
      <p className="text-title-100">
        As a versatile solo developer, I specialize in crafting unique websites,
        applications, and Web3 solutions.
      </p>
      <div>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your e-mail"
            className="rounded-md h-12 w-64 px-4 text-[14px]"
          />
          <button>Contact Me</button>
        </div>
        <span>I will contact you as soon as possible.</span>
      </div>
    </div>
  );
}
