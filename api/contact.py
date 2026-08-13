"""
Endpoint de contato da Quelvya.

Recebe um POST em /api/contact com JSON:
  { "nome": "...", "email": "...", "telefone": "...", "empresa": "...", "mensagem": "..." }

e envia um e-mail para o endereço configurado em CONTACT_TO_EMAIL usando SMTP.

Configuração (definir como variáveis de ambiente no projeto da Vercel):
  SMTP_HOST        ex: smtp.gmail.com
  SMTP_PORT        ex: 587
  SMTP_USER        conta usada para autenticar e enviar o e-mail
  SMTP_PASSWORD    senha ou senha de app da conta acima
  CONTACT_TO_EMAIL e-mail que deve receber os contatos (ex: contato@quelvya.com.br)

Na Vercel, qualquer arquivo dentro de /api vira automaticamente uma função
serverless em Python (runtime @vercel/python), acessível em /api/contact.
"""

import json
from http.server import BaseHTTPRequestHandler

from _email import REQUIRED_FIELDS, send_contact_email as _send_email


def _cors_headers(handler):
    handler.send_header("Access-Control-Allow-Origin", "*")
    handler.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
    handler.send_header("Access-Control-Allow-Headers", "Content-Type")


class handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(204)
        _cors_headers(self)
        self.end_headers()

    def do_POST(self):
        try:
            length = int(self.headers.get("Content-Length", 0))
            raw = self.rfile.read(length) if length else b"{}"
            data = json.loads(raw or b"{}")
        except (ValueError, json.JSONDecodeError):
            self._respond(400, {"error": "JSON inválido."})
            return

        missing = [f for f in REQUIRED_FIELDS if not str(data.get(f, "")).strip()]
        if missing:
            self._respond(400, {"error": f"Campos obrigatórios ausentes: {', '.join(missing)}"})
            return

        try:
            _send_email(data)
        except KeyError as exc:
            # Variável de ambiente de SMTP não configurada.
            self._respond(500, {"error": f"Configuração de e-mail ausente: {exc}"})
            return
        except Exception:
            self._respond(502, {"error": "Não foi possível enviar o e-mail agora."})
            return

        self._respond(200, {"ok": True})

    def _respond(self, status: int, payload: dict):
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        _cors_headers(self)
        self.end_headers()
        self.wfile.write(json.dumps(payload).encode("utf-8"))
