export class UserNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'UserNotFoundError';
    }
}

export class CharacterNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'CharacterNotFoundError';
    }
}