import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.scss";

import Home from "./components/frontend/Home";
import About from "./components/frontend/About";
import Services from "./components/frontend/Services";
import Projects from "./components/frontend/Projects";
import Login from "./components/backend/Login";
import Dashboard from "./components/backend/Dashboard";
import RequireAuth from "./components/common/RequireAuth";

// ✅ IMPORT AUTH PROVIDER
import { AuthProvider } from "./components/context/Auth";
import {default as ShowServices} from "./components/backend/services/Show";
import {default as CreateServices} from "./components/backend/services/Create";
import { LatestServices } from "./components/common/LatestServices";



function App() {
  return (
    // ✅ WRAP ENTIRE APP
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/LatestServices" element={<LatestServices />} />

          {/* Login */}
          <Route path="/backend/login" element={<Login />} />

          {/* Protected Dashboard */}
          <Route
            path="/admin/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          {/* Protected showservices */}
          <Route
            path="/admin/services"
            element={
              <RequireAuth>
                <ShowServices />
              </RequireAuth>
            }
          />
          {/* Protected Createservices */}
          <Route
            path="/admin/services/create"
            element={
              <RequireAuth>
                <CreateServices />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>

      <ToastContainer position="top-center" autoClose={3000} />
    </AuthProvider>
  );
}

export default App;
