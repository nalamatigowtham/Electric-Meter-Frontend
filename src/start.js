import React from 'react';
import { useNavigate } from 'react-router-dom';

function Start() {

  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        backgroundColor: "#f5f5f5"
      }}
    >
      <button
        style={{
          padding: "12px 30px",
          fontSize: "18px",
          backgroundColor: "#1e3a8a",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
        onClick={() => navigate('/login')}   // 📌 Route to customer login page
      >
        Customer
      </button>

      <button
        style={{
          padding: "12px 30px",
          fontSize: "18px",
          backgroundColor: "#10b981",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
        onClick={() => navigate('/admin')}   // 📌 Route to admin page
      >
        Admin
      </button>
    </div>
  );
}

export default Start;
