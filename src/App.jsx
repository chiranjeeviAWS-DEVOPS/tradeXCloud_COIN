import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Search from "./pages/Search";
import SearchAI from "./pages/SearchAI";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import Verification from "./pages/Verification";
import Register from "./pages/Register";
import Stock from "./pages/Stock";
import Chat from "./pages/Chat";

function App(){


  function isAuthenticated() {
    // Logic to check if user is authenticated (e.g., token check)
    return !!sessionStorage.getItem('myToken');  // Example logic
  }

  return(
    <Routes>
      {/* <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<Search />} />
      <Route path="/stock/:id" element={<Stock />} />
      <Route path="/searchai" element={<SearchAI />}/>
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/newpassword" element={<NewPassword />} />
      <Route path="/verify" element={<Verification />} />
      <Route path="/register" element={<Register />} /> */}

      <Route path="/" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={isAuthenticated() ? <Search /> : <Navigate to="/login" replace />} />
      {/* <Route path="/stock/:id" element={isAuthenticated() ? <Stock /> : <Navigate to="/login" replace />} /> */}
      <Route path="/searchai" element={isAuthenticated() ? <SearchAI /> : <Navigate to="/login" replace />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/newpassword" element={<NewPassword />} />
      <Route path="/verify" element={<Verification />} />
      <Route path="/register" element={<Register />} />
      <Route path="/stock/:id" element={<Stock />} />
      <Route path="/chat" element={<Chat />}/>

    </Routes>
  )
};


export default App;