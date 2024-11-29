"use client";
//client components are still rendered on server; subsequent renders are done on the client side not server

import React from 'react'
import profileImg from "@/public/profile-image.jpg"
import Image from 'next/image'
import {motion} from "framer-motion"

export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
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
                    className="h-24 w-24 sm:h-100 sm:w-100 rounded-full
                    object-cover border-[0.35rem] border-white shadow-xl"
                />
                <motion.span className="absolute bottom-0 right-0 text-4xl"
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
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween", delay: 1.0 }}
            className="p-6 sm:p-9"
            >
            <span className="font-bold">Hi! I'm Samreen - {""}</span>the{" "}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    rotate: [0, 10, -10, 10, -10, 10, -10, 5, -5, 0],
                }}
                className="font-bold text-purple-800 text-xl"
                style={{ transformOrigin: "center", display: "inline-block"  }}
                transition={{
                    duration: 2, // Adjust duration
                    ease: "easeInOut", // Smoother transitions
                    times: [0, 0.2, 0.5, 0.8, 1], // Adjust timing for keyframes
                  }}
                >
                unicorn
            </motion.span>
            <span className="font-bold">
                {" "}you've been looking for.
            </span> I am a <span className="">seasoned technical consultant, software developer, AI solutioneer, and data scientist</span> with over <span className="font-bold"> 8 years of experience</span>. My ambition? Build solutions that stick.
        </motion.p>
    </section>
  )
}

