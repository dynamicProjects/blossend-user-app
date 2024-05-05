// components/ChangePasswordModal.jsx
import React from 'react';
import '../globals.css'; // Import CSS file for styling

const ChangePasswordModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h1 className="modal-title">Change Password</h1>
        <form className="password-form">
          <div className="form-group">
            <label htmlFor="old-password" className="password-label">Old Password:</label>
            <input type="password" id="old-password" className="password-input" />
          </div>
          <div className="form-group">
            <label htmlFor="new-password" className="password-label">New Password:</label>
            <input type="password" id="new-password" className="password-input" />
          </div>
          <div className="button-group">
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
            <button type="submit" className="submit-button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
