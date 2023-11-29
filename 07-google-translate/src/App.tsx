import { InterchangeIcon } from './components/Icons.tsx';
import { LanguageSelector } from './components/LanguageSelector.tsx';
import { AUTO_LANGUAGE } from './constants.ts';
import { useStore } from './hooks/useStore.ts';
import { SelectorType } from './types.d';

function App() {
  const {
    fromLanguage,
    toLanguage,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage
  } = useStore();

  return (
    <>
      <h1 className='mb-6 text-3xl text-center'>Google translate</h1>

      <div className='container mx-auto grid justify-items-center gap-4 md:grid-cols-[1fr,auto,1fr]'>
        <section className='flex-grow text-center w-full'>
          <LanguageSelector
            type={SelectorType.FROM}
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          {fromLanguage}
        </section>

        <div>
          <button
            className='py-1.5 px-2.5 opacity-80 cursor-pointer disabled:opacity-60'
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={() => {
              interchangeLanguages();
            }}
          >
            <InterchangeIcon />
          </button>
        </div>

        <section className='flex-grow text-center w-full'>
          <LanguageSelector
            type={SelectorType.TO}
            value={toLanguage}
            onChange={setToLanguage}
          />
          {toLanguage}
        </section>
      </div>
    </>
  );
}

export default App;
