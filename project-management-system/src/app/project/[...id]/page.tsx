"use client";
import EditingProject from "@/components/EditingProject/EditingProject";
import FormWrapper from "@/components/FormWrapper/FormWrapper";
import { useParams } from "next/navigation";
import React from "react";
import TaskList from "@/components/TaskList/TaskList";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";

type Props = {};

export default function page({}: Props) {
  const handleFormSubmit = (data: any) => {
    console.log("Form data submitted:", data);
  };
  const { id } = useParams();
  return (
    <section>
      <FormWrapper>
        <EditingProject onSubmit={handleFormSubmit}></EditingProject>
      </FormWrapper>
      <FormWrapper>
        <TaskList />
      </FormWrapper>
      <ScrollToTopButton />
    </section>
  );
}
