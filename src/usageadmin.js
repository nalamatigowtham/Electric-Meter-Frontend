// // import React, { useEffect, useState } from "react";
// // import Navbaradmin from "./navbaradmin";
// // import axios from "axios";
// // import {
// //   LineChart,
// //   Line,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   CartesianGrid,
// //   BarChart,
// //   Bar,
// //   Legend
// // } from "recharts";

// // function Usageadmin() {
// //   const customerId = localStorage.getItem("selectedCustomer");  // FIXED
// //   const [usage, setUsage] = useState([]);

// //   useEffect(() => {
// //     if (customerId) {
// //       axios
// //         .get(`http://localhost:8081/usage/${customerId}`)
// //         .then((res) => {
// //           if (res.data.status === "OK") {
// //             setUsage(res.data.data);
// //           }
// //         })
// //         .catch((err) => console.log("Error fetching usage:", err));
// //     }
// //   }, [customerId]);

// //   return (
// //     <div style={{ padding: "0px" }}>
// //       <Navbaradmin />

// //       <h2 style={{ fontWeight: "bold", marginBottom: "10px", color: "#1e3a8a" }}>
// //         Energy Usage (Imported / Exported)
// //       </h2>

// //       {/* ==================== TABLE ==================== */}
// //       <h3 style={{ marginTop: "40px" }}>Usage Table</h3>

// //       {usage.length === 0 ? (
// //         <p>No records found.</p>
// //       ) : (
// //         <table
// //           style={{
// //             width: "700px",
// //             borderCollapse: "collapse",
// //             marginTop: "10px",
// //             background: "#f8f9fa",
// //             boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
// //           }}
// //         >
// //           <thead>
// //             <tr style={{ background: "#1e3a8a", color: "white" }}>
// //               <th style={{ padding: "10px" }}>Date</th>
// //               <th style={{ padding: "10px" }}>Imported (kWh)</th>
// //               <th style={{ padding: "10px" }}>Exported (kWh)</th>
// //             </tr>
// //           </thead>

// //           <tbody>
// //             {usage.map((row, i) => (
// //               <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#eef" }}>
// //                 <td style={{ padding: "10px" }}>{row.date}</td>
// //                 <td style={{ padding: "10px" }}>{row.imported}</td>
// //                 <td style={{ padding: "10px" }}>{row.exported}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       )}

// //       {/* ==================== LINE CHART ==================== */}
// //       <div style={{ marginTop: "40px" }}>
// //         <h3>Daily Imported vs Exported (Line Chart)</h3>

// //         <LineChart width={700} height={300} data={usage}>
// //           <CartesianGrid strokeDasharray="3 3" />
// //           <XAxis dataKey="date" />
// //           <YAxis />
// //           <Tooltip />
// //           <Legend />

// //           <Line type="monotone" dataKey="imported" stroke="#1e3a8a" strokeWidth={2} />
// //           <Line type="monotone" dataKey="exported" stroke="#10b981" strokeWidth={2} />
// //         </LineChart>
// //       </div>

// //       {/* ==================== BAR CHART ==================== */}
// //       <div style={{ marginTop: "40px" }}>
// //         <h3>Daily Usage (Bar Chart)</h3>

// //         <BarChart width={700} height={300} data={usage}>
// //           <CartesianGrid strokeDasharray="3 3" />
// //           <XAxis dataKey="date" />
// //           <YAxis />
// //           <Tooltip />
// //           <Legend />

// //           <Bar dataKey="imported" fill="#1e3a8a" />
// //           <Bar dataKey="exported" fill="#10b981" />
// //         </BarChart>
// //       </div>

// //     </div>
// //   );
// // }

// // export default Usageadmin;
// import React, { useEffect, useState } from "react";
// import Navbaradmin from "./navbaradmin";
// import axios from "axios";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   BarChart,
//   Bar,
//   Legend,
//   ResponsiveContainer
// } from "recharts";

// function Usageadmin() {
//   const customerId = localStorage.getItem("selectedCustomer");
//   const [usage, setUsage] = useState([]);

//   useEffect(() => {
//     if (customerId) {
//       axios
//         .get(`http://localhost:8081/usage/${customerId}`)
//         .then((res) => {
//           if (res.data.status === "OK") {
//             setUsage(res.data.data);
//           }
//         })
//         .catch((err) => console.log("Error fetching usage:", err));
//     }
//   }, [customerId]);

//   return (
//     <div style={{ padding: "0px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
//       <Navbaradmin />

//       <div style={{ padding: "20px", maxWidth: "95%", margin: "0 auto" }}>
//         <h2 style={{ fontWeight: "bold", marginBottom: "20px", color: "#1e3a8a", textAlign: "center" }}>
//           Energy Usage (Imported / Exported)
//         </h2>

//         {/* ==================== TABLE ==================== */}
//         <div style={{ overflowX: "auto" }}>
//           <h3 style={{ marginTop: "20px", color: "#1e3a8a" }}>Usage Table</h3>

//           {usage.length === 0 ? (
//             <p style={{ textAlign: "center", color: "#555" }}>No records found.</p>
//           ) : (
//             <table
//               style={{
//                 width: "100%",
//                 minWidth: "300px",
//                 borderCollapse: "collapse",
//                 marginTop: "10px",
//                 background: "#f8f9fa",
//                 boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
//                 borderRadius: "8px",
//                 overflow: "hidden"
//               }}
//             >
//               <thead>
//                 <tr style={{ background: "#1e3a8a", color: "white" }}>
//                   <th style={{ padding: "10px", textAlign: "left" }}>Date</th>
//                   <th style={{ padding: "10px", textAlign: "right" }}>Imported (kWh)</th>
//                   <th style={{ padding: "10px", textAlign: "right" }}>Exported (kWh)</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {usage.map((row, i) => (
//                   <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#eef", transition: "background 0.3s" }}>
//                     <td style={{ padding: "10px" }}>{row.date}</td>
//                     <td style={{ padding: "10px", textAlign: "right" }}>{row.imported}</td>
//                     <td style={{ padding: "10px", textAlign: "right" }}>{row.exported}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>

//         {/* ==================== LINE CHART ==================== */}
//         <div style={{ marginTop: "40px" }}>
//           <h3 style={{ color: "#1e3a8a", textAlign: "center" }}>Daily Imported vs Exported (Line Chart)</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={usage}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="imported" stroke="#1e3a8a" strokeWidth={2} />
//               <Line type="monotone" dataKey="exported" stroke="#10b981" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* ==================== BAR CHART ==================== */}
//         <div style={{ marginTop: "40px", marginBottom: "40px" }}>
//           <h3 style={{ color: "#1e3a8a", textAlign: "center" }}>Daily Usage (Bar Chart)</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={usage}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="imported" fill="#1e3a8a" />
//               <Bar dataKey="exported" fill="#10b981" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Usageadmin;


// import React, { useEffect, useState } from "react";
// import Navbaradmin from "./navbaradmin";
// import axios from "axios";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   BarChart,
//   Bar,
//   Legend,
//   ResponsiveContainer
// } from "recharts";

// function Usageadmin() {
//   const customerId = localStorage.getItem("selectedCustomer");
//   const [usage, setUsage] = useState([]);

//   useEffect(() => {
//     if (customerId) {
//       axios
//         .get(`https://electricmeter-backend-1.onrender.com/usage/${customerId}`)
//         .then((res) => {
//           if (res.data.status === "OK") {
//             setUsage(res.data.data);
//           }
//         })
//         .catch((err) => console.log("Error fetching usage:", err));
//     }
//   }, [customerId]);

//   return (
//     <>
//       {/* Modern Inline CSS */}
//       <style>{`
//         .usage-wrapper {
//           background: #eef3ff;
//           min-height: 100vh;
//           padding-bottom: 50px;
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         }

//         .usage-container {
//           max-width: 1200px;
//           padding: 30px 20px;
//           margin: auto;
//         }

//         .usage-title {
//           font-weight: 900;
//           color: #0A2A66;
//           margin-bottom: 25px;
//           text-align: center;
//           font-size: 34px;
//           text-shadow: 1px 1px 4px rgba(0,0,0,0.1);
//         }

//         .section-card {
//           background: white;
//           padding: 25px;
//           border-radius: 15px;
//           box-shadow: 0 6px 18px rgba(0,0,0,0.12);
//           border-left: 6px solid #1e88e5;
//           margin-top: 25px;
//           transition: 0.3s;
//         }

//         .section-card:hover {
//           transform: scale(1.01);
//           box-shadow: 0 10px 28px rgba(0,0,0,0.2);
//         }

//         .table-title,
//         .chart-title {
//           color: #0A2A66;
//           font-weight: 800;
//           margin-bottom: 15px;
//           text-align: center;
//           font-size: 24px;
//         }

//         table {
//           border-radius: 10px;
//           overflow: hidden;
//         }

//         th {
//           background: #0A2A66;
//           color: white;
//           padding: 12px;
//           text-align: left;
//         }

//         td {
//           padding: 12px;
//           color: #333;
//         }

//         tr:nth-child(even) {
//           background: #eef3ff;
//         }

//         tr:hover {
//           background: #dce7ff;
//           transition: 0.3s;
//         }

//         @media (max-width: 600px) {
//           .usage-title {
//             font-size: 28px;
//           }
//         }
//       `}
//       </style>

//       <Navbaradmin />

//       <div className="usage-wrapper">
//         <div className="usage-container">

//           <h2 className="usage-title">Energy Usage (Imported / Exported)</h2>

//           {/* ==================== TABLE SECTION ==================== */}
//           <div className="section-card">
//             <h3 className="table-title">Usage Table</h3>

//             {usage.length === 0 ? (
//               <p style={{ textAlign: "center", color: "#555" }}>No records found.</p>
//             ) : (
//               <div style={{ overflowX: "auto" }}>
//                 <table
//                   style={{
//                     width: "100%",
//                     borderCollapse: "collapse",
//                     background: "white",
//                     minWidth: "300px",
//                   }}
//                 >
//                   <thead>
//                     <tr>
//                       <th>Date</th>
//                       <th style={{ textAlign: "right" }}>Imported (kWh)</th>
//                       <th style={{ textAlign: "right" }}>Exported (kWh)</th>
//                     </tr>
//                   </thead>

//                   <tbody>
//                     {usage.map((row, index) => (
//                       <tr key={index}>
//                         <td>{row.date}</td>
//                         <td style={{ textAlign: "right" }}>{row.imported}</td>
//                         <td style={{ textAlign: "right" }}>{row.exported}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>

//           {/* ==================== LINE CHART ==================== */}
//           <div className="section-card">
//             <h3 className="chart-title">Daily Imported vs Exported (Line Chart)</h3>

//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={usage}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="imported" stroke="#0A2A66" strokeWidth={3} />
//                 <Line type="monotone" dataKey="exported" stroke="#16a34a" strokeWidth={3} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           {/* ==================== BAR CHART ==================== */}
//           <div className="section-card" style={{ marginBottom: "40px" }}>
//             <h3 className="chart-title">Daily Usage (Bar Chart)</h3>

//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={usage}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="imported" fill="#0A2A66" />
//                 <Bar dataKey="exported" fill="#16a34a" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// export default Usageadmin;
 
import React, { useEffect, useState } from "react";
import Navbaradmin from "./navbaradmin";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer
} from "recharts";

function Usageadmin() {
  const customerId = localStorage.getItem("selectedCustomer");
  const [usage, setUsage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20;

  useEffect(() => {
    if (customerId) {
      axios
        .get(`https://electricmeter-backend-1.onrender.com/usage/${customerId}`)
        .then((res) => {
          if (res.data.status === "OK") {
            // Sort by date ascending
            const sortedData = res.data.data.sort(
              (a, b) => new Date(a.date) - new Date(b.date)
            );
            setUsage(sortedData);
          }
        })
        .catch((err) => console.log("Error fetching usage:", err));
    }
  }, [customerId]);

  // Pagination calculations
  const totalPages = Math.ceil(usage.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = usage.slice(indexOfFirstRow, indexOfLastRow);

  const goToPage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <style>{`
        .usage-wrapper { background: #eef3ff; min-height: 100vh; padding-bottom: 50px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        .usage-container { max-width: 1200px; padding: 30px 20px; margin: auto; }
        .usage-title { font-weight: 900; color: #0A2A66; margin-bottom: 25px; text-align: center; font-size: 34px; text-shadow: 1px 1px 4px rgba(0,0,0,0.1); }
        .section-card { background: white; padding: 25px; border-radius: 15px; box-shadow: 0 6px 18px rgba(0,0,0,0.12); border-left: 6px solid #1e88e5; margin-top: 25px; transition: 0.3s; }
        .section-card:hover { transform: scale(1.01); box-shadow: 0 10px 28px rgba(0,0,0,0.2); }
        .table-title, .chart-title { color: #0A2A66; font-weight: 800; margin-bottom: 15px; text-align: center; font-size: 24px; }
        table { border-radius: 10px; overflow: hidden; width: 100%; border-collapse: collapse; }
        th { background: #0A2A66; color: white; padding: 12px; text-align: left; }
        td { padding: 12px; color: #333; }
        tr:nth-child(even) { background: #eef3ff; }
        tr:hover { background: #dce7ff; transition: 0.3s; }
        .pagination { display: flex; justify-content: center; gap: 6px; margin-top: 15px; flex-wrap: wrap; }
        .pagination button { padding: 6px 10px; border-radius: 6px; border: none; background: #1e3a8a; color: white; cursor: pointer; transition: 0.2s; }
        .pagination button:hover { background: #0a2a66; }
        .pagination .active { background: #16a34a; }
        @media (max-width: 600px) { .usage-title { font-size: 28px; } }
      `}</style>

      <Navbaradmin />

      <div className="usage-wrapper">
        <div className="usage-container">
          <h2 className="usage-title">Energy Usage (Imported / Exported)</h2>

          {/* ==================== TABLE SECTION ==================== */}
          <div className="section-card">
            <h3 className="table-title">Usage Table</h3>

            {usage.length === 0 ? (
              <p style={{ textAlign: "center", color: "#555" }}>No records found.</p>
            ) : (
              <>
                <div style={{ overflowX: "auto" }}>
                  <table>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th style={{ textAlign: "right" }}>Imported (kWh)</th>
                        <th style={{ textAlign: "right" }}>Exported (kWh)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentRows.map((row, index) => (
                        <tr key={index}>
                          <td>{row.date}</td>
                          <td style={{ textAlign: "right" }}>{row.imported}</td>
                          <td style={{ textAlign: "right" }}>{row.exported}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* PAGINATION */}
                <div className="pagination">
                  <button onClick={() => goToPage(currentPage - 1)}>Prev</button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      className={currentPage === i + 1 ? "active" : ""}
                      onClick={() => goToPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button onClick={() => goToPage(currentPage + 1)}>Next</button>
                </div>
              </>
            )}
          </div>

          {/* ==================== LINE CHART ==================== */}
          <div className="section-card">
            <h3 className="chart-title">Daily Imported vs Exported (Line Chart)</h3>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={usage}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="imported" stroke="#0A2A66" strokeWidth={3} />
                <Line type="monotone" dataKey="exported" stroke="#16a34a" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* ==================== BAR CHART ==================== */}
          <div className="section-card" style={{ marginBottom: "40px" }}>
            <h3 className="chart-title">Daily Usage (Bar Chart)</h3>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={usage}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="imported" fill="#0A2A66" />
                <Bar dataKey="exported" fill="#16a34a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Usageadmin;
