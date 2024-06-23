import React from "react";
import Hero from "@/components/Hero";
import Projects from "./projects/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function page() {
  return (
    <div className="h-screen overflow-x-hidden">
      <Hero />
        <Projects />
    </div>
  );
}
