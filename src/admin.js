

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {  useNavigate } from 'react-router-dom';
// import Validation from './loginvalidation';
// import axios from 'axios';

// function Admin() {

//   const [values, setValues] = useState({
//     email: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleInput = (event) => {
//     setValues(prev => ({
//       ...prev,
//       [event.target.name]: event.target.value
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const validationErrors = Validation(values);
//     setErrors(validationErrors);

//     if (validationErrors.email === "" && validationErrors.password === "") {
//       axios.post('http://localhost:8081/customers', values)
//         .then(res => {
//           if (res.data.status === "Success") {

//             // Save logged-in user data
//             localStorage.setItem("user", JSON.stringify(res.data.user));

//             navigate('/homeadmin'); // redirect to billing page
//           }
//           else {
//             alert("Invalid email or password");
//           }
//         })
//         .catch(err => console.log(err));
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center bg-primary container mt-5">
//       <div className='p-3 bg-white w-25'>
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
          
//           <div className="mb-3">
//             <label>Email</label>
//             <input type="email"
//               className="form-control rounded-0"
//               placeholder="Enter email"
//               name="email"
//               onChange={handleInput}
//             />
//             {errors.email && <span className='text-danger'>{errors.email}</span>}
//           </div>

//           <div className="mb-3">
//             <label>Password</label>
//             <input type="password"
//               className="form-control rounded-0"
//               placeholder="Enter password"
//               name="password"
//               onChange={handleInput}
//             />
//             {errors.password && <span className='text-danger'>{errors.password}</span>}
//           </div>

//           <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>


//         </form>
//       </div>
//     </div>
//   );
// }

// export default Admin;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Validation from './loginvalidation';
import axios from 'axios';

function Admin() {

  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (validationErrors.email === "" && validationErrors.password === "") {
      axios.post('https://electricmeter-backend-1.onrender.com/customers', values)
        .then(res => {
          if (res.data.status === "Success") {
            localStorage.setItem("admin", JSON.stringify(res.data.user));
            navigate('/homeadmin');
          } else {
            alert("Invalid email or password");
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <>
      {/* INLINE CSS */}
      <style>{`
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .admin-wrapper {
          height: 100vh;
          width: 100%;
          background: linear-gradient(135deg, #0A2A66, #1e88e5);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .admin-card {
          background: white;
          width: 380px;
          max-width: 90%;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          animation: fadeIn 0.4s ease-in-out;
        }

        .admin-title {
          text-align: center;
          font-weight: 800;
          font-size: 28px;
          margin-bottom: 25px;
          color: #0A2A66;
        }

        .admin-input {
          height: 45px;
          border-radius: 10px;
          border: 1px solid #ccc;
          transition: 0.3s;
        }

        .admin-input:focus {
          outline: none;
          border-color: #1e88e5;
          box-shadow: 0px 0px 8px rgba(30,136,229,0.4);
        }

        .admin-btn {
          height: 45px;
          width: 100%;
          background: #0A2A66;
          border: none;
          color: white;
          border-radius: 10px;
          font-size: 18px;
          font-weight: 600;
          margin-top: 15px;
          transition: 0.3s;
        }

        .admin-btn:hover {
          background: #07204e;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 480px) {
          .admin-title {
            font-size: 24px;
          }
          .admin-card {
            padding: 20px;
          }
        }
      `}</style>

      <div className="admin-wrapper">
        <div className="admin-card">
          <h2 className="admin-title">Admin Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control admin-input"
                placeholder="Enter email"
                name="email"
                onChange={handleInput}
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control admin-input"
                placeholder="Enter password"
                name="password"
                onChange={handleInput}
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>

            <button type="submit" className="admin-btn">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Admin;
