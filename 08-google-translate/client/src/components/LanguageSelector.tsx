import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants.ts";
import { SectionType } from "../types/enums.ts";
import type { FromLanguage, Language } from "../types/types.d.ts";

type Props =
  | {
      type: SectionType.From;
      value: FromLanguage;
      onChange: (language: FromLanguage) => void;
    }
  | {
      type: SectionType.To;
      value: Language;
      onChange: (language: Language) => void;
    };

export function LanguageSelector({ type, value, onChange }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language);
  };

  return (
    <select
      className="block w-full py-2 px-3 border border-gray-400 rounded-lg mb-2.5"
      aria-label="Select a language"
      value={value}
      onChange={handleChange}
    >
      {type === SectionType.From && (
        <option value={AUTO_LANGUAGE}>Detect language</option>
      )}

      {Object.entries(SUPPORTED_LANGUAGES).map(([code, name]) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
}
