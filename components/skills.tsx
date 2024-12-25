"use client";

import React, {useState} from 'react';
import SectionHeading from "@/components/section-heading";
import { softwareSkills, mldsSkills, businessSkills} from "@/lib/data"
import { useSectionInView } from '@/lib/hooks';
import {motion} from "framer-motion";
import {BsArrowRight, BsArrowLeft} from "react-icons/bs";


const fadeInAnimationVariants = {
    initial: {
        opacity:0,
        y: 100
    },
    animate: (index:number) => ({
        opacity:1,
        y:0,
        transition: {
            delay:0.05 * index,
        },
    }),
}

export default function SkillsCarousel() {

    const { ref } = useSectionInView("Skills");


    const [currentIndex, setCurrentIndex] = useState(0)

    const content = [
        {
            title: "I can build websites and apps...",
            skills: softwareSkills,
        },
        {
            title: "...wrangle data and build wicked machine learning algorithms...",
            skills: mldsSkills,
        },
        {
            title:"...and be a superstar consultant to take your business to the next level!",
            skills: businessSkills,
        }
    ];

    const handlePrevious = () => {
        setCurrentIndex((prevIndex => (prevIndex === 0 ? content.length - 1 : prevIndex - 1)))
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex => (prevIndex === content.length -1 ? 0 : prevIndex + 1)))
    };



  return (
    <section id="skills" ref={ref} className = "mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
        <SectionHeading>
            <motion.span
                    initial={{ opacity: 0, rotate:0 }}
                    animate={{
                        opacity: 1,
                        rotate: [0, 10, -10, 10, -10, 10, -10, 5, -5, 0],
                    }}
                    className="font-bold text-[#D81B60]"
                    style={{ transformOrigin: "center", display: "inline-block"  }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                    }}
                    >
                    Unicorn
                </motion.span>
                <span>&nbsp;Skills</span>
        </SectionHeading>


        <div className="w-full flex flex-row items-center">

            <div className="p-4 justify-center ">
                <div className = "flex flex-row justify-center items-center mb-5 sm:mb-8">
                    <button onClick={handlePrevious} className="py-2 px-2 bg-gray-200 rounded-md hover:bg-[#dbd7fb] h-10 mr-5 ">
                        <BsArrowLeft className="text-xl"/>
                    </button>
                        <h1 className="font-medium text-2xl">{content[currentIndex].title}</h1>
                    <button onClick={handleNext} className=" py-2 px-2 bg-gray-200 rounded-md hover:bg-[#dbd7fb] h-10 ml-5">
                        <BsArrowRight className="text-xl"/>
                    </button>
                </div>
                <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mt-4">
                    {content[currentIndex].skills.map((skill, index) => (
                        <motion.li
                            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 hover:bg-[#dbd7fb]"
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport = {{
                                once:false,
                            }}
                            custom={index}
                            >
                            {skill}
                        </motion.li>
                ))}
                </ul>
            </div>

        </div>
    </section>
  )
}

