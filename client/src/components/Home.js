import React from 'react';
import { Link } from 'react-router-dom';
import fs_logo1 from '../images/fs_logo1.svg';
import fs_logo2 from '../images/fs_logo2.svg';
import fs_logo3 from '../images/fs_logo3.svg';
import fs_logo4 from '../images/fs_logo4.svg';
import Carousel from './Carousel';
import Footer from './Footer';

export default function Home() {
    return (
        <div>
            <div className="container d-flex flex-column justify-content-center align-items-center text-center">
                <h1 className="display-4 mb-4" style={{ fontFamily: `"Macondo", cursive` }}>Your notes, Your way,<br />in iNotebook.</h1>
                <p className="lead mb-4">Remember everything and tackle any project with your notes,<br />tasks, and find all in one place.</p>
                <Link className="btn btn-primary btn-lg mx-2 mb-4 btn-gradient" to="/signup">Get iNotebook Free</Link>
                <span>Already have an account?&nbsp;
                    <a href="/login" rel="noreferrer" style={{ fontWeight: 500, color: "black" }}>
                        Log in now
                    </a>
                </span>
            </div>

            <div className="feature-section d-flex flex-wrap justify-content-center text-center text-md-start mt-5">
                <div className="d-flex flex-column px-4 col-12 col-md-6 col-lg-3">
                    <img src={fs_logo1} alt="feature section logo" className="mb-4 mx-auto mx-md-0" style={{ height: "8rem" }} />
                    <h2 className="mb-4">Work anywhere</h2>
                    <p>Keep important info handy—your notes sync automatically to all your devices.</p>
                </div>
                <div className="d-flex flex-column px-4 col-12 col-md-6 col-lg-3">
                    <img src={fs_logo2} alt="feature section logo" className="mb-4 mx-auto mx-md-0" style={{ height: "8rem" }} />
                    <h2 className="mb-4">Remember everything</h2>
                    <p>Make notes more useful by adding text, images, scans, PDFs, and documents.</p>
                </div>
                <div className="d-flex flex-column px-4 col-12 col-md-6 col-lg-3">
                    <img src={fs_logo3} alt="feature section logo" className="mb-4 mx-auto mx-md-0" style={{ height: "8rem" }} />
                    <h2 className="mb-4">Achieve Your Tasks</h2>
                    <p>Bring your notes, tasks, and schedules together to get things done more easily.</p>
                </div>
                <div className="d-flex flex-column px-4 col-12 col-md-6 col-lg-3">
                    <img src={fs_logo4} alt="feature section logo" className="mb-4 mx-auto mx-md-0" style={{ height: "8rem" }} />
                    <h2 className="mb-4">Find What Matters</h2>
                    <p>Get what you need, when you need it with powerful and flexible search capabilities.</p>
                </div>
            </div>

            <Carousel />

            <div className="container mt-5 mb-4">
                <div className="row text-center text-md-start">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h2>Boost Your Productivity</h2>
                        <h5 className="mb-3">Stay Organized with Ease</h5>
                        <p>iNotebook is designed to streamline your note-taking process and enhance your productivity. With intuitive features that allow you to create, categorize, you can focus more on your tasks and less on managing them. Whether you're jotting down ideas, organizing meeting notes, or keeping track of personal projects, iNotebook's user-friendly interface helps you stay organized and on top of your game.</p>
                    </div>
                    <div className="col-md-6">
                        <h2>Peace of Mind</h2>
                        <h5 className="mb-3">Secure and Reliable Note Management</h5>
                        <p>Your notes are valuable, and we take their security seriously. iNotebook ensures that your data is protected with advanced encryption and secure storage solutions. Access your notes anytime, from any device, knowing that they are safe and easily retrievable. With iNotebook, you can rest assured that your information is handled with the highest level of care and privacy.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
