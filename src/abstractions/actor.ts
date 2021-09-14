import { Token } from 'typedi';
import { Property } from '../properties';
import { Validatable } from '../properties/validatable';

export const ActorToken = new Token<Actor>('actors');

export abstract class Actor extends Validatable {
  constructor(public actorName: string, public properties: Property[]) {
    super(properties);
  }

  abstract on(params: any): Promise<void>;
  abstract off(params: any): Promise<void>;
}
