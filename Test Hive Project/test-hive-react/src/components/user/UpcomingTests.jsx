import React, { useEffect, useState } from "react";
import axios from "axios";

const UpcomingTests = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/tests/upcoming");
        setTests(res.data);
      } catch (err) {
        console.error("Error fetching upcoming tests:", err);
      }
    };
    fetchTests();
  }, []);

  return (
    <div>
      <h3>Upcoming Tests</h3>
      <ul className="admin-list">
        {tests.length === 0 && <p>No upcoming tests found.</p>}
        {tests.map((test, index) => (
          <li key={index}>
            <strong>{test.title}</strong> - {test.subject} ({test.duration} mins)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingTests;
