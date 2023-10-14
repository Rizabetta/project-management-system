import React, { ChangeEvent } from "react";

type Props = {
  timeline: { from: string; to: string };
  isEdit: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function EditableDate({ timeline, isEdit, onChange }: Props) {
  return (
    <div>
      Сроки:
      <input
        onChange={onChange}
        name="from"
        disabled={!isEdit}
        type="date"
        value={timeline.from}
      />
      <input
        onChange={onChange}
        min={timeline.from}
        name="to"
        disabled={!isEdit}
        type="date"
        value={timeline.to}
      />
    </div>
  );
}
