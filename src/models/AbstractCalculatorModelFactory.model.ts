import { ICalculatorModel } from '../interfaces/calculator-model.interface';
import { StandardCalculatorModel } from './calculator.model';

// declares/defines methids that are common to both calculators
export abstract class AbstractCalculatorModelFactory {
    public createCalculator(): ICalculatorModel {
        return new StandardCalculatorModel;
    };
};