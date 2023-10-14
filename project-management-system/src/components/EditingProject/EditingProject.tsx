"use client";
import React, { ChangeEvent, useState } from "react";
import EditableText from "./_components/EditableText";
import EditableDate from "./_components/EditableDate";
import EditableSelect from "./_components/EditableSelect";
import { nanoid as generateUniqueKey } from "nanoid";
import EditableParticipants from "./_components/EditableParticipants";
interface FormData {
  name: string;
  description: string;
  objective: string;
  timeline: { from: string; to: string };
  responsiblePerson: string;
  participants: { id: string; name: string }[];
  status: string;
}

const users = [
  { id: "1", name: "name1" },
  { id: "2", name: "name2" },
  { id: "3", name: "name3" },
  { id: "4", name: "name4" },
  { id: "5", name: "name5" },
];

interface MyFormProps {
  onSubmit: (data: FormData) => void;
}
export default function EditingProject({ onSubmit }: MyFormProps) {
  const [isEdit, setIsEdit] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    objective: "",
    timeline: { from: "", to: "" },
    responsiblePerson: "",
    participants: [],
    status: "test",
  });

  const changeTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const changeTimelineHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      timeline: { ...formData.timeline, [e.target.name]: e.target.value },
    });
  };
  const changeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const editableTextList = [
    {
      title: "Наименование проекта",
      name: "name",
      value: formData.name,
    },
    {
      title: "Описание проекта",
      name: "description",
      value: formData.description,
    },
    {
      title: "Цель проекта",
      name: "objective",
      value: formData.objective,
    },
  ];

  const editableSelectList = [
    {
      title: "Статус",
      options: [
        { value: "в работе" },
        { value: "завершен" },
        { value: "не начат" },
      ],
      name: "status",
      value: formData.status,
    },
    {
      title: "Ответственное лицо",
      options: users.map(({ id, name }) => ({ id, value: name })),
      name: "responsiblePerson",
      value:
        users.find((user) => user.id === formData.responsiblePerson)?.name ??
        "не указан",
    },
  ];

  const onParticipantsAdd = (id: string) => {
    const res = formData.participants;
    const currentUser = users.find((u) => u.id === id);
    if (currentUser) {
      res.push(currentUser);
      setFormData({ ...formData, participants: res });
    }
  };

  const onParticipantsRemove = (id: string) => {
    setFormData({
      ...formData,
      participants: formData.participants.filter((p) => p.id !== id),
    });
  };

  console.log(formData);

  return (
    <section>
      <h3>Редактирование проекта</h3>
      {editableTextList.map(({ title, name, value }) => (
        <EditableText
          key={generateUniqueKey()}
          title={title}
          isEdit={isEdit}
          name={name}
          value={value ?? ""}
          onChange={changeTextHandler}
        />
      ))}
      <EditableDate
        onChange={changeTimelineHandler}
        timeline={formData.timeline}
        isEdit={isEdit}
      />
      {editableSelectList.map(({ options, name, value }) => (
        <EditableSelect
          key={generateUniqueKey()}
          name={name}
          onChange={changeSelectHandler}
          isEdit={isEdit}
          value={value}
          options={options}
        />
      ))}
      <EditableParticipants
        onRemove={onParticipantsRemove}
        onAdd={onParticipantsAdd}
        isEdit={isEdit}
        values={users}
        currentValues={formData.participants}
      />
      <button onClick={() => setIsEdit(!isEdit)}>
        {isEdit ? "Сохранить" : "Редактировать"}
      </button>
    </section>
  );
}
