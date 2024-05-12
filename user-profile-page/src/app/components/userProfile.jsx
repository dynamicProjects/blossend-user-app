
"use client";
import React, { useState } from 'react';
import '../globals.css';
import ChangePasswordModal from './ChangePasswordModal';

const UserProfile = () => {
  // State to manage user information
  const [userInfo, setUserInfo] = useState({
    name: "Shruti Shrivastava",
    email: "s.shrivastava@example.com",
    profilePic: "/employee1.avif",
    type:"Regular User",
    membershipStatus:"Free",
    city:"Houston"
  });

  // Function to handle clicking "View Pablo’s Profile"
  const handleViewPabloProfile = () => {
    // Update user information to Pablo's details
    setUserInfo({
      name: "Pablo Diaz",
      email: "pablo@example.com",
      profilePic: "/pabloPic.jpg",
      type:"Staff",
      membershipStatus:"Premium",
      city:"Austin"
    });
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBillingDropdownOpen, setIsBillingDropdownOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(prevState => !prevState);
  };
  const handleBillingDropdownToggle = () => {
    setIsBillingDropdownOpen(prevState => !prevState);
    // Toggle profile container expansion
    setIsExpanded(prevState => !prevState);
  };
  return (
    <div className={`user-profile ${isExpanded ? 'expanded' : ''}`}>
      <div className="profile-header">
        <div className="profile-picture">
        <img src={userInfo.profilePic} alt="employee" />
        </div>

        <div className="profile-details">
        <h1 className="name">{userInfo.name}</h1>
        <p className="type">Type: {userInfo.type}</p>
        <p className="membership-status">Membership Status: {userInfo.membershipStatus}</p>
          <p className="email">Email: {userInfo.email}</p>
          <p className="membership-status">City: {userInfo.city}</p>
        </div>
      </div>

      <div className="engagement">
        <h2 className="section-title">Engagement</h2>
        <div className="engagement-item">
          <img src="/review-icon.png" alt="Reviews Given" />
          <span className="label">Reviews Given</span>
        </div>
        <div className="engagement-item">
          <img src="/bookmarked.png" alt="Bookmarked Reviews" />
          <span className="label">Bookmarked Reviews</span>
        </div>
        <div className="engagement-item">
          <img src="/messages.png" alt="Messages" />
          <span className="count">20</span>
          <span className="label">Messages</span>
        </div>
        <div className="engagement-item">
          <img src="/bell.jpeg" alt="Notifications" />
          <span className="count">10</span>
          <span className="label">Notifications</span>
        </div>
      </div>

      <div className="settings">
        <h2 className="section-title">Privacy & security ettings</h2>
        <div className="settings-item">Explore</div>
        <div className="settings-item" onClick={handleDropdownToggle}>Permissions / Privacy</div>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <ul>
              <li>Restricted</li>
              <li>Blocked</li>
              <li>Closed Friends</li>
            </ul>
          </div>
        )}
      </div>

      <div className="account">
        <h2 className="section-title">Account</h2>
        <div className="account-item">Switch Accounts</div>
        <div className="account-item" onClick={handleOpenModal}>Ability to Change Password</div>
        <div className="account-item"  onClick={handleViewPabloProfile}>View Pablo’s Profile</div>
        <div className="settings-item">User Settings</div>
        <div className="settings-item">Logout</div>
      </div>

      <div className="membership-billing">
        <h2 className="section-title">Membership & Billing</h2>
        <div className="membership-billing-item">Enroll in Premium</div>
        <div className="membership-billing-item" onClick={handleBillingDropdownToggle}>Billing Info</div>
        {isBillingDropdownOpen && (
          <div className="dropdown-content">
            <input type="text" placeholder="Name on Card" />
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Expiration Date" />
            <input type="text" placeholder="CVV" />
          </div>
        )}
      </div>
      {isModalOpen && <ChangePasswordModal onClose={handleCloseModal} />}
    </div>
  );
};

export default UserProfile;
