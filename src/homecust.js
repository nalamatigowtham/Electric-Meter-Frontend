import React from "react";
import Navbaradmin from "./navbaradmin";

function Homecust() {
  return (
    <>
      {/* Inline CSS for consistent theme */}
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

        /* Responsive adjustments */
        @media (max-width: 600px) {
          .home-title {
            font-size: 32px;
          }

          .home-subtitle {
            font-size: 24px;
          }

          .section-box {
            padding: 20px;
          }
        }
      `}</style>

      <Navbaradmin />

      <div className="home-wrapper">
        <div className="home-container">

          {/* Header Title */}
          <h1 className="home-title">
            Welcome, <span className="highlight">Customer</span> — National Electricity Board Portal
          </h1>

          {/* Intro Section */}
          <div className="section-box">
            <p className="home-text">
              The National Electricity Board is committed to delivering safe,
              reliable, and efficient power supply to households, industries,
              and communities across the nation. Explore essential information
              regarding electricity services, energy usage, infrastructure, and updates.
            </p>
          </div>

          {/* Image 1 */}
          <img
            className="home-image"
            src="https://images.unsplash.com/photo-1581091012184-5c7b5bc5a6fd?auto=format&fit=crop&w=1000&q=80"
            alt="Electricity infrastructure"
          />

          {/* Subtitle */}
          <h2 className="home-subtitle">Modern Electricity Infrastructure</h2>

          {/* Info Box */}
          <div className="section-box">
            <p className="home-text">
              Our infrastructure includes modern transmission lines, smart metering
              systems, and advanced monitoring technologies that ensure uninterrupted
              power supply. We continuously upgrade to meet growing electricity demands
              and promote sustainable energy practices.
            </p>
          </div>

          {/* Image 2 */}
          <img
            className="home-image"
            src="https://images.unsplash.com/photo-1521120413309-42d3d4f931f3?auto=format&fit=crop&w=1000&q=80"
            alt="Electric grid towers"
          />

          <h2 className="home-subtitle">Our Commitment</h2>

          {/* Commitment Section */}
          <div className="section-box">
            <p className="home-text">
              We are dedicated to delivering transparent and dependable services with
              continuous improvements in technology and customer satisfaction. This
              portal provides customers with easy access to electricity-related
              information, services, and updates.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Homecust;
