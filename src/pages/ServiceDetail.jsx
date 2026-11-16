import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Accordion from '../components/Accordion.jsx'
import ProcessSteps from '../components/ProcessSteps.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTABand from '../components/CTABand.jsx'
import NotFound from './NotFound.jsx'
import { getService, getGroup, byGroup } from '../data/services.js'
import '../styles/Detail.css'

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = getService(slug)
  if (!s) return <NotFound />
  const g = getGroup(s.group)
  const group = byGroup(s.group)
  const i = group.findIndex((x) => x.slug === slug)
  const related = group.filter((x) => x.slug !== slug).slice(0, 3)
  const prev = group[(i - 1 + group.length) % group.length]
  const next = group[(i + 1) % group.length]

  return (
    <>
      <PageHero title={s.title} text={s.sum} tone={g.color}
        crumbs={[{ label: 'Services', to: '/services' }, { label: g.name, to: `/services?group=${g.id}` }, { label: s.title }]} />

      <section className="sec">
        <div className="wrap detail">
          <article className="detail__main">
            <h2>What is included</h2>
            <ul className="checks" style={{ '--tone': g.color }}>
              {s.inc.map((x) => <li key={x}>{x}</li>)}
            </ul>

            <h2>Tools and technologies</h2>
            <div className="tags">{s.tools.map((t) => <span key={t}>{t}</span>)}</div>

            <h2>How we deliver it</h2>
            <ProcessSteps steps={g.steps} />

            <h2>Frequently asked questions</h2>
            <Accordion items={g.faqs} />

            <nav className="pager" aria-label="More services">
              <Link to={`/services/${prev.slug}`}><small>Previous</small>{prev.title}</Link>
              <Link to={`/services/${next.slug}`}><small>Next</small>{next.title}</Link>
            </nav>
          </article>

          <aside className="detail__side">
            <div className="quote">
              <h3>Quick facts</h3>
              <dl>
                <dt>Category</dt><dd>{g.name}</dd>
                <dt>Typical timeline</dt><dd>{s.time}</dd>
                <dt>Best for</dt><dd>{s.who}</dd>
              </dl>
              <Link className="btn btn--solid btn--block" to="/contact">Request a quote</Link>
              <p className="quote__note">Free consultation. Fixed-price quote within one working day.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="sec sec--tint">
        <div className="wrap">
          <div className="sec__head"><h2>Related services</h2></div>
          <div className="sgrid">{related.map((r, i) => <ServiceCard key={r.slug} s={r} i={i} />)}</div>
        </div>
      </section>
      <CTABand title={`Need ${s.title.toLowerCase()}?`} />
    </>
  )
}
