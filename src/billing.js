// import React, { useEffect, useState } from 'react';
// import Navbar from "./Navbar";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// function Billing() {
//   const { id } = useParams();       // Get customer ID from URL
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:8081/getUser/${id}`)
//       .then((res) => {
//         if (res.data.status === "Found") {
//           setUser(res.data.user);
//         }
//       })
//       .catch((err) => console.log("Error fetching user:", err));
//   }, [id]);

//   return (
//     <div style={{ padding: "0px" }}>
//       <Navbar />

//       <h1
//         style={{
//           fontSize: "32px",
//           fontWeight: "bold",
//           color: "#1e3a8a",
//           marginTop: "20px",
//           marginLeft: "20px",
//         }}
//       >
//         Customer Billing Information
//       </h1>

//       {!user ? (
//         <p style={{ marginLeft: "20px" }}>Loading customer data...</p>
//       ) : (
//         <div
//           style={{
//             marginTop: "20px",
//             marginLeft: "20px",
//             padding: "20px",
//             borderRadius: "10px",
//             background: "#f8f9fa",
//             width: "400px",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//           }}
//         >
//           <h3 style={{ marginBottom: "15px", fontWeight: "bold" }}>
//             Customer Details
//           </h3>

//           <p><strong>Name:</strong> {user.name}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>User ID:</strong> {user.id}</p>

//           {/* FETCHED FROM DATABASE */}
//           <p><strong>Due Date:</strong> {new Date(user.due_date).toLocaleDateString()}</p>
//           <p><strong>Due Amount:</strong> ₹{user.due_amount}</p>

//           <button
//             style={{
//               marginTop: "20px",
//               width: "100%",
//               padding: "10px",
//               background: "#1e3a8a",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               fontSize: "16px",
//               cursor: "pointer",
//             }}
//           >
//             Pay Bill
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Billing;

// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// function Billing() {
//   const { id } = useParams();
//   const userId = id || JSON.parse(localStorage.getItem("user"))?.id;

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     if (!userId) return; // Exit if no user ID

//     axios.get(`http://localhost:8081/getUser/${userId}`)
//       .then(res => {
//         if (res.data.status === "Found") {
//           setUser(res.data.user);
//           localStorage.setItem("user", JSON.stringify(res.data.user)); // store user for other pages
//         } else {
//           console.log("User not found");
//         }
//       })
//       .catch(err => console.log("Error fetching user:", err));
//   }, [userId]);

//   if (!user) return <div><Navbar /><p style={{ margin: "20px" }}>Loading customer data...</p></div>;

//   return (
//     <div style={{ padding: "0px" }}>
//       <Navbar />
//       <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#1e3a8a", margin: "20px" }}>
//         Customer Billing Information
//       </h1>

//       <div style={{
//         margin: "20px",
//         padding: "20px",
//         borderRadius: "10px",
//         background: "#f8f9fa",
//         width: "400px",
//         boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//       }}>
//         <h3 style={{ marginBottom: "15px", fontWeight: "bold" }}>Customer Details</h3>
//         <p><strong>Name:</strong> {user.name}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <p><strong>User ID:</strong> {user.id}</p>
//         <p><strong>Due Date:</strong> {new Date(user.due_date).toLocaleDateString()}</p>
//         <p><strong>Due Amount:</strong> ₹{user.due_amount}</p>

//         <button style={{
//           marginTop: "20px",
//           width: "100%",
//           padding: "10px",
//           background: "#1e3a8a",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           fontSize: "16px",
//           cursor: "pointer",
//         }}>
//           Pay Bill
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Billing;


import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

function Billing() {
  const { id } = useParams();
  const userId = id || JSON.parse(localStorage.getItem("user"))?.id;

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!userId) return;

    axios.get(`https://electricmeter-backend-1.onrender.com/getUser/${userId}`)
      .then(res => {
        if (res.data.status === "Found") {
          setUser(res.data.user);
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }
      })
      .catch(err => console.log("Error fetching user:", err));
  }, [userId]);

  if (!user) return <div><Navbar /><p style={{ margin: "20px" }}>Loading customer data...</p></div>;

  return (
    <>
      {/* INLINE CSS */}
      <style>{`
        .billing-wrapper {
          background: #eef3ff;
          min-height: 100vh;
          padding-bottom: 30px;
        }

        .billing-container {
          max-width: 800px;
          margin: auto;
          padding: 20px;
          text-align: center;
        }

        .billing-title {
          font-size: 34px;
          color: #0A2A66;
          font-weight: 900;
          margin-top: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }

        .billing-card {
          margin: 25px auto;
          background: white;
          padding: 25px;
          border-radius: 15px;
          max-width: 450px;
          box-shadow: 0px 6px 18px rgba(0,0,0,0.15);
          transition: 0.3s;
          border-left: 6px solid #1e88e5;
        }

        .billing-card:hover {
          transform: scale(1.02);
          box-shadow: 0px 10px 25px rgba(0,0,0,0.25);
        }

        .billing-label {
          font-weight: bold;
          color: #0A2A66;
        }

        .billing-value {
          color: #333;
          margin-bottom: 10px;
          font-size: 17px;
        }

        .pay-button {
          width: 100%;
          padding: 12px;
          background: linear-gradient(90deg, #0A2A66, #1e88e5);
          border: none;
          color: white;
          border-radius: 10px;
          font-size: 18px;
          cursor: pointer;
          transition: 0.2s;
          margin-top: 15px;
        }

        .pay-button:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 600px) {
          .billing-card {
            width: 90%;
            padding: 20px;
          }

          .billing-title {
            font-size: 26px;
          }

          .billing-value {
            font-size: 16px;
          }
        }
      `}</style>

      {/* PAGE CONTENT */}
      <Navbar />

      <div className="billing-wrapper">
        <div className="billing-container">
          <h1 className="billing-title">Customer Billing Information</h1>

          <div className="billing-card">
            <h3 style={{ marginBottom: "15px", color: "#1e3a8a" }}>Customer Details</h3>

            <p className="billing-value">
              <span className="billing-label">Name:</span> {user.name}
            </p>

            <p className="billing-value">
              <span className="billing-label">Email:</span> {user.email}
            </p>

            <p className="billing-value">
              <span className="billing-label">User ID:</span> {user.id}
            </p>

            <p className="billing-value">
              <span className="billing-label">Due Date:</span>{" "}
              {new Date(user.due_date).toLocaleDateString()}
            </p>

            <p className="billing-value">
              <span className="billing-label">Due Amount:</span>{" "}
              <span style={{ color: "red", fontWeight: "bold" }}>₹{user.due_amount}</span>
            </p>

            <button className="pay-button">Pay Bill</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Billing;
