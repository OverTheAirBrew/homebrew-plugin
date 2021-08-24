import Container, { Token } from 'typedi';
import { SocketIo } from '@overtheairbrew/socket-io';
import { SensorReading } from './messages/sockets/sensor-reading';
import { Property } from './properties';

export const SensorToken = new Token<Sensor>('sensors');

export interface ISensor {
  run: (params: any) => Promise<number>;
  validate: (params: any) => Promise<boolean>;
  sensorType: string;
}

export abstract class Sensor implements ISensor {
  private socket: SocketIo;

  constructor(public sensorType: string, public properties: Property[]) {
    this.socket = Container.get<SocketIo>(SocketIo);
  }

  protected async dataRecieved(sensor_id: string, value: number) {
    await this.socket.send(SensorReading)({
      sensor_id,
      value,
    });
  }

  public abstract run(params: any): Promise<number>;

  public async validate(params: any): Promise<boolean> {
    const validationResults = await Promise.all(
      this.properties.map((prop) => prop.validateProperty(params[prop.name])),
    );

    return !validationResults.some((res) => !res);
  }
}
