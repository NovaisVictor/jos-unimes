'use server'

import QRCode from 'qrcode'
import nodemailer from 'nodemailer'
import { env } from 'process'

interface SendEmailTicketRequest {
  id: string
  email: string
  name: string
}

export async function SendEmailTicket({
  email,
  name,
  id,
}: SendEmailTicketRequest) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  })

  const url: string = await new Promise((resolve, reject) => {
    QRCode.toDataURL(
      `${env.NEXT_PUBLIC_URL}/dashboard/qrcode/${id}`,
      function (err, url) {
        if (err) {
          console.error(err)
          reject(err)
        }
        resolve(url)
      },
    )
  })
  console.log(url)
  const info = await transporter.sendMail({
    from: 'jpshioya12@gmail.com',
    to: email,
    subject: 'Inscrição Realizada!',
    html: `
      <html>
        <head>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body>
          <div class="space-y-4 bg-blue-950 text-white p-12 text-lg rounded-md">
            <p>Olá ${name}</p>
            <p class="font-bold">
              Sua inscrição foi realizada, e seu pagamento foi confirmado!
            </p>
            <p class="font-bold">Esse é seu ingresso para entrar no evento</p>
            <div><img src="cid:unique@nodemailer.com"></div>
          </div>
        </body>
      </html>
    `,
    attachments: [
      {
        filename: 'ticket.png',
        path: url,
        cid: 'unique@nodemailer.com', // unique CID matching the img src in HTML
      },
    ],
  })

  console.log('Message sent: %s', info.messageId, info.response)
}
