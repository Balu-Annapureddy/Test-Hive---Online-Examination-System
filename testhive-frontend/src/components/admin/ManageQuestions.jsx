import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageQuestions = () => {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/questions");
      setQuestions(res.data);
    } catch (err) {
      console.error("Failed to fetch questions:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/questions/${id}`);
      setQuestions(questions.filter((q) => q.id !== id));
    } catch (err) {
      console.error("Failed to delete question:", err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div>
      <h3>Manage Questions</h3>
      <ul className="admin-list">
        {questions.map((q) => (
          <li key={q.id}>
            <strong>{q.question}</strong>
            <button onClick={() => handleDelete(q.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageQuestions;
