import { NavLink, useNavigate, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/unidades', label: 'Unidades' },
]

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleGoHome = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleFaleConosco = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      const el = document.getElementById('contato')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/#contato')
    }
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="/" className="brand" onClick={handleGoHome}>
          <img src="/logoNavBar.png" alt="Quelvya" className="brand-img" />
        </a>

        <nav className="nav-links">
          {links.map((l) =>
            l.to === '/' ? (
              <a
                key={l.to}
                href="/"
                className={`nav-link${location.pathname === '/' ? ' is-active' : ''}`}
                onClick={handleGoHome}
              >
                {l.label}
              </a>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => 'nav-link' + (isActive ? ' is-active' : '')}
              >
                {l.label}
              </NavLink>
            )
          )}
          <a
            href="#contato"
            className="btn btn-gold nav-cta"
            onClick={handleFaleConosco}
          >
            Fale conosco
          </a>
        </nav>
      </div>
    </header>
  )
}
