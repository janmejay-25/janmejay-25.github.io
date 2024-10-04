import React from "react";
import { Link } from "react-router-dom";

import bg1 from "../../assets/images/bg/comingsoon.jpg";


export default function Comingsoon() {
  return (
    <section
      className="position-relative"
      style={{ backgroundImage: `url(${bg1})`, backgroundPosition: "center" }}
    >
      <div className="bg-overlay opacity-7"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <div className="d-flex flex-column min-vh-100 justify-content-center px-md-5 py-5 px-4">
              <div className="title-heading text-center my-auto">
                <h4 className="coming-soon fw-bold text-uppercase">
                  Coming Soon
                </h4>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <Link to="/" className="btn btn-primary mt-4">
                      Go To Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
