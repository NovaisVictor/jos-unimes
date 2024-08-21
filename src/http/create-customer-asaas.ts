import { api } from './api-client'

interface CreateCustomerAsaasRequest {
  name: string
  cpfCnpj: string
  email: string
}

interface CreateCustomerAsaasResponse {
  object: string
  id: string
  dateCreated: string
  name: string
  email: string
  phone: string
  mobilePhone: string
  address: string
  addressNumber: string
  complement: string
  province: string
  postalCode: string
  cpfCnpj: string
  personType: string
  deleted: boolean
  additionalEmails: string
  externalReference: string
  notificationDisabled: boolean
  city: number
  cityName: string
  state: string
  country: string
  observations: string
}

export async function createCustomerAsaas({
  name,
  cpfCnpj,
  email,
}: CreateCustomerAsaasRequest) {
  const result = await api
    .post('customers', {
      json: {
        name,
        cpfCnpj,
        email,
        notificationDisabled: true,
      },
    })
    .json<CreateCustomerAsaasResponse>()
  return result
}
