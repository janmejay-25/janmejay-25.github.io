import React from "react";
import { Link } from "react-router-dom";
import bg1 from "../../assets/images/bg/services.jpg";

function ServicesHeader({ title, description }) {
  return (
    <>
      <section
        className="bg-half-80 d-table bg-primary bg-gradient w-100"
        style={{ backgroundImage: `url(${bg1})`, backgroundPosition: "center" }}
      >
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
          <div className="row g-0 align-items-center mt-5">
            <div className="col-lg-12 col-md-12">
              <div className="title-heading text-md-start text-center">
                <h5 className="heading fw-semibold page-heading text-white title-dark">
                  {title}
                </h5>
                <p className="text-white-50 mb-0">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesHeader;
