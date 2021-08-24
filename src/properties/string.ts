import { Property } from './base-property';

export class StringProperty extends Property {
  constructor(
    public name: string,
    public placeholder: string,
    public required: boolean,
  ) {
    super('string');
  }

  public async validateProperty(param: string | undefined) {
    if (this.required && !param) {
      return false;
    }

    return true;
  }
}
