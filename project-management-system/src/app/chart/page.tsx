import PieChart from "@/components/PieChart/PieChart";
import styles from "./page.module.scss";
import FormWrapper from "@/components/FormWrapper/FormWrapper";

export default function page() {
  const chartData = {
    labels: ["Не начаты", "Закрыты", "В работе"],
    datasets: [
      {
        data: [50, 80, 60],
        backgroundColor: ["#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };
  const taskData = {
    labels: ["Заблокированные", "Другие", "Задачи проверки кода"],
    datasets: [
      {
        data: [10, 40, 70],
        backgroundColor: ["#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <section>
      <div className={styles.container}>
        <div>
          <h3 className={styles.h3}>Проекты</h3>
          <PieChart data={chartData} />
        </div>
        <div>
          <h3 className={styles.h3}>Задачи</h3>
          <PieChart data={taskData} />
        </div>
      </div>
      <div>
        <FormWrapper>
          <h3 className={styles.h3}>Производительность</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>Индивидуальная</th>
                <th>Команды</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Количество задачи выполнено</td>
                <td>5</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Трудозатрат освоено (ч/д)</td>
                <td>10</td>
                <td>80</td>
              </tr>
            </tbody>
          </table>
        </FormWrapper>
      </div>
    </section>
  );
}
