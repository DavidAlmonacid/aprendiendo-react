import type { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "./constants.ts";

export type Language = keyof typeof SUPPORTED_LANGUAGES;
export type AutoLanguage = typeof AUTO_LANGUAGE;
export type FromLanguage = Language | AutoLanguage;

export interface State {
  fromLanguage: string;
  toLanguage: string;
  text: string;
  translatedText: string;
  isLoading: boolean;
}

export type Action =
  | { type: "SET_FROM_LANGUAGE"; payload: string }
  | { type: "SET_TO_LANGUAGE"; payload: string }
  | { type: "INTERCHANGE_LANGUAGES" }
  | { type: "SET_TEXT"; payload: string }
  | { type: "SET_TRANSLATED_TEXT"; payload: string };
