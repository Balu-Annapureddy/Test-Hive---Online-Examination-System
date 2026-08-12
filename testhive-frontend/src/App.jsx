import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";

// User components
import UserProfile from "./components/user/UserProfile";
import ViewResultsUser from "./components/user/ViewResultsUser";
import UpcomingTests from "./components/user/UpcomingTests";
import PreviousTests from "./components/user/PreviousTests";
import TakeTest from "./components/user/TakeTest";
import PerformanceAnalysis from "./components/user/PerformanceAnalysis";

// Admin components
import AddEditTest from "./components/admin/AddEditTest";
import ManageQuestions from "./components/admin/ManageQuestions";
import ManageUsers from "./components/admin/ManageUsers";
import ViewFeedback from "./components/admin/ViewFeedback";
import ViewResults from "./components/admin/ViewResults";

// Auth protection
import AdminProtectedRoute from "./auth/AdminProtectedRoute";
import UserProtectedRoute from "./auth/UserProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* User Dashboard */}
        <Route
          path="/user/dashboard"
          element={
            <UserProtectedRoute>
              <UserDashboard />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/user/profile"
          element={
            <UserProtectedRoute>
              <UserProfile />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/user/view-results"
          element={
            <UserProtectedRoute>
              <ViewResultsUser />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/user/upcoming-tests"
          element={
            <UserProtectedRoute>
              <UpcomingTests />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/user/previous-tests"
          element={
            <UserProtectedRoute>
              <PreviousTests />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/user/take-test"
          element={
            <UserProtectedRoute>
              <TakeTest />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/user/performance"
          element={
            <UserProtectedRoute>
              <PerformanceAnalysis />
            </UserProtectedRoute>
          }
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/add-edit-test"
          element={
            <AdminProtectedRoute>
              <AddEditTest />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/manage-questions"
          element={
            <AdminProtectedRoute>
              <ManageQuestions />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/manage-users"
          element={
            <AdminProtectedRoute>
              <ManageUsers />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/view-feedback"
          element={
            <AdminProtectedRoute>
              <ViewFeedback />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/view-results"
          element={
            <AdminProtectedRoute>
              <ViewResults />
            </AdminProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<h2 style={{ padding: "2rem" }}>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
