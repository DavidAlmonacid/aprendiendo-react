import { useEffect, useId, useState } from "react";
import { ClipboardIcon } from "./Icons.tsx";

interface Props {
  isLoading: boolean;
  translatedText: string;
}

export function TranslateArea({ isLoading, translatedText }: Props) {
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

  return (
    <div className="relative w-full h-40 p-2 border border-gray-300 rounded-md">
      <p className="text-lg">{translationText}</p>

      {translatedText !== "" && translatedText !== "Translation" && (
        <footer className="absolute bottom-0 right-0 left-0">
          <div className="flex justify-end px-6 pb-4 text-gray-700">
            <button id={buttonId} onClick={handleCopy}>
              <ClipboardIcon />
            </button>
          </div>
        </footer>
      )}
    </div>
  );
}
