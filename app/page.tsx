import Intro from '@/components/intro'
import SectionDivider from '@/components/section-divider'
import About from '@/components/about'
import Projects from '@/components/projects'
import SkillsCarousel from '@/components/skills'
import Experience from '@/components/experience'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-9">
      <Intro />
      <SectionDivider/>
      <About />
      <SectionDivider/>
      <Projects />
      <SectionDivider/>
      <SkillsCarousel />
      <SectionDivider/>
      <Experience/>
      <SectionDivider/>
      <Contact/>



    </main>
  )
}
