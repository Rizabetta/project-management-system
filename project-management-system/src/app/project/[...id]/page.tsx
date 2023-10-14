"use client";

import EditingProject from "@/components/EditingProject/EditingProject";
import { useParams } from "next/navigation";
import React from "react";

type Props = {};

export default function page({}: Props) {
  const handleFormSubmit = (data: any) => {
    // Обработка отправки данных формы
    console.log("Form data submitted:", data);
  };
  const { id } = useParams();
  return (
    <section>
      {id}
      <EditingProject onSubmit={handleFormSubmit}></EditingProject>
    </section>
  );
}
