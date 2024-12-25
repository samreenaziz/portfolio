"use client";

import React from 'react'
import SectionHeading from './section-heading'
import {softwareProjectsData, researchData} from '../lib/data'
import Project from '@/components/project';
import SectionDivider from '@/components/section-divider'
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {

    const { ref } = useSectionInView("Projects");

    return (
        <section ref={ref} id="projects" className="flex-col justify-center scroll-mt-28">
            <SectionHeading>Web Development Projects</SectionHeading>
            <div>
                {softwareProjectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))
                }
            </div>
            <SectionDivider/>
            <SectionHeading>Research Projects</SectionHeading>
            <div>
                {researchData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                            <div className = "flex font-medium text-2xl justify-center pb-2 pt-2 sm:pb-4"> Citations & Publications </div>
                            <div className="pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8">
                                <ol className="list-decimal px-8 mb-4">
                                    <li>
                                    Master's of Applied Sciences in Biomedical Engineering Thesis: "Non-Invasive Motion Detection and Classification in NICU Patients using Ballistographic Signals from a Pressure Sensitive Mat", (2022, February), Carleton University
                                    <br></br><a target="_blank" href="https://repository.library.carleton.ca/concern/etds/vh53ww68b" className="flex justify-end font-medium font-[#dbd7fb] hover:text-[#f67075]">Read Here</a>
                                    </li>
                                    <li>
                                        Best Student Paper Award at Medical Measurements and Applications Symposium 2020: S. Aziz, Y. S. Dosso,
                                        S. Nizami, K. Greenwood, J. Harrold and J. R. Green,
                                        "Detection of Neonatal Patient Motion Using a Pressure-Sensitive Mat”, 2020
                                        IEEE International Symposium on Medical Measurements and Applications (MeMeA), Bari, Italy, 2020, pp. 1-6, doi:
                                        10.1109/MeMeA49120.2020.913.147. <br></br><a target="_blank" href="https://dl.acm.org/doi/10.1109/MeMeA49120.2020.9137147" className="flex justify-end font-medium font-[#dbd7fb] hover:text-[#f67075]">Read Here</a>
                                    </li>
                                    <li>
                                        Dosso, Y. S., Aziz, S., Nizami, S., Greenwood, K., Harrold, J., & Green, J. R. (2020, June). Neonatal Face Tracking for Non-
                                        Contact Continuous Patient Monitoring. In 2020 IEEE International Symposium on Medical Measurements and
                                        Applications (MeMeA) (pp. 1-6). IEEE. <br></br><a target="_blank" href="https://dl.acm.org/doi/abs/10.1109/MeMeA49120.2020.9137300" className="flex justify-end font-medium font-[#dbd7fb] hover:text-[#f67075]">Read Here</a>
                                    </li>
                                    <li>
                                        Dosso, Y. S., Aziz, S., Nizami, S., Greenwood, K., Harrold, J., & Green, J. R. (2020, July). Video based neonatal motion detection.
                                        In 2020 42nd Annual International Conference of the IEEE Engineering in Medicine & Biology Society (EMBC) (pp. 6135
                                        6138). IEEE. <br></br><a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/33019371/" className="flex justify-end font-medium font-[#dbd7fb] hover:text-[#f67075]">Read Here</a>
                                    </li>
                                </ol>
                            </div>
                    </React.Fragment>
                ))
                }
            </div>
        </section>
        )
}
