import ky from 'ky'
import { env } from 'process'

export const api = ky.create({
  prefixUrl: `${env.ASSAS_API_ENDPOINT}`,
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'jos_unimes',
    access_token: `${env.ASAAS_API_KEY}`,
  },
})
