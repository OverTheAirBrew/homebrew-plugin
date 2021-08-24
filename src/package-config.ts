import { Actor, Sensor } from '.';

export interface IPackageConfig {
  sensors?: typeof Sensor[];
  actors?: typeof Actor[];
}
