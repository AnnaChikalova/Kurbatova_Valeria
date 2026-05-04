export function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <div className="section__inner">
        <h2 className="section__title">Контакты</h2>
        <div className="contact__content">
          <p className="contact__text">
            Для записи на сессию или по вопросам сотрудничества свяжитесь со мной:
          </p>
          <div className="contact__links">
            <a href="tel:+79000000000" className="contact__link">+7 (900) 000-00-00</a>
            <a href="https://t.me/username" target="_blank" rel="noreferrer" className="contact__link">Telegram</a>
          </div>
          <p className="contact__note">Работаю по предварительной записи</p>
        </div>
      </div>
    </section>
  )
}
