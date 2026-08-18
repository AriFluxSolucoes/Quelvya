import { useState } from 'react'

// ⬇️ Substitua pelo número real da Quelvya (somente dígitos, com código do país)
const WHATSAPP_NUMBER = '5500000000000'

const initialForm = { nome: '', empresa: '', mensagem: '' }

export default function ContactSection() {
  const [form, setForm] = useState(initialForm)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const text = [
      `Olá! Vim pelo site da Quelvya e gostaria de saber mais. 👋`,
      ``,
      `*Nome:* ${form.nome}`,
      form.empresa ? `*Empresa:* ${form.empresa}` : null,
      ``,
      `*Mensagem:* ${form.mensagem}`,
    ]
      .filter((l) => l !== null)
      .join('\n')

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const filled = form.nome.trim() && form.mensagem.trim()

  return (
    <section id="contato" className="contact-section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Contato</p>
          <h2>Vamos falar sobre a qualidade da sua operação</h2>
          <p>
            Preencha abaixo e clique em <strong>Enviar no WhatsApp</strong> — você será direcionado diretamente
            para uma conversa com a equipe da Quelvya.
          </p>
        </div>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>

            <label>
              Seu nome <span className="form-required">*</span>
              <input
                type="text"
                name="nome"
                placeholder="Como prefere ser chamado(a)?"
                value={form.nome}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Empresa / Estabelecimento
              <input
                type="text"
                name="empresa"
                placeholder="Restaurante, cozinha industrial, etc. (opcional)"
                value={form.empresa}
                onChange={handleChange}
              />
            </label>

            <label>
              Mensagem <span className="form-required">*</span>
              <textarea
                name="mensagem"
                rows="5"
                placeholder="Conte sobre sua operação e o que precisa…"
                value={form.mensagem}
                onChange={handleChange}
                required
              />
            </label>

            <button
              type="submit"
              className="btn btn-whatsapp"
              disabled={!filled}
            >
              {/* WhatsApp icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enviar no WhatsApp
            </button>

            <p className="form-note" style={{ marginTop: 8 }}>
              Ao clicar, o WhatsApp abrirá com sua mensagem já preenchida.
            </p>
          </form>

          <div className="contact-info">
            <h3>Outros canais</h3>
            <p><a href="mailto:contato@quelvya.com.br">contato@quelvya.com.br</a></p>
            <p><a href="https://wa.me/+5511985134864">Solange - 11 98513-4864</a></p>
            <p><a href="https://wa.me/+5511969565390">Elidiane - 11 96956-5390</a></p>
            <p>Atendimento de segunda a sexta, das 8h às 18h.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
