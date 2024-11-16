import { CustomException } from "../../errors";


export class SerilizationException extends CustomException {

    constructor(reason: string) {
        super(`Cannot serialize this type beacuse ${reason}`)
    }

}