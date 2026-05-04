import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Главная' },
  { path: '/about', label: 'Обо мне' },
  { path: '/services', label: 'Услуги' },
  { path: '/contact', label: 'Контакты' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__brand" end onClick={closeMenu}>
        Массаж · Энергия
      </NavLink>
      <button
        type="button"
        className="navbar__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label="Меню"
      >
        <span className={open ? 'navbar__toggle-bar open' : 'navbar__toggle-bar'} />
        <span className={open ? 'navbar__toggle-bar open' : 'navbar__toggle-bar'} />
        <span className={open ? 'navbar__toggle-bar open' : 'navbar__toggle-bar'} />
      </button>
      <nav className={`navbar__menu ${open ? 'navbar__menu--open' : ''}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
            onClick={closeMenu}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
