import { nanoid } from "nanoid";
import Image from "next/image";
import styles from "./ProjectList.module.scss";

export default function ProjectList() {
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
        <button className="image-button">
          <Image
            src="/svg/plusaddmoredetail.svg"
            width={30}
            height={30}
            alt="Изображение кнопки"
          />
        </button>
      </div>
      {projectList.map((element) => (
        <div className={styles.entry} key={generateUniqueKey()}>
          <p>{element}</p>
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
