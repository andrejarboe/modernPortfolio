import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { Project } from '../typings';

type Props = {
    projects: Project[]
}

export default function Projects2({ projects }: Props) {
    const oldProjects = [
        {
            title: "Boost your conversion rate",
            href: "#",
            category: { name: "Java", href: "#" },
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
            date: "Mar 16, 2020",
            datetime: "2020-03-16",
            imageUrl:
                "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
            readingTime: "6 min",
            author: {
                name: "Roel Aufderehar",
                href: "#",
                imageUrl:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
        },
        {
            title: "How to use search engine optimization to drive sales",
            href: "#",
            category: { name: "C++", href: "#" },
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
            date: "Mar 10, 2020",
            datetime: "2020-03-10",
            imageUrl:
                "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
            readingTime: "4 min",
            author: {
                name: "Brenna Goyette",
                href: "#",
                imageUrl:
                    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
        },
        {
            title: "Apple Watch app email",
            href: "#",
            category: { name: "HTML Email", href: "#" },
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
            date: "Feb 12, 2020",
            datetime: "2020-02-12",
            imageUrl:
                "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
            readingTime: "11 min",
            author: {
                name: "Daniela Metz",
                href: "#",
                imageUrl:
                    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
        },
        {
            title: "Apple Watch app email",
            href: "#",
            category: { name: "HTML Email", href: "#" },
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
            date: "Feb 12, 2020",
            datetime: "2020-02-12",
            imageUrl:
                "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
            readingTime: "11 min",
            author: {
                name: "Daniela Metz",
                href: "#",
                imageUrl:
                    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
        },
        {
            title: "How to use search engine optimization to drive sales",
            href: "#",
            category: { name: "C++", href: "#" },
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
            date: "Mar 10, 2020",
            datetime: "2020-03-10",
            imageUrl:
                "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
            readingTime: "4 min",
            author: {
                name: "Brenna Goyette",
                href: "#",
                imageUrl:
                    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
        },
        {
            title: "How to use search engine optimization to drive sales",
            href: "#",
            category: { name: "C++", href: "#" },
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
            date: "Mar 10, 2020",
            datetime: "2020-03-10",
            imageUrl:
                "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
            readingTime: "4 min",
            author: {
                name: "Brenna Goyette",
                href: "#",
                imageUrl:
                    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
        },
    ];

    return (
        <div className='flex flex-col max-w-7xl mx-auto px-4'>
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                My Projects
            </h2>
            <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2  md:pt-12 lg:grid-cols-3">
                {projects.map((project) => (
                    <a
                        key={project.title}
                        // href={project.href}
                        className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                    >
                        <div className="flex-shrink-0">
                            <img
                                className="h-48 w-full object-cover"
                                // src={project.imageUrl}
                                src={project.image.asset._ref}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-primary">
                                    <a 
                                        // href={project.category.href} 
                                        className="hover:underline">
                                        {/* {project.category.name} */}
                                        {project.technologies[0].title}
                                    </a>
                                </p>
                                <a 
                                    // href={project.href} 
                                    className="mt-2 block">
                                    <p className="text-xl font-semibold text-gray-900">
                                        {project.title}
                                    </p>
                                    <p className="mt-3 text-base text-gray-500">
                                        {project.summary}
                                    </p>
                                </a>
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="">
                                    <div className="flex space-x-1 text-sm text-gray-500">
                                        {/* <time dateTime={project.datetime}>{project.date}</time> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">

                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <a
                        href="#"
                        className="focus:outline-none rounded py-3 px-4 text-secondary border border-secondary flex justify-center items-center text-base hover:bg-gray-200 bg-transparent"
                    >
                        View All
                    </a>
                </div>
            </div>
        </div>
    )
}