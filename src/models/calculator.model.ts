
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';

export class StandardCalculatorModel implements ICalculatorModel {

  private _buffer: string = '';

  public pressNumericKey(key: NumericKeys): void {
    this._buffer += key;
  }

  public pressOperatorKey(key: OperatorKeys): void {
    this._buffer += key;
  }

  public pressActionKey(key: ActionKeys): void {
    switch (key) {
      case ActionKeys.CLEAR:
        this._buffer = '';
        break;
      case ActionKeys.DOT:
        this._buffer += '.';
        break;
      case ActionKeys.EQUALS:
        // eslint-disable-next-line no-eval
        this._buffer = (<number> eval(this._buffer)).toString();
        break;
      default:
        throw new Error('Invalid Action');
    }
  }

  public display(): string {
    return this._buffer;
  }

}

export abstract class AbstractCalculatorModelFactory {
  public abstract createCalculatorModel(): ICalculatorModel;
}

export class StandardCalculatorModelFactory extends AbstractCalculatorModelFactory {
  public createCalculatorModel(): ICalculatorModel {
    return new StandardCalculatorModel();
  }
}

export class RoundingCalculator extends StandardCalculatorModel implements ICalculatorModel {
  private nrDecimals: number;

  public constructor (nrDecimals:number){
    super();
    this.nrDecimals = nrDecimals
  }

  
}

export class RoundingCalculatorModelFactory extends AbstractCalculatorModelFactory {
  private nrDecimals:number;

  public constructor(nrDecimals:number) {
    super();
    this.nrDecimals = nrDecimals;
  }
  public createCalculatorModel(): ICalculatorModel {
    return new RoundingCalculator(2); // Rounding to the 2nd decimal
  }
}

