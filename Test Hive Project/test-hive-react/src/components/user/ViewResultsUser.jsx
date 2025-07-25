import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewResultsUser = () => {
  const [results, setResults] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/results/user/${userId}`);
        setResults(res.data);
      } catch (err) {
        console.error("Error fetching user results:", err);
      }
    };
    fetchResults();
  }, [userId]);

  return (
    <div>
      <h3>My Results</h3>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Test</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, index) => (
            <tr key={index}>
              <td>{r.testTitle}</td>
              <td>{r.score}</td>
              <td>{new Date(r.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewResultsUser;
