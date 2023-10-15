import React, { useState } from "react";
import { nanoid } from "nanoid";
import Image from "next/image";
import styles from "./TaskList.module.scss";
import { Modal } from "../Modal/Modal";

export default function TaskList() {
  const [isModalActive, setIsModalActive] = useState(false);
  const generateUniqueKey = () => nanoid();
  const projectList = [
    { title: "Наименование задачи", description: "Описание задачи" },
    { title: "Наименование задачи", description: "Описание задачи" },
    { title: "Наименование задачи", description: "Описание задачи" },
    { title: "Наименование задачи", description: "Описание задачи" },
    { title: "Наименование задачи", description: "Описание задачи" },
    { title: "Наименование задачи", description: "Описание задачи" },
  ];
  return (
    <section>
      {isModalActive && (
        <Modal setActive={setIsModalActive}>
          <div className={styles.modal}>
            <h3>Создание новой задачи</h3>
            <input placeholder="Введите наименование задачи"></input>
            <input placeholder="Введите описание задачи"></input>
            <p>Выберите дату начала выполнения задачи</p>
            <input type="date"></input>
            <p>Выберите дату завершения задачи</p>
            <input type="date"></input>
            <button onClick={() => setIsModalActive(!isModalActive)}>
              Сохранить
            </button>
          </div>
        </Modal>
      )}
      <div className={styles.topPanel}>
        <button onClick={() => setIsModalActive(!isModalActive)}>
          <Image
            src="/svg/plusaddmoredetail.svg"
            width={30}
            height={30}
            alt="Добавление задачи"
          />
        </button>
        <button>
          <Image
            src="/svg/filter.svg"
            width={30}
            height={30}
            alt="Фильтрация"
          />
        </button>
        <button>
          <Image
            src="/svg/alphabetical_sorting_icon_155822.svg"
            width={30}
            height={30}
            alt="Сортировка"
          />
        </button>
      </div>
      {projectList.map(({ title, description }) => (
        <div className={styles.entry} key={generateUniqueKey()}>
          <div>
            <p>{title}</p>
            <p className={styles.description}>{description}</p>
          </div>
          <Image
            src="/svg/pencil-striped.svg"
            width={30}
            height={30}
            alt="Изображение кнопки"
          />
        </div>
      ))}
    </section>
  );
}
