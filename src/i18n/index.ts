import * as enUS from './en-US.json';
import * as ptBR from './pt-BR.json';

export const defaultLang = 'en-US';

type Translations = {
  [key: string]: Record<string, string>;
}

const translations: Translations = {
    'en-US': enUS,
    'pt-BR': ptBR,
}

export default translations;
