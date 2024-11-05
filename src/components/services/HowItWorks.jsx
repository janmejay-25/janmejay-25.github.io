import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/how-it-works.avif";

function HowItWorks({ data }) {
  const [activeService, setActiveService] = useState(0);
  return (
    <>
      <div className="row justify-content-center my-5">
        <div className="col-12 mt-5">
          <div className="section-title text-center">
            <h4 className="title fw-semibold">How It Works</h4>
          </div>
        </div>

        <div className="row g-3 d-block d-md-none">
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
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <img src={image} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row justify-content-around align-items-center d-none d-md-block">
          <div className="col-lg-12 service-tab">
            <ul className="list-unstyled d-flex justify-content-around">
              {data?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`cursor-pointer ${
                      activeService === index ? "active" : ""
                    }`}
                    onClick={() => setActiveService(index)}
                  >
                    <h6>{item.title}</h6>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-lg-12 mt-5">
            <div className=" bg-light shadow-lg rounded-4 p-4">
              <p>{data[activeService]?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
