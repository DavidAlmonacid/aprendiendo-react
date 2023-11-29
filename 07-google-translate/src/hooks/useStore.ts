import { useReducer } from 'react';
import { AUTO_LANGUAGE } from '../constants.ts';
import type { Action, FromLanguage, Language, State } from '../types.d.ts';

const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  text: '',
  translatedText: '',
  isTranslating: false
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'INTERCHANGE_LANGUAGES':
      if (state.fromLanguage === AUTO_LANGUAGE) {
        return state;
      }

      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
      };

    case 'SET_FROM_LANGUAGE':
      return {
        ...state,
        fromLanguage: action.payload
      };

    case 'SET_TO_LANGUAGE':
      return {
        ...state,
        toLanguage: action.payload
      };

    case 'SET_TEXT':
      return {
        ...state,
        text: action.payload,
        isTranslating: true,
        translatedText: ''
      };

    case 'SET_TRANSLATED_TEXT':
      return {
        ...state,
        translatedText: action.payload,
        isTranslating: false
      };
  }
}

export function useStore() {
  const [
    { fromLanguage, toLanguage, text, translatedText, isTranslating },
    dispatch
  ] = useReducer(reducer, initialState);

  const interchangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' });
  };

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload });
  };

  const setToLanguage = (payload: Language) => {
    dispatch({ type: 'SET_TO_LANGUAGE', payload });
  };

  const setText = (payload: string) => {
    dispatch({ type: 'SET_TEXT', payload });
  };

  const setTranslatedText = (payload: string) => {
    dispatch({ type: 'SET_TRANSLATED_TEXT', payload });
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
    setTranslatedText
  };
}
