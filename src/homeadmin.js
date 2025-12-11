// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Homeadmin() {
//   const [id, setId] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     if (!id) {
//       setMessage("Please enter an ID");
//       return;
//     }

//     axios
//       .get(`http://localhost:8081/getUser/${id}`)
//       .then((res) => {
//         if (res.data.status === "Found") {

//           // ⭐ Save customer ID
//           localStorage.setItem("selectedCustomer", id);

//           // ⭐ Also save customer details (recommended)
//           localStorage.setItem(
//             "selectedCustomerData",
//             JSON.stringify(res.data.user)
//           );

//           // Redirect to Billing Page
//           navigate(`/homecust/billingadmin/${id}`);
//         } else {
//           setMessage("No user found with this ID");
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         setMessage("Error connecting to server");
//       });
//   };

//   return (
//     <div
//       style={{
//         padding: "30px",
//         display: "flex",
//         flexDirection: "column",
//         gap: "20px",
//         width: "400px",
//         margin: "auto",
//         marginTop: "50px",
//       }}
//     >
//       <h2>Search User by ID</h2>

//       <input
//         type="number"
//         placeholder="Enter User ID"
//         value={id}
//         onChange={(e) => setId(e.target.value)}
//         style={{
//           padding: "10px",
//           fontSize: "16px",
//           border: "1px solid #ccc",
//           borderRadius: "5px",
//         }}
//       />

//       <button
//         onClick={handleSearch}
//         style={{
//           padding: "10px",
//           fontSize: "16px",
//           backgroundColor: "#1e3a8a",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Search
//       </button>

//       {message && <p style={{ color: "red" }}>{message}</p>}
//     </div>
//   );
// }

// export default Homeadmin;



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Homeadmin() {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!id) {
      setMessage("Please enter an ID");
      return;
    }

    axios
      .get(`https://electricmeter-backend-1.onrender.com/getUser/${id}`)
      .then((res) => {
        if (res.data.status === "Found") {
          localStorage.setItem("selectedCustomer", id);
          localStorage.setItem("selectedCustomerData", JSON.stringify(res.data.user));
          navigate(`/homecust/${id}`);
        } else {
          setMessage("No user found with this ID");
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage("Error connecting to server");
      });
  };

  return (
    <>
      {/* INLINE CSS LIKE BILLING PAGE */}
      <style>{`
        .homeadmin-wrapper {
          background: #eef3ff;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .homeadmin-card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          width: 380px;
          box-shadow: 0px 6px 18px rgba(0,0,0,0.15);
          border-left: 6px solid #1e88e5;
          transition: 0.3s ease;
        }

        .homeadmin-card:hover {
          transform: scale(1.03);
          box-shadow: 0px 10px 25px rgba(0,0,0,0.25);
        }

        .homeadmin-title {
          text-align: center;
          color: #0A2A66;
          font-size: 28px;
          font-weight: 900;
          margin-bottom: 20px;
          text-shadow: 1px 1px 4px rgba(0,0,0,0.1);
        }

        .search-input {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 10px;
          margin-bottom: 15px;
        }

        .search-btn {
          width: 100%;
          padding: 12px;
          background: linear-gradient(90deg, #0A2A66, #1e88e5);
          color: white;
          font-size: 18px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.2s;
        }

        .search-btn:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        .error-message {
          margin-top: 10px;
          color: red;
          text-align: center;
          font-weight: bold;
        }

        /* Responsive */
        @media (max-width: 600px) {
          .homeadmin-card {
            width: 90%;
            padding: 25px;
          }

          .homeadmin-title {
            font-size: 24px;
          }
        }
      `}</style>

      {/* PAGE CONTENT */}
      <div className="homeadmin-wrapper">
        <div className="homeadmin-card">
          <h2 className="homeadmin-title">Search User</h2>

          <input
            type="number"
            placeholder="Enter User ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="search-input"
          />

          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>

          {message && <p className="error-message">{message}</p>}
        </div>
      </div>
    </>
  );
}

export default Homeadmin;
