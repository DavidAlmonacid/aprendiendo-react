import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from './constants.ts';

export interface State {
  fromLanguage: FromLanguage;
  toLanguage: Language;
  text: string;
  translatedText: string;
  isTranslating: boolean;
}

export type Action =
  | { type: ActionType.INTERCHANGE_LANGUAGES }
  | { type: ActionType.SET_FROM_LANGUAGE; payload: FromLanguage }
  | { type: ActionType.SET_TO_LANGUAGE; payload: Language }
  | { type: ActionType.SET_TEXT; payload: string }
  | { type: ActionType.SET_TRANSLATED_TEXT; payload: string };

export enum ActionType {
  INTERCHANGE_LANGUAGES = 'INTERCHANGE_LANGUAGES',
  SET_FROM_LANGUAGE = 'SET_FROM_LANGUAGE',
  SET_TO_LANGUAGE = 'SET_TO_LANGUAGE',
  SET_TEXT = 'SET_TEXT',
  SET_TRANSLATED_TEXT = 'SET_TRANSLATED_TEXT'
}

export type Language = keyof typeof SUPPORTED_LANGUAGES;

export type AutoLanguage = typeof AUTO_LANGUAGE;

export type FromLanguage = Language | AutoLanguage;

export enum SelectorType {
  FROM = 'from',
  TO = 'to'
}
