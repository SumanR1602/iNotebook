import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login(props) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const host = "https://i-notebook-plum.vercel.app"

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    // console.log(json);

    if (json.success) {
      //save redirect
      localStorage.setItem('token', json.authToken);
      
      navigate('/usernotes')
      // console.log("Logged in");
      props.showAlert("Logged In Successfully", "success")
    }
    else {
      props.showAlert("Invalid Credentials", "danger")
    }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className='container mt-3'>
      <h3 className='text-center mb-2'>Log in to continue iNotebook</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name='email' value={credentials.email} aria-describedby="emailHelp" onChange={onChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} />
        </div>

        <button type="submit" className="btn btn-primary mb-4" >Submit</button>
      </form>
    </div>
  )
}
