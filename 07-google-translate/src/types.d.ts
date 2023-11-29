import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from './constants.ts';

export interface State {
  fromLanguage: FromLanguage;
  toLanguage: Language;
  text: string;
  translatedText: string;
  isTranslating: boolean;
}

export type Action =
  | { type: 'INTERCHANGE_LANGUAGES' }
  | { type: 'SET_FROM_LANGUAGE'; payload: FromLanguage }
  | { type: 'SET_TO_LANGUAGE'; payload: Language }
  | { type: 'SET_TEXT'; payload: string }
  | { type: 'SET_TRANSLATED_TEXT'; payload: string };

export type Language = keyof typeof SUPPORTED_LANGUAGES;

export type AutoLanguage = typeof AUTO_LANGUAGE;

export type FromLanguage = Language | AutoLanguage;

export enum SelectorType {
  FROM = 'from',
  TO = 'to'
}
