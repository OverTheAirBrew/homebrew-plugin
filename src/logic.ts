import { Token } from 'typedi';
import { Property, Validatable } from './properties';

export const LogicToken = new Token<Logic>('logics');

export abstract class Logic extends Validatable {
  constructor(public logicName: string, public properties: Property[]) {
    super(properties);
  }

  abstract run(params: any): Promise<{
    heatTime: number;
    waitTime: number;
    opts: any;
  }>;
}
