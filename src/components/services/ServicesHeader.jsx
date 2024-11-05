import React from "react";

function ServicesHeader({ title, description, bgImage }) {
  return (
    <>
      <section
        className="bg-half-170 d-table w-100 "
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-overlay bg-gradient-overlay  item text-center "></div>
        .
        <div className="row justify-content-center align-items-center item">
          <div className="title-heading col-12 text-center">
            <h5 className="heading fw-semibold page-heading text-white title-dark">
              {title}
            </h5>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesHeader;
