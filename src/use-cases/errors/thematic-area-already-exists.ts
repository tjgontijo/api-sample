export class ThematicAreaAlreadyExistsError extends Error {
    constructor() {
        super('Thematic Area already exists.')
    }
}