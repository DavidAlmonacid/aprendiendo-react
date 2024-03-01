import { useEffect } from "react";
import { AUTO_LANGUAGE } from "./constants.ts";
import { useStore } from "./hooks/useStore.ts";
import { SectionType } from "./types/enums.ts";

import { ArrowsSwap } from "./components/Icons.tsx";
import { LanguageSelector } from "./components/LanguageSelector.tsx";
import { TextArea } from "./components/TextArea.tsx";
import { TranslateArea } from "./components/TranslateArea.tsx";

function App() {
  const {
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
  } = useStore();

  useEffect(() => {
    if (text === "") {
      setTranslatedText("Translation");
      return;
    }

    fetch(
      `${import.meta.env.VITE_API_URL}?from=${fromLanguage}&to=${toLanguage}&text=${text}`
    )
      .then((res) => res.json())
      .then(({ translatedText }) => setTranslatedText(translatedText));
  }, [text, fromLanguage, toLanguage]);

  return (
    <div className="px-5">
      <h1>Google Translate</h1>

      <div className="grid grid-cols-[1fr_min-content_1fr] max-w-4xl mx-auto">
        <section>
          <LanguageSelector
            type={SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          <TextArea value={text} onChange={setText} />
        </section>

        <div>
          <button
            disabled={fromLanguage === AUTO_LANGUAGE}
            className="disabled:opacity-40 disabled:cursor-auto"
            onClick={() => interchangeLanguages()}
          >
            <ArrowsSwap />
          </button>
        </div>

        <section>
          <LanguageSelector
            type={SectionType.To}
            value={toLanguage}
            onChange={setToLanguage}
          />
          <TranslateArea
            isLoading={isLoading}
            translatedText={translatedText}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
