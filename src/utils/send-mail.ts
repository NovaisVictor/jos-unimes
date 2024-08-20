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
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: 'camryn48@ethereal.email',
      pass: 'gN8dHNzttYe4WMHcHs',
    },
  })

  const url = await new Promise((resolve, reject) => {
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
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>',
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
              Sua inscrição foi realizada, mas faltam alguns passos para confirma-la
            </p>
            <p>Realize o pagamento via pix: </p>
            <div>QR Code</div>
            <p>chave pix</p>
            <p class="font-bold">Esse é seu ingresso para entrada no evento</p>
            <div><img src="${url}"></div>
          </div>
        </body>
      </html>
    `,
  })

  console.log('Message sent: %s', info.messageId, info.response)
}
