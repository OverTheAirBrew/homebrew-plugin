import { Property } from '.';

export class NumberProperty extends Property {
  constructor(public name: string, public required: boolean) {
    super('number');
  }

  public async validateProperty(param: any) {
    if (this.required && !param) {
      return false;
    }

    const parsedValue = parseInt(param);
    return !!parsedValue;
  }
}
