import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <svg viewBox="0 0 100 100" width="30" height="30" aria-hidden="true">
            <circle cx="50" cy="50" r="44" fill="none" stroke="var(--gold)" strokeWidth="3" strokeDasharray="2.5 7" />
            <path d="M32 50 L45 63 L70 34" fill="none" stroke="var(--gold)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <p className="footer-name">Quelvya</p>
            <p className="footer-tag">Controle de qualidade, fiscalização e segurança alimentar.</p>
          </div>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Navegação</p>
          <Link to="/sobre">Sobre</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/unidades">Unidades</Link>
          <a href="/#contato">Contato</a>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Contato</p>
          <a href="mailto:contato@quelvya.com.br">contato@quelvya.com.br</a>
          <a href="tel:+5500000000000">(00) 00000-0000</a>
        </div>
      </div>
      <div className="container">
        <p className="footer-copy">© {new Date().getFullYear()} Quelvya. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
