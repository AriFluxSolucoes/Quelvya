import { useState } from 'react'

const initialForm = { nome: '', email: '', telefone: '', empresa: '', mensagem: '' }

export default function Contato() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Falha no envio')
      setStatus('sent')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contato</p>
          <h1>Vamos falar sobre a qualidade da sua operação</h1>
          <p className="hero-lead" style={{ maxWidth: 600 }}>
            Conte um pouco sobre sua cozinha, restaurante ou empresa de alimentos. A equipe da Quelvya retorna
            com os próximos passos para o diagnóstico.
          </p>
        </div>
      </section>

      <section>
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Nome
              <input type="text" name="nome" value={form.nome} onChange={handleChange} required />
            </label>
            <label>
              E-mail
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </label>
            <label>
              Telefone
              <input type="tel" name="telefone" value={form.telefone} onChange={handleChange} />
            </label>
            <label>
              Empresa
              <input type="text" name="empresa" value={form.empresa} onChange={handleChange} />
            </label>
            <label>
              Mensagem
              <textarea name="mensagem" rows="5" value={form.mensagem} onChange={handleChange} required />
            </label>

            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
            </button>

            {status === 'sent' && <p className="form-note form-note-ok">Mensagem enviada. Obrigado pelo contato!</p>}
            {status === 'error' && (
              <p className="form-note form-note-error">
                Não foi possível enviar agora. Tente novamente ou escreva para contato@quelvya.com.br.
              </p>
            )}
          </form>

          <div className="contact-info">
            <h3>Outros canais</h3>
            <p>contato@quelvya.com.br</p>
            <p>(00) 00000-0000</p>
            <p>Atendimento de segunda a sexta, das 9h às 18h.</p>
          </div>
        </div>
      </section>
    </>
  )
}
