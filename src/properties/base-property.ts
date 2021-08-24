type PropertyType = 'string' | 'number' | 'select-box';

export abstract class Property {
  abstract required: boolean;
  abstract name: string;

  constructor(public type: PropertyType) {}

  abstract validateProperty(param: any): Promise<boolean>;
}
