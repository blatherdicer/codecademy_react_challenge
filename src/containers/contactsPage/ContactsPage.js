import React, { useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {

  const { contacts, addContact } = props;

  const [ name, setName ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ isDuplicate, setIsDuplicate ] = useState(false);

  const updateName = ({ target }) => {
    const newName = target.value;
    if (contacts.find((contact) => contact.name === newName)) {
      setIsDuplicate(true)
    } else {
      setIsDuplicate(false)
    };
    setName(newName);
  };

  const updateEmail = ({target}) => {
    setEmail(target.value);
  }

  const updatePhone = ({target}) => {
    setPhone(target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contacts.find((contact) => contact.name === name)) {
      addContact(name, phone,email);
    };
    // Reset form fields
    setName("");
    setPhone("");
    setEmail("");
    setIsDuplicate(false);
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={updateName}
          phone={phone}
          setPhone={updatePhone}
          email={email}
          setEmail={updateEmail}
          handleSubmit={handleSubmit}
          isDuplicate={isDuplicate}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          tileItems={contacts}
        />
      </section>
    </div>
  );
};
