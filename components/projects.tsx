import React from 'react'
import SectionHeading from './section-heading'
import {softwareProjectsData, researchData} from '../lib/data'
import type {StaticImageData } from 'next/image';
import Image from "next/image";

export default function Projects() {
  return (
    <section>
        <SectionHeading>General Projects</SectionHeading>
        <div>
            {softwareProjectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project} />
                </React.Fragment>
            ))
            }
        </div>
        <SectionHeading>Research & Publications</SectionHeading>
        <div>
            {researchData.map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project} />
                </React.Fragment>
            ))
            }
        </div>
    </section>
  )
}

type ProjectProps = {
    title: string;
    description: string;
    tags: readonly string[];
    industries: readonly string[];
    images: readonly string[] | readonly StaticImageData[];
  };

function Project({title, description, tags, industries, images} : ProjectProps) {
    return (
        <section className="group bg-gray-100 max-w-[42rem] mb-3 sm:mb-8 border h-auto border-black/5 overflow-hidden sm:pr-8 relative last:mb-0 even:pl-8 hover:bg-gray-200 transition">
            <article className = "flex flex-col h-full group-even:ml-[18rem] pt-4 pb-7 py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[55%]">
                <h3 className="text-2xl font-semibold"> {title} </h3>
                <p className="mt-2 leading-relaxed"> {description} </p>
                <ul className ="flex flex-wrap mt-4 gap-2">
                    {tags.map((tag, index) => (
                        <li
                        className = "flex bg-purple-300/[0.70] px-3 py-1 text-[0.70rem] uppercase tracking-wider text-black font-semibold rounded-full"
                        key={index}>{tag}</li>
                    ))}
                </ul>
                <ul className ="flex flex-wrap h-auto mt-4 gap-2">
                    {industries.map((industry, index) => (
                        <li
                        className = "flex bg-orange-300/[0.70] px-3 py-1 text-[0.70rem] uppercase tracking-wider text-black font-semibold rounded-full"
                        key={index}>{industry}</li>
                    ))}
                </ul>
            </article>
            {images.length > 1 ? (
            <ul className="flex-col justify-between absolute top-8 -right-40">
                {images.map((image, index) => (
                <li key={index} className="mb-2">
                    <Image
                    className="w-[28.25rem] rounded-lg shadow-2xl transition
                            group-hover:scale-[1.1]
                            group-hover:-translate-x-3
                            group-hover:translate-y-3
                            group-hover:rotate-2

                            group-even:group-hover:translate-x-3
                            group-even:group-hover:translate-y-3
                            group-even:group-hover:rotate-2

                            group-even:right-[initial]
                            group-even:-left-40"
                    src={image}
                    alt={`Image of the project ${title}`}
                    quality={95}
                    />
                </li>
                ))}
            </ul>
            ) : (
            <Image
                className="absolute top-8 -right-40 w-[28.25rem] rounded-lg shadow-2xl
                transition
                group-hover:scale-[1.1]
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:rotate-2

                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2

                group-even:right-[initial]
                group-even:-left-40"
                src={images[0]}
                alt={`Image of the project ${title}`}
                quality={95}
            />
            )}

        </section>
    )
}
