import React from "react";
import PageContainer from "../../components/container/Container";
import ServicesHeader from "../../components/services/ServicesHeader";

function AIML() {
  return (
    <PageContainer
      title={"AI/ML"}
      description={
        "This page is about AI/ML solution provided by CodeElan Technologies"
      }
    >
      <ServicesHeader title={"Artificial Inteligence and Machine Learning"} />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shadow-lg p-5 bg-light">
                <p>
                  <span className="fw-bold">
                    Get ready for the future of video analysis with our upcoming
                    AI/ML-powered tool designed for industrial, medical, and
                    security applications.
                  </span>
                  <br /> This advanced solution delivers real-time, actionable
                  insights from live video feeds custom-tailored to your needs.
                  Whether monitoring production lines, ensuring patient safety,
                  or enhancing security protocols, this tool seamlessly
                  integrates with your current camera setup—or can be used with
                  dedicated hardware—for precision analysis. With the ability to
                  adapt on the fly to any scenario, it's time to take control of
                  your operations like never before. Don’t miss out—this
                  breakthrough technology is launching soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

export default AIML;
