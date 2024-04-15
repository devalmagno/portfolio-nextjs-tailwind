"use client"
import Loading from "@/components/Loading";
import { getProjectById } from "@/utils/getProjectById";
import { IProject } from "@/utils/getProjects";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Project({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<IProject | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleRight() {
    const nextIndex = currentIndex + 1;
    if (nextIndex > (project!.images.length - 1)) setCurrentIndex(0);
    else setCurrentIndex(nextIndex);
  }

  function handleLeft() {
    const previousIndex = currentIndex - 1;
    if (previousIndex < 0) setCurrentIndex(project!.images.length - 1);
    else setCurrentIndex(previousIndex);
  }

  useEffect(() => {
    async function getProject() {
      const project = await getProjectById(params.id);
      setProject(project);
    }

    getProject();
  }, []);

  if (!project)
    return <div className="h-screen"><Loading /></div>;

  return (
    <div className="w-full py-8 flex justify-center">
        <div className="h-[640px] m-auto px-8 relative group">
          <img src={project.images[currentIndex]}
            className="h-full rounded-md bg-center bg-cover duration-500 object-contain"
          />
          <div
            onClick={handleRight}
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          >
            <FaAngleRight />
          </div>
          <div
            onClick={handleLeft}
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          >
            <FaAngleLeft />
          </div>
        </div>
    </div>
  )
}
