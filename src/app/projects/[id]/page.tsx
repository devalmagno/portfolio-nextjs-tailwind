"use client"
import Loading from "@/components/Loading";
import { getProjectById } from "@/utils/getProjectById";
import { IProject } from "@/utils/getProjects";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaAngleUp, FaAngleDown } from "react-icons/fa";

export default function Project({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<IProject | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageExtended, setImageExtended] = useState(false);

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
    <div className="w-full py-8 px-4">
      <div className="bg-dark-300 rounded-xl flex flex-col overflow-hidden">
        <div className="w-full m-auto relative group flex justify-center" style={imageExtended ? {} : { height: 320 }}>
          <img src={project.images[currentIndex]}
            className={`w-full h-full bg-center bg-cover duration-500 ${imageExtended ? 'object-contain' : 'object-cover'} sm:object-contain`}
          />
          {imageExtended && (
            <>
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
            </>
          )}
          <div
            onClick={() => setImageExtended(state => !state)}
            className="absolute top-[90%] -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer sm:hidden"
          >
            {imageExtended ? <FaAngleUp /> : <FaAngleDown />}
          </div>
        </div>
        <div className="text-white">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  )
}
