import React from "react";

export const ContactForm = (props) => {

  const errorFieldStyle = {border: "1px solid red", backgroundColor: "pink"};
  const errorMsgStyle = {color: "red", fontSize: "smaller"};
  const validPhone = "[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}";
  
  const { 
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit,
    isDuplicate} = props;



  return (
    <form onSubmit={handleSubmit}>  
      <label htmlFor="name">Contact Name:
        {isDuplicate && <span style={errorMsgStyle}>&nbsp;&nbsp;Error - name already exists - please amend...</span>}
      </label>
      <input 
        style={isDuplicate ? errorFieldStyle: {}} 
        type="text" 
        id="name" 
        value={name} 
        onChange={setName} 
        required/>
      <label htmlFor="phone">Contact Phone:</label>
      <input 
        type="text" 
        id="phone" 
        value={phone} 
        onChange={setPhone} 
        pattern={validPhone}
        required />
      <label htmlFor="email">Contact Email:</label>
      <input 
        type="text" 
        id="email" 
        value={email} 
        onChange={setEmail} 
        required />
      <button type="submit">Save</button>
    </form>
  );  
};
