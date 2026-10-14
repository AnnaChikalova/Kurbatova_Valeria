import { services } from '../data/services'

export function Ticker() {
  const items = (
    <span className="ticker__content">
      {services.map((s) => (
        <span key={s.slug} className="ticker__item">
          {s.title}
        </span>
      ))}
    </span>
  )

  return (
    <section className="ticker" aria-label="Практики">
      <div className="ticker__track">
        {items}
        <span className="ticker__content" aria-hidden="true">
          {services.map((s) => (
            <span key={s.slug} className="ticker__item">
              {s.title}
            </span>
          ))}
        </span>
      </div>
    </section>
  )
}
