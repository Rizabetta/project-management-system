import React, { ChangeEvent } from "react";

type Props = {
  isEdit: boolean;
  value: string;
  options: { id?: string; value: string }[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  name: string;
};

export default function EditableSelect({
  name,
  isEdit,
  value,
  options,
  onChange,
}: Props) {
  if (!isEdit) return <div>{value}</div>;
  return (
    <div>
      <select onChange={onChange} name={name}>
        {options.map((option) => (
          <option key={option.value} value={option.id ?? option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}
