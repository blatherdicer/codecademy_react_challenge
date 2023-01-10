import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([{
    name: 'Test User',
    phoneNumber: '123 343434',
    email: 'test@user.com'
  }]);
  const [appointments, setAppointments] = useState([{
    title: 'Test Appt',
    contact: 'Test User',
    date: '1 Jun 2023',
    time: '8:00am'
  }]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (name, phoneNumber, email) => {
    if (!(name && phoneNumber && email)) {
      throw new Error('Add Contact: Required parameters missing...')
    };
    const contactToAdd = {
      name: name,
      phoneNumber: phoneNumber,
      email: email
    };
    setContacts((prevContacts) => {
      return ([...prevContacts, contactToAdd])
    })
  };

  const addAppointment = (title, contact, date, time) => {
    if (!(title && contact && date && time)) {
      throw new Error('Add Appointment: Required parameters missing...')
    };
    const apptToAdd = {
      title: title,
      contact: contact,
      date: date,
      time: time
    };
    setAppointments((prevAppts) => {
      return ([...prevAppts, apptToAdd])
    })
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage
              contacts={contacts}
              addContact={addContact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
              contacts={contacts}
              appointments={appointments}
              addAppointment={addAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
