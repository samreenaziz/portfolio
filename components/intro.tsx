"use client";
//client components are still rendered on server; subsequent renders are done on the client side not server

import React, {useEffect} from 'react';
import profileImg from "@/public/profile-image.jpg";
import Image from 'next/image';
import {motion} from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import {FaGithubSquare} from "react-icons/fa";
import { useActiveSectionContext } from '@/context/active-section-context';
import {useSectionInView} from '@/lib/hooks'

export default function Intro() {

    const { ref } = useSectionInView("Home");
    const {activeSection, setActiveSection} = useActiveSectionContext()

    return (
        <section>
            <div ref={ref} id="home" className="flex items-center justify-center sm:pl-10 sm:pr-10 scroll-mt-28">
                <motion.div className="relative"
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}
                    transition={{
                        type:"tween",
                        duration:0.2,
                    }}>
                    <Image src={profileImg} alt="Profile Image"
                        width="192"
                        height="192"
                        quality="95"
                        priority={true}
                        className="h-50 w-50 sm:h-100 sm:w-100 rounded-full
                        object-cover border-[0.35rem] border-white shadow-xl"
                    />
                    <motion.span className="absolute bottom-0 right-0 text-6xl"
                        initial={{opacity:0, scale:0}}
                        animate={{opacity:1, scale:1}}
                        transition={{
                            type:"spring",
                            stiffness:125,
                            delay:0.5,
                        }}>
                    🦄
                    </motion.span>
                </motion.div>


            </div>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "tween", delay: 1.0 }}
                className="mb-10 font-medium px-4 sm:px-9 pt-4 sm:pt-8 text-2xl sm:text-4xl text-center sm:mb:0"
                >
                <span className="font-bold text-purple-900 text-4xl">Hello, I'm Samreen Aziz - {""}</span>{" "}
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        rotate: [0, 10, -10, 10, -10, 10, -10, 5, -5, 0],
                    }}
                    className="font-bold text-[#D81B60] text-4xl "
                    style={{ transformOrigin: "center", display: "inline-block"  }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                    }}
                    >
                    the unicorn
                </motion.span>
                <span className="font-bold text-purple-900 text-4xl">
                {" "}that you have been looking for.<br></br><br></br></span>
            </motion.h1>

            <motion.div className="flex flex-col sm:flex-row justify-center gap-2 px-4 py-2 text-lg font-medium mt-[-3rem]"
                initial={{opacity:0, y:100}}
                animate={{opacity:1, y:0}}
                transition={{
                    delay:0.1,
                }}
                >
                <Link href="#contact"
                    className = "group bg-gray-900 text-white px-7 py-5 flex items-center justify-center gap-2 rounded-full outline-none focus:scale:110 hover:scale-105 hover:bg-gray-950 active:scale-115 transition" onClick={() => {setActiveSection("Contact")}}>
                    Contact me here <BsArrowRight className="group-hover:translate-x-1 transition"/> {" "}
                </Link>
                <a
                    className = "group bg-white justify-center px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale:110 active:scale-115 hover:scale-105 cursor:pointer border border-black/10 transition"
                    href="../public/SamreenAziz_Technical_Resume.pdf"
                    download
                >
                    Download CV {" "}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/> {" "}
                </a>
                <a className="bg-white p-4 justify-center text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
                    href="https://www.linkedin.com/in/samreen-aziz/"
                    target="_blank">
                    <BsLinkedin/> {" "}
                </a>
                <a className="bg-white p-4 justify-center text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
                    href="https://github.com/samreenaziz"
                    target="_blank">
                    <FaGithubSquare/> {" "}
                </a>
            </motion.div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "tween", delay: 1.0 }}
                className="mt-2 font-medium leading-[1.5] sm:p-8 text-3xl text-center sm:mb:0"
                >
                <span className="font-bold"> A neuroscientist turned biomedical engineer, with 5+ years of experience</span> as a technical consultant, software developer, AI solutioneer, and data scientist.
            </motion.p>
        </section>
        )

    }

