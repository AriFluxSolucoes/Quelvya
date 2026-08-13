// Placeholder — substituir pelas unidades/cidades reais de atendimento da Quelvya.
const unidades = [
  { cidade: 'Cidade — Estado', bairro: 'Endereço a definir' },
  { cidade: 'Cidade — Estado', bairro: 'Endereço a definir' },
]

export default function Unidades() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Unidades</p>
          <h1>Onde a Quelvya atende</h1>
          <p className="hero-lead" style={{ maxWidth: 600 }}>
            Espaço reservado para as cidades e regiões de atuação. Assim que a cliente enviar a lista de
            unidades ou áreas de cobertura, esta seção é atualizada com endereços, mapa e contato local.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid unidades-grid">
            {unidades.map((u, i) => (
              <div className="unidade-card" key={i}>
                <h3>{u.cidade}</h3>
                <p>{u.bairro}</p>
              </div>
            ))}
            <div className="unidade-card unidade-card-empty">
              <p>+ Nova unidade em breve</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
