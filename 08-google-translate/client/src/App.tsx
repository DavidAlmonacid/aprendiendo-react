import { ArrowsSwap } from "./components/Icons.tsx";
import { useStore } from "./hooks/useStore.ts";
import { AUTO_LANGUAGE } from "./types/constants.ts";

function App() {
  const { fromLanguage, toLanguage, interchangeLanguages } = useStore();

  return (
    <div>
      <h1>Google Translate</h1>

      <div className="grid grid-cols-[1fr_min-content_1fr] max-w-3xl mx-auto">
        <section>
          <h2>from</h2>
          {fromLanguage}
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
          <h2>to</h2>
          {toLanguage}
        </section>
      </div>
    </div>
  );
}

export default App;
