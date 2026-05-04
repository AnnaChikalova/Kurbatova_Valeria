import { Link } from 'react-router-dom'
import heroImage from '../assets/SnapInsta.to_540388604_18049572743639267_4807897995972726624_n.jpg'

export function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero__overlay" />
      <div className="hero__inner">
        <p className="hero__label">Массаж и энергопрактики</p>
        <h1 className="hero__title">Баланс тела и духа</h1>
        <p className="hero__tagline">
          Восстановление через прикосновение и тонкие практики — в тишине и доверии
        </p>
        <Link to="/contact" className="hero__cta">
          Записаться на сессию
        </Link>
      </div>
    </section>
  )
}
