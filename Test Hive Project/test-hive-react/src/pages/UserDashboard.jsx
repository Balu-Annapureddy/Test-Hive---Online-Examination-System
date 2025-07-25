import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserProfile from "../components/user/UserProfile";
import ViewResultsUser from "../components/user/ViewResultsUser";
import UpcomingTests from "../components/user/UpcomingTests";
import PreviousTests from "../components/user/PreviousTests";
import TakeTest from "../components/user/TakeTest";
import PerformanceAnalysis from "../components/user/PerformanceAnalysis";
import "../styles/UserDashboard.css";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const renderTab = () => {
    switch (activeTab) {
      case "profile":
        return <UserProfile />;
      case "upcoming":
        return <UpcomingTests />;
      case "take":
        return <TakeTest />;
      case "previous":
        return <PreviousTests />;
      case "results":
        return <ViewResultsUser />;
      case "performance":
        return <PerformanceAnalysis />;
      default:
        return null;
    }
  };

  return (
    <div className="user-dashboard">
      <h2>User Panel</h2>
      <div className="user-actions">
        <button
          className={activeTab === "profile" ? "active" : ""}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button
          className={activeTab === "upcoming" ? "active" : ""}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming Tests
        </button>
        <button
          className={activeTab === "take" ? "active" : ""}
          onClick={() => setActiveTab("take")}
        >
          Take Test
        </button>
        <button
          className={activeTab === "previous" ? "active" : ""}
          onClick={() => setActiveTab("previous")}
        >
          Previous Tests
        </button>
        <button
          className={activeTab === "results" ? "active" : ""}
          onClick={() => setActiveTab("results")}
        >
          View Results
        </button>
        <button
          className={activeTab === "performance" ? "active" : ""}
          onClick={() => setActiveTab("performance")}
        >
          Performance
        </button>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="user-tab-content">{renderTab()}</div>
    </div>
  );
};

export default UserDashboard;
