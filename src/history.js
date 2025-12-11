// // import React from "react";
// // import Navbar from "./Navbar";

// // function History() {
// //   // Generate a random transaction ID
// //   const generateTransactionId = () => {
// //     return "TXN" + Math.floor(100000 + Math.random() * 900000); // TXN123456
// //   };

// //   // Generate a random billed date (within last 180 days)
// //   const generateBilledDate = () => {
// //     const today = new Date();
// //     const daysAgo = Math.floor(Math.random() * 180); // 6 months
// //     const billedDate = new Date(today);
// //     billedDate.setDate(today.getDate() - daysAgo);
// //     return billedDate.toLocaleDateString();
// //   };

// //   // Generate a random amount
// //   const generateAmount = () => {
// //     return Math.floor(Math.random() * (5000 - 400 + 1)) + 400;
// //   };

// //   // Create 10 random entries
// //   const historyData = Array.from({ length: 10 }, () => ({
// //     id: generateTransactionId(),
// //     date: generateBilledDate(),
// //     amount: generateAmount(),
// //   }));

// //   return (
// //     <div style={{ padding: "0px" }}>
// //       <Navbar />
// //       <h1
// //         style={{
// //           marginBottom: "20px",
// //           fontSize: "30px",
// //           fontWeight: "bold",
// //           color: "#1e3a8a",
// //         }}
// //       >
// //         Billing History
// //       </h1>

// //       <table
// //         style={{
// //           width: "100%",
// //           maxWidth: "800px",
// //           borderCollapse: "collapse",
// //           background: "#f8f9fa",
// //           boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
// //         }}
// //       >
// //         <thead>
// //           <tr style={{ backgroundColor: "#1e3a8a", color: "white" }}>
// //             <th style={{ padding: "12px", textAlign: "left" }}>Transaction ID</th>
// //             <th style={{ padding: "12px", textAlign: "left" }}>Billed Date</th>
// //             <th style={{ padding: "12px", textAlign: "left" }}>Amount</th>
// //           </tr>
// //         </thead>

// //         <tbody>
// //           {historyData.map((item, index) => (
// //             <tr
// //               key={index}
// //               style={{
// //                 borderBottom: "1px solid #ddd",
// //                 background: index % 2 === 0 ? "#ffffff" : "#f3f4f6",
// //               }}
// //             >
// //               <td style={{ padding: "10px" }}>{item.id}</td>
// //               <td style={{ padding: "10px" }}>{item.date}</td>
// //               <td style={{ padding: "10px" }}>₹{item.amount}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

// // export default History;
// import React from "react";
// import Navbar from "./Navbar";

// function History() {
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
//     <div style={{ padding: "0px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
//       <Navbar />

//       <div style={{ padding: "20px", maxWidth: "95%", margin: "0 auto" }}>
//         <h1
//           style={{
//             marginBottom: "20px",
//             fontSize: "28px",
//             fontWeight: "bold",
//             color: "#1e3a8a",
//             textAlign: "center",
//           }}
//         >
//           Billing History
//         </h1>

//         <div style={{ overflowX: "auto" }}>
//           <table
//             style={{
//               width: "100%",
//               minWidth: "300px",
//               borderCollapse: "collapse",
//               background: "#f8f9fa",
//               boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//               borderRadius: "8px",
//               overflow: "hidden",
//             }}
//           >
//             <thead>
//               <tr style={{ backgroundColor: "#1e3a8a", color: "white" }}>
//                 <th style={{ padding: "12px", textAlign: "left" }}>Transaction ID</th>
//                 <th style={{ padding: "12px", textAlign: "left" }}>Billed Date</th>
//                 <th style={{ padding: "12px", textAlign: "right" }}>Amount</th>
//               </tr>
//             </thead>

//             <tbody>
//               {historyData.map((item, index) => (
//                 <tr
//                   key={index}
//                   style={{
//                     borderBottom: "1px solid #ddd",
//                     background: index % 2 === 0 ? "#ffffff" : "#f3f4f6",
//                   }}
//                 >
//                   <td style={{ padding: "10px" }}>{item.id}</td>
//                   <td style={{ padding: "10px" }}>{item.date}</td>
//                   <td style={{ padding: "10px", textAlign: "right" }}>₹{item.amount}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default History;


import React from "react";
import Navbar from "./Navbar";

function History() {
  // Generate a random transaction ID
  const generateTransactionId = () => {
    return "TXN" + Math.floor(100000 + Math.random() * 900000);
  };

  // Generate a random billed date (within last 180 days)
  const generateBilledDate = () => {
    const today = new Date();
    const daysAgo = Math.floor(Math.random() * 180);
    const billedDate = new Date(today);
    billedDate.setDate(today.getDate() - daysAgo);
    return billedDate.toLocaleDateString();
  };

  // Generate a random amount
  const generateAmount = () => {
    return Math.floor(Math.random() * (5000 - 400 + 1)) + 400;
  };

  // Create 10 random entries
  const historyData = Array.from({ length: 10 }, () => ({
    id: generateTransactionId(),
    date: generateBilledDate(),
    amount: generateAmount(),
  }));

  return (
    <>
      {/* Modern Styling */}
      <style>{`
        .history-wrapper {
          background: #eef3ff;
          min-height: 100vh;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .history-container {
          max-width: 1000px;
          margin: 30px auto;
          padding: 20px;
        }

        .history-title {
          font-size: 36px;
          font-weight: 900;
          text-align: center;
          color: #0A2A66;
          margin-bottom: 30px;
          text-shadow: 1px 1px 4px rgba(0,0,0,0.1);
        }

        .history-card {
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.12);
          border-left: 6px solid #1e88e5;
          transition: 0.3s;
        }

        .history-card:hover {
          transform: scale(1.01);
          box-shadow: 0 10px 28px rgba(0,0,0,0.2);
        }

        th {
          background: #0A2A66;
          color: white;
          padding: 12px;
          text-align: left;
          font-size: 16px;
        }

        td {
          padding: 12px;
          font-size: 15px;
        }

        tr:nth-child(even) {
          background: #eef3ff;
        }

        tr:hover {
          background: #dce7ff;
          transition: 0.3s ease;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          border-radius: 12px;
          overflow: hidden;
        }

        @media (max-width: 600px) {
          .history-title {
            font-size: 28px;
          }

          th, td {
            padding: 10px;
            font-size: 14px;
          }
        }
      `}</style>

      <Navbar />

      <div className="history-wrapper">
        <div className="history-container">

          <h1 className="history-title">Billing History</h1>

          <div className="history-card">

            {historyData.length === 0 ? (
              <p style={{ textAlign: "center", color: "#555" }}>No records found.</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Billed Date</th>
                    <th style={{ textAlign: "right" }}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {historyData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.date}</td>
                      <td style={{ textAlign: "right" }}>₹{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default History;
