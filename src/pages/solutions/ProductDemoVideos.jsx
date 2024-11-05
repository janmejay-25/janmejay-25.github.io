import React, { useEffect, useState } from "react";
import PageContainer from "../../components/container/Container";
import { Modal } from "react-bootstrap";
import { RxCross2 } from "../../assets/icons/vander";
import { useNavigate } from "react-router-dom";
import ServicesHeader from "../../components/services/ServicesHeader";

function ProductDemoVideos() {
  const [show, setShow] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [errors, setErrors] = useState({ email: "", mobile: "" });
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validate = (email, mobile) => {
    let isError = false;
    let err = { ...errors };
    if (email.trim() === "") {
      err.email = "User Email is Required.";
      isError = true;
    } else {
      err.email = "";
    }
    if (mobile.trim() === "") {
      err.mobile = "Mobile Number is Required";
      isError = true;
    } else {
      err.mobile = "";
    }
    setErrors({ ...err });
    return isError;
  };

  // Use this funtion to authenticate if user is valid or not
  const authenticateUser = () => {
    handleClose();
    navigate("/");
  };

  useEffect(() => {
    handleShow();

    return () => {
      setShowOtp(false);
    };
  }, []);

  const handleformSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.elements["email"].value;
    const mobile = form.elements["mobile"].value;
    if (validate(email, mobile)) {
    }
    console.log(email, mobile);
    setShowOtp(true);
  };

  return (
    <PageContainer title={"Product Demo Videos"}>
      <ServicesHeader title={"Product Demo Videos"} />
      <div className="my-5"></div>
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
                  <label className="form-label">
                    User Email <span className="text-danger">*</span>
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  {errors.email ? (
                    <span className="text-danger">{errors.email}</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-lg-6">
                  <label className="form-label">
                    Mobile Number <span className="text-danger">*</span>
                  </label>
                  <input
                    name="mobile"
                    id="mobile"
                    type="tel"
                    className="form-control"
                    placeholder="Mobile"
                  />
                  {errors.mobile ? (
                    <span className="text-danger">{errors.mobile}</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div
                className={`row p-2 justify-content-center ${
                  showOtp ? "d-flex" : "d-none"
                }`}
              >
                <div className="col-lg-6">
                  <input
                    name="emailOtp"
                    id="emailOtp"
                    type="email"
                    className="form-control"
                    placeholder="Enter Email OTP"
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    name="mobileOtp"
                    id="mobileOtp"
                    type="tel"
                    className="form-control"
                    placeholder="Enter Mobile OTP"
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
    </PageContainer>
  );
}

export default ProductDemoVideos;
