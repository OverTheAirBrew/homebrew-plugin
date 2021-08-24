import { Property } from '.';
import { Validatable } from './properties/validatable';

interface IActor {
  actorName: string;

  on(params: any): Promise<void>;
  off(params: any): Promise<void>;

  validate: (params: any) => Promise<boolean>;
}

export abstract class Actor extends Validatable implements IActor {
  constructor(public actorName: string, public properties: Property[]) {
    super(properties);
  }

  abstract on(params: any): Promise<void>;
  abstract off(params: any): Promise<void>;
}
