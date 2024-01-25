import { useReducer } from "react";
import { AUTO_LANGUAGE } from "../constants.ts";
import {
  ActionType,
  type Action,
  type FromLanguage,
  type Language,
  type State,
} from "../types.d";

const initialState: State = {
  fromLanguage: "auto",
  toLanguage: "en",
  text: "",
  translatedText: "",
  isTranslating: false,
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionType.INTERCHANGE_LANGUAGES:
      if (state.fromLanguage === AUTO_LANGUAGE) {
        return state;
      }

      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage,
      };

    case ActionType.SET_FROM_LANGUAGE:
      return {
        ...state,
        fromLanguage: action.payload,
      };

    case ActionType.SET_TO_LANGUAGE:
      return {
        ...state,
        toLanguage: action.payload,
      };

    case ActionType.SET_TEXT:
      return {
        ...state,
        text: action.payload,
        isTranslating: true,
        translatedText: "",
      };

    case ActionType.SET_TRANSLATED_TEXT:
      return {
        ...state,
        translatedText: action.payload,
        isTranslating: false,
      };

    default:
      return state;
  }
}

export function useStore() {
  const [
    { fromLanguage, toLanguage, text, translatedText, isTranslating },
    dispatch,
  ] = useReducer(reducer, initialState);

  const interchangeLanguages = () => {
    dispatch({ type: ActionType.INTERCHANGE_LANGUAGES });
  };

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: ActionType.SET_FROM_LANGUAGE, payload });
  };

  const setToLanguage = (payload: Language) => {
    dispatch({ type: ActionType.SET_TO_LANGUAGE, payload });
  };

  const setText = (payload: string) => {
    dispatch({ type: ActionType.SET_TEXT, payload });
  };

  const setTranslatedText = (payload: string) => {
    dispatch({ type: ActionType.SET_TRANSLATED_TEXT, payload });
  };

  return {
    fromLanguage,
    toLanguage,
    text,
    translatedText,
    isTranslating,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setText,
    setTranslatedText,
  };
}
