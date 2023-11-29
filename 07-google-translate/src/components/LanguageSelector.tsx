import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants.ts';
import { SelectorType, type FromLanguage, type Language } from '../types.d';

type Props =
  | {
      type: SelectorType.FROM;
      value: FromLanguage;
      onChange: (language: FromLanguage) => void;
    }
  | {
      type: SelectorType.TO;
      value: Language;
      onChange: (language: Language) => void;
    };

export function LanguageSelector({ onChange, type, value }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language);
  };

  return (
    <select
      className='block px-4 py-2 text-gray-700 border border-gray-300 rounded-md w-full shadow-sm focus:ring-primary-500'
      name='languages'
      aria-label='Select a language'
      value={value}
      onChange={handleChange}
    >
      {type === SelectorType.FROM && (
        <option value={AUTO_LANGUAGE}>Detect language</option>
      )}

      {Object.entries(SUPPORTED_LANGUAGES).map(([key, value]) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </select>
  );
}
