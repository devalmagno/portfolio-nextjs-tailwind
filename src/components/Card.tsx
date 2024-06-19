import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaApple, FaAndroid, FaChrome, FaMobile } from "react-icons/fa";

import { IProject } from "@/utils/getProjects";

interface Props {
  project: IProject;
}

export default function Card({ project }: Props) {
  return (
    <Link
      href={`projects/${project.id}`}
      className="w-80 h bg-dark-300 text-white rounded-xl overflow-hidden shadow-md select-none cursor-pointer hover:scale-105 hover:shadow-2xl transition duration-300"
    >
      <div className="max-h-64 overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="object-cover"
        />
      </div>
      <div className="py-5 px-9 flex flex-col gap-4">
        <p className="font-bold text-xl">{project.title}</p>
        <div className="max-h-44 overflow-hidden">
          <p className="font-semibold">About</p>
          <span className="text-title-100 text-xs">{project.description}</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {project.skillsUsed.map((e) => (
            <div
              className="bg-gray-400 w-max px-2 py-1 text-xs rounded-md shadow-md text-gray-100"
              key={e}
            >
              {e}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-dark-400 py-5 flex items-center justify-center gap-6 text-xl text-icon-100">
        {project.platforms.map((e) => {
          if (e === "Android") return <FaAndroid key={e} />;
          if (e === "Ios") return <FaApple key={e} />;
          if (e === "Web") return <FaChrome key={e} />;
          if (e === "Mobile") return <FaMobile key={e} />;
        })}
      </div>
    </Link>
  );
}
