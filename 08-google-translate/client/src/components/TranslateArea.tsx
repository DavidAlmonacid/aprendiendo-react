import { useEffect, useId, useState } from "react";
import { SUPPORTED_LANGUAGES } from "../constants.ts";
import type { Language } from "../types/types.d.ts";
import { ClipboardIcon, SpeakerIcon } from "./Icons.tsx";

interface Props {
  isLoading: boolean;
  translatedText: string;
  toLanguage: Language;
}

export function TranslateArea({
  isLoading,
  translatedText,
  toLanguage
}: Props) {
  const [translationText, setTranslationText] = useState("Translation");
  const buttonId = useId();

  useEffect(() => {
    if (isLoading) {
      setTranslationText("Translating...");
    }

    if (translatedText !== "") {
      setTranslationText(translatedText);
    }
  }, [isLoading, translatedText]);

  const handleCopy = async () => {
    const copyButton = document.getElementById(buttonId)!;

    try {
      await navigator.clipboard.writeText(translationText);
      copyButton.style.color = "#15803d";

      setTimeout(() => {
        copyButton.style.color = "";
      }, 2000);
    } catch (error) {
      copyButton.style.color = "#be123c";

      setTimeout(() => {
        copyButton.style.color = "";
      }, 2000);
    }
  };

  const synth = window.speechSynthesis;
  const currentTagLanguage = SUPPORTED_LANGUAGES[toLanguage].tag;

  const navigatorVoices = synth?.getVoices();
  const supportedVoices = navigatorVoices?.filter((voice) => {
    return voice.lang === currentTagLanguage;
  });

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(translationText);
    utterance.voice = supportedVoices[0];
    utterance.lang = currentTagLanguage;
    synth.speak(utterance);
  };

  return (
    <div className="relative w-full h-40 p-2 border border-gray-300 rounded-md">
      <p className="text-lg">{translationText}</p>

      {translatedText !== "" && translatedText !== "Translation" && (
        <footer className="absolute bottom-0 right-0 left-0">
          <div className="flex justify-end gap-4 px-6 pb-4 text-gray-700">
            <button id={buttonId} onClick={handleCopy}>
              <ClipboardIcon />
            </button>

            {supportedVoices?.length !== 0 && (
              <button onClick={handleSpeak}>
                <SpeakerIcon />
              </button>
            )}
          </div>
        </footer>
      )}
    </div>
  );
}
