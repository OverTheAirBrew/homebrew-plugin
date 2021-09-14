import { Contract } from '..';
import { ClassType } from '../class-type';

export interface IMessagingManager {
  sendMessage<Data>(message: Contract<Data>): (message: Data) => Promise<void>;
}

export const IMessagingManager = class Dummy {} as ClassType<IMessagingManager>;
