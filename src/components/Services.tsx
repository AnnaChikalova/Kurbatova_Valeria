import { Link } from 'react-router-dom'
import { services } from '../data/services'

export function Services() {
  return (
    <section id="services" className="section section--services">
      <div className="section__inner">
        <h2 className="section__title">Чем я могу быть полезна. Как я работаю</h2>
        <div className="services__grid">
          {services.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="service-card">
              <span className="service-card__icon" aria-hidden>{s.icon}</span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.description}</p>
              <span className="service-card__more">Подробнее →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
