import React, { useEffect, useState } from "react";
import axios from "axios";

const TakeTest = () => {
  const [tests, setTests] = useState([]);
  const [selectedTestId, setSelectedTestId] = useState("");
  const [message, setMessage] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/tests");
        setTests(res.data);
      } catch (err) {
        console.error("Error fetching tests:", err);
      }
    };
    fetchTests();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedTestId) return;

    try {
      await axios.post("http://localhost:8080/api/results/submit", {
        userId,
        testId: selectedTestId,
        score: Math.floor(Math.random() * 100), // Simulated score
        date: new Date().toISOString(),
      });
      setMessage("✅ Test submitted successfully!");
    } catch (err) {
      console.error("Error submitting test:", err);
      setMessage("❌ Failed to submit test.");
    }
  };

  return (
    <div>
      <h3>Take a Test</h3>
      <form onSubmit={handleSubmit} className="admin-form">
        <select
          value={selectedTestId}
          onChange={(e) => setSelectedTestId(e.target.value)}
          required
        >
          <option value="">Select a test</option>
          {tests.map((test) => (
            <option key={test.id} value={test.id}>
              {test.title} ({test.subject})
            </option>
          ))}
        </select>
        <button type="submit">Submit Test</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default TakeTest;
