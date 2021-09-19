import Container from 'typedi';
import { ILogger } from '..';
import { Property } from './base-property';

export class SelectBoxProperty<T extends string | number> extends Property {
  constructor(
    public name: string,
    public defaultValue: T,
    public required: boolean,
    public values?: T[],
    public serverLoad?: () => Promise<T[]>,
  ) {
    super('select-box');

    if (typeof serverLoad !== undefined && values.length) {
      const logger = Container.get(ILogger);
      logger.warn(`Ignoring values as plugin is set to load from the server`);
    }
  }

  public async getValues(): Promise<T[]> {
    if (typeof this.serverLoad !== 'undefined') {
      return await this.serverLoad();
    }

    return this.values;
  }

  public async validateProperty(value: T | undefined) {
    if (this.required && !this.values) {
      return false;
    }

    if (!value) {
      return true;
    }

    const values = await this.getValues();
    return values.includes(value);
  }
}
