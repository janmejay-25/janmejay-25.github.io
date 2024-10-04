import React, { useState } from "react";
import { Link } from "react-scroll";
import bg1 from "../assets/images/bg/about.jpg";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  IoIosArrowDown,
  IoIosArrowUp,
} from "../assets/icons/vander";
import PageContainer from "../components/container/Container";

const servicesOptions = [
  { lable: "Cloud Engineering", value: 0 },
  { lable: "Product Development", value: 1 },
  { lable: "Observability Engineering", value: 2 },
  { lable: "AI / ML", value: 3 },
  { lable: "Computer Vision", value: 4 },
  { lable: "Test Automation", value: 5 },
];

export default function Contact() {
  const [selectOpen, setSelectOpen] = useState(false);
  return (
    <PageContainer
      title={"Contact Us"}
      description={"This is a contact page for CodeElan Technologies."}
    >
      <section
        className="bg-half-170 d-table w-100"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">
                  Get in touch
                </small>
                <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">
                  Contact us
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pb-0">
        <div className="container bg-light shadow-lg p-3">
          <div className="row">
            <div className="col-md-4">
              <div className="card border-0 text-center features feature-clean bg-transparent">
                <div className="icons text-green text-center mx-auto">
                  <FiPhone className="d-block rounded h3 mb-0" />
                </div>
                <div className="content mt-3">
                  <h5 className="footer-head">Phone</h5>
                  <Link to="tel:+917030324244" className="text-foot">
                    +91 7030324244
                  </Link>
                  <br />
                  <Link to="tel:(820)865-0598" className="text-foot">
                    (820) 865-0598
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="card border-0 text-center features feature-clean bg-transparent">
                <div className="icons text-green text-center mx-auto">
                  <FiMail className="d-block rounded h3 mb-0" />
                </div>
                <div className="content mt-3">
                  <h5 className="footer-head">Email</h5>
                  <Link to="mailto:info@codeelan.com" className="text-foot">
                    info@codeelan.com
                  </Link>
                  <br />
                  <Link to="mailto:sales@codeelan.com" className="text-foot">
                    sales@codeelan.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="card border-0 text-center features feature-clean bg-transparent">
                <div className="icons text-green text-center mx-auto">
                  <FiMapPin className="d-block rounded h3 mb-0" />
                </div>
                <div className="content mt-3">
                  <h5 className="footer-head">Location</h5>
                  <h6>India</h6>
                  <p className="text-muted">
                    E402, S3 Lifestyle Internal Rd, Apartments, Pimple Saudagar,
                    Pune, Maharashtra 411027
                  </p>
                  <h6>USA</h6>
                  <p className="text-muted">
                    1151 Topaz Ave, San Jose, CA 95117
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title mb-5 pb-2 text-center">
                <h4 className="title mb-3">Get In Touch !</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Our design projects are fresh and simple and will benefit your
                  business greatly. Learn more about our work!
                </p>
              </div>
              <div className="custom-form">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Your Name <span className="text-danger">*</span>
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Name :"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Your Email <span className="text-danger">*</span>
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="Email :"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div
                        className="mb-3 select-input"
                        onClick={() => setSelectOpen(!selectOpen)}
                      >
                        <label className="form-label">
                          Services/Technologies interested in{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <select
                          name="service"
                          id="service"
                          className="form-control"
                        >
                          <option value={-1}>Select</option>
                          {servicesOptions.map((service) => (
                            <option
                              key={service.lable + service.value}
                              value={service.value}
                            >
                              {service.lable}
                            </option>
                          ))}
                        </select>
                        <span className="arrow">
                          {selectOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
                        </span>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Subject</label>
                        <input
                          name="subject"
                          id="subject"
                          className="form-control"
                          placeholder="Subject :"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Comments <span className="text-danger">*</span>
                        </label>
                        <textarea
                          name="comments"
                          id="comments"
                          rows="4"
                          className="form-control"
                          placeholder="Message :"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          type="submit"
                          id="submit"
                          name="send"
                          className="btn btn-primary"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-100 mt-60">
          <div className="row">
            <div className="col-12 p-0">
              <div className="card map border-0">
                <div className="card-body p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.6071157416127!2d73.78960327441675!3d18.591743266997966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b976ff115aaf%3A0x765e650834bfa995!2sCodeElan%20Technologies!5e0!3m2!1sen!2sin!4v1725558372313!5m2!1sen!2sin"
                    style={{ border: "0" }}
                    title="CodeElan"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
