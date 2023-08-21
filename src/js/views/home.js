import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ContactCard from "../component/contactCard";
import ContactForm from "../component/contactForm";

export const Home = () => {
    
    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];

    const [contacts, setContacts] = useState(storedContacts);
    const [contactToEdit, setContactToEdit] = useState(null);

    const handleEditClick = (contact) => {
        console.log("Editing contact with ID:", contact.id);
        setContactToEdit(contact);
    };


    const handleDeleteContact = (contactId) => {
       
        const updatedContacts = contacts.filter(contact => contact.id !== contactId);
        setContacts(updatedContacts);
        localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    };


    return (
        <>

            <div className="container mt-5">
                {contactToEdit ? (
                    <ContactForm contact={contactToEdit} />
                ) : (
                    <div className="row">
                        <div className="col-mb-6">
                            {contacts.map((contact, index) => (
                                <ContactCard key={index} contact={contact} onDelete={handleDeleteContact} onEdit={handleEditClick} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};