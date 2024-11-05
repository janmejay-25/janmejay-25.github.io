import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import NavbarTwo from "../navbar/navbarTwo";
import FooterSeven from "../footer/footerSeven";
import ScrollTop from "../scrollTop";
import { Modal } from "react-bootstrap";
import { RxCross2 } from "../../assets/icons/vander";

const PageContainer = ({ title, description, children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleformSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.elements["email"].value;
    const mobile = form.elements["mobile"].value;
    console.log(email, mobile);
  };

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <NavbarTwo
          navClass="defaultscroll sticky"
          manuClass="navigation-menu nav-light nav-right"
          openModal={handleShow}
        />
        <div style={{ marginTop: "76px" }}>{children}</div>
        <FooterSeven />
        <ScrollTop />
        <Modal
          show={show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={handleClose}
          centered
        >
          <Modal.Body className="p-0 position-relative overflow-hidden p-4">
            <div className="d-flex p-2 justify-content-between align-items-center">
              <h5>User Information</h5>
              <RxCross2 className="fs-2 cursor-pointer" onClick={handleClose} />
            </div>
            <hr />
            <div className="custom-form">
              <form onSubmit={handleformSubmit}>
                <div className="row p-2 justify-content-center">
                  <div className="col-lg-6">
                    <label className="form-label">User Email</label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label">Mobile Number</label>
                    <input
                      name="mobile"
                      id="mobile"
                      type="tel"
                      className="form-control"
                      placeholder="Mobile"
                    />
                  </div>
                </div>
                <div className="p-2 mt-3">
                  <button
                    type="submit"
                    id="submit"
                    name="send"
                    className="btn btn-primary rounded-pill"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </HelmetProvider>
  );
};

export default PageContainer;
