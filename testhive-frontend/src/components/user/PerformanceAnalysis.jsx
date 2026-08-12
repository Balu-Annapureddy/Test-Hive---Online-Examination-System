import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const PerformanceAnalysis = () => {
  const [data, setData] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/results/user/${userId}`);
        const formatted = res.data.map((r) => ({
          test: r.testTitle,
          score: r.score,
        }));
        setData(formatted);
      } catch (err) {
        console.error("Error loading performance data:", err);
      }
    };
    fetchResults();
  }, [userId]);

  return (
    <div>
      <h3>Performance Analysis</h3>
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="test" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#3182ce" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p>No results found to display chart.</p>
      )}
    </div>
  );
};

export default PerformanceAnalysis;
