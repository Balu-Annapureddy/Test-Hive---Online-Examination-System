import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewFeedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  const fetchFeedback = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/feedback");
      setFeedbackList(res.data);
    } catch (err) {
      console.error("Error fetching feedback:", err);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <div>
      <h3>View Feedback</h3>
      <ul className="admin-list">
        {feedbackList.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> - {item.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewFeedback;
