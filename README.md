# Site Quelvya

Site institucional da Quelvya — controle de qualidade, fiscalização e segurança de alimentos.

- **Frontend:** React + Vite + React Router, CSS próprio (sem framework de UI).
- **Backend:** Python, função serverless (`api/contact.py`) que envia o formulário de contato por e-mail via SMTP. Pronta para rodar na Vercel sem servidor próprio.

## Estrutura

```
quelvya-site/
├── frontend/           # aplicação React (Vite)
│   ├── src/
│   │   ├── pages/      # Home, Sobre, Serviços, Unidades, Contato
│   │   ├── components/ # Navbar, Footer, Seal, TeamCard
│   │   └── styles/      # global.css (tokens) + layout.css
│   └── public/
├── api/
│   ├── contact.py       # função serverless usada em produção (Vercel)
│   ├── _email.py        # lógica de envio de e-mail (compartilhada)
│   ├── dev_server.py     # servidor Flask só para testar localmente
│   └── requirements.txt
└── vercel.json
```

## Rodando localmente

**1. Frontend**

```bash
cd frontend
npm install
npm run dev
```
Abre em `http://localhost:5173`.

**2. Backend (para testar o formulário de contato)**

Em outro terminal:
```bash
cd api
pip install -r requirements.txt --break-system-packages
python dev_server.py
```
Sobe em `http://localhost:5328`. O Vite já está configurado (`vite.config.js`) para redirecionar chamadas `/api/*` para essa porta durante o desenvolvimento.

Se você não configurar as variáveis de SMTP (veja abaixo), o backend local vai responder com erro ao tentar enviar — isso é esperado até a conta de e-mail ser configurada.

## Variáveis de ambiente (e-mail do formulário de contato)

Configure estas variáveis no projeto da Vercel (Settings → Environment Variables) e, se for testar localmente, exporte-as no terminal antes de rodar `dev_server.py`:

| Variável | Descrição | Exemplo |
|---|---|---|
| `SMTP_HOST` | Servidor SMTP | `smtp.gmail.com` |
| `SMTP_PORT` | Porta SMTP | `587` |
| `SMTP_USER` | Conta usada para autenticar e enviar | `envio@quelvya.com.br` |
| `SMTP_PASSWORD` | Senha ou senha de app dessa conta | `xxxxxxxxxxxxxxxx` |
| `CONTACT_TO_EMAIL` | E-mail que deve receber os contatos do site | `contato@quelvya.com.br` |

> Se usar Gmail, é necessário gerar uma "senha de app" (não a senha normal da conta) com a verificação em duas etapas ativada.

## Deploy na Vercel

1. Suba esta pasta inteira (`quelvya-site/`) para um repositório no GitHub.
2. Na Vercel, crie um novo projeto a partir desse repositório — **não** aponte a "Root Directory" para `frontend`, deixe na raiz do projeto (o `vercel.json` já cuida do build do frontend e da função Python).
3. Adicione as variáveis de ambiente acima em Settings → Environment Variables.
4. Deploy. A Vercel detecta automaticamente qualquer arquivo `.py` dentro de `/api` e publica como função serverless — não é preciso configurar servidor algum.

## O que ainda falta preencher (conteúdo)

Os textos abaixo estão como rascunho/placeholder e devem ser revisados com a cliente antes de publicar:

- **Sobre → Missão:** texto sobre a fundação da empresa e trajetória.
- **Sobre → Equipe:** nome, cargo, foto e uma bio curta de cada profissional (`frontend/src/pages/Sobre.jsx`, array `team`).
- **Unidades:** cidades/endereços reais de atendimento (`frontend/src/pages/Unidades.jsx`).
- **Contato:** e-mail e telefone reais (atualmente `contato@quelvya.com.br` e um número de exemplo, em `Footer.jsx` e `Contato.jsx`).
