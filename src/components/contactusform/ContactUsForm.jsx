import React from "react";

function ContactUsForm() {
  return (
    <>
      <div className="mt-100">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title mb-5 pb-2 text-center">
              <h4 className="title mb-3">Get In Touch !</h4>
              <p className="text-muted mx-auto mb-0">
                At CodeElan, we are committed to empowering businesses to thrive
                in the cloud era. With our Build Cloud Foundation service, you
                can confidently embrace the cloud, knowing that you have a solid
                and reliable infrastructure in place. Our tailored solutions,
                expertise, and ongoing support ensure a seamless transition and
                unlock the full potential of the cloud for your organization.
                Let us be your trusted partner on your cloud journey and
                accelerate your success.
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
    </>
  );
}

export default ContactUsForm;
