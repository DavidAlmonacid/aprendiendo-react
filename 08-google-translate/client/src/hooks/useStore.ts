import { useReducer } from "react";
import { AUTO_LANGUAGE } from "../constants.ts";
import { ActionType } from "../types/enums.ts";
import type {
  Action,
  FromLanguage,
  Language,
  State
} from "../types/types.d.ts";

const initialState: State = {
  fromLanguage: "auto",
  toLanguage: "en",
  text: "",
  translatedText: "",
  isLoading: false
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionType.SetFromLanguage:
      return {
        ...state,
        fromLanguage: action.payload
      };
    case ActionType.SetToLanguage: {
      const isLoading = state.text !== "";

      return {
        ...state,
        toLanguage: action.payload,
        translatedText: "",
        isLoading
      };
    }
    case ActionType.InterchangeLanguages: {
      if (state.fromLanguage === AUTO_LANGUAGE) {
        return state;
      }

      const isLoading = state.text !== "";

      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage,
        text:
          state.translatedText !== "Translation" ? state.translatedText : "",
        translatedText: "",
        isLoading
      };
    }
    case ActionType.SetText:
      return {
        ...state,
        text: action.payload,
        translatedText: "",
        isLoading: true
      };
    case ActionType.SetTranslatedText:
      return {
        ...state,
        translatedText: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}

export function useStore() {
  const [
    { fromLanguage, toLanguage, text, translatedText, isLoading },
    dispatch
  ] = useReducer(reducer, initialState);

  const interchangeLanguages = () => {
    dispatch({ type: ActionType.InterchangeLanguages });
  };

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: ActionType.SetFromLanguage, payload });
  };

  const setToLanguage = (payload: Language) => {
    dispatch({ type: ActionType.SetToLanguage, payload });
  };

  const setText = (payload: string) => {
    dispatch({ type: ActionType.SetText, payload });
  };

  const setTranslatedText = (payload: string) => {
    dispatch({ type: ActionType.SetTranslatedText, payload });
  };

  return {
    fromLanguage,
    toLanguage,
    text,
    translatedText,
    isLoading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setText,
    setTranslatedText
  };
}
