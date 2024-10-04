import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillLinkedin,
  BiLogoFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  FiMail,
  IoIosArrowForward,
} from "../../assets/icons/vander";
import ceLogo from "../../assets/images/ce-logo.png";

export default function FooterSeven() {
  return (
    <footer className="footer bg-footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-py-60">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <Link to="#" className="logo-footer">
                    <img src={ceLogo} height="50" alt="" />
                  </Link>
                  <p className="mt-3">
                    CodeElan is one of the fastest growing companies in the
                    field of dedicated custom solutions and Quality Engineering
                    services. With our cutting-edge solutions, we provide
                    businesses with the tools they need to thrive in the
                    ever-evolving digital landscape.
                  </p>
                  <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                    <li className="list-inline-item">
                      <Link
                        to="#"
                        // target="_blank"
                        className="rounded"
                      >
                        <AiFillLinkedin />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        to="#"
                        // target="_blank"
                        className="rounded"
                      >
                        <BiLogoFacebook />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        to="#"
                        // target="_blank"
                        className="rounded"
                      >
                        <AiOutlineInstagram />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        to="#"
                        // target="_blank"
                        className="rounded"
                      >
                        <AiOutlineTwitter />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#" className="rounded">
                        <FiMail />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-12">
                  <div className="row justify-content-center">
                    <div className="col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                      <h6 className="footer-head">Important Links</h6>
                      <ul className="list-unstyled footer-list mt-4">
                        <li>
                          <Link
                            to="/aboutus"
                            className="text-foot d-flex align-items-center"
                          >
                            <IoIosArrowForward className="me-1" /> About us
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/page-privacy_policy"
                            className="text-foot d-flex align-items-center"
                          >
                            <IoIosArrowForward className="me-1" /> Privacy
                            Policy
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/page-code_of_conduct"
                            className="text-foot d-flex align-items-center"
                          >
                            <IoIosArrowForward className="me-1" /> Code of
                            Conduct
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-py-30 footer-bar bg-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <p className="mb-0 text-muted">
                  {new Date().getFullYear()} © All rights reserved by{" "}
                  <strong>CodeElan Technologies</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
