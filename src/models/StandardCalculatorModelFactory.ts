import { ICalculatorModel } from "../interfaces/calculator-model.interface";
import { AbstractCalculatorModelFactory } from "./AbstractCalculatorModelFactory.model";
import { StandardCalculatorModel } from "./calculator.model";

export class StandardCalculatorModelFactory extends AbstractCalculatorModelFactory {
    public createCalculator(): ICalculatorModel {
        return new StandardCalculatorModel;
    };
};