// src/components/modal/BaseModal.js
import React from 'react';
import './Modal.css';

const BaseModal = ({ isOpen, onClose, title, onNext, onPrev, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close-button" onClick={onClose} aria-label="Close Modal">&times;</button>
                <h2>{title}</h2>
                <div className="modal-body">
                    {children}
                </div>
                <div className="navigation">
                    <button className="nav-arrow" onClick={onPrev} aria-label="Previous">
                        &#8592;
                    </button>
                    <button className="nav-arrow" onClick={onNext} aria-label="Next">
                        &#8594;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BaseModal;
