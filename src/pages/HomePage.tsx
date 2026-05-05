import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Services } from '../components/Services'

export function HomePage() {
  return (
    <div className="home">
      <Hero />
      <section className="ticker" aria-label="Практики">
        <div className="ticker__track">
          <span className="ticker__content">
            <span className="ticker__item">Телесная терапия</span>
            <span className="ticker__item">Живой массаж</span>
            <span className="ticker__item">Гвоздестояние</span>
            <span className="ticker__item">Световые практики</span>
            <span className="ticker__item">Работа с родом</span>
            <span className="ticker__item">Женский клуб</span>
          </span>
          <span className="ticker__content" aria-hidden="true">
            <span className="ticker__item">Телесная терапия</span>
            <span className="ticker__item">Живой массаж</span>
            <span className="ticker__item">Гвоздестояние</span>
            <span className="ticker__item">Световые практики</span>
            <span className="ticker__item">Работа с родом</span>
            <span className="ticker__item">Женский клуб</span>
          </span>
        </div>
      </section>
      <About />
      <Services />
    </div>
  )
}
