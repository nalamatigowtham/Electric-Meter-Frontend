// import React from "react";
// import Navbar from "./Navbar";

// function Home() {
//   return (
//     <div>
//       <Navbar />

//       {/* Main Intro Section */}
//       <div style={{ padding: "40px 20px" }}>
//         <h1
//           style={{
//             fontSize: "36px",
//             fontWeight: "bold",
//             color: "#0A2A66",
//             marginBottom: "20px",
//           }}
//         >
//           Welcome to the National Electricity Board Portal
//         </h1>

//         <p
//           style={{
//             fontSize: "18px",
//             maxWidth: "800px",
//             color: "#555",
//             lineHeight: "1.6",
//             marginBottom: "30px",
//           }}
//         >
//           The National Electricity Board is committed to delivering safe,
//           reliable, and efficient power supply to households, industries, and
//           communities across the nation. Through this online portal, consumers
//           can explore essential information regarding electricity services,
//           energy usage, infrastructure, and operational updates from the board.
//         </p>

//         <img
//           src="https://images.unsplash.com/photo-1581091012184-5c7b5bc5a6fd?auto=format&fit=crop&w=1000&q=80"
//           alt="Electricity infrastructure"
//           style={{
//             width: "100%",
//             maxWidth: "800px",
//             borderRadius: "12px",
//             boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
//             marginBottom: "40px",
//           }}
//         />

//         <h2
//           style={{
//             fontSize: "28px",
//             fontWeight: "bold",
//             color: "#0A2A66",
//             marginBottom: "20px",
//           }}
//         >
//           Empowering the Nation with Modern Electricity Infrastructure
//         </h2>

//         <p
//           style={{
//             fontSize: "18px",
//             maxWidth: "800px",
//             color: "#555",
//             lineHeight: "1.6",
//             marginBottom: "30px",
//           }}
//         >
//           Our network includes modern transmission lines, smart metering
//           systems, and advanced monitoring technologies that ensure uninterrupted
//           power supply. We continue to enhance our systems to meet growing power
//           demands while promoting energy conservation and sustainable practices.
//         </p>

//         <img
//           src="https://images.unsplash.com/photo-1521120413309-42d3d4f931f3?auto=format&fit=crop&w=1000&q=80"
//           alt="Electric grid towers"
//           style={{
//             width: "100%",
//             maxWidth: "800px",
//             borderRadius: "12px",
//             boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
//             marginBottom: "40px",
//           }}
//         />

//         <h2
//           style={{
//             fontSize: "28px",
//             fontWeight: "bold",
//             color: "#0A2A66",
//             marginBottom: "20px",
//           }}
//         >
//           Our Commitment
//         </h2>

//         <p
//           style={{
//             fontSize: "18px",
//             maxWidth: "800px",
//             color: "#555",
//             lineHeight: "1.6",
//             marginBottom: "30px",
//           }}
//         >
//           We aim to deliver transparent, dependable services with continuous
//           improvements in technology and customer care. This portal will serve as
//           your information gateway for electricity-related updates and resources.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Home;


// import React from "react";
// import Navbar from "./Navbar";

// function Home() {
//   return (
//     <div>
//       <Navbar />

//       <div style={{ padding: "40px 20px" }}>
//         <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#0A2A66", marginBottom: "20px" }}>
//           Welcome to the National Electricity Board Portal
//         </h1>

//         <p style={{ fontSize: "18px", maxWidth: "800px", color: "#555", lineHeight: "1.6", marginBottom: "30px" }}>
//           The National Electricity Board is committed to delivering safe, reliable, and efficient power supply to households, industries, and communities across the nation. Through this online portal, consumers can explore essential information regarding electricity services, energy usage, infrastructure, and operational updates from the board.
//         </p>

//         <img
//           src="https://images.unsplash.com/photo-1581091012184-5c7b5bc5a6fd?auto=format&fit=crop&w=1000&q=80"
//           alt="Electricity infrastructure"
//           style={{ width: "100%", maxWidth: "800px", borderRadius: "12px", boxShadow: "0 4px 14px rgba(0,0,0,0.2)", marginBottom: "40px" }}
//         />

//         <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#0A2A66", marginBottom: "20px" }}>
//           Empowering the Nation with Modern Electricity Infrastructure
//         </h2>

//         <p style={{ fontSize: "18px", maxWidth: "800px", color: "#555", lineHeight: "1.6", marginBottom: "30px" }}>
//           Our network includes modern transmission lines, smart metering systems, and advanced monitoring technologies that ensure uninterrupted power supply. We continue to enhance our systems to meet growing power demands while promoting energy conservation and sustainable practices.
//         </p>

//         <img
//           src="https://images.unsplash.com/photo-1521120413309-42d3d4f931f3?auto=format&fit=crop&w=1000&q=80"
//           alt="Electric grid towers"
//           style={{ width: "100%", maxWidth: "800px", borderRadius: "12px", boxShadow: "0 4px 14px rgba(0,0,0,0.2)", marginBottom: "40px" }}
//         />

//         <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#0A2A66", marginBottom: "20px" }}>Our Commitment</h2>

//         <p style={{ fontSize: "18px", maxWidth: "800px", color: "#555", lineHeight: "1.6", marginBottom: "30px" }}>
//           We aim to deliver transparent, dependable services with continuous improvements in technology and customer care. This portal will serve as your information gateway for electricity-related updates and resources.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      {/* Inline CSS */}
      <style>{`
        body {
          background: #eef3ff;
        }

        .home-wrapper {
          background: linear-gradient(120deg, #dbe7ff, #f0fff4);
          min-height: 100vh;
          padding-bottom: 50px;
        }

        .home-container {
          padding: 50px 20px;
          text-align: center;
          max-width: 1000px;
          margin: auto;
        }

        .home-title {
          font-size: 42px;
          font-weight: 900;
          color: #0A2A66;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }

        .highlight {
          color: #2F80ED;
        }

        .home-text {
          font-size: 18px;
          max-width: 850px;
          margin: 0 auto 30px auto;
          color: #333;
          line-height: 1.8;
        }

        .section-box {
          background: white;
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0px 5px 18px rgba(0,0,0,0.12);
          margin-bottom: 40px;
          border-left: 6px solid #2F80ED;
        }

        .home-image {
          width: 100%;
          max-width: 900px;
          border-radius: 15px;
          box-shadow: 0px 6px 20px rgba(0,0,0,0.2);
          margin-bottom: 35px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .home-image:hover {
          transform: scale(1.03);
          box-shadow: 0px 10px 30px rgba(0,0,0,0.3);
        }

        .home-subtitle {
          font-size: 30px;
          font-weight: 800;
          color: #0A2A66;
          margin-bottom: 15px;
          padding-bottom: 8px;
          border-bottom: 3px solid #2F80ED;
          display: inline-block;
        }
      `}</style>

      <Navbar />

      <div className="home-wrapper">
        <div className="home-container">

          <h1 className="home-title">
            Welcome to the <span className="highlight">National Electricity Board</span> Portal
          </h1>

          <div className="section-box">
            <p className="home-text">
              The National Electricity Board is committed to delivering safe, 
              reliable, and efficient power supply to households, industries, 
              and communities across the nation. Through this online portal, 
              consumers can access essential information regarding electricity 
              services, energy usage, infrastructure, and operational updates.
            </p>
          </div>

          <img
            className="home-image"
            src="https://images.unsplash.com/photo-1581091012184-5c7b5bc5a6fd?auto=format&fit=crop&w=1000&q=80"
            alt="Electricity infrastructure"
          />

          <h2 className="home-subtitle">Empowering the Nation with Modern Electricity Infrastructure</h2>

          <div className="section-box">
            <p className="home-text">
              Our network consists of modern transmission lines, smart metering 
              systems, and advanced monitoring technologies that ensure uninterrupted 
              power supply. We constantly upgrade our systems to meet rising power 
              demands and encourage sustainable energy practices.
            </p>
          </div>

          <img
            className="home-image"
            src="https://images.unsplash.com/photo-1521120413309-42d3d4f931f3?auto=format&fit=crop&w=1000&q=80"
            alt="Electric grid towers"
          />

          <h2 className="home-subtitle">Our Commitment</h2>

          <div className="section-box">
            <p className="home-text">
              We promise transparent, dependable services with a focus on customer 
              satisfaction and continuous improvement. This portal serves as your 
              gateway to electricity-related updates, resources, and services.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
