// // import React from 'react';

// // function Navbar() {
// //   return (
// //     <nav style={{
// //       display: 'flex',
// //       justifyContent: 'space-between',
// //       padding: '10px 20px',
// //       backgroundColor: '#f0f0f0',
// //       fontSize: '18px'
// //     }}>
// //       <div className="logo">
// //         MyLogo
// //       </div>

// //       <div style={{ display: 'flex', gap: '20px' }}>
// //         <a href="/home" style={{ textDecoration: 'none' }}>Home</a>
// //         <a href="/home/billing/:id" style={{ textDecoration: 'none' }}>Billing</a>
// //         <a href="/home/usage/:id" style={{ textDecoration: 'none' }}>Usage</a>
// //         <a href="/home/history" style={{ textDecoration: 'none' }}>Payment History</a>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;


// import React from 'react';

// function Navbar() {
//   const user = JSON.parse(localStorage.getItem("user"));

//   return (
//     <nav style={{
//       display: 'flex',
//       justifyContent: 'space-between',
//       padding: '10px 20px',
//       backgroundColor: '#f0f0f0',
//       fontSize: '18px'
//     }}>
//       <div className="logo">MyLogo</div>

//       <div style={{ display: 'flex', gap: '20px' }}>
//         <a href="/home" style={{ textDecoration: 'none' }}>Home</a>
//         {user && (
//           <>
//             <a href={`/home/billing/${user.id}`} style={{ textDecoration: 'none' }}>Billing</a>
//             <a href={`/home/usage/${user.id}`} style={{ textDecoration: 'none' }}>Usage</a>
//           </>
//         )}
//         <a href="/home/history" style={{ textDecoration: 'none' }}>Payment History</a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Navbar() {
//   const [user, setUser] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Try to get user from localStorage
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser) {
//       // Optionally, fetch latest user details from backend
//       axios.get(`http://localhost:8081/getUser/${storedUser.id}`)
//         .then(res => {
//           if (res.data.status === 'Found') {
//             setUser(res.data.user);
//             localStorage.setItem('user', JSON.stringify(res.data.user)); // keep updated
//           }
//         })
//         .catch(err => console.log("Fetch user error:", err));
//     }
//   }, []);

//   const handleSignOut = () => {
//     localStorage.removeItem('user');
//     setUser(null);
//     navigate('/'); // redirect to login
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const getUserInitials = (name) => {
//     if (!name) return '';
//     return name.split(' ').map(n => n[0].toUpperCase()).join('');
//   };

//   return (
//     <nav style={{
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: '10px 20px',
//       backgroundColor: '#f0f0f0',
//       fontSize: '18px',
//       position: 'relative'
//     }}>
//       <div className="logo">MyLogo</div>

//       <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
//         <a href="/home" style={{ textDecoration: 'none' }}>Home</a>
//         {user && (
//           <>
//             <a href={`/home/billing/${user.id}`} style={{ textDecoration: 'none' }}>Billing</a>
//             <a href={`/home/usage/${user.id}`} style={{ textDecoration: 'none' }}>Usage</a>
//           </>
//         )}
//         <a href="/home/history" style={{ textDecoration: 'none' }}>Payment History</a>

//         {user && (
//           <div style={{ position: 'relative' }}>
//             {/* User avatar / logo */}
//             <div 
//               onClick={toggleDropdown} 
//               style={{
//                 width: '35px',
//                 height: '35px',
//                 borderRadius: '50%',
//                 backgroundColor: '#1e3a8a',
//                 color: 'white',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 cursor: 'pointer',
//                 userSelect: 'none'
//               }}
//             >
//               {getUserInitials(user.name)}
//             </div>

//             {/* Dropdown for Sign Out */}
//             {dropdownOpen && (
//               <div style={{
//                 position: 'absolute',
//                 top: '45px',
//                 right: 0,
//                 backgroundColor: 'white',
//                 boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
//                 borderRadius: '5px',
//                 overflow: 'hidden'
//               }}>
//                 <button 
//                   onClick={handleSignOut} 
//                   style={{
//                     padding: '10px 20px',
//                     background: 'none',
//                     border: 'none',
//                     cursor: 'pointer',
//                     width: '100%',
//                     textAlign: 'left'
//                   }}
//                 >
//                   Sign Out
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Navbar() {
//   const [user, setUser] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser) {
//       axios.get(`http://localhost:8081/getUser/${storedUser.id}`)
//         .then(res => {
//           if (res.data.status === 'Found') {
//             setUser(res.data.user);
//             localStorage.setItem('user', JSON.stringify(res.data.user));
//           }
//         })
//         .catch(err => console.log("Fetch user error:", err));
//     }
//   }, []);

//   const handleSignOut = () => {
//     localStorage.removeItem('user');
//     setUser(null);
//     navigate('/');
//   };

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
//   const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

//   const getUserInitials = (name) =>
//     name ? name.split(' ').map(n => n[0].toUpperCase()).join('') : '';

//   return (
//     <>
//       {/* INLINE CSS */}
//       <style>{`
//         .navbar-container {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 12px 25px;
//           background: linear-gradient(90deg, #0A2A66, #1e88e5);
//           color: white;
//           font-size: 18px;
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//           box-shadow: 0px 4px 15px rgba(0,0,0,0.2);
//         }

//         .navbar-logo {
//           font-size: 26px;
//           font-weight: 900;
//           cursor: pointer;
//           text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
//         }

//         .navbar-links {
//           display: flex;
//           gap: 25px;
//           align-items: center;
//         }

//         .navbar-link {
//           color: #fff;
//           text-decoration: none;
//           padding: 6px 10px;
//           border-radius: 6px;
//           transition: 0.25s;
//         }

//         .navbar-link:hover {
//           background: rgba(255,255,255,0.2);
//         }

//         .navbar-avatar {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           background: #ffb300;
//           color: #000;
//           font-weight: bold;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           cursor: pointer;
//           transition: 0.2s;
//         }

//         .navbar-avatar:hover {
//           transform: scale(1.1);
//         }

//         /* DROPDOWN */
//         .dropdown-menu {
//           position: absolute;
//           top: 55px;
//           right: 0;
//           background: white;
//           box-shadow: 0px 4px 15px rgba(0,0,0,0.2);
//           border-radius: 8px;
//           animation: fade 0.2s ease;
//           overflow: hidden;
//         }

//         @keyframes fade {
//           from { opacity: 0; transform: translateY(-5px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .dropdown-btn {
//           padding: 12px 20px;
//           width: 100%;
//           border: none;
//           background: none;
//           text-align: left;
//           cursor: pointer;
//           transition: 0.2s;
//         }

//         .dropdown-btn:hover {
//           background: #f0f0f0;
//         }

//         /* MOBILE MENU ICON */
//         .mobile-menu-icon {
//           display: none;
//           font-size: 28px;
//           cursor: pointer;
//         }

//         /* MOBILE MENU */
//         .mobile-menu {
//           display: none;
//           flex-direction: column;
//           background: #0A2A66;
//           padding: 20px;
//           gap: 15px;
//         }

//         .mobile-link {
//           color: white;
//           text-decoration: none;
//           font-size: 18px;
//           padding: 8px 0;
//         }

//         .mobile-link:hover {
//           color: #f5d142;
//         }

//         /* RESPONSIVE BELOW 768px */
//         @media (max-width: 768px) {
//           .navbar-links {
//             display: none;
//           }

//           .mobile-menu-icon {
//             display: block;
//           }

//           .mobile-menu {
//             display: ${mobileMenuOpen ? 'flex' : 'none'};
//           }
//         }
//       `}</style>

//       {/* NAVBAR */}
//       <nav className="navbar-container">

//         <div className="navbar-logo" onClick={() => navigate("/home")}>
//           NEB Portal
//         </div>

//         {/* MOBILE MENU ICON */}
//         <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
//           ☰
//         </div>

//         {/* DESKTOP LINKS */}
//         <div className="navbar-links">
//           <a href="/home" className="navbar-link">Home</a>

//           {user && (
//             <>
//               <a href={`/home/billing/${user.id}`} className="navbar-link">Billing</a>
//               <a href={`/home/usage/${user.id}`} className="navbar-link">Usage</a>
//             </>
//           )}

//           <a href="/home/history" className="navbar-link">History</a>

//           {user && (
//             <div style={{ position: "relative" }}>
//               <div className="navbar-avatar" onClick={toggleDropdown}>
//                 {getUserInitials(user.name)}
//               </div>

//               {dropdownOpen && (
//                 <div className="dropdown-menu">
//                   <button className="dropdown-btn" onClick={handleSignOut}>
//                     Sign Out
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* MOBILE MENU ITEMS */}
//       <div className="mobile-menu">
//         <a href="/home" className="mobile-link">Home</a>

//         {user && (
//           <>
//             <a href={`/home/billing/${user.id}`} className="mobile-link">Billing</a>
//             <a href={`/home/usage/${user.id}`} className="mobile-link">Usage</a>
//           </>
//         )}

//         <a href="/home/history" className="mobile-link">Payment History</a>

//         {user && (
//           <a className="mobile-link" onClick={handleSignOut} style={{ cursor: "pointer" }}>
//             Sign Out
//           </a>
//         )}
//       </div>
//     </>
//   );
// }

// export default Navbar;
import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const avatarRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Fetch User
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      axios
        .get(`https://electricmeter-backend-1.onrender.com/getUser/${storedUser.id}`)
        .then((res) => {
          if (res.data.status === "Found") {
            setUser(res.data.user);
            localStorage.setItem("user", JSON.stringify(res.data.user));
          }
        })
        .catch((e) => console.log("Error:", e));
    }
  }, []);

  // Handle dropdown close on outside click
  useEffect(() => {
    function handler(e) {
      if (
        dropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        avatarRef.current &&
        !avatarRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [dropdownOpen]);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const getInitials = (name) =>
    name ? name.split(" ").map((x) => x[0].toUpperCase()).join("") : "";

  // Dropdown Position
  const computeDropdownPosition = () => {
    if (!avatarRef.current) return {};
    const rect = avatarRef.current.getBoundingClientRect();
    return { top: rect.bottom + 8, left: rect.right - 150 };
  };

  const dropdownPos = computeDropdownPosition();

  return (
    <>
      {/* STYLES */}
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(90deg, #0A2A66, #1e88e5);
          padding: 14px 20px;
          color: #fff;
          position: sticky;
          top: 0;
          z-index: 3000;
        }

        .logo {
          font-size: 24px;
          font-weight: 800;
          cursor: pointer;
        }

        .links {
          display: flex;
          gap: 25px;
          align-items: center;
        }

        .nav-link {
          color: #fff;
          text-decoration: none;
          font-size: 17px;
          padding: 6px 10px;
          border-radius: 6px;
          transition: .2s;
        }

        .nav-link:hover {
          background: rgba(255,255,255,0.15);
        }

        .avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #ffd447;
          color: #000;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          cursor: pointer;
          transition: .25s;
        }

        .avatar:hover {
          transform: scale(1.1);
        }

        /* MOBILE ICON */
        .mobile-btn {
          display: none;
          font-size: 30px;
          cursor: pointer;
        }

        /* MOBILE MENU */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          width: 240px;
          background: #0A2A66;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          transform: translateX(100%);
          transition: 0.3s ease;
          z-index: 5000;
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-item {
          color: white;
          text-decoration: none;
          font-size: 18px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.25);
        }

        .mobile-close {
          font-size: 32px;
          align-self: flex-end;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .links {
            display: none;
          }
          .mobile-btn {
            display: block;
          }
        }
      `}</style>

      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo" onClick={() => navigate("/home")}>NEB Portal</div>

        {/* Desktop Links */}
        <div className="links">
          <Link className="nav-link" to="/home">Home</Link>
          {user && <>
            <Link className="nav-link" to={`/home/billing/${user.id}`}>Billing</Link>
            <Link className="nav-link" to={`/home/usage/${user.id}`}>Usage</Link>
          </>}
          <Link className="nav-link" to="/home/history">History</Link>

          {user && (
            <div ref={avatarRef}>
              <div className="avatar" onClick={() => setDropdownOpen(!dropdownOpen)}>
                {getInitials(user.name)}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Button */}
        <div className="mobile-btn" onClick={() => setMobileMenuOpen(true)}>
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-close" onClick={() => setMobileMenuOpen(false)}>×</div>

        <Link className="mobile-item" to="/home" onClick={() => setMobileMenuOpen(false)}>Home</Link>

        {user && <>
          <Link className="mobile-item" to={`/home/billing/${user.id}`} onClick={() => setMobileMenuOpen(false)}>Billing</Link>
          <Link className="mobile-item" to={`/home/usage/${user.id}`} onClick={() => setMobileMenuOpen(false)}>Usage</Link>
        </>}

        <Link className="mobile-item" to="/home/history" onClick={() => setMobileMenuOpen(false)}>History</Link>

        {user && (
          <button onClick={handleSignOut} className="mobile-item" style={{ background: "none", border: 0, textAlign: "left" }}>
            Sign Out
          </button>
        )}
      </div>

      {/* Avatar Dropdown */}
      {dropdownOpen && user &&
        ReactDOM.createPortal(
          <div
            ref={dropdownRef}
            style={{
              position: "absolute",
              top: dropdownPos.top,
              left: dropdownPos.left,
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
              width: "140px",
              padding: "10px 0",
              zIndex: 99999,
            }}
          >
            <button
              onClick={handleSignOut}
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                background: "none",
                textAlign: "left",
                cursor: "pointer"
              }}
            >
              Sign Out
            </button>
          </div>,
          document.body
        )}
    </>
  );
}

export default Navbar;
