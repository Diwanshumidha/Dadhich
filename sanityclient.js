import { createClient } from '@sanity/client'
export const  client = createClient({
  projectId: 'nkiy5xsv',
  dataset: 'production',
  apiVersion: '2021-10-21',
  token: 'sklbwfkFDiQPSKTuvIPsyHe10ACrHVlSrChMdFcizOP0MPI97fY7Z0m11q00tRoJmhmTnyJnQRAGVA2CYoR3AVOWU0MYijUlGpOGuX1IwVaKRKJVydq5XnYxPnRtwGsRgkWntenTGtjtU5GRhXuqbyQaNxlDWDydbR4zhA3hJ5TfSP0qyQaT', 
  useCdn: true, 
})