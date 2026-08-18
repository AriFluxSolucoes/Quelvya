export default function Footer() {
  const scrollTo = (id) => {
    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          {/* Logo em versão clara para o fundo escuro */}
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); scrollTo('inicio') }}
            style={{ display: 'inline-block' }}
          >
            <img
              src="/logoNavBar.png"
              alt="Quelvya"
              className="footer-logo"
            />
          </a>
          <p className="footer-tag">Controle de qualidade, fiscalização e segurança alimentar.</p>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Navegação</p>
          <a href="#sobre" onClick={(e) => { e.preventDefault(); scrollTo('sobre') }}>Sobre</a>
          <a href="#servicos" onClick={(e) => { e.preventDefault(); scrollTo('servicos') }}>Serviços</a>
          <a href="#equipe" onClick={(e) => { e.preventDefault(); scrollTo('equipe') }}>Equipe</a>
          <a href="#contato" onClick={(e) => { e.preventDefault(); scrollTo('contato') }}>Contato</a>
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
