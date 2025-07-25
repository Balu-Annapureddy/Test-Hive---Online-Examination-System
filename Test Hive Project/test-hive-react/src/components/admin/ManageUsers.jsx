import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/users/all");
      setUsers(res.data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };

  const handleDelete = async (email) => {
    try {
      await axios.delete(`http://localhost:8080/api/users/delete/${email}`);
      setUsers(users.filter((user) => user.email !== email));
    } catch (err) {
      console.error("Failed to delete user:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h3>Manage Users</h3>
      <ul className="admin-list">
        {users.map((user) => (
          <li key={user.email}>
            {user.name} ({user.email}) - {user.role}
            <button onClick={() => handleDelete(user.email)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsers;
