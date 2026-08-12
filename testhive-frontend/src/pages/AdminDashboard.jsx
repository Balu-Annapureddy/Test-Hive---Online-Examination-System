import React, { useState } from "react";
import AddEditTest from "../components/admin/AddEditTest";
import ManageQuestions from "../components/admin/ManageQuestions";
import ManageUsers from "../components/admin/ManageUsers";
import ViewFeedback from "../components/admin/ViewFeedback";
import ViewResults from "../components/admin/ViewResults";
import { useNavigate } from "react-router-dom";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("addEditTest");
  const navigate = useNavigate();

  const renderSection = () => {
    switch (activeTab) {
      case "addEditTest":
        return <AddEditTest />;
      case "manageQuestions":
        return <ManageQuestions />;
      case "manageUsers":
        return <ManageUsers />;
      case "viewFeedback":
        return <ViewFeedback />;
      case "viewResults":
        return <ViewResults />;
      default:
        return null;
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Panel</h2>
      <div className="admin-nav">
        <button
          className={activeTab === "addEditTest" ? "active" : ""}
          onClick={() => setActiveTab("addEditTest")}
        >
          Add/Edit Test
        </button>
        <button
          className={activeTab === "manageQuestions" ? "active" : ""}
          onClick={() => setActiveTab("manageQuestions")}
        >
          Manage Questions
        </button>
        <button
          className={activeTab === "manageUsers" ? "active" : ""}
          onClick={() => setActiveTab("manageUsers")}
        >
          Manage Users
        </button>
        <button
          className={activeTab === "viewFeedback" ? "active" : ""}
          onClick={() => setActiveTab("viewFeedback")}
        >
          View Feedback
        </button>
        <button
          className={activeTab === "viewResults" ? "active" : ""}
          onClick={() => setActiveTab("viewResults")}
        >
          View Results
        </button>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="admin-content">{renderSection()}</div>
    </div>
  );
};

export default AdminDashboard;
