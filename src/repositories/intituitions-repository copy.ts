import { Institution } from '@prisma/client'

export interface InstituitionsRepository {  
  fetchAll(): Promise<Institution[]>
}