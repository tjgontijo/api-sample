export class ActionAlreadyExistsError extends Error {
    constructor() {
        super('Action already exists.')
    }
}