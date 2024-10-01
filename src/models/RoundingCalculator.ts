import { ActionKeys } from "../enums/action-keys.enum";
import { NumericKeys } from "../enums/numeric-keys.enum";
import { OperatorKeys } from "../enums/operator-keys.enum";
import { ICalculatorModel } from "../interfaces/calculator-model.interface";


export class RoundingCalculator implements ICalculatorModel {
    private _buffer: string = '';

    pressNumericKey(key: NumericKeys): void {
        throw new Error("Method not implemented.");
    }
    pressOperatorKey(key: OperatorKeys): void {
        throw new Error("Method not implemented.");
    }
    pressActionKey(key: ActionKeys): void {
        throw new Error("Method not implemented.");
    }
    display(): string {
        throw new Error("Method not implemented.");
    }

};