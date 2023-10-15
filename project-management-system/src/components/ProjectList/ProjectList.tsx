import React, { useState } from "react";
import { nanoid } from "nanoid";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectList.module.scss";
import { Modal } from "../Modal/Modal";

export default function ProjectList() {
  const [isModalActive, setIsModalActive] = useState(false);
  const generateUniqueKey = () => nanoid();
  const projectList = [
    "Наименование проекта",
    "Наименование проекта",
    "Наименование проекта",
    "Наименование проекта",
    "Наименование проекта",
    "Наименование проекта",
  ];
  return (
    <section>
      {isModalActive && (
        <Modal setActive={setIsModalActive}>
          <div className={styles.modal}>
            <h3>Создание нового проекта</h3>
            <input placeholder="Введите наименование проекта"></input>
            <input placeholder="Введите описание проекта"></input>
            <input placeholder="Введите цель проекта"></input>
            <p>Выберите дату начала выполнения проекта</p>
            <input type="date"></input>
            <p>Выберите дату завершения проекта</p>
            <input type="date"></input>
            <button onClick={() => setIsModalActive(!isModalActive)}>
              Сохранить
            </button>
          </div>
        </Modal>
      )}
      <div className={styles.upperPart}>
        <label className={styles.label}>
          <Image
            alt="Calendar duotone."
            className="dark:invert"
            width={30}
            height={30}
            priority
            src="svg/search.svg"
          ></Image>
          <input placeholder="Введите название проекта"></input>
        </label>
        <button
          className="image-button"
          onClick={() => setIsModalActive(!isModalActive)}
        >
          <Image
            src="/svg/plusaddmoredetail.svg"
            width={30}
            height={30}
            alt="Добавление проекта"
          />
        </button>
      </div>
      {projectList.map((element, index) => (
        <div className={styles.entry} key={generateUniqueKey()}>
          <Link href={`/project/${index}`}>
            <p>{element}</p>
          </Link>
        </div>
      ))}
    </section>
  );
}
