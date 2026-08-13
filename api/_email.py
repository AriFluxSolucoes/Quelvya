"""Lógica compartilhada de envio de e-mail para o formulário de contato."""

import os
import smtplib
from email.mime.text import MIMEText

REQUIRED_FIELDS = ["nome", "email", "mensagem"]


def send_contact_email(data: dict) -> None:
    host = os.environ["SMTP_HOST"]
    port = int(os.environ.get("SMTP_PORT", "587"))
    user = os.environ["SMTP_USER"]
    password = os.environ["SMTP_PASSWORD"]
    to_email = os.environ.get("CONTACT_TO_EMAIL", user)

    body = (
        f"Novo contato pelo site da Quelvya\n\n"
        f"Nome: {data.get('nome', '')}\n"
        f"E-mail: {data.get('email', '')}\n"
        f"Telefone: {data.get('telefone', '')}\n"
        f"Empresa: {data.get('empresa', '')}\n\n"
        f"Mensagem:\n{data.get('mensagem', '')}\n"
    )

    msg = MIMEText(body, _charset="utf-8")
    msg["Subject"] = f"Novo contato — {data.get('nome', 'site Quelvya')}"
    msg["From"] = user
    msg["To"] = to_email
    if data.get("email"):
        msg["Reply-To"] = data["email"]

    with smtplib.SMTP(host, port) as server:
        server.starttls()
        server.login(user, password)
        server.sendmail(user, [to_email], msg.as_string())
