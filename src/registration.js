// import React from 'react';
// import { Link } from 'react-router-dom';

// function Registration() {
//   return (
//     <div className="container mt-5">
//       <h2>Register</h2>
//       <form>
//         <div className="mb-3">
//           <label>Name</label>
//           <input type="text" className="form-control" placeholder="Enter name" />
//         </div>
//         <div className="mb-3">
//           <label>Email</label>
//           <input type="email" className="form-control" placeholder="Enter email" />
//         </div>
//         <div className="mb-3">
//           <label>Password</label>
//           <input type="password" className="form-control" placeholder="Enter password" />
//         </div>
//         <button type="submit" className="btn btn-success">Register</button>
//         <p className="mt-3">Already have an account? <Link to="/">Login</Link></p>
//       </form>
//     </div>
//   );
// }

// export default Registration;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // For redirecting after signup

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const res = await axios.post('https://electricmeter-backend-1.onrender.com/signup', {
        name,
        email,
        password
      });

      if (res.data) {
        alert('Registration successful!');
        navigate('/'); // Redirect to login page
      }
    } catch (err) {
      console.error('Signup error:', err);
      alert('Error registering user. Make sure the server is running.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Register</button>
        <p className="mt-3">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Registration;
