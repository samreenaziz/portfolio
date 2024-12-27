"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import {sendEmail} from "@/actions/sendEmail"


export default function Contact() {
    const { ref } = useSectionInView("Contact");

    return (
        <motion.section ref={ref} id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{
                opacity:0
            }}
            whileInView={{
                opacity:1
            }}
            transition={{
                duration:3
            }}
            viewport={{
                once:true
            }}>
            <SectionHeading>Contact Me</SectionHeading>
            <p className="text-center -mt-2"> Please contact me directly at{" "} <a className="underline" href="mailto:samreenaziz@amilifedigitalsolutions.com">samreenaziz@amilifedigitalsolutions.com</a>{" "} or through this form:</p>
            <form
                className="mt-10 flex flex-col"
                action={async (formData) => {await sendEmail(formData)}}
            >
                <input type="email" className="h-14 rounded-lg border border-[#581c87]/10 focus:border-[#581c87] focus:border-2 outline-none p-4"  name="senderEmail" required maxLength={500} placeholder="Your email" />
                <textarea className="h-52 my-3 rounded-lg border border-[#581c87]/10 focus:border-[#581c87] focus:border-2 outline-none p-4" name="senderMessage" required placeholder="Your message"/>
                <button type="submit" className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale:110 hover:scale-105 hover:bg-[#581c87] active:scale-115">
                    Submit
                    <FaPaperPlane
                    className="text-xs opacity-70 transition-all
                    group-hover:translate-x-1 group-hover:-translate-y-1"/>{" "}
                </button>
            </form>
        </motion.section>
    )
}

//
