import Intro from '@/components/intro'
import SectionDivider from '@/components/section-divider'
import About from '@/components/about'
import Projects from '@/components/projects'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-9">
      <Intro />
      <SectionDivider/>
      <About />
      <SectionDivider/>
      <Projects />


    </main>
  )
}
