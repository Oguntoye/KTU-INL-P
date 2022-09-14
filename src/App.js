import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ProtectedRoute } from "./context/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import SupervisorDashboard from "./pages/SupervisorDashboard";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <Routes>
        <Route index element={<Landing />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route
            path="dashboard/*"
            element={
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
            }
        />
        <Route path="*" element={<Landing />} />
    </Routes>
  );
}

export default App;
