import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero_section = () => {

    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
        });
    }, []);

    return (
        <>
            <div className="hero container-fluid py-5 ">
                <div className="container txt mt-5 py-4 " data-aos="fade-up">
                    <div className="row " >
                        <div className="col-md-12 col-lg-6">
                            <h3 className="display-5 fw-medium">🌐 Your One-Stop <br /><span className='font-color'>Digital Service Center</span></h3>
                            <p className="lead" >Online applications, Aadhaar updates, bill payments, printing, and more- Abanti Internet Café brings all essential government and digital services under one roof, with trusted support and affordable rates.</p>

                            <NavLink to="/services" className="btn teal btn-lg my-2 py-3">Explore Services</NavLink>

                            <div className="  text-dark py-2 ">

                                <ul className="list-unstyled d-flex py-2 my-1">
                                    <li className="   teal p-1 rounded">
                                        <a className="text-white" href="#" aria-label="Instagram">
                                            <i className="fa-brands fa-square-instagram fs-2 rounded p-1"></i>
                                        </a>
                                    </li>
                                    <li className="ms-2  teal p-1 rounded">
                                        <a className="text-white" href="#" aria-label="Facebook">
                                            <i className="fa-brands fa-square-facebook fs-2 rounded p-1"></i>
                                        </a>
                                    </li>
                                    <li className=" ms-2  teal p-1 rounded">
                                        <a className="text-white" href="#" aria-label="Youtube">
                                            <i className="fa-brands fa-square-youtube fs-2 rounded p-1"></i>
                                        </a>
                                    </li>
                                    <li className=" ms-2  teal p-1 rounded">
                                        <a className="text-white" href="#" aria-label="Whatsapp">
                                            <i className="fa-brands fa-square-whatsapp fs-2 rounded p-1"></i>
                                        </a>
                                    </li>

                                </ul>
                            </div>


                        </div>
                        <div className="col-md-12 align-self-center col-lg-6 d-none d-md-block d-lg-block">
                            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJuZXQlMjBjYWZlfGVufDB8fDB8fHww&w=1000&q=80" alt="Internet Cafe" className="img-fluid rounded " data-aos="zoom-in" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero_section
