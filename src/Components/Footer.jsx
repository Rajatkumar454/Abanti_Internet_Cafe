import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-black text-white">
                <div className="container ">
                    <footer className="pt-4">

                        <div className="row  ">
                            <div className="col-md-4 pe-5 ">
                                <h6 className='fw-bold border-bottom p-3 px-2'>Abnati Internet Cafe</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, quo.</p>
                            </div>

                            <div className="col-6 col-md-2 mb-3">
                                <h6 className='fw-bold border-bottom p-3 px-2'>Links</h6>
                                <ul className="nav flex-column px-3">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Features</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li> </ul>
                            </div>

                            <div className="col-6 col-md-3 mb-3 ">
                                <h6 className='fw-bold border-bottom px-2 p-3'>Section</h6>
                                <ul className="nav flex-column px-3">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Features</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li> </ul>
                            </div>

                            <div className="col-12 col-md-3 mb-3 ">
                                <h6 className='fw-bold border-bottom p-3 px-2 text-center'>Address & Contact</h6>
                                <p>Hatiagnd, Remuna, Balasore, odisha, <br /> Pin-756019   </p>
                                <p>  Phone: +91 9348548782 <br />
                                    Phone: +91 7852980872 </p>
                                <p>Email: abantiinternetcafe@gmail.com</p>


                            </div>
                        </div>

                        <div className="d-flex flex-column flex-sm-row justify-content-between py-4  border-top">
                            <p>© 2025 Abanti Internet Cafe, Inc. All rights reserved.</p>

                            <ul className="list-unstyled d-flex">
                                <li className="ms-2  hover p-1 rounded">
                                    <a className="text-white" href="#" aria-label="Instagram">
                                        <i className="fa-brands fa-square-instagram fs-2 rounded p-1"></i>
                                    </a>
                                </li>
                                <li className="ms-2 hover p-1 rounded">
                                    <a className="text-white" href="#" aria-label="Facebook">
                                        <i className="fa-brands fa-square-facebook bg-black fs-2 rounded p-1"></i>
                                    </a>
                                </li>
                                <li className=" ms-2 hover p-1 rounded">
                                    <a className="text-white" href="#" aria-label="Youtube">
                                        <i className="fa-brands fa-square-youtube fs-2 rounded p-1"></i>
                                    </a>
                                </li>
                                <li className=" ms-2 hover p-1 rounded">
                                    <a className="text-white" href="#" aria-label="Whatsapp">
                                        <i className="fa-brands fa-square-whatsapp fs-2 rounded p-1"></i>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </footer>
                </div>
            </div>

        </>
    )
}

export default Footer
