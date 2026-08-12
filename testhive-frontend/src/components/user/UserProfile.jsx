import React, { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/users/${userId}`);
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching user profile:", err);
      }
    };
    fetchUser();
  }, [userId]);

  return (
    <div>
      <h3>User Profile</h3>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default UserProfile;
