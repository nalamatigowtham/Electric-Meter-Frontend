// import React from 'react';

// function Navbaradmin() {
//     const id = localStorage.getItem("selectedCustomer"); 
//   return (
//     <nav style={{
//       display: 'flex',
//       justifyContent: 'space-between',
//       padding: '10px 20px',
//       backgroundColor: '#f0f0f0',
//       fontSize: '18px'
//     }}>
//       <div className="logo">
//         MyLogo
//       </div>

//       <div style={{ display: 'flex', gap: '20px' }}>
//         <a href={`/homecust/${id}`} style={{ textDecoration: 'none' }}>Home</a>
//         <a href={`/homecust/billingadmin/${id}`} style={{ textDecoration: 'none' }}>Billing</a>
//         <a href={`/homecust/usageadmin/${id}`} style={{ textDecoration: 'none' }}>Usage</a>
//         <a href={`/homecust/historyadmin/${id}`} style={{ textDecoration: 'none' }}>Payment History</a>
//       </div>
//     </nav>
//   );
// }

// export default Navbaradmin;
import React, { useState, useRef, useEffect } from "react";

function Navbaradmin() {
  const id = localStorage.getItem("selectedCustomer");
  const admin = JSON.parse(localStorage.getItem("admin")); // admin stored separately

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  const avatarRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
    setDropOpen(false); 
  };

  const toggleDropdown = () => {
    setDropOpen(!dropOpen);
    setMenuOpen(false);
  };

  const handleSignOut = () => {
    localStorage.removeItem("admin");
    window.location.href = "/"; // redirect to login
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        avatarRef.current &&
        !avatarRef.current.contains(e.target)
      ) {
        setDropOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getAdminInitials = (name) => {
    if (!name) return "A";
    return name
      .split(" ")
      .map((n) => n[0].toUpperCase())
      .join("");
  };

  return (
    <>
      {/* INLINE CSS */}
      <style>{`
        .navbar-admin {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 25px;
          background: linear-gradient(90deg, #0A2A66, #1e88e5);
          color: white;
          font-size: 18px;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0px 4px 15px rgba(0,0,0,0.2);
        }

        .admin-logo {
          font-size: 26px;
          font-weight: 800;
          cursor: pointer;
        }

        .admin-links {
          display: flex;
          gap: 25px;
          align-items: center;
        }

        .admin-link {
          color: #fff;
          text-decoration: none;
          padding: 6px 10px;
          border-radius: 6px;
          transition: 0.25s;
        }

        .admin-link:hover {
          background: rgba(255,255,255,0.25);
        }

        .admin-avatar {
          width: 40px;
          height: 40px;
          background: #ffb300;
          color: #000;
          font-weight: 700;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          margin-left: 10px;
        }

        .dropdown-admin {
          position: absolute;
          top: 55px;
          right: 0;
          min-width: 150px;
          background: white;
          color: #000;
          border-radius: 10px;
          box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.25);
          z-index: 2000;
          overflow: hidden;
        }

        .dropdown-item {
          padding: 12px 18px;
          cursor: pointer;
          transition: 0.3s;
          width: 100%;
          text-align: left;
          border: none;
          background: none;
        }

        .dropdown-item:hover {
          background: #f5f5f5;
        }

        /* MOBILE MENU ICON */
        .admin-menu-icon {
          display: none;
          font-size: 30px;
          cursor: pointer;
        }

        /* MOBILE MENU */
        .admin-mobile-menu {
          display: none;
          flex-direction: column;
          background: #0A2A66;
          padding: 20px;
          gap: 15px;
          position: absolute;
          top: 65px;
          right: 20px;
          border-radius: 10px;
          box-shadow: 0px 8px 25px rgba(0,0,0,0.3);
          z-index: 2000;
        }

        .admin-mobile-link {
          color: white;
          font-size: 18px;
          text-decoration: none;
        }
        .admin-mobile-link:hover {
          color: #f5d142;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .admin-links {
            display: none;
          }
          .admin-menu-icon {
            display: block;
          }
          .admin-mobile-menu {
            display: ${menuOpen ? "flex" : "none"};
          }
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="navbar-admin">
        <div className="admin-logo">Admin Panel</div>

        {/* Desktop Links */}
        <div className="admin-links">
          <a href={`/homecust/${id}`} className="admin-link">Home</a>
          <a href={`/homecust/billingadmin/${id}`} className="admin-link">Billing</a>
          <a href={`/homecust/usageadmin/${id}`} className="admin-link">Usage</a>
          <a href={`/homecust/historyadmin/${id}`} className="admin-link">History</a>

          {/* ADMIN AVATAR */}
          <div style={{ position: "relative" }}>
            <div
              className="admin-avatar"
              onClick={toggleDropdown}
              ref={avatarRef}
            >
              {getAdminInitials(admin?.name)}
            </div>

            {dropOpen && (
              <div className="dropdown-admin" ref={dropdownRef}>
                <button className="dropdown-item" onClick={handleSignOut}>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="admin-menu-icon" onClick={toggleMobileMenu}>
          ☰
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className="admin-mobile-menu">
        <a href={`/homecust/${id}`} className="admin-mobile-link">Home</a>
        <a href={`/homecust/billingadmin/${id}`} className="admin-mobile-link">Billing</a>
        <a href={`/homecust/usageadmin/${id}`} className="admin-mobile-link">Usage</a>
        <a href={`/homecust/historyadmin/${id}`} className="admin-mobile-link">History</a>

        <button
          className="admin-mobile-link"
          style={{ background: "none", border: "none", textAlign: "left" }}
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </>
  );
}

export default Navbaradmin;
