import Container, { Token } from 'typedi';
import { IMessagingManager } from '.';
import { SensorReading } from '../messages/sockets/sensor-reading';
import { Property } from '../properties';
import { Validatable } from '../properties/validatable';

export const SensorToken = new Token<Sensor>('sensors');

export interface ISensor {
  run: (params: any) => Promise<number>;
  validate: (params: any) => Promise<boolean>;
  sensorType: string;
}

export abstract class Sensor extends Validatable implements ISensor {
  private messagingManager: IMessagingManager;

  constructor(public sensorType: string, public properties: Property[]) {
    super(properties);

    this.messagingManager = Container.get<IMessagingManager>(IMessagingManager);
  }

  protected async dataRecieved(sensor_id: string, value: number) {
    await this.messagingManager.sendMessage(SensorReading)({
      sensor_id,
      value,
    });
  }

  public abstract run(params: any): Promise<number>;
}
