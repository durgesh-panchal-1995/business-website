import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { site } from '../data/site.js'
import { groups, byGroup } from '../data/services.js'
import '../styles/Contact.css'

export default function Contact() {
  const [params] = useSearchParams()
  const [sent, setSent] = useState(false)
  const [f, setF] = useState({ name: '', email: '', phone: '', service: params.get('service') || 'Not sure yet', msg: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  // Opens the visitor's email app. Swap for Formspree, EmailJS or your own API when ready.
  const submit = (e) => {
    e.preventDefault()
    const body = `Name: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nService: ${f.service}\n\n${f.msg}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Enquiry: ' + f.service)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <PageHero title="Get a free quote" text="Tell us about your project. We reply within one working day." crumbs={[{ label: 'Contact' }]} />
      <section className="sec">
        <div className="wrap cgrid">
          <form className="form" onSubmit={submit}>
            <div className="form__row">
              <label>Name<input required value={f.name} onChange={set('name')} autoComplete="name" /></label>
              <label>Phone<input type="tel" value={f.phone} onChange={set('phone')} autoComplete="tel" /></label>
            </div>
            <label>Email<input required type="email" value={f.email} onChange={set('email')} autoComplete="email" /></label>
            <label>Service
              <select value={f.service} onChange={set('service')}>
                <option>Not sure yet</option>
                {groups.map((g) => (
                  <optgroup key={g.id} label={g.name}>{byGroup(g.id).map((s) => <option key={s.slug}>{s.title}</option>)}</optgroup>
                ))}
              </select>
            </label>
            <label>Project details<textarea rows="5" value={f.msg} onChange={set('msg')} placeholder="What are you building, and what result do you want?" /></label>
            <button className="btn btn--solid" type="submit">Send enquiry</button>
            {sent && <p className="form__ok" role="status">Opening your email app. If nothing opens, write to {site.email}.</p>}
          </form>
          <aside className="cinfo">
            <h3>Contact details</h3>
            <p><strong>Email</strong><br />{site.email}</p>
            <p><strong>Phone</strong><br />{site.phone}</p>
            <p><strong>Location</strong><br />{site.city}</p>
            <p><strong>Hours</strong><br />{site.hours}</p>
          </aside>
        </div>
      </section>
    </>
  )
}
