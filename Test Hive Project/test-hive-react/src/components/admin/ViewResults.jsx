import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewResults = () => {
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/results");
      setResults(res.data);
    } catch (err) {
      console.error("Error fetching results:", err);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div>
      <h3>View Results</h3>
      <table className="admin-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Test</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, index) => (
            <tr key={index}>
              <td>{r.userName}</td>
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

export default ViewResults;
