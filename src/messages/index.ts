export * from './sockets/sensor-reading';

export interface Contract<Data extends Object> {
  EventName: string;
  Data: Data;
}
