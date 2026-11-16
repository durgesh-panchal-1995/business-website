import Reveal from './Reveal.jsx'

export default function ProcessSteps({ steps }) {
  return (
    <ol className="psteps">
      {steps.map(([t, d], i) => (
        <Reveal as="li" key={t} delay={i * 0.1}><span>{i + 1}</span><div><h3>{t}</h3><p>{d}</p></div></Reveal>
      ))}
    </ol>
  )
}
