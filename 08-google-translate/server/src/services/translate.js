import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants.js";

const genAI = new GoogleGenerativeAI(process.env.GEN_AI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export async function translateText({ fromCode, toCode, text }) {
  if (fromCode === toCode) {
    return text;
  }

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts:
          "Act as the best translator in the world. You must infer the language if the source language is: {{auto}}. Source: {{(auto or source language)}}, Target: [[(target language)]]. No explanations or any other text, please, just give me the translated text."
      },
      {
        role: "model",
        parts: "I'll translate the text from the source to the target language."
      },
      {
        role: "user",
        parts: "Hola mundo {{Spanish}} [[English]]"
      },
      {
        role: "model",
        parts: "Hello world"
      },
      {
        role: "user",
        parts: "Quiero almorzar un almuerzo rico hoy. {{Spanish}} [[English]]"
      },
      {
        role: "model",
        parts: "I want to have a delicious lunch today."
      },
      {
        role: "user",
        parts: "How are you? {{auto}} [[German]]"
      },
      {
        role: "model",
        parts: "Wie geht es dir?"
      },
      {
        role: "user",
        parts: "que dia es hoy? {{Spanish}} [[English]]"
      },
      {
        role: "model",
        parts: "What day is today?"
      },
      {
        role: "user",
        parts: "Quelle heure est-il à Bogota? {{French}} [[Portuguese]]"
      },
      {
        role: "model",
        parts: "Que horas são em Bogotá?"
      },
      {
        role: "user",
        parts: "Translate this text. {{auto}} [[Italian]]"
      },
      {
        role: "model",
        parts: "Traduci questo testo."
      },
      {
        role: "user",
        parts:
          "Sono nato a Palermo, ma mi sono trasferito a Los Angeles 3 anni fa. {{Italian}} [[French]]"
      },
      {
        role: "model",
        parts:
          "Je suis né à Palerme, mais j'ai déménagé à Los Angeles il y a 3 ans."
      },
      {
        role: "user",
        parts:
          "Ich bin verheiratet. Ich habe zwei Kinder: einen Jungen und ein Mädchen. Und Sie? {{German}} [[Spanish]]"
      },
      {
        role: "model",
        parts: "Estoy casado. Tengo dos hijos: un niño y una niña. ¿y tú?"
      },
      {
        role: "user",
        parts:
          "Vou comemorar meu aniversário com bolo e jogo de futebol. Você gosta de futebol? {{Portuguese}} [[German]]"
      },
      {
        role: "model",
        parts:
          "Ich werde meinen Geburtstag mit Kuchen und einem Fußballspiel feiern. Magst du Fußball?"
      }
    ]
  });

  const fromLanguage =
    fromCode === AUTO_LANGUAGE ? AUTO_LANGUAGE : SUPPORTED_LANGUAGES[fromCode];
  const targetLanguage = SUPPORTED_LANGUAGES[toCode];

  const msg = `${text} {{${fromLanguage}}} [[${targetLanguage}]]`;

  const result = await chat.sendMessage(msg);
  const response = result.response;
  return response.text();
}
