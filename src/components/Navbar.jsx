import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const links = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'equipe', label: 'Equipe' },
]

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)

  // Fecha o menu ao redimensionar para desktop
  useEffect(() => {
    const close = () => { if (window.innerWidth > 720) setOpen(false) }
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  // Bloqueia scroll do body quando o menu está aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const scrollToSection = (id) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        if (id === 'inicio') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          const el = document.getElementById(id)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 120)
    } else {
      if (id === 'inicio') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          {/* Logo */}
          <a
            href="/"
            className="brand"
            onClick={(e) => { e.preventDefault(); scrollToSection('inicio') }}
          >
            <img src="/logo-transparent.png" alt="Quelvya" className="brand-img" />
          </a>

          {/* Links desktop */}
          <nav className="nav-links nav-desktop">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="nav-link"
                onClick={(e) => { e.preventDefault(); scrollToSection(l.id) }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              className="btn btn-gold nav-cta"
              onClick={(e) => { e.preventDefault(); scrollToSection('contato') }}
            >
              Fale conosco
            </a>
          </nav>

          {/* Hambúrguer — só aparece no mobile */}
          <button
            className={`nav-toggle${open ? ' is-open' : ''}`}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Overlay escuro */}
      {open && (
        <div
          className="nav-overlay"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer lateral direito */}
      <aside className={`nav-drawer${open ? ' is-open' : ''}`} aria-label="Menu de navegação">
        {/* Cabeçalho do drawer */}
        <div className="nav-drawer-header">
          <img src="/logoNavBar.png" alt="Quelvya" className="nav-drawer-logo" />
          <button
            className="nav-drawer-close"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <nav className="nav-drawer-links">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="nav-drawer-link"
              onClick={(e) => { e.preventDefault(); scrollToSection(l.id) }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Botão Fale conosco no final */}
        <a
          href="#contato"
          className="btn btn-gold nav-drawer-cta"
          onClick={(e) => { e.preventDefault(); scrollToSection('contato') }}
        >
          Fale conosco
        </a>
      </aside>
    </>
  )
}
