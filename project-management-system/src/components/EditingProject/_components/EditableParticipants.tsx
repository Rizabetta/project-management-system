import React from "react";

type Props = {
  onRemove: (id: string) => void;
  onAdd: (id: string) => void;
  isEdit: boolean;
  currentValues: { id: string; name: string }[];
  values: { id: string; name: string }[];
};

export default function EditableParticipants({
  onRemove,
  onAdd,
  isEdit,
  currentValues,
  values,
}: Props) {
  return (
    <div>
      <div>
        {currentValues.map(({ id, name }) => (
          <div key={id}>
            {name}
            {isEdit && (
              <button type="button" onClick={() => onRemove(id)}>
                Удалить
              </button>
            )}
          </div>
        ))}
      </div>
      <div>
        <select value="Добавить" onChange={(e) => onAdd(e.target.value)}>
          <option disabled>Добавить</option>
          {values
            .filter(({ id, name }) => currentValues.every((v) => v.id !== id))
            .map((i) => (
              <option key={i.id} value={i.id}>
                {i.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}
