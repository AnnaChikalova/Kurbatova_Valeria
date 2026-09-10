import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getServiceBySlug, services } from '../data/services'

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const currentIndex = services.findIndex((s) => s.slug === service.slug)
  const prev = services[(currentIndex - 1 + services.length) % services.length]
  const next = services[(currentIndex + 1) % services.length]

  return (
    <section className="section section--service-detail">
      <div className="section__inner service-detail">
        <Link to="/services" className="service-detail__back">
          ← Все услуги
        </Link>

        <span className="service-detail__icon" aria-hidden>{service.icon}</span>
        <h1 className="service-detail__title">{service.title}</h1>
        <p className="service-detail__lead">{service.lead}</p>

        <div className="service-detail__body">
          {service.details.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="service-detail__box">
          <h2 className="service-detail__box-title">{service.listTitle}</h2>
          <ul className="service-detail__list">
            {service.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {service.afterList && service.afterList.length > 0 && (
          <div className="service-detail__body">
            {service.afterList.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        )}

        {(service.note || service.externalLink) && (
          <div className="service-detail__join">
            {service.note && <p className="service-detail__note">{service.note}</p>}
            {service.externalLink && (
              <a
                href={service.externalLink}
                className="service-detail__cta"
                target="_blank"
                rel="noreferrer"
              >
                Перейти в группу
              </a>
            )}
          </div>
        )}

        <div className="service-detail__actions">
          <Link
            to="/contact"
            className={`service-detail__cta${service.externalLink ? ' service-detail__cta--secondary' : ''}`}
          >
            Записаться
          </Link>
        </div>

        <nav className="service-detail__nav" aria-label="Другие услуги">
          <Link to={`/services/${prev.slug}`} className="service-detail__nav-link">
            ← {prev.title}
          </Link>
          <Link to={`/services/${next.slug}`} className="service-detail__nav-link service-detail__nav-link--next">
            {next.title} →
          </Link>
        </nav>
      </div>
    </section>
  )
}
