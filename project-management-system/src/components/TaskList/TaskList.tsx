import { nanoid } from "nanoid";
import Image from "next/image";
import styles from "./TaskList.module.scss";

export default function TaskList() {
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
      <div className={styles.topPanel}>
        <button>
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
