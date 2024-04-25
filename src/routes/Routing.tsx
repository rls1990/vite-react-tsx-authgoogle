import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/login" Component={Login} />
      <Route path="/dashboard" Component={Dashboard} />
    </Routes>
  );
};

export default Routing;
