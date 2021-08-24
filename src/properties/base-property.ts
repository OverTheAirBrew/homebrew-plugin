export abstract class Property {
  abstract required: boolean;
  abstract name: string;

  constructor(public type: 'string' | 'select-box') {}

  abstract validateProperty(param: any): Promise<boolean>;
}
