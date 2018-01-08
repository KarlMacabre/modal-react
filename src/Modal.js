import React, { Component } from 'react';
import './App.css';
import Button from './Button';

class Modal extends Component {
    render() {
        return (
            <div className="modal-container">
                <Button text="Close" />
            </div>
        );
    }
}

export default Modal;