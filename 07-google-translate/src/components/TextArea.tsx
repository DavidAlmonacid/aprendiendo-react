import { SelectorType } from "../types.d";

interface Props {
  type: SelectorType;
  value: string;
  isTranslating?: boolean;
  onChange: (value: string) => void;
}

export function TextArea({ type, value, isTranslating, onChange }: Props) {
  const getPlaceholder = ({
    type,
    isTranslating,
  }: {
    type: SelectorType;
    isTranslating?: boolean;
  }) => {
    if (type === SelectorType.FROM) {
      return "Enter text";
    }

    if (type === SelectorType.TO && isTranslating) {
      return "Translating...";
    } else {
      return "Translation";
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="mt-3">
      <textarea
        className="px-3.5 py-1 w-full outline-none text-xl placeholder-gray-500"
        placeholder={getPlaceholder({ type, isTranslating })}
        value={value}
        autoFocus={type === SelectorType.FROM}
        readOnly={type === SelectorType.TO}
        onChange={handleChange}
      />
    </div>
  );
}
