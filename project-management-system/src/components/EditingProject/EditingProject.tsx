"use client";
import React, { useState } from "react";
interface FormData {
  firstName: string;
  lastName: string;
}

interface MyFormProps {
  onSubmit: (data: FormData) => void;
}
export default function EditingProject({ onSubmit }: MyFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return (
    <section>
      <h3>Редактирование проекта</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Сохранить</button>
        </div>
      </form>
    </section>
  );
}
