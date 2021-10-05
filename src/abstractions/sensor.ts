import Container, { Token } from 'typedi';
import { IMessagingManager } from '.';
import { SensorReading } from '../messages/sockets/sensor-reading';
import { Property } from '../properties';
import { Validatable } from '../properties/validatable';

export const SensorToken = new Token<Sensor>('sensors');

export abstract class Sensor extends Validatable {
  private messagingManager: IMessagingManager;

  constructor(
    public sensorType: string,
    public properties: Property[],
    public saveTelemetry: boolean = true,
  ) {
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
