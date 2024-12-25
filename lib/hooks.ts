import { useActiveSectionContext } from "@/context/active-section-context"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type {SectionName} from "./types"


export function useSectionInView(sectionName :SectionName) {
    const {ref, inView} = useInView();
    const {setActiveSection} = useActiveSectionContext()

    useEffect (() => {
        if(inView) {
            setActiveSection(sectionName)
        }
    }, [inView, setActiveSection, sectionName]);
    return {
        ref,
    }
}
