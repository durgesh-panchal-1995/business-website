import { Link } from 'react-router-dom'
import { projects } from '../../data/projects.js'
import ProjectCard from '../ProjectCard.jsx'
import Reveal from '../Reveal.jsx'

export default function ProjectsShowcase() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal className="sec__head sec__head--row">
          <div><h2>Recent projects</h2><p>A look at the kind of websites we build. Open any project for the full case study and a live demo.</p></div>
          <Link to="/projects" className="btn btn--line">All projects</Link>
        </Reveal>
        <div className="pgrid">{projects.slice(0, 3).map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}</div>
      </div>
    </section>
  )
}
