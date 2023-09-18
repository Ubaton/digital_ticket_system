// Profile.js
import React from "react";

const Profile = () => {
  // Example user data (replace with actual user data from your application)
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    // Add more user details as needed
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">User Profile</h1>
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
        <p>
          <strong>First Name:</strong> {user.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {user.lastName}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        {/* Add more user details here */}
      </div>
    </div>
  );
};

export default Profile;
