"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import styles from "./PieChart.module.scss";

type Props = {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
      hoverBackgroundColor: string[];
    }[];
  };
};

export default function PieChart({ data }: Props) {
  return (
    <div className={styles.container}>
      <Pie data={data} />
    </div>
  );
}
