import React from "react";

const ContactCard = ({ contact }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">{contact.email}</p>
        <p className="card-text">{contact.phone}</p>
      </div>
    </div>
  );
};

export default ContactCard;
