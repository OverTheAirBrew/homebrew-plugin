import { Actor, Logic, Sensor } from '.';

export interface IPackageConfig {
  sensors?: typeof Sensor[];
  actors?: typeof Actor[];
  logics?: typeof Logic[];
  localesDirectory: string;
}
