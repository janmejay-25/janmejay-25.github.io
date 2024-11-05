import React from "react";
import { Link } from "react-router-dom";

function WhatWeOffer({ data }) {
  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-12">
          <div className="section-title text-center mb-4 pb-2">
            <h4 className="title fw-semibold mb-3">What We Offer</h4>
            <p className="text-muted mx-auto mb-0">
            We focus on following industry best practices and using the latest, cutting-edge technology, providing the strongest foundation for your cloud transition. Here is how we’ve achieved this feat. 
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        {data.map((item, index) => {
          const Icon = item.icon;
          return (
            <div className="col-lg-6 mt-4 pt-2" key={index}>
              <div className="features feature-green feature-bg border-0 p-4 rounded shadow">
                <div className="fea-icon rounded text-white title-dark">
                  <Icon className="icon text-white" />
                </div>

                <div className="content mt-3">
                  <Link
                    to="/page-single-service"
                    className="title h5 text-dark"
                  >
                    {item.title}
                  </Link>
                  <p className="text-muted para mt-2 mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WhatWeOffer;
