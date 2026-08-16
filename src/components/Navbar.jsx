import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/unidades', label: 'Unidades' },
]


export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/logoNavBar.png" alt="Quelvya" className="brand-img" />
        </NavLink>

        {/* Overlay escuro para fechar menu mobile */}
        {open && (
          <div
            className="nav-overlay"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {/* Logo dentro do menu mobile */}
          <div className="nav-mobile-brand">
            <img src="/logoNavBar.png" alt="Quelvya" className="brand-img" />
          </div>

          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => 'nav-link' + (isActive ? ' is-active' : '')}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contato" className="btn btn-gold nav-cta" onClick={() => setOpen(false)}>
            Fale conosco
          </NavLink>
        </nav>

        <button
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
