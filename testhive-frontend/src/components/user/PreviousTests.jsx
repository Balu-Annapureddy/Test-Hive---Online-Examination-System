import React, { useEffect, useState } from "react";
import axios from "axios";

const PreviousTests = () => {
  const [results, setResults] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/results/user/${userId}`);
        setResults(res.data);
      } catch (err) {
        console.error("Error fetching previous tests:", err);
      }
    };
    fetchResults();
  }, [userId]);

  return (
    <div>
      <h3>Previous Tests</h3>
      <ul className="admin-list">
        {results.map((r, index) => (
          <li key={index}>
            {r.testTitle} - Score: {r.score} ({new Date(r.date).toLocaleDateString()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreviousTests;
