"use client";
import React from 'react';
import {links} from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[999] relative">
        <motion.div className = "flex fixed flex-grow top-0 left-1/2 h-[5.5rem] sm:h-[3.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.20] backdrop-blur-[0.50rem] sm:top-6 sm:w-[46rem] sm:rounded-full dark:bg-gray-950, dark:border-black/40"
        initial={{ y:-100, x:"-50%", opacity:0}}
        animate= {{ y:0, x:"-50%" ,opacity:1}}
        ></motion.div>

        <nav className="flex items-center justify-center fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
            <ul className="flex w-[22rem] justify-center items-center flex-wrap gap-y-1 px-0 sm:px-5 pt-9 sm:pt-0 text-[0.9rem] sm:text-[1rem] font-medium text-grey-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                {
                    links.map(link =>(
                        <motion.li key={link.hash} className="h-3/4 flex items-center justify-center"
                        initial={{y: -100, opacity:1}}
                        animate={{y:0, opacity:1}}>
                            <Link className="flex w-full items-center justify-center px-3 py-3 hover:text-blue-900 cursor-pointer hover:bg-gray-100 rounded-none hover:rounded-full" href={link.hash}>
                                {link.name}
                            </Link>
                        </motion.li>
                    ))
                }
            </ul>
        </nav>
    </header>
  )
}

