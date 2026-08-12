import React, { useState } from "react";
import axios from "axios";

const AddEditTest = () => {
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    duration: "",
    totalMarks: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/tests", formData);
      setMessage("✅ Test created successfully.");
      setFormData({
        title: "",
        subject: "",
        duration: "",
        totalMarks: "",
      });
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to create test.");
    }
  };

  return (
    <div>
      <h3>Add/Edit Test</h3>
      <form onSubmit={handleSubmit} className="admin-form">
        <input
          type="text"
          name="title"
          placeholder="Test Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="duration"
          placeholder="Duration (minutes)"
          value={formData.duration}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="totalMarks"
          placeholder="Total Marks"
          value={formData.totalMarks}
          onChange={handleChange}
          required
        />
        <button type="submit">Save Test</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AddEditTest;
