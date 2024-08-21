import { api } from './api-client'
import { addDays } from 'date-fns'

interface CreateChargeAsaasResponse {
  object: string
  id: string
  dateCreated: string
  customer: string
  paymentLink: string | null
  dueDate: string
  value: number
  netValue: number
  billingType: string
  canBePaidAfterDueDate: boolean
  pixTransaction: string | null
  status: string
  description: string
  externalReference: string
  originalValue: string | null
  interestValue: string | null
  originalDueDate: string
  paymentDate: string | null
  clientPaymentDate: string | null
  installmentNumber: number | null
  transactionReceiptUrl: string | null
  nossoNumero: string
  invoiceUrl: string
  bankSlipUrl: string
  invoiceNumber: string
  discount: {
    value: number
    dueDateLimitDays: number
  }
  fine: {
    value: number
  }
  interest: {
    value: number
  }
  deleted: boolean
  postalService: boolean
  anticipated: boolean
  anticipable: boolean
  refunds: [] | null
}

export async function createChargeAsaas(customer: string) {
  const tomorrow = addDays(new Date(), 1)
  const result = await api
    .post('payments', {
      json: {
        customer,
        billingType: 'PIX',
        value: 55,
        dueDate: tomorrow,
        description: 'Inscrição jornada odonto',
      },
    })
    .json<CreateChargeAsaasResponse>()
  return result
}
