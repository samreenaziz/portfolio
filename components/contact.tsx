"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import {sendEmail} from "@/actions/sendEmail"
import SubmitBtn from './submit-btn';
import { toast } from 'react-toastify';


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
                action={async (formData) => {const {data, error} = await sendEmail(formData);
                    console.log(data)

                    if (error) {
                        toast.error(error)
                        console.log(error)
                        return;
                    }

                    toast.success('Your email was sent! I will get back to you within 24 hours.')
                }}
            >
                <input type="email" className="h-14 rounded-lg border border-[#581c87]/10 focus:border-[#581c87] focus:border-2 outline-none p-4"  name="senderEmail" required maxLength={500} placeholder="Your email" />
                <textarea className="h-52 my-3 rounded-lg border border-[#581c87]/10 focus:border-[#581c87] focus:border-2 outline-none p-4" name="senderMessage" required maxLength={5000} placeholder="Your message"/>
                <SubmitBtn/>
            </form>
        </motion.section>
    )
}

// can spend time styling this section later with react-email
