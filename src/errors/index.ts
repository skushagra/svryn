

export class CustomException extends Error {

    constructor(message: string) {
        super(`An exception occured : ${message}`);
    }

}