import type { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants.ts";
import type { ActionType } from "./enums.ts";

export type Language = keyof typeof SUPPORTED_LANGUAGES;
export type AutoLanguage = typeof AUTO_LANGUAGE;
export type FromLanguage = Language | AutoLanguage;

export interface State {
  fromLanguage: FromLanguage;
  toLanguage: Language;
  text: string;
  translatedText: string;
  isLoading: boolean;
}

export type Action =
  | { type: ActionType.SetFromLanguage; payload: FromLanguage }
  | { type: ActionType.SetToLanguage; payload: Language }
  | { type: ActionType.InterchangeLanguages }
  | { type: ActionType.SetText; payload: string }
  | { type: ActionType.SetTranslatedText; payload: string };
