import { Link } from 'react-router-dom'

export default function PageHero({ title, text, crumbs = [], tone }) {
  return (
    <section className="phero" style={tone ? { '--tone': tone } : undefined}>
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>/ {c.to ? <Link to={c.to}>{c.label}</Link> : c.label}</span>
          ))}
        </nav>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  )
}
