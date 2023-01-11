import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:
      </label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={setTitle}
        required />
      <label htmlFor="contact">Contact:</label>
      <ContactPicker
        id="contact"
        contact={contact}
        contacts={contacts}
        onChange={setContact} />
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={setDate}
        min={getTodayString()}
        required />
      <label htmlFor="time">Time:</label>
      <input
        type="time"
        id="time"
        value={time}
        onChange={setTime}
        required />
      <button type="submit">Save</button>
    </form>
  );
};
