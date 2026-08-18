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
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); scrollTo('inicio') }}
            className="footer-logo-link"
          >
            <img
              src="/logo-footer.png"
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
          <a href="https://wa.me/+5511985134864">Solange - 11 98513-4864</a>
          <a href="https://wa.me/+5511969565390">Elidiane - 11 96956-5390</a>
          <a href="https://www.google.com/maps/place/Av.+Giovanni+Gronchi,+6195+-+Sl+809+-+Vila+Andrade,+S%C3%A3o+Paulo+-+SP,+05724-003/@-23.6336241,-46.7391989,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5144e210f3cb:0x10f9dce04b1e3f7b!8m2!3d-23.633629!4d-46.736624!16s%2Fg%2F11vqv9jw81?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D">
            Av. Giovanni Gronchi, 6195 - sala 809 - Vila Andrade, São Paulo - SP, 05724-003, Brasil</a>
        </div>
      </div>
      <div className="container">
        <p className="footer-copy">© {new Date().getFullYear()} Quelvya. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
