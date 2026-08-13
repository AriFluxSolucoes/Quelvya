"""
Servidor Flask apenas para desenvolvimento local.

Roda em http://localhost:5328 e expõe o mesmo endpoint POST /api/contact
que a função serverless da Vercel (api/contact.py), reutilizando a mesma
lógica de envio de e-mail (api/_email.py). Não é usado em produção — na
Vercel, api/contact.py é publicado diretamente como função serverless.

Uso:
    pip install flask --break-system-packages
    python dev_server.py
"""

from flask import Flask, request, jsonify

from _email import REQUIRED_FIELDS, send_contact_email

app = Flask(__name__)


@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "POST, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return response


@app.route("/api/contact", methods=["POST", "OPTIONS"])
def contact():
    if request.method == "OPTIONS":
        return "", 204

    data = request.get_json(silent=True) or {}
    missing = [f for f in REQUIRED_FIELDS if not str(data.get(f, "")).strip()]
    if missing:
        return jsonify({"error": f"Campos obrigatórios ausentes: {', '.join(missing)}"}), 400

    try:
        send_contact_email(data)
    except KeyError as exc:
        return jsonify({"error": f"Configuração de e-mail ausente: {exc}"}), 500
    except Exception:
        return jsonify({"error": "Não foi possível enviar o e-mail agora."}), 502

    return jsonify({"ok": True})


if __name__ == "__main__":
    app.run(port=5328, debug=True)
