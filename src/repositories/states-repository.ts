import { State } from '@prisma/client'

export interface StatesRepository {  
  fetchAll(): Promise<State[]>
}