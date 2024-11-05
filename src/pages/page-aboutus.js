import React from "react";
import bg1 from "../assets/images/Banner_imgs/aboutus.jpg";

import about from "../assets/images/aboutus.jpg";
import about2 from "../assets/images/aboutus2.png";
import about3 from "../assets/images/aboutus3.jpeg";
import about4 from "../assets/images/aboutus4.png";
import "../../node_modules/react-modal-video/css/modal-video.css";

import { FiAirplay, LiaReact, FiUsers } from "../assets/icons/vander";
import PageContainer from "../components/container/Container";

export default function AboutUs() {
  // const counterData = [
  //   {
  //     start: "0",
  //     end: "5458",
  //     title: "Investment Projects",
  //   },
  //   {
  //     start: "0",
  //     end: "15",
  //     title: "Years of Experience",
  //   },
  //   {
  //     start: "0",
  //     end: "54",
  //     title: "Offices in the World",
  //   },
  //   {
  //     start: "0",
  //     end: "214",
  //     title: "Successful Cases",
  //   },
  // ];
  return (
    <PageContainer
      title={"About Us"}
      description={
        "This Page is about the information of codeelan, what it does, their vision and their team."
      }
    >
      <section
        className="bg-half-170 d-table w-100"
        style={{ backgroundImage: `url(${bg1})`, backgroundPosition: "top" }}
      >
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">
                  Who we are?
                </small>
                <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">
                  About US
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-lg-5 col-md-6">
              <img src={about} className="img-fluid rounded shadow" alt="" />
            </div> */}

            <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-text">
              <div className="section-title ms-lg-5">
                <h4 className="title mb-3">Mission and Vision Statements</h4>
                <p className="text-muted">
                  At CodeElan, we aim to empower businesses through innovative
                  technology solutions that solve complex problems and drive
                  digital transformation. By adopting an "Adopt-Build-Operate"
                  approach, we deliver exceptional, scalable, and secure
                  solutions tailored to each client's unique journey. Our
                  commitment to excellence and continuous learning enables us to
                  lead with agility and ensure success for our clients in an
                  ever-evolving technological landscape.
                  <br />
                  <br />
                  We aim to catalyze innovation, guiding businesses through
                  transformative digital solutions that address today’s
                  challenges while preparing them for tomorrow. Our vision
                  involves collaboration, continuous learning, and a commitment
                  to delivering thoughtful, future-focused technologies. By
                  nurturing solid partnerships and placing value on sustainable
                  growth, we strive to shape the future of technology with
                  integrity, empowering industries to adapt and thrive in an
                  evolving digital world.
                </p>
              </div>
            </div>
            <div class="col-lg-5 col-md-6">
              <div class="row">
                <div class="col-md-6">
                  <img src={about} class="img-fluid" alt="about 1" />
                </div>
                <div class="col-md-5 d-flex  align-items-end ">
                  <img src={about4} class="img-fluid" alt="about 2" />
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-md-5 ">
                  <img src={about3} class="img-fluid" alt="about 3" />
                </div>
                <div class="col-md-6">
                  <img src={about2} class="img-fluid" alt="about 4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            {aboutData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  className="col-lg-4 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0"
                  key={index}
                >
                  <div className="card shadow p-4 rounded features features-classic feature-primary">
                    <Icon className="h1 mb-0 text-primary" />

                    <div className="content my-3 border-bottom">
                      <p className="h5 text-dark">{item.title}</p>

                      <p className="text-muted mt-3">{item.desc}</p>
                    </div>

                    <Link
                      to="/page-single-service"
                      className="d-flex align-items-center justify-content-between"
                    >
                      <span className="fw-medium text-dark read-more">
                        Read More
                      </span>
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>*/}

        {/* <div className="container mt-5">
          <Partners />
        </div>

        <div className="container-fluid mt-100 mt-60">
          <Team />
        </div> */}

        {/*
          *
          *
          We can uncomment this code for client data and project delivery count in future 
          *
          *
          */}

        {/*<div className="container mt-100 mt-60">
          <div className="row">
            {counterData.map((item, index) => {
              return (
                <div className="col-md-3 col-6" key={index}>
                  <div className="counter-box position-relative text-center">
                    <h1 className="mb-0 display-1 fw-bold title-dark mt-2 opacity-25">
                      <CountUp start={item.start} end={item.end} />
                    </h1>
                    <span className="counter-head fw-semibold title-dark position-absolute top-50 start-50 translate-middle">
                      {item.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>*/}
      </section>
    </PageContainer>
  );
}
