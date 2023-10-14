import React, { ChangeEvent } from "react";

type Props = {
  isEdit: boolean;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  title: string;
};

export default function EditableText({
  isEdit,
  name,
  onChange,
  value,
  title,
}: Props) {
  return (
    <div>
      {title}:
      {isEdit ? (
        <input name={name} value={value} onChange={onChange}></input>
      ) : (
        value
      )}
    </div>
  );
}
