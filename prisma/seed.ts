// seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const statesData = [
    { shortName: 'AC', name: 'Acre', region: 'Norte' },
    { shortName: 'AL', name: 'Alagoas', region: 'Nordeste' },
    { shortName: 'AP', name: 'Amapá', region: 'Norte' },
    { shortName: 'AM', name: 'Amazonas', region: 'Norte' },
    { shortName: 'BA', name: 'Bahia', region: 'Nordeste' },
    { shortName: 'CE', name: 'Ceará', region: 'Nordeste' },
    { shortName: 'DF', name: 'Distrito Federal', region: 'Centro-Oeste' },
    { shortName: 'ES', name: 'Espírito Santo', region: 'Sudeste' },
    { shortName: 'GO', name: 'Goiás', region: 'Centro-Oeste' },
    { shortName: 'MA', name: 'Maranhão', region: 'Nordeste' },
    { shortName: 'MT', name: 'Mato Grosso', region: 'Centro-Oeste' },
    { shortName: 'MS', name: 'Mato Grosso do Sul', region: 'Centro-Oeste' },
    { shortName: 'MG', name: 'Minas Gerais', region: 'Sudeste' },
    { shortName: 'PA', name: 'Pará', region: 'Norte' },
    { shortName: 'PB', name: 'Paraíba', region: 'Nordeste' },
    { shortName: 'PR', name: 'Paraná', region: 'Sul' },
    { shortName: 'PE', name: 'Pernambuco', region: 'Nordeste' },
    { shortName: 'PI', name: 'Piauí', region: 'Nordeste' },
    { shortName: 'RJ', name: 'Rio de Janeiro', region: 'Sudeste' },
    { shortName: 'RN', name: 'Rio Grande do Norte', region: 'Nordeste' },
    { shortName: 'RS', name: 'Rio Grande do Sul', region: 'Sul' },
    { shortName: 'RO', name: 'Rondônia', region: 'Norte' },
    { shortName: 'RR', name: 'Roraima', region: 'Norte' },
    { shortName: 'SC', name: 'Santa Catarina', region: 'Sul' },
    { shortName: 'SP', name: 'São Paulo', region: 'Sudeste' },
    { shortName: 'SE', name: 'Sergipe', region: 'Nordeste' },
    { shortName: 'TO', name: 'Tocantins', region: 'Norte' },
]

const institutionsData = [
    { short_name: 'BM', name: 'Bombeiro Militar' },
    { short_name: 'PT', name: 'Perícia Técnica' },
    { short_name: 'PC', name: 'Polícia Civil' },
    { short_name: 'PM', name: 'Polícia Militar' },
    { short_name: 'SS', name: 'Secretaria de Segurança' }    
]

const typesOfExpensesData = [
    { name: 'Custeio' },
    { name: 'Investimento' }  
]

const thematicsAreasData = [
    { short_name: 'RMV', name: 'Redução das Mortes Violentas Intencionais' },
    { short_name: 'EVM', name: 'Enfrentamento da violência contra a mulher' },
    { short_name: 'MQV', name: 'Melhoria da qualidade de vida dos profissionais da segurança pública' },
]

async function seed() {
    try {

        for (const stateData of statesData) {
            const existingState = await prisma.state.findUnique({
                where: { shortName: stateData.shortName },
            })

            if (!existingState) {
                await prisma.state.create({
                    data: stateData,
                })
            }
        }

        for (const institutionData of institutionsData) {
            const existingInstitution = await prisma.institution.findUnique({
                where: { name: institutionData.name },
            })

            if (!existingInstitution) {
                await prisma.institution.create({
                    data: institutionData,
                })
            }
        }

        for (const typeOfExpenseData of typesOfExpensesData) {
            const existingTypeOfExpense = await prisma.typeOfExpense.findUnique({
                where: { name: typeOfExpenseData.name },
            })

            if (!existingTypeOfExpense) {
                await prisma.typeOfExpense.create({
                    data: typeOfExpenseData,
                })
            }
        }

        for (const thematisAreaData of thematicsAreasData) {
            const existingThematisAreaData = await prisma.thematicArea.findUnique({
                where: { short_name: thematisAreaData.short_name },
            })

            if (!existingThematisAreaData) {
                await prisma.thematicArea.create({
                    data: thematisAreaData,
                })
            }
        }
      
        console.log('Seeding completed successfully.')
    } catch (error) {
        console.error('Error seeding:', error)
        throw error
    } finally {
        await prisma.$disconnect()
    }
}

seed()