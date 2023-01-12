import React from "react";

export const ContactPicker = (props) => {

  const { id, contact, contacts, setContact } = props;

  const handleChange = (e) => {
    const value = e.target.value;
    setContact(value);
    };

  return (
    <select id={id} value={contact} onChange={handleChange} required>
    <option key="0" value="">Select a contact</option>
    {contacts.map((eachContact,i) => 
      <option 
      key={i+1} 
      value={eachContact.name}
      >
      {eachContact.name}
      </option>)}
    </select>
  )
};


    