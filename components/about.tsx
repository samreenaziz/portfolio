"use client";

import React from 'react';
import {motion} from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from '@/lib/hooks';

export default function About() {

    const { ref } = useSectionInView("About");

    return (
        <motion.section ref = {ref} id="about"  className = "b-28 max-w-[45rem] text-center leading-8 scroll-mt-28" //scroll-marginTop avoids your title being covered when id is selected in some header
            initial={{ opacity: 0, y:100 }}
            animate = {{ opacity: 1, y:0 }}
            transition = {{ delay: 0.175}}
            >
            <SectionHeading>My Story </SectionHeading>
            <p className="mb-3 text-left">
                &emsp;&emsp;After graduating from a <span className="font-medium text-[#D81B60]">Master's of Applied Science in Biomedical Engineering </span> program (2018 - 2022) at Carleton University,
                I worked as a <span className="font-medium text-[#D81B60]">Data Scientist and Technical Consultant at IBM, Aviva Insurance, and Validere Technologies </span> - industries
                ranging from general consulting, insurance, and oil and gas. <span className="font-medium text-[#D81B60]">My passion, has, however been in the digital health space. </span>
            </p>
            <p className="mb-3 text-left">
                &emsp;&emsp;My rewarding graduate thesis involved applying <span className="font-medium text-[#D81B60]">Machine Learning and Data Science with MATLAB and Python </span> to develop a <a className="font-medium text-[#D81B60]" target="_blank" href="https://repository.library.carleton.ca/concern/etds/vh53ww68b">non-invasive motion detection and classificiation model for neonatal patient monitoring 🔗 </a>.
                I was particularly excited about the possibility of integrating this model into a real-time full-stack application for parents and healthcare professionals.
            </p>
            <p className="mb-3 text-left">
                &emsp;&emsp;While completing my <span className="font-medium text-[#D81B60]">Bachelors degree in Neuroscience and Mental Health Studies from the University of Toronto</span>, there was a shortage of mental health resources and education for youth at a time when university/college mental health crises were at an all-time high - I
                put together <span className="font-medium text-[#D81B60]">wireframes of a mental health support and education app, rallying students, the Bayshore Health Sciences and professors into my support system </span>.

            </p>
            <p className="mb-3  text-left">
                &emsp;&emsp;In 2024, I decided to invest in my ambitions and interests, embarking on a <a className="font-medium text-[#D81B60]" target="_blank" href="https://brainstation.io/online/software-engineering-bootcamp">Software Engineering diploma with BrainStation 🔗</a>.
                This program, my professional and graduate experiences encouraged me to work towards my goal of improving the health and social landscape by building lasting solutions that put people first. So, I am building a digital solutions consulting and design firm - <a href="https://www.linkedin.com/company/amilife-digital-solutions" className="font-medium text-[#D81B60] underline">AmiLife Digital Solutions</a>, where I strive to:
            </p>

            <motion.div
                    className="ml-8 pl-8 mt-8 sm:mt-4 border-l-2 border-gray-700" initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
            >
                <ol className="justify-left text-left list-none">
                    {[
                        'Partner with organizations and clients dedicated to improving lives and creating a better world through innovative and impactful digital solutions.',
                        'Design and deliver innovative tools to address real-world challenges in healthcare, insurance, and lifestyle sectors.',
                        'Channel creativity to bring ambitious ideas to life, turning visions into impactful realities (Machine Learning and Generative AI, Access to Information, Data Management and Warehousing, Social Networking for Social Good, Web Development, Digital Consumer Engagement Mapping, Design Thinking, etc.).'
                    ].map((text, index) => (
                        <motion.li
                            key={index}
                            className="font-medium text-l text-[#D81B60] mb-5"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.2,
                                ease: 'easeInOut'
                            }}
                            whileHover={{
                                scale: 1.05,
                                color: '#8e44ad',
                                transition: { duration: 0.3 }
                            }}
                        >
                            {text}
                        </motion.li>
                    ))}
                </ol>
            </motion.div>
            <p className = "font-medium py-4">
                If any of the above sounds interesting to you, I would love to chat more about your vision and how <span className="text-[#D81B60]">AmiLife Digital Solutions</span> can help,
                please reach out below with the contact form, <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2rfKxRXrzp9EDpoW3b_Agl32hdBixf2g2bw6_QAqklRKi85_5dW9fjhp6EJg2TeqO2is2o_cwj" target="_blank" className="underline">book a call</a>, or visit our <a target="_blank" href="https://www.linkedin.com/company/amilife-digital-solutions" className="font-semi-bold underline">LinkedIn</a> page to learn more!
                <br></br><span className = "text-gray-400 font-normal" >Website remains under construction until January 2025</span>
            </p>
        </motion.section>

  )
}

