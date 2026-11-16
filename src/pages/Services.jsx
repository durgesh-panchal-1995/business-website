import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTABand from '../components/CTABand.jsx'
import { groups, services, getGroup } from '../data/services.js'
import '../styles/Services.css'

export default function Services() {
  const [params, setParams] = useSearchParams()
  const active = params.get('group') || 'all'
  const list = active === 'all' ? services : services.filter((s) => s.group === active)
  const g = getGroup(active)

  return (
    <>
      <PageHero title="Our services" text={g ? g.intro : 'WordPress development, digital marketing and ongoing care. Open any service for full details, what is included and how long it takes.'} crumbs={[{ label: 'Services' }]} />
      <section className="sec">
        <div className="wrap">
          <div className="filters" role="tablist">
            <button className={active === 'all' ? 'is-on' : ''} onClick={() => setParams({})}>All ({services.length})</button>
            {groups.map((x) => (
              <button key={x.id} className={active === x.id ? 'is-on' : ''} style={{ '--tone': x.color }} onClick={() => setParams({ group: x.id })}>
                {x.name} ({services.filter((s) => s.group === x.id).length})
              </button>
            ))}
          </div>
          <div className="sgrid" key={active}>{list.map((s, i) => <ServiceCard key={s.slug} s={s} i={i} />)}</div>
        </div>
      </section>
      <CTABand />
    </>
  )
}
