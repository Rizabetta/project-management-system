"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import EditableText from "./_components/EditableText";
import EditableDate from "./_components/EditableDate";
import EditableSelect from "./_components/EditableSelect";
import { nanoid as generateUniqueKey } from "nanoid";
import EditableParticipants from "./_components/EditableParticipants";
import styles from "./EditingProject.module.scss";
import Image from "next/image";

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
  const [isSave, setIsSave] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    objective: "",
    timeline: { from: "", to: "" },
    responsiblePerson: "",
    participants: [],
    status: "статус не указан",
  });

  const [localData, setlocalData] = useState<FormData>(
    formData ?? {
      name: "",
      description: "",
      objective: "",
      timeline: { from: "", to: "" },
      responsiblePerson: "",
      participants: [],
      status: "status",
    }
  );
  useEffect(() => {
    setlocalData(
      formData ?? {
        name: "",
        description: "",
        objective: "",
        timeline: { from: "", to: "" },
        responsiblePerson: "",
        participants: [],
        status: "status",
      }
    );
  }, [formData]);

  const changeTextHandler = (key: string, value: string) => {
    setlocalData({ ...localData, [key]: value });
  };

  const changeTimelineHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setlocalData({
      ...localData,
      timeline: { ...localData.timeline, [e.target.name]: e.target.value },
    });
  };
  const changeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setlocalData({ ...localData, [e.target.name]: e.target.value });
  };

  const editableTextList = [
    {
      title: "Наименование проекта",
      name: "name",
      value: localData.name,
    },
    {
      title: "Описание проекта",
      name: "description",
      value: localData.description,
    },
    {
      title: "Цель проекта",
      name: "objective",
      value: localData.objective,
    },
  ];

  const editableSelectList = [
    {
      title: "Статус",
      options: [
        { value: "в работе" },
        { value: "закрыт" },
        { value: "не начат" },
      ],
      name: "status",
      value: localData.status,
    },
    {
      title: "Ответственное лицо",
      options: users.map(({ id, name }) => ({ id, value: name })),
      name: "responsiblePerson",
      value:
        users.find((user) => user.id === localData.responsiblePerson)?.name ??
        "не указан",
    },
  ];

  const onParticipantsAdd = (id: string) => {
    const res = localData.participants;
    const currentUser = users.find((u) => u.id === id);
    if (currentUser) {
      res.push(currentUser);
      setlocalData({ ...localData, participants: res });
    }
  };

  const onParticipantsRemove = (id: string) => {
    setlocalData({
      ...localData,
      participants: localData.participants.filter((p) => p.id !== id),
    });
  };

  const onSave = () => {
    setFormData(localData);
    setIsEdit(false);
    setIsSave(true);
  };
  const onCancel = () => {
    setlocalData(formData);
    setIsEdit(false);
    setIsSave(false);
  };
  console.log(localData);

  return (
    <section className={styles.container}>
      <Image
        src="/svg/pencil-striped.svg"
        width={30}
        height={30}
        alt="Изображение кнопки"
      />
      <h3 className={styles.title}>Редактирование проекта</h3>

      {editableTextList.map(({ title, name, value }) => (
        <EditableText
          isSave={isSave}
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
        timeline={localData.timeline}
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
        currentValues={localData.participants}
      />
      <button onClick={() => (isEdit ? onSave() : setIsEdit(!isEdit))}>
        {isEdit ? "Сохранить" : "Редактировать"}
      </button>
      {isEdit && <button onClick={onCancel}>Отменить</button>}
    </section>
  );
}
