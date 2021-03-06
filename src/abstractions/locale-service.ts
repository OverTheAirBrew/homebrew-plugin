import { ClassType } from '../class-type';

export interface ILocaleService {
  generateLocalizations(ppluginLocalisations: string[]): Promise<void>;
  setLocale(locales: string[]): Promise<void>;
  getTranslatedVersion(id: string): Promise<string>;
}

export const ILocaleService = class Dummy {} as ClassType<ILocaleService>;
