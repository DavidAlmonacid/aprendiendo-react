interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function TextArea({ value, onChange }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <textarea
      className="w-full h-40 p-2 border border-gray-300 rounded-md"
      placeholder="Enter text"
      value={value}
      onChange={handleChange}
      autoFocus
    />
  );
}
