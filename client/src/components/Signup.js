import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  let navigate = useNavigate();
  const host = "https://i-notebook-plum.vercel.app"
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json()
    // console.log(json);
    if (json.success) {
      //Save authtoken and return success
      localStorage.setItem('token', json.authToken);
      navigate('/usernotes')
      props.showAlert("Account Successfully Created", "success")

    }
    else {
      props.showAlert("User with the email already exists!", "danger")
    }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className='container mt-3'>
      <h2 className='mb-4 text-center'>Sign up</h2>
      <h5 className='text-center mb-6' style={{ color: "grey" }}>Start taking notes</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Username</label>
          <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onChange} style={{ backgroundColor: "#F9F6F2" }} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} style={{ backgroundColor: "#F9F6F2" }} />
        </div>
        <div className="d-flex justify-content-between">
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required style={{ backgroundColor: "#F9F6F2", width: "38rem" }} />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} minLength={5} required style={{ backgroundColor: "#F9F6F2", width: "38rem" }} />
          </div>
        </div>
        <div className="container text-center">
          <button type="submit" className="btn btn-primary mb-4 btn-gradient text-center ">Submit</button>
        </div>
      </form>
    </div>
  )
}
