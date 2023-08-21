import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";



const ContactForm = ({ contact = null }) => {
    const { actions } = useContext(Context);


    const initialData = contact ? contact : {
        full_name: "",
        email: "",
        address: "",
        phone: ""
    };

    const [contactData, setContactData] = useState(initialData);

    const handleChange = event => {
        const { name, value } = event.target;
        setContactData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (contact) {
            actions.editContact(contact.id, contactData);
        } else {
            actions.addContact(contactData);
        }
        
        setContactData({
            full_name: "",
            email: "",
            address: "",
            phone: ""
        });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="full_name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="full_name" name="full_name" value={contactData.full_name} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" value={contactData.email} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address" name="address" value={contactData.address} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="phone" name="phone" value={contactData.phone} onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary me-5">{contact ? "Edit Contact" : "Save Contact"}</button>
                        <a href="/" className="btn btn-secondary">Back to Contacts</a>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactForm;