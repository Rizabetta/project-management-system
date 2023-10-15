import React, { ChangeEvent, memo, useEffect, useState } from "react";

type Props = {
  isEdit: boolean;
  name: string;
  onChange: (a: string, b: string) => void;
  value: string;
  title: string;
  isSave: boolean;
};

function EditableText({ isEdit, name, onChange, value, title, isSave }: Props) {
  const [text, setText] = useState(value);
  const localChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      {title}:
      {isEdit ? (
        <input
          name={name}
          value={text}
          onChange={localChange}
          onBlurCapture={() => onChange(name, text)}
        />
      ) : (
        value
      )}
    </div>
  );
}
export default memo(EditableText);
