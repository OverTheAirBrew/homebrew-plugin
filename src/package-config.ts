import { Actor, Sensor, Logic } from '.';

export interface IPackageConfig {
  sensors?: typeof Sensor[];
  actors?: typeof Actor[];
  logics?: typeof Logic[];
}
