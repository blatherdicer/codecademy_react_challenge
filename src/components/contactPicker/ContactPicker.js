import React from "react";

export const ContactPicker = (props) => {

  const { id, contact, contacts, onChange } = props;

  return (
    <select id={id} value={contacts.name} onChange={onChange} required>
    {contacts.map((eachContact,i) => 
      <option 
      key={i} 
      value={eachContact.name}
      selected={(eachContact.name === contact) ? true : false}
      >
      {eachContact.name}
      </option>)}
    </select>
  )
};


    