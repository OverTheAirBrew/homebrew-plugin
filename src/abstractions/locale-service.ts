import { ClassType } from '../class-type';

interface ILocaleService {
  generateLocalizations(): Promise<void>;
  setLocale(locales: string[]): Promise<void>;
  getTranslatedVersion(id: string): Promise<string>;
}

export const ILocaleService = class Dummy {} as ClassType<ILocaleService>;
