import React, { useState } from "react";

export const ContactPicker = (props) => {

  const { id, contact, contacts, setContact } = props;

  return (
    <select id={id} value={contact} onChange={(e) => setContact(e.target.value)} required>
    {contacts.map((eachContact,i) => 
      <option 
      key={i} 
      value={eachContact.name}
      >
      {eachContact.name}
      </option>)}
    </select>
  )
};


    