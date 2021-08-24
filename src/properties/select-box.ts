import { Property } from './base-property';

export class SelectBoxProperty<T extends string | number> extends Property {
  constructor(
    public name: string,
    public values: T[],
    public defaultValue: T,
    public required: boolean,
  ) {
    super('select-box');
  }

  public async validateProperty(value: T | undefined) {
    if (this.required && !this.values) {
      return false;
    }

    if (!value) {
      return true;
    }

    return this.values.includes(value);
  }
}
