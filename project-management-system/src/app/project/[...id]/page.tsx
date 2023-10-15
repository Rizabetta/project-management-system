"use client";

import EditingProject from "@/components/EditingProject/EditingProject";
import FormWrapper from "@/components/FormWrapper/FormWrapper";
import ActivityHistory from "@/components/ActivityHistory/ActivityHistory";
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
      {id}
      <FormWrapper>
        <EditingProject onSubmit={handleFormSubmit}></EditingProject>
      </FormWrapper>
      <FormWrapper>
        <ActivityHistory/>
      </FormWrapper>
      <FormWrapper>
        <TaskList/>
      </FormWrapper>
      <ScrollToTopButton />
    </section>
  );
}
