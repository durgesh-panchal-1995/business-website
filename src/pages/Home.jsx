import HomeHero from '../components/home/HomeHero.jsx'
import GroupCards from '../components/home/GroupCards.jsx'
import Featured from '../components/home/Featured.jsx'
import ProjectsShowcase from '../components/home/ProjectsShowcase.jsx'
import WhyUs from '../components/home/WhyUs.jsx'
import ProcessSteps from '../components/ProcessSteps.jsx'
import CTABand from '../components/CTABand.jsx'
import { groups } from '../data/services.js'

export default function Home() {
  return (
    <>
      <HomeHero />
      <GroupCards />
      <Featured />
      <ProjectsShowcase />
      <WhyUs />
      <section className="sec sec--tint">
        <div className="wrap">
          <div className="sec__head"><h2>How we work</h2><p>The same simple path for every website project.</p></div>
          <ProcessSteps steps={groups[0].steps} />
        </div>
      </section>
      <CTABand />
    </>
  )
}
