"use client";

import React, {useRef} from 'react'
import type {StaticImageData } from 'next/image';
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion"

type ProjectProps = {
    title: string;
    description: string;
    tags: readonly string[];
    link:string;
    industries: readonly string[];
    images: readonly string[] | readonly StaticImageData[];
  };


export default function Project({title, description, tags, link, industries, images} : ProjectProps){
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.10 1"] // start animation at the top of the section, end when 33% past the element of interest
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (
        <motion.div
            ref={ref}
            style= {{
                scale:scaleProgress,
                opacity:opacityProgress,
            }}
            className="mb-3 sm:mb-8 last:mb-6 flex justify-center">
            <section className="group rounded-lg  bg-gray-100 max-w-[42rem] border h-auto border-black/5 overflow-hidden sm:pr-8 sm:relative even:pl-8 hover:bg-gray-200 transition">
                <article className = "flex flex-col sm:h-full group-even:ml-[18rem] pt-4 pb-7 py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[55%]">
                    <a href={link} target="_blank" className="text-2xl font-semibold"> {title} </a>
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
                <ul className="flex-col justify-between sm:absolute sm:top-8 sm:-right-40">
                    {images.map((image, index) => (
                    <li key={index} className="mb-2">
                        <Image
                        className="sm:w-[28.25rem] rounded-lg shadow-2xl
                                transition
                                sm:group-hover:scale-[1.1]
                                sm:group-hover:-translate-x-2
                                group-hover:translate-y-3
                                sm:group-hover:rotate-2

                                sm:group-even:group-hover:translate-x-2
                                sm:group-even:group-hover:translate-y-3
                                sm:group-even:group-hover:rotate-2

                                sm:group-even:right-[initial]
                                sm:group-even:-left-40"
                        src={image}
                        alt={`Image of the project ${title}`}
                        quality={95}
                        />
                    </li>
                    ))}
                </ul>
                ) : (
                <Image
                    className="align-center sm:absolute sm:top-8 sm:-right-40 sm:w-[28.25rem] rounded-lg shadow-2xl
                    transition
                    sm:group-hover:scale-[1.1]
                    group-hover:translate-y-3

                    sm:group-hover:-translate-x-3
                    sm:group-hover:translate-y-3
                    sm:group-hover:rotate-2

                    sm:group-even:group-hover:translate-x-3
                    sm:group-even:group-hover:translate-y-3
                    sm:group-even:group-hover:rotate-2

                    sm:group-even:right-[initial]
                    sm:group-even:-left-40"
                    src={images[0]}
                    alt={`Image of the project ${title}`}
                    quality={95}
                />
                )}

            </section>
        </motion.div>
    )
}
