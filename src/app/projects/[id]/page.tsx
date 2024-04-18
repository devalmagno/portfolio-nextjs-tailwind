"use client"
import { poppins600 } from "@/app/fonts";
import Loading from "@/components/Loading";
import { getProjectById } from "@/utils/getProjectById";
import { IProject } from "@/utils/getProjects";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaAngleUp, FaAngleDown } from "react-icons/fa";
import { FaApple, FaAndroid, FaChrome, FaMobile, FaCode } from "react-icons/fa";

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
      <div className="bg-dark-300 rounded-xl flex flex-col overflow-hidden shadow-md">
        <div className={`w-full m-auto relative group flex justify-center sm:max-h-[500px] sm:h-auto ${imageExtended ? "" : "max-h-80 overflow-hidden"}`}>
          <img src={project.images[currentIndex]}
            className={`z-10 bg-center bg-cover duration-500 ${imageExtended ? 'object-contain' : 'object-cover'} sm:object-contain`}
          />
          <>
            <div
              onClick={handleRight} className={`hidden sm:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ${imageExtended ? "group-hover:block" : ""}`} > <FaAngleRight /> </div>
            <div
              onClick={handleLeft}
              className={`hidden sm:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ${imageExtended ? "group-hover:block" : ""}`}
            >
              <FaAngleLeft />
            </div>
          </>
          <div
            onClick={() => setImageExtended(state => !state)}
            className={`absolute top-[90%] -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer sm:hidden ${imageExtended ? "top-10" : ""}`}
          >
            {imageExtended ? <FaAngleUp /> : <FaAngleDown />}
          </div>
        </div>
        <div className="text-white px-8 py-4 flex flex-col">
          <h1 className={`text-xl ${poppins600.className}`}>{project.title}</h1>
          <a href={project.source} target="_blank" className="flex gap-2 items-center text-indigo-600">
            <FaCode /> Code available here
          </a>
          <strong>About</strong>
          <p className="text-title-100">{project.description}</p>
          <strong>Skills used</strong>
          <div className='flex gap-2 flex-wrap'>
            {project.skillsUsed.map(e => (
              <div key={e} className='bg-gray-400 w-max px-2 py-1 text-xs rounded-md shadow-md text-gray-100'>
                {e}
              </div>
            ))}
          </div>
        </div>
        <div className='bg-dark-400 py-5 flex items-center justify-center gap-6 text-xl text-icon-100'>
          {project.platforms.map(e => {
            if (e === "Android") return <FaAndroid key={e} />;
            if (e === "Ios") return <FaApple key={e}/>;
            if (e === "Web") return <FaChrome key={e}/>;
            if (e === "Mobile") return <FaMobile key={e}/>;
          })}
        </div>
      </div>
    </div>
  )
}
