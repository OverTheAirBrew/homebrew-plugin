import { Property } from '.';

export class NumberProperty extends Property {
  constructor(public name: string, public required: boolean) {
    super('number');
  }

  public async validateProperty(param: number | undefined) {
    if (this.required && !param) {
      return false;
    }

    return true;
  }
}
