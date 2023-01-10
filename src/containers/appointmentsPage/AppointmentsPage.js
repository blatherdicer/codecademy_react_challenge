import React, { useState } from "react";
import { TileList } from "../../components/tileList/TileList";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";

export const AppointmentsPage = (props) => {

  const {appointments, contacts, addAppointment} = props;

  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const updateTitle = ({ target }) => {
    setTitle(target.value);
  };

  const updateContact = ({target}) => {
    setContact(target.value);
  };

  const updateDate = ({target}) => {
    setDate(target.value);
  };
  
  const updateTime = ({target}) => {
    setTime(target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
      addAppointment(title, contact, date, time);
    // Reset form fields
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          title={title}
          setTitle={updateTitle}
          contact={contact}
          setContact={updateContact}
          date={date}
          setDate={updateDate}
          time={time}
          setTime={updateTime}
          contacts={contacts}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList 
          tileItems={appointments}
        />
      </section>
    </div>
  );
};
