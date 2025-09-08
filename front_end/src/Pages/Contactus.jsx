import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const Contactus = () => {
  useEffect(() => {
    AOS.init({
      duration: 700, // animation duration
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <div className="container-fluid bg-light pt-5">
      <div className="container bg-white py-3 rounded shadow">
        <h1 className="text-center line py-2" data-aos="zoom-in">
          Contact Us
        </h1>
        <p className="text-center">
          We'd love to hear from you! Whether you have a question, feedback, or
          just want to say hello, feel free to reach out using the information
          below.
        </p>

        <div className="row  mt-4 g-3 p-3 ">

          <div className="col-md-6 col-lg-6     ">
            <div className=" px-4 py-4 bg-light card  custom-inner-shadow " data-aos="zoom-in">
              <div className="px-5">
                <h5 className="fw-bold ">Address</h5>
                <p>At/Po: Baasore, Odisha, Pin-756019</p>

                <h5 className="fw-bold "> Phone:</h5>
                <p className="m-0">Phone: +91 9348548782</p>
                <p>Phone: +91 7852980872</p>

                <h5 className="fw-bold ">Email:</h5>
                <p className="">Email: abantiinternetcafe@gmail.com</p>

                <h5 className="fw-bold ">Business Hours:</h5>
                <p className="m-0">
                  Monday - Friday: 9:00 AM - 6:00 PM <br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6  px-3 ">
            <div className="p-2 bg-light card  custom-inner-shadow" data-aos="zoom-in">
            <iframe width="100%" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=Abnati%20internet%20cafe%20hatiagand,%20balasore%20756019+(Abanti%20internet%20Cafe)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="Map"><a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">mesurer la population sur une carte</a></iframe>
       

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
