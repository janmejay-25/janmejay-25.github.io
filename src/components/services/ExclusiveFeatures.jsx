import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/exclusive-features.png";

function ExclusiveFeatures({ data }) {
  const [activeFeature, setActiveFeature] = useState(0);
  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-12"> 
          <div className="section-title text-center pb-2">
            <h4 className="title fw-semibold mb-3">Exclusive Features</h4>
          </div>
        </div>
        <div className="row g-3 d-block d-md-none">
          <div className="col-lg-7">
            {data?.slice(0, 3).map((item, index) => {
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
          <div className="col-lg-6">
            <img src={image} alt="" className="img-fluid" />
            {data?.slice(3, data.length).map((item, index) => {
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
        </div>
        <div className="row justify-content-around align-items-center d-none d-md-block">
          <div className="col-lg-12 service-tab">
            <ul className="list-unstyled d-flex justify-content-around">
              {data?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={` cursor-pointer ${
                      activeFeature === index ? "active" : ""
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <h6>{item.title}</h6>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-lg-12 mt-5">
            <div className=" bg-light shadow-lg rounded-4 p-4">
              <p>{data[activeFeature]?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExclusiveFeatures;
