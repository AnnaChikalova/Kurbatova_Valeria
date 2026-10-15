const socials = [
  {
    name: 'Telegram',
    href: 'https://t.me/username',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M21.5 3.3 18.2 21c-.2.9-1 1.2-1.8.7l-5-3.7-2.4 2.3c-.3.3-.6.5-1 .5l.4-5.2 9.4-8.5c.4-.4-.1-.6-.6-.3L6.3 13.4 1.3 11.8c-.9-.3-.9-1.5.2-1.9L20 3c.8-.3 1.6.2 1.5.3Z"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/username/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm11 1.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
        />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/79000000000',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2.1A9.9 9.9 0 0 0 3.4 17L2 22l5.1-1.3A9.9 9.9 0 1 0 12 2.1Zm0 18a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3 .8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.1Zm4.5-5.4c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.6.7c-.2.2-.4.2-.6.1-1.6-.8-2.7-1.8-3.4-3.2-.1-.2 0-.4.1-.6l.5-.6c.1-.2.2-.4.1-.6l-.8-1.8c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.2.2 2.1 3.2 5.1 4.4 1.9.8 2.6.8 3.5.7.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.2-.3-.2-.5-.3Z"
        />
      </svg>
    ),
  },
]

export function Contact({ asPage = false }: { asPage?: boolean }) {
  return (
    <footer id="contact" className={`footer${asPage ? ' footer--page' : ''}`}>
      <div className="footer__inner">
        <p className="footer__brand">Курбатова Валерия</p>
        <div className="footer__links">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              <span className="footer__icon">{item.icon}</span>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
