import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'
import { compare } from 'bcryptjs'
import { expect, describe, it, beforeEach } from 'vitest'
import { RegisterUseCase } from './register'

let usersRepository: InMemoryUsersRepository
let sut: RegisterUseCase

describe('Register Use Case', () => {
    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository()
        sut = new RegisterUseCase(usersRepository)
    })

    it('should to register', async () => {        

        const { user } = await sut.handle({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: '123456',
            stateId: 'f55fb5fd-8bb1-4166-9f27-13a669efba6a'
        })

        expect(user.id).toEqual(expect.any(String))
    })

    it('should hash user password upon registration', async () => {
      
        const { user } = await sut.handle({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: '123456',
            stateId: 'f55fb5fd-8bb1-4166-9f27-13a669efba6a'
        })

        const isPasswordCorrectlyHashed = await compare(
            '123456',
            user.password_hash
        )

        expect(isPasswordCorrectlyHashed).toBe(true)
    })

    it('should not be able to register with same email twice', async () => {
     
        const email = 'johndoe@example.com'
        await sut.handle({
            name: 'John Doe',
            email,
            password: '123456',
            stateId: 'f55fb5fd-8bb1-4166-9f27-13a669efba6a'
        })

        await expect(() =>
            sut.handle({
                name: 'John Doe',
                email,
                password: '123456',
                stateId: 'f55fb5fd-8bb1-4166-9f27-13a669efba6a'
            })
        ).rejects.toBeInstanceOf(UserAlreadyExistsError)
    })
})
