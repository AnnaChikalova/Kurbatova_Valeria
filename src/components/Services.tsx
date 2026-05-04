const services = [
  {
    title: 'Расслабляющий массаж',
    description: 'Снятие мышечного и эмоционального напряжения, глубокое расслабление тела.',
    icon: '◇',
  },
  {
    title: 'Энергетические сессии',
    description: 'Работа с тонким планом: выравнивание, снятие блоков, наполнение ресурсом.',
    icon: '✧',
  },
  {
    title: 'Комплексные сессии',
    description: 'Сочетание массажа и энергопрактик для целостного восстановления.',
    icon: '✦',
  },
]

export function Services() {
  return (
    <section id="services" className="section section--services">
      <div className="section__inner">
        <h2 className="section__title">Услуги</h2>
        <div className="services__grid">
          {services.map((s) => (
            <article key={s.title} className="service-card">
              <span className="service-card__icon" aria-hidden>{s.icon}</span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
