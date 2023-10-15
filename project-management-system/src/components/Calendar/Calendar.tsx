"use client"
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import styles from "./Calendar.module.scss";

export default function MyCalendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());
  const [notes, setNotes] = useState<{ [date: string]: string }>({});

  const handleDateChange = (value: any, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setSelectedDate(value);
  };

  const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNotes = { ...notes };
    newNotes[format(selectedDate, 'yyyy-MM-dd')] = event.target.value;
    setNotes(newNotes);
  };    
  return (
    <div className={styles.container}>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <div>
        <p>Выбранная дата: {format(selectedDate, 'dd.MM.yyyy')}</p>
        <input
          type="text"
          placeholder="Введите задачу"
          onChange={handleNoteChange}
        />
        <p>Задача на эту дату: {notes[format(selectedDate, 'yyyy-MM-dd')]}</p>
      </div>
    </div>
  );
}
