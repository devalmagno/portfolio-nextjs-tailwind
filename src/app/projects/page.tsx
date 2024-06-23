import Card from '@/components/Card';
import { getProjects } from '@/utils/getProjects';
import { Metadata } from 'next';
import React from 'react'

export const revalidate = 14400;

export const metadata: Metadata = {
  title: "Projects",
}

export default async function Projects() {
  const projectList = await getProjects();

  return (
    <div className='p-6 mb-12 sm:py-12 sm:px-12 flex flex-col gap-4'>
      <h1 className="text-title-100 font-semibold text-xl">My recent work</h1>
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        {projectList.map(project => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
