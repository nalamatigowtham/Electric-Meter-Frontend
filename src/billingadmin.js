import React, { useState, useEffect } from 'react';
import Navbaradmin from "./navbaradmin";
import axios from "axios";
import { useParams } from "react-router-dom";

function Billingadmin() {
  const { id } = useParams();   
  const [user, setUser] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    axios.get(`https://electricmeter-backend-1.onrender.com/getUser/${id}`)
      .then((res) => {
        if (res.data.status === "Found") {
          setUser(res.data.user);
          localStorage.setItem("selectedCustomer", id);
        }
      })
      .catch((err) => console.log("Error fetching user:", err));
  }, [id]);

  // Toggle Handler → Ask server to send signal to registered device
  const handleToggle = () => {
    const newState = !isConnected;
    setIsConnected(newState);

    axios.post("https://electricmeter-backend-1.onrender.com/toggleDevice", {
      customerId: id,
      state: newState ? 1 : 0
    })
    .then(res => console.log(res.data.message))
    .catch(err => console.error("Error sending toggle:", err));
  };

  return (
    <>
      <style>{`
        .billing-wrapper { background: #eef3ff; min-height: 100vh; padding-bottom: 40px; }
        .billing-container { max-width: 900px; margin: 20px auto; padding: 20px; text-align: center; }
        .billing-title { font-size: 36px; font-weight: 900; color: #0A2A66; margin-bottom: 20px; text-shadow: 1px 1px 4px rgba(0,0,0,0.1); }
        .billing-card { margin: auto; background: white; padding: 25px; border-radius: 15px; max-width: 450px; box-shadow: 0px 6px 18px rgba(0,0,0,0.15); border-left: 6px solid #1e88e5; transition: 0.3s; }
        .billing-card:hover { transform: scale(1.02); box-shadow: 0px 10px 28px rgba(0,0,0,0.2); }
        .label { font-weight: bold; color: #0A2A66; }
        .value { color: #333; margin-bottom: 10px; font-size: 17px; }
        .pay-button { width: 100%; padding: 12px; background: linear-gradient(90deg, #0A2A66, #1e88e5); border: none; color: white; border-radius: 10px; font-size: 18px; cursor: pointer; transition: 0.2s; margin-top: 10px; }
        .pay-button:hover { opacity: 0.9; transform: translateY(-2px); }
        .toggle-button { width: 100%; padding: 12px; color: white; font-size: 18px; border: none; border-radius: 10px; cursor: pointer; transition: 0.3s; margin-top: 15px; }
        .toggle-connected { background: linear-gradient(90deg, #16a34a, #22c55e); }
        .toggle-disconnected { background: linear-gradient(90deg, #dc2626, #ef4444); }
        @media (max-width: 600px) { .billing-card { width: 90%; padding: 20px; } .billing-title { font-size: 28px; } .value { font-size: 16px; } }
      `}</style>

      <Navbaradmin />

      <div className="billing-wrapper">
        <div className="billing-container">
          <h1 className="billing-title">Customer Billing Information</h1>

          {!user ? (
            <p>Loading customer data...</p>
          ) : (
            <div className="billing-card">
              <h3 style={{ marginBottom: "15px", color: "#1e3a8a" }}>Customer Details</h3>

              <p className="value"><span className="label">Name:</span> {user.name}</p>
              <p className="value"><span className="label">Email:</span> {user.email}</p>
              <p className="value"><span className="label">User ID:</span> {user.id}</p>

              <p className="value"><span className="label">Due Date:</span> {new Date(user.due_date).toLocaleDateString()}</p>
              <p className="value"><span className="label">Due Amount:</span> <span style={{ color: "red", fontWeight: "bold" }}>₹{user.due_amount}</span></p>

              <button className="pay-button">Pay Bill</button>

              <button
                onClick={handleToggle}
                className={`toggle-button ${isConnected ? "toggle-connected" : "toggle-disconnected"}`}
              >
                {isConnected ? "Connected" : "Disconnected"}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Billingadmin;
