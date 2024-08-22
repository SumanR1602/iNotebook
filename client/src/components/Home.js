import React from 'react'
import { Link } from 'react-router-dom'
import fs_logo1 from '../images/fs_logo1.svg'
import fs_logo2 from '../images/fs_logo2.svg'
import fs_logo3 from '../images/fs_logo3.svg'
import fs_logo4 from '../images/fs_logo4.svg'
import Carousel from './Carousel'
import Footer from './Footer'
export default function Home() {
    return (
        <div>
            <div className="container d-flex flex-column justify-content-center align-items-center text-center">
                <h1 style={{ fontSize: "72px", marginBottom: "1.5rem", fontFamily: `"Macondo", cursive` }}>Your notes, Your way, <br />
                    in iNotebook.
                </h1>
                <p style={{ fontSize: "20px", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                    Remember everything and tackle any project with your notes, <br />tasks, and find all in one place.
                </p>
                <Link className="btn btn-primary mx-2 text-center btn-gradient" to="/signup"
                    style={{ padding: "1.25rem 2.5rem", marginBottom: "1.5rem" }}>
                    Get iNotebook Free
                </Link>
                <span>Already have an account?&nbsp;
                    <a href="/login" rel="noreferrer" style={{ fontWeight: 500, color: "black" }}>
                        Log in now
                    </a>
                </span>
            </div>


            <div className="feature-section d-flex flex-row" style={{ marginTop: "8rem", gap: "1rem" }}>
                <div className="d-flex flex-column px-4" style={{ alignItems: "flex-start" }}>
                    <img src={fs_logo1} alt="feature section logo" style={{ height: "8rem", alignSelf: "flex-start", marginBottom: "1.5rem" }} />
                    <h1 className='mb-4'>Work<br /> anywhere</h1>
                    <p>Keep important info handy—your notes sync automatically to all your devices.</p>
                </div>

                <div className="d-flex flex-column px-4">
                    <img src={fs_logo2} alt="feature section logo" style={{ height: "8rem", alignSelf: "flex-start", marginBottom: "1.5rem" }} />
                    <h1 className='mb-4'>Remember<br /> everything</h1>
                    <p>Make notes more useful by adding text, images,scans, PDFs, and documents.</p>
                </div>
                <div className="d-flex flex-column px-4">
                    <img src={fs_logo3} alt="feature section logo" style={{ height: "8rem", alignSelf: "flex-start", marginBottom: "1.5rem" }} />
                    <h1 className='mb-4'>Achieve  <br /> Your Tasks
                    </h1>
                    <p>Bring your notes, tasks, and schedules together to get things done more easily.</p>
                </div>
                <div className="d-flex flex-column px-4">
                    <img src={fs_logo4} alt="feature section logo" style={{ height: "8rem", alignSelf: "flex-start", marginBottom: "1.5rem" }} />
                    <h1 className='mb-4'>Find What <br /> Matters
                    </h1>
                    <p> Get what you need, when you need it with powerful and flexible search capabilities.</p>
                </div>
            </div>

            <Carousel />

            <div className="container" style={{ marginTop: "8rem",marginBottom:"2rem"}}>
                <div className="row text-center">
                    <div className="col-md-6">
                        <div className="d-flex flex-column px-4">
                            <h1>Boost Your Productivity</h1>
                            <h5 style={{ marginBottom: "1rem" }}>Stay Organized with Ease</h5>
                            <p>iNotebook is designed to streamline your note-taking process and enhance your productivity. With intuitive features that allow you to create, categorize, you can focus more on your tasks and less on managing them. Whether you're jotting down ideas, organizing meeting notes, or keeping track of personal projects, iNotebook's user-friendly interface helps you stay organized and on top of your game.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex flex-column px-4">
                            <h1>Peace of Mind</h1>
                            <h5 style={{ marginBottom: "1rem" }}>Secure and Reliable Note Management</h5>
                            <p>Your notes are valuable, and we take their security seriously. iNotebook ensures that your data is protected with advanced encryption and secure storage solutions. Access your notes anytime, from any device, knowing that they are safe and easily retrievable. With iNotebook, you can rest assured that your information is handled with the highest level of care and privacy.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}
