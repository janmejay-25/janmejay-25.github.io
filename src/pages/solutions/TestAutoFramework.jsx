import React from "react";
import PageContainer from "../../components/container/Container";
import ServicesHeader from "../../components/services/ServicesHeader";
import bg1 from "../../assets/images/Banner_imgs/solution_2.jpg";

function TestAutoFramework() {
  return (
    <PageContainer title={"Test Automation Framework"}>
      <ServicesHeader title={"Test Automation Framework"}
      bgImage={bg1}
      />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <div className=" p-5 bg-light"> */}
                <p>
                  <span className="fw-bold ">
                    Something big is coming, and it’s set to transform how you
                    approach QA automation.
                  </span>
                  <br />
                  <br />
                  <p className="text-muted mb-0">
                    Our soon-to-launch tool will streamline your testing
                    processes, providing an all-in-one solution that simplifies
                    test creation, execution, and reporting—all without the
                    complexities you're used to. It’s built for flexibility,
                    adaptability, and precision, offering the power to automate
                    across various platforms effortlessly. Whether working on
                    complex systems or scaling up your operations, this tool
                    ensures efficiency and accuracy at every step. Get ready to
                    experience a more intelligent, faster, and intuitive way to
                    automate. Don’t be the last to upgrade—this innovation is
                    coming!
                  </p>
                </p>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

export default TestAutoFramework;
