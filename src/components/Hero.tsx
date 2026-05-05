import heroImage from '../assets/firstScreen.jpg'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__media" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="hero__inner">
        <h1 className="hero__title">
          Энергетический Целитель, Духовный Мастер.
          <br />
          <span className="hero__title-subline">В моем поле ты изменишься</span>
        </h1>
        <p className="hero__tagline">
          Восстановление через массаж, телесные и энергопрактики
        </p>
      </div>
    </section>
  )
}
