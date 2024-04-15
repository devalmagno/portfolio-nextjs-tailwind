import { poppins500, poppins600 } from '@/app/fonts'
import React from 'react'

export default function Hero() {
    return (
        <section className={`h-full px-6 flex flex-col gap-4 items-start justify-center text-title-100 sm:items-center ${poppins600.className}`}>
            <h1 className='text-4xl sm:text-5xl'>Delivering value</h1>
            <h1 className='text-4xl sm:text-5xl'>to your <span className="text-primary-300">business,</span></h1>
            <div className={`flex flex-col bg-dark-200 py-2 px-4 rounded-sm shadow-xl text-title-100 text-xs ${poppins500.className}`}>
                <p className="text-bash-green">
                    devalmagno@DESKTOP-77DEV77
                    <span className='text-bash-purple'>{' '} MINGW64 {' '}</span>
                    <span className='text-bash-yellow'>{' '} ~ {' '}</span>
                </p>
                <p>$ Hello, I'm Lucio, a FullStack developer with 3+ years of experience in React Native, Typescript, Node.js, and Python.</p>
            </div>
            <h1 className='text-4xl sm:text-5xl'><span className="text-primary-300">line of code</span> {''} at a time.</h1>
            <div className='h-16'></div>
        </section>
    )
}
