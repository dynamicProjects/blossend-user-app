import React from 'react';
import '../globals.css';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="profile-picture">
          <img src="/employee1.avif" alt="employee" />
        </div>

        <div className="profile-details">
          <h1 className="name">Shruti Shrivastava</h1>
          <p className="email">Email: s.shrivastava@example.com</p>
          <p className="type">Type: Regular User</p>
          <p className="membership-status">Membership Status: Free</p>
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
          <span className="count">3</span>
          <span className="label">Notifications</span>
        </div>
      </div>

      <div className="settings">
        <h2 className="section-title">Settings</h2>
        <div className="settings-item">User Settings</div>
        <div className="settings-item">Search</div>
        <div className="settings-item">Explore</div>
        <div className="settings-item">Permissions / Privacy</div>
        <div className="settings-item">Subscriptions</div>
        <div className="settings-item">Billing</div>
      </div>

      <div className="account">
        <h2 className="section-title">Account</h2>
        <div className="account-item">Switch Accounts</div>
        <div className="account-item">Ability to Change Password</div>
        <div className="account-item">View Pablo’s Profile</div>
      </div>

      <div className="membership-billing">
        <h2 className="section-title">Membership & Billing</h2>
        <div className="membership-billing-item">Enroll in Premium</div>
        <div className="membership-billing-item">Billing Info</div>
      </div>
    </div>
  );
};

export default UserProfile;
