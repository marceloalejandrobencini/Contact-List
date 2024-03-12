import React from "react";
import ContactCard from "../component/ContactCard"; // Asegúrate de que esté así

const Contact = ({ contacts }) => {
  return (
    <div className="container">
      <h1>Contact List</h1>
      <div className="row">
        {contacts.map((contact) => (
          <div className="col-md-4" key={contact.id}>
            <ContactCard contact={contact} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
