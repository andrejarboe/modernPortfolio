import React from 'react'

type Props = {}

export default function Projects3({ }: Props) {
    const projects = [1, 2, 3, 4, 5]
    return (
        <div className='px-4'>
            <h2>
                Projects3

            </h2>
            <div
                className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
            >
                {projects.map((project) => (
                        <a 
                        className="cursor-pointer group rounded px-8 py-12 shadow hover:bg-primary">
                        <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                          <div className="hidden group-hover:block">
                            <img
                              src="/assets/img/icon-development-white.svg"
                              alt="development icon"
                            />
                          </div>
                          <div className="block group-hover:hidden">
                            <img
                              src="/assets/img/icon-development-black.svg"
                              alt="development icon"
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <h3
                            className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
                          >
                            WEB DEVELOPMENT
                          </h3>
                          <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          </p>
                        </div>
                      </a>
                ))}

            </div>
        </div>
    )
}