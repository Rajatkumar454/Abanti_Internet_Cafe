import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 700, // animation duration
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <>
      <div className="container-fluid bg-light  pt-5">
        <div className="container bg-white rounded shadow">
          <div className=" fs-2 fw-bold about ">
            <p className="line my-3 py-3" data-aos="zoom-in">
              About Us
            </p>
          </div>

          <div className="row">
            <div className="col-md-12 col-lg-6 col-sm-12 col-12  p-4">
              <h4 className=" ">About Abanti Internet Café</h4>
              <p className="font-color text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                mollitia eos quibusdam ullam voluptatibus corrupti magnam
                asperiores sunt cum. Numquam dolor voluptate nemo error
                explicabo in nobis necessitatibus magnam quod ipsa tenetur vitae
                reiciendis possimus, quam accusamus odio odit adipisci incidunt
                sed. Nesciunt minus nobis quaerat distinctio debitis perferendis
                quis eum dolor corrupti optio excepturi unde quos adipisci hic
                accusamus, exercitationem eveniet
              </p>
            </div>

            <div className="col-12  col-md-12 col-lg-6 col-sm-12 col-12">
              <img
                src="https://images.unsplash.com/photo-1632597295153-cd4df3975f82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGludGVybmV0JTIwY2FmZXxlbnwwfDB8MHx8fDI%3D"
                alt="About Us" fetchpriority="high"
                className="img-fluid img-thumbnail rounded p-0"
                data-aos="zoom-in"
              />
            </div>
          </div>

          <div className="line py-2"></div>
          {/* ------------------------------------------------ */}

          <div className="row ">
            <div className="col-md-12 col-lg-6 p-4">
              <img
                src="https://images.unsplash.com/photo-1632597295153-cd4df3975f82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGludGVybmV0JTIwY2FmZXxlbnwwfDB8MHx8fDI%3D"
                alt="About Us" fetchpriority="high"
                className="img-fluid img-thumbnail rounded p-0"
                data-aos="zoom-in"
              />
            </div>

            <div className="col-md-12 col-lg-6 p-4">
              <h4 className=" ">About Abanti Internet Café</h4>
              <p style={{ "text-align": "justify" }} className="pe-3 font-color">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                mollitia eos quibusdam ullam voluptatibus corrupti magnam
                asperiores sunt cum. Numquam dolor voluptate nemo error
                explicabo in nobis necessitatibus magnam quod ipsa tenetur vitae
                reiciendis possimus, quam accusamus odio odit adipisci incidunt
                sed. Nesciunt minus nobis quaerat distinctio debitis perferendis
                quis eum dolor corrupti optio excepturi unde quos adipisci hic
                accusamus, exercitationem eveniet
              </p>
            </div>
          </div>

          <div className="line py-2"></div>
          {/* ------------------------------------------------------- */}

          {/* <div className="row">
            <div className="col-md-12 col-lg-6 p-4">
              <h4 className=" ">About Abanti Internet Café</h4>
              <p style={{ "text-align": "justify" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                mollitia eos quibusdam ullam voluptatibus corrupti magnam
                asperiores sunt cum. Numquam dolor voluptate nemo error explicabo
                in nobis necessitatibus magnam quod ipsa tenetur vitae reiciendis
                possimus, quam accusamus odio odit adipisci incidunt sed. Nesciunt
                minus nobis quaerat distinctio debitis perferendis quis eum dolor
                corrupti optio excepturi unde quos adipisci hic accusamus,
                exercitationem eveniet
              </p>
            </div>

            <div className="col-md-12  col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1649343800236-46d2889a0c4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGludGVybmV0JTIwY2FmZXxlbnwwfDB8MHx8fDI%3D"
                alt="About Us"
                className=" img-fluid img-thumbnail rounded p-0 py-2 "
                data-aos="zoom-in"
              />
            </div>
          </div>

          <div className="line py-2"></div>

          <div className="row pb-5 ">
            <div className="col-md-12  col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1632597295153-cd4df3975f82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGludGVybmV0JTIwY2FmZXxlbnwwfDB8MHx8fDI%3D"
                alt="About Us"
                className="img-thumbnail img-fluid rounded p-0"
                data-aos="zoom-in"
              />
            </div>

            <div className="col-md-12 col-lg-6 p-4">
              <h4 className=" ">About Abanti Internet Café</h4>
              <p style={{ "text-align": "justify" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                mollitia eos quibusdam ullam voluptatibus corrupti magnam
                asperiores sunt cum. Numquam dolor voluptate nemo error explicabo
                in nobis necessitatibus magnam quod ipsa tenetur vitae reiciendis
                possimus, quam accusamus odio odit adipisci incidunt sed. Nesciunt
                minus nobis quaerat distinctio debitis perferendis quis eum dolor
                corrupti optio excepturi unde quos adipisci hic accusamus,
                exercitationem eveniet est soluta alias mollitia velit libero!
                Atque esse iste doloribus dicta deserunt reiciendis natus?
                Consequuntur quo, consectetur nobis minus quae magnam! Aliquam
                ipsa odio inventore ratione magni doloremque voluptatibus ut.
                Atque illo id quaerat placeat voluptatem fugit vero?
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default About;
