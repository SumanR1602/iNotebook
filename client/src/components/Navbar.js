import React from 'react'
import logo from '../images/logo.png'
import { Link,useNavigate } from 'react-router-dom'

const Navbar = () => {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/')
    }
    const isLoggedIn = !localStorage.getItem('token'); 
    const handleClick = (e) => {
        if (!isLoggedIn) {
            e.preventDefault(); 
        }
    };

    return (
        <nav className="navbar navbar-expand-lg" style={{ borderBottom: "1.5px solid black" }}>
            <div className="container-fluid">
                <div className="d-flex justify-content-center align-items-center mx-auto">
                    <img src={logo} alt="iNotebook Logo" style={{ height: "50px" }} />
                    <Link className={`navbar-brand ms-2 fs-3 ${!isLoggedIn ? 'disabled' : ''}`} to="." onClick={handleClick}>iNotebook</Link>
                </div>
                <div className="d-flex justify-content-center align-items-center mx-auto mt-3 mt-lg-0">
                    {!localStorage.getItem('token') ? (
                        <form className="d-flex">
                            <Link className="mx-2 fs-6 px-4 btn-custom" to="/login">Login</Link>
                            <Link className="mx-2 fs-6 px-4 btn-gradient" to="/signup">SignUp</Link>
                        </form>
                    ) : (
                        <button className='btn btn-primary mx-2 fs-6 px-4 btn-gradient' onClick={handleLogout}>Logout</button>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
