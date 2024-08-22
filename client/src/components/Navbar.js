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
        <div>
            <nav className="navbar navbar-expand-lg" style={{ borderBottom: "1.5px solid black" }}>
                <div className="container-fluid">
                    <div className="d-flex" style={{ margin: "0.5rem", marginLeft: "12rem" }}>
                        <img src={logo} alt="iNotebook Logo" style={{ height: "50px" }} />
                        <Link className={`navbar-brand ms-2 fs-3 ${!isLoggedIn ? 'disabled' : ''}`} to="." onClick={handleClick} >iNotebook</Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="">
                        {!localStorage.getItem('token') ? <form className="d-flex" style={{ marginRight: "6rem" }}>
                            <Link className="mx-2 fs-6 px-4 btn-custom" to="/login">Login</Link>
                            <Link className="mx-2 fs-6 px-4 btn-gradient" to="/signup" >SignUp</Link>
                        </form> : <button className='btn btn-primary mx-2 fs-6 px-4 btn-gradient' onClick={handleLogout} >Logout</button>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
