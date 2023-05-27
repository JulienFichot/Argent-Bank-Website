import React from "react";
import Home from "../pages/Home/Home";
import Error from "../pages/404/404";
import Account from "../pages/Account/account";
import Login from "../pages/Login/login";
import Logout from "../pages/Logout/logout";
import { Routes, Route, Navigate } from "react-router-dom";

const RoutesPath = () => {
  return (
    <Routes>
      <Route element={<Navigate replace to="/home" />} path="/" />
      <Route path="home" element={<Home />} />
      <Route path="account" element={<Account />} />
      <Route path="login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RoutesPath;
