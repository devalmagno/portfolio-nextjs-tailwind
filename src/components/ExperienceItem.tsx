import React from 'react'
import Link from 'next/link';
import { IoTimeOutline } from "react-icons/io5";

export default function ExperienceItem() {
  return (
    <Link 
      href="https://unimontes.br"
      target="_blank"
      className="p-4 bg-dark-300 text-white rounded-xl overflow-hidden shadow-md select-none flex flex-col"
    >
        <p>State University of Montes Claros</p>
        <span className='text-xs text-title-200'>Internship as Junior Fullstack Developer</span>
        <div className='text-xs text-title-200 flex flex-row items-center gap-2'>
            <IoTimeOutline /> 
            <span>2022 - Currently</span>
        </div>
    </Link>
  )
}
