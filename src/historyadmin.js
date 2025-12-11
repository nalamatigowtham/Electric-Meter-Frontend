// import React from "react";
// import Navbaradmin from "./navbaradmin";

// function Historyadmin() {
//   // Generate a random transaction ID
//   const generateTransactionId = () => {
//     return "TXN" + Math.floor(100000 + Math.random() * 900000); // TXN123456
//   };

//   // Generate a random billed date (within last 180 days)
//   const generateBilledDate = () => {
//     const today = new Date();
//     const daysAgo = Math.floor(Math.random() * 180); // 6 months
//     const billedDate = new Date(today);
//     billedDate.setDate(today.getDate() - daysAgo);
//     return billedDate.toLocaleDateString();
//   };

//   // Generate a random amount
//   const generateAmount = () => {
//     return Math.floor(Math.random() * (5000 - 400 + 1)) + 400;
//   };

//   // Create 10 random entries
//   const historyData = Array.from({ length: 10 }, () => ({
//     id: generateTransactionId(),
//     date: generateBilledDate(),
//     amount: generateAmount(),
//   }));

//   return (
//     <div style={{ padding: "0px" }}>
//       <Navbaradmin />
//       <h1
//         style={{
//           marginBottom: "20px",
//           fontSize: "30px",
//           fontWeight: "bold",
//           color: "#1e3a8a",
//         }}
//       >
//         Billing History
//       </h1>

//       <table
//         style={{
//           width: "100%",
//           maxWidth: "800px",
//           borderCollapse: "collapse",
//           background: "#f8f9fa",
//           boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//         }}
//       >
//         <thead>
//           <tr style={{ backgroundColor: "#1e3a8a", color: "white" }}>
//             <th style={{ padding: "12px", textAlign: "left" }}>Transaction ID</th>
//             <th style={{ padding: "12px", textAlign: "left" }}>Billed Date</th>
//             <th style={{ padding: "12px", textAlign: "left" }}>Amount</th>
//           </tr>
//         </thead>

//         <tbody>
//           {historyData.map((item, index) => (
//             <tr
//               key={index}
//               style={{
//                 borderBottom: "1px solid #ddd",
//                 background: index % 2 === 0 ? "#ffffff" : "#f3f4f6",
//               }}
//             >
//               <td style={{ padding: "10px" }}>{item.id}</td>
//               <td style={{ padding: "10px" }}>{item.date}</td>
//               <td style={{ padding: "10px" }}>₹{item.amount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Historyadmin;
import React from "react";
import Navbaradmin from "./navbaradmin";

function Historyadmin() {
  // Generate random transaction ID
  const generateTransactionId = () =>
    "TXN" + Math.floor(100000 + Math.random() * 900000);

  // Generate random billed date (last 180 days)
  const generateBilledDate = () => {
    const today = new Date();
    const daysAgo = Math.floor(Math.random() * 180);
    const billedDate = new Date();
    billedDate.setDate(today.getDate() - daysAgo);
    return billedDate.toLocaleDateString();
  };

  // Random amount
  const generateAmount = () =>
    Math.floor(Math.random() * (5000 - 400 + 1)) + 400;

  // Generate fake transaction history
  const historyData = Array.from({ length: 10 }, () => ({
    id: generateTransactionId(),
    date: generateBilledDate(),
    amount: generateAmount(),
  }));

  return (
    <>
      {/* INLINE CSS HERE */}
      <style>{`
        .history-wrapper {
          background: #eef3ff;
          min-height: 100vh;
          padding-bottom: 40px;
          text-align: center;
        }

        .history-title {
          font-size: 32px;
          font-weight: 900;
          color: #0A2A66;
          margin-top: 25px;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.15);
        }

        .history-card {
          max-width: 900px;
          margin: auto;
          background: white;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0px 6px 18px rgba(0,0,0,0.15);
          border-left: 6px solid #1e88e5;
          transition: 0.3s;
        }

        .history-card:hover {
          transform: scale(1.01);
          box-shadow: 0px 10px 25px rgba(0,0,0,0.25);
        }

        .history-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
          background: #f8f9fa;
          border-radius: 10px;
          overflow: hidden;
        }

        .history-table th {
          background: #1e3a8a;
          color: white;
          padding: 12px;
          text-align: left;
        }

        .history-table td {
          padding: 12px;
          font-size: 16px;
          color: #333;
        }

        .table-row:nth-child(even) {
          background: #eef;
        }

        .table-row:nth-child(odd) {
          background: white;
        }

        /* MOBILE SCROLL CONTAINER */
        .table-responsive {
          overflow-x: auto;
          padding: 10px;
        }

        /* MOBILE RESPONSIVENESS */
        @media (max-width: 768px) {
          .history-title {
            font-size: 24px;
          }

          .history-card {
            width: 92%;
            padding: 15px;
          }

          .history-table th, .history-table td {
            font-size: 14px;
            padding: 10px;
          }
        }
      `}</style>

      <Navbaradmin />

      <div className="history-wrapper">
        <h1 className="history-title">Billing History</h1>

        <div className="history-card">
          {/* RESPONSIVE TABLE WRAPPER */}
          <div className="table-responsive">
            <table className="history-table">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Billed Date</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                {historyData.map((item, index) => (
                  <tr key={index} className="table-row">
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td>₹{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  );
}

export default Historyadmin;
