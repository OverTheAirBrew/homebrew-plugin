import { ClassType } from '../class-type';

export interface ILogger {
  debug(message: string, ...args: any[]): Promise<void>;
  info(message: string, ...args: any[]): Promise<void>;
  warn(message: string, ...args: any[]): Promise<void>;
  error(error: Error, ...args: any[]): Promise<void>;
}

export const ILogger = class Dummy {} as ClassType<ILogger>;
