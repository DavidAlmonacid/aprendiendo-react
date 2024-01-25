import { InterchangeIcon } from "./components/Icons.tsx";
import { LanguageSelector } from "./components/LanguageSelector.tsx";
import { TextArea } from "./components/TextArea.tsx";
import { AUTO_LANGUAGE } from "./constants.ts";
import { useStore } from "./hooks/useStore.ts";
import { SelectorType } from "./types.d";

function App() {
  const {
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
  } = useStore();

  return (
    <>
      <h1 className="mb-6 text-3xl text-center">Google translate</h1>

      <div className="container mx-auto grid justify-items-center gap-4 md:grid-cols-[1fr,auto,1fr] max-w-6xl px-10">
        <section className="flex-grow text-center w-full">
          <LanguageSelector
            type={SelectorType.FROM}
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          <TextArea type={SelectorType.FROM} value={text} onChange={setText} />
        </section>

        <div>
          <button
            className="py-1.5 px-2.5 opacity-80 cursor-pointer disabled:opacity-60 disabled:cursor-default"
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={() => {
              interchangeLanguages();
            }}
          >
            <InterchangeIcon />
          </button>
        </div>

        <section className="flex-grow text-center w-full">
          <LanguageSelector
            type={SelectorType.TO}
            value={toLanguage}
            onChange={setToLanguage}
          />
          <TextArea
            type={SelectorType.TO}
            value={translatedText}
            isTranslating={isTranslating}
            onChange={setTranslatedText}
          />
        </section>
      </div>
    </>
  );
}

export default App;
