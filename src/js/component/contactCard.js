import React, { useState } from "react";

const ContactCard = ({ contact, onDelete, onEdit }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDeleteClick = () => {
        console.log("Showing delete modal for contact with ID:", contact.id);
        setShowDeleteModal(true);
    };
    
    const handleConfirmDelete = () => {
        console.log("Confirm delete for contact with ID:", contact.id);
        onDelete(contact.id);
        setShowDeleteModal(false);
    };
    

    const randomNumber = Math.floor(Math.random() * 1000);
    const imageUrl = `https://picsum.photos/200/200?random=${randomNumber}`;

    return (
        <div className="mb-4">
            <div className="card position-relative" >
                <div className="card-body d-flex justify-content-around">
                    <img src={imageUrl} className="rounded-circle me-3" style={{ width: '200px', height: '200px' }} alt="Contact Picture" />

                    <div>
                        <h5 className="card-title">{contact.full_name}</h5>
                        <p className="card-text">
                            <i className="fas fa-map-marker-alt me-2"></i> {contact.address}
                        </p>
                        <p className="card-text">
                            <i className="fas fa-phone me-2"></i>{contact.phone}
                        </p>
                        <p className="card-text">
                            <i className="fas fa-envelope me-2"></i>{contact.email}
                        </p>
                    </div>

                    <div className="position-absolute top-0 end-0">
                        <button className="btn btn-sm btn-outline-primary me-2" onClick={() => onEdit(contact)}>
                            <i className="fas fa-edit"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger" onClick={handleDeleteClick}>
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>

            {showDeleteModal && (
                <>
                    <div className="modal-backdrop fade show"></div>
                    <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Confirm Deletion</h5>
                                    <button type="button" className="btn-close" onClick={() => setShowDeleteModal(false)}></button>
                                </div>
                                <div className="modal-body">
                                    Do you want to delete this contact?
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>Cancel</button>
                                    <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ContactCard;