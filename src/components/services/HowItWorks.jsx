import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/how-it-works.avif";

function HowItWorks({ data }) {
  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-12">
          <div className="section-title text-center pb-2">
            <h4 className="title fw-semibold mb-3">How It Works</h4>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-lg-7">
            {data.map((item, index) => {
              return (
                <div className="mt-2" key={index}>
                  <div className="features feature-primary feature-bg shadow p-2 rounded">
                    <div className="content mt-3">
                      <Link
                        to="/page-single-service"
                        className="title h5 text-dark"
                      >
                        {item.title}
                      </Link>
                      <p className="text-muted para mt-2 mb-0">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-lg-5 d-flex justify-content-center align-items-center">
            <img src={image} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
