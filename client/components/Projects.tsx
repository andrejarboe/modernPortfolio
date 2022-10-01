import React from 'react'

type Props = {}

export default function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5]
    return (
        <div className='flex relative overflow-hidden flex-col text-left md:flex-row max-w-full h-screen justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-secondary text-2xl'>Projects</h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                {/* projects */}
                {projects.map((project, i) => (
                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-4 h-screen">
                        <img src="https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=666&h=375&dpr=1" alt="" />
                        <div>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span>
                                    Case study {i + 1} of {projects.length}
                                </span>
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-primary h-[500px] left-0 -skew-y-12"></div>
        </div>
    )
}