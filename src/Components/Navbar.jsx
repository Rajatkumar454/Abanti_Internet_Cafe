import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
     useEffect(() => {
            AOS.init({
                duration: 700,
                once: true,
            });
        }, []);
    
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg p-2 bg-white shadow">
                    <div className="container text-white">

                        <NavLink to='/' className="navbar-brand border-0 fs-6 bg-transparent text-black" ><img className='logo' src="../dist/assets/Logo.webp" alt="logo" /> <span className='logo_text'>Abanti Internet Cafe</span></NavLink>
                        {/* <img src="/LOGO_png.png" alt="logo" /> */}

                        <button className="navbar-toggler border-0 bg-transparent " type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className='bg-transparent fa-solid fa-bars-staggered fs-6'></span>
                        </button>


                        <div className="collapse navbar-collapse list " id="navbarScroll">
                            <ul className="navbar-nav m-auto my-lg-0 navbar-nav-scroll text-center" style={{ "--bs-scroll-height": "300px" }}>
                                <li className="nav-item">
                                    <NavLink to='/' className="nav-link mx-2 px-3 py-2 fs-6 " aria-current="page" href="#">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/about' className="nav-link mx-2 px-3 py-2 fs-6 " aria-current="page" href="#">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/services' className="nav-link mx-2 px-3 py-2 fs-6  " aria-current="page" href="#">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/contact_us' className="nav-link mx-2 px-3 py-2 fs-6  " aria-current="page" href="#">Contact us</NavLink>
                                </li>

                            </ul>
                            <div className='text-center p-2 d-flex justify-content-center align-items-center'>
                                <button type="button" className="btn btn-primary mx-1  ">Resister</button>
                                <button type="button" className="btn btn-primary mx-1 ">Login</button>
                            </div>
                        </div>
                    </div>
                </nav>

              
            </div>
        </>
    )
}

export default Navbar;
