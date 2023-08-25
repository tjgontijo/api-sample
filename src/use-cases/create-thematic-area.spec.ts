import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryThematicAreasRepository } from '@/repositories/in-memory/in-memory-create-thematic-area'
import { CreateThematicAreaUseCase } from './create-thematic-area'

let ThematicAreasRepository: InMemoryThematicAreasRepository
let sut: CreateThematicAreaUseCase

describe('Thematic Area Use Case', () => {
    beforeEach(() => {
        ThematicAreasRepository = new InMemoryThematicAreasRepository()
        sut = new CreateThematicAreaUseCase(ThematicAreasRepository)
    })

    it('should to create a new thematic area', async () => {

        const { thematicArea } = await sut.handle({
            short_name: 'ECV',
            name: 'Enfrentamento a Criminalidade Violenta',
        })

        expect(thematicArea.id).toEqual(expect.any(String))
    })
})
