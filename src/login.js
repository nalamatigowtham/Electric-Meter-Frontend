// // import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import { Link } from 'react-router-dom';
// // import Validation from './loginvalidation';
// // import { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // function Login() {
// //     // const [email, setEmail] = React.useState('');
// //     // const [password, setPassword] = React.useState('');
// //     // function handlesubmit(event){
// //     //     event.preventDefault();
// //     //     console.log(email);
// //     const [values, setValues] = useState({

// // email: '',

// // password:''

// // })

// // const navigate = useNavigate();
// // const [errors, setErrors] = useState({})

// // const handleInput = (event) => {

// // setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))

// // }

// // const handleSubmit =(event) => {

// // event.preventDefault();

// // setErrors (Validation(values));
// // if( errors.email === "" && errors.password === ""){
// //     axios.post('http://localhost:8081/login', values)
// //     .then(res =>{
// //         if(res.data === "Success"){
// //             navigate('/home');
// //         }else{
// //             alert("record not exists");
// //         }
// // })
// //     .catch(err => console.log(err));

// // }
// //     }

// //   return (
// //     <div className="d-flex justify-content-center align-items-center bg-primary container mt-5">
// //       <div className='p-3 bg-white w-25'>
// //       <h2>Login</h2>
// //       <form action="" onSubmit={handleSubmit}>
// //         <div className="mb-3 ">
// //           <label htmlFor='email'>Email</label>
// //           {/* <input type="email" className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/> */}
// //           <input type="email" className="form-control rounded-0" placeholder="Enter email" onChange={handleInput}  name='email'/>
// //           {errors.email && <span className='text-danger'>{errors.email}</span>}

// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor='password'>Password</label>
// //           <input type="password" className="form-control rounded-0" placeholder="Enter password" onChange={handleInput} name = "password"/>
// //           {errors.password && <span className='text-danger'>{errors.password}</span>}
// //         </div>
// //         <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
// //         <p className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Don't have an account? <Link to="/signUp" >Register</Link></p>
        
          
// //       </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;












// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link, useNavigate } from 'react-router-dom';
// import Validation from './loginvalidation';
// import axios from 'axios';

// function Login() {

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
//       axios.post('http://localhost:8081/login', values)
//         .then(res => {
//           if (res.data.status === "Success") {

//             // Save logged-in user data
//             localStorage.setItem("user", JSON.stringify(res.data.user));

//             navigate('/home'); // redirect to billing page
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

//           <p className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//             Don't have an account? <Link to="/signUp">Register</Link>
//           </p>

//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './loginvalidation';
import axios from 'axios';

function Login() {

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
      axios.post('https://electricmeter-backend-1.onrender.com/login', values)
        .then(res => {
          if (res.data.status === "Success") {
            localStorage.setItem("user", JSON.stringify(res.data.user));
            navigate('/home');
          }
          else {
            alert("Invalid email or password");
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <>
      {/* Inline CSS */}
      <style>{`
        .login-page {
          height: 100vh;
          width: 100%;
          background: linear-gradient(135deg, #4e73df, #1cc88a);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .login-card {
          background: #ffffff;
          width: 350px;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          animation: fadeIn 0.4s ease-in-out;
        }

        .login-title {
          text-align: center;
          font-weight: 700;
          margin-bottom: 25px;
          color: #4e73df;
        }

        .login-input {
          height: 45px;
          border-radius: 10px;
          border: 1px solid #ced4da;
          transition: all 0.3s;
        }

        .login-input:focus {
          border-color: #4e73df;
          box-shadow: 0 0 5px rgba(78, 115, 223, 0.4);
        }

        .login-btn {
          height: 45px;
          font-weight: 600;
          border-radius: 10px;
          background-color: #4e73df;
          border: none;
          color: white;
          transition: 0.3s;
        }

        .login-btn:hover {
          background-color: #2e59d9;
        }

        .register-text {
          margin-top: 15px;
          text-align: center;
          font-size: 14px;
        }

        .reg-link {
          color: #1cc88a;
          font-weight: bold;
          text-decoration: none;
        }

        .reg-link:hover {
          text-decoration: underline;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Component UI */}
      <div className="login-page">
        <div className='login-card'>
          <h2 className="login-title">Login</h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input 
                type="email"
                className="form-control login-input"
                placeholder="Enter email"
                name="email"
                onChange={handleInput}
              />
              {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input 
                type="password"
                className="form-control login-input"
                placeholder="Enter password"
                name="password"
                onChange={handleInput}
              />
              {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>

            <button type="submit" className="btn login-btn w-100">Login</button>

            <p className="register-text">
              Don't have an account? 
              <Link to="/signUp" className="reg-link"> Register</Link>
            </p>

          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
