import { useEffect, useState } from "react";

interface Props {
  isLoading: boolean;
  translatedText: string;
}

export function TranslateArea({ isLoading, translatedText }: Props) {
  const [translationText, setTranslationText] = useState("Translation");

  useEffect(() => {
    if (isLoading) {
      setTranslationText("Translating...");
    }

    if (translatedText !== "") {
      setTranslationText(translatedText);
    }
  }, [isLoading, translatedText]);

  return (
    <div className="w-full h-40 p-2 border border-gray-300 rounded-md">
      <p className="text-lg">{translationText}</p>
    </div>
  );
}
