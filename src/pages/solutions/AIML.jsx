import React from "react";
import PageContainer from "../../components/container/Container";
import ServicesHeader from "../../components/services/ServicesHeader";
import bg1 from "../../assets/images/Banner_imgs/solution_1.jpg";
import image1 from "../../assets/images/about.jpg";
import AI1 from "../../assets/images/ai_ml/Ai construction.png";
import AI2 from "../../assets/images/ai_ml/Designer (5).jpeg";
import AI3 from "../../assets/images/ai_ml/ai retail.jpg";
import AI4 from "../../assets/images/ai_ml/computer vision uses in real life.jpg";

function AIML() {
  return (
    <PageContainer
      title={"AI/ML"}
      description={
        "This page is about AI/ML solution provided by CodeElan Technologies"
      }
    >
      <ServicesHeader
        title={"Artificial Inteligence and Machine Learning"}
        bgImage={bg1}
      />
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-lg-5 col-md-6">
              <img src={about} className="img-fluid rounded shadow" alt="" />
            </div> */}

            <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="section-title ms-lg-5 justify-text">
                <p className="fw-bold  mb-0">
                  Get ready for the future of video analysis with our upcoming
                  AI/ML-powered tool designed for industrial, medical, and
                  security applications.
                </p>
                <br />
                <br />
                <p className="text-muted mb-0 indent">
                  This advanced solution delivers real-time, actionable insights
                  from live video feeds custom-tailored to your needs. Whether
                  monitoring production lines, ensuring patient safety, or
                  enhancing security protocols, this tool seamlessly integrates
                  with your current camera setup—or can be used with dedicated
                  hardware—for precision analysis. With the ability to adapt on
                  the fly to any scenario, it's time to take control of your
                  operations like never before. Don’t miss out—this breakthrough
                  technology is launching soon!
                </p>
                <br />
                <p className="text-muted mb-0 indent">
                  Our software is equipped with advanced vehicle detection
                  capabilities, enabling precise classification of vehicles. It
                  identifies and categorizes vehicles based on specific
                  criteria, such as type, model, and other distinguishing
                  features. This functionality enhances traffic management
                  systems, security monitoring, and fleet management solutions,
                  offering a professional and scalable tool for industries that
                  rely on accurate vehicle identification and data analytics.
                  Through cutting-edge machine learning algorithms and robust
                  data processing, our software delivers reliable and efficient
                  results tailored to professional environments.
                </p>
              </div>
            </div>
            <div class="col-lg-5 col-md-6">
              <div class="row">
                <div class="col-md-6">
                  <img src={AI1} class="img-fluid" alt="AI/ML 1" />
                </div>
                <div class="col-md-5 d-flex  align-items-end ">
                  <img src={AI2} class="img-fluid" alt="AI/ML 2" />
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-md-5 ">
                  <img src={AI3} class="img-fluid" alt="AI/ML 3" />
                </div>
                <div class="col-md-6">
                  <img src={AI4} class="img-fluid" alt="AI/ML 4" />
                </div>
              </div>
            </div>

            <div
              className="container mt-100 mt-60"
              style={{ textAlign: "justify" }}
            >
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-md-12">
                      <h6 className="text-dark fw-bold">
                        Safety and Security{" "}
                      </h6>{" "}
                      <p className="text-muted indent">
                        AI-powered computer vision glasses are nothing short of
                        a miracle in transforming safety and security measures.
                        Equipped with real-time video processing capabilities,
                        these glasses enable security personnel to identify
                        threats and suspicious behavior instantly. They can
                        recognize unauthorized access, unattended objects, or
                        unusual movement patterns, ensuring timely
                        interventions. In crowded public spaces like airports or
                        stadiums, computer vision glasses enhance surveillance
                        by quickly scanning and detecting individuals or
                        activities flagged for concern. Additionally, these
                        glasses are useful in industrial environments,
                        identifying safety risks such as equipment malfunctions
                        or hazardous material leaks. With built-in facial
                        recognition capabilities, they can provide seamless,
                        hands-free authentication, making them ideal for
                        high-security areas. By offering rapid, real-time threat
                        detection and mitigation, AI computer vision glasses
                        elevate overall safety and security standards.
                      </p>
                      <h6 className="text-dark fw-bold">Retail </h6>
                      <p className="text-muted indent">
                        In the retail sector, AI computer vision glasses enhance
                        customer experience and streamline operations. Retail
                        staff wearing these glasses can quickly identify
                        products, check inventory levels, and provide
                        personalized recommendations based on customer
                        preferences. These glasses can also offer real-time
                        price checks, product details, and inventory updates,
                        improving customer service. For loss prevention,
                        AI-enabled glasses help staff spot suspicious behaviors,
                        reducing thefts and enhancing store security. They also
                        support staff in managing store layouts by analyzing
                        foot traffic patterns, ensuring strategic product
                        placements that boost sales. With their potential for
                        real-time data capture and analysis, computer vision
                        glasses redefine in-store retail efficiency.
                      </p>
                      <h6 className="text-dark fw-bold">Logistics </h6>{" "}
                      <p className="text-muted indent">
                        AI computer vision glasses improve logistics by offering
                        real-time insights and hands-free operations for
                        workers. They enable accurate barcode scanning,
                        inventory checks, and package sorting, reducing manual
                        errors and improving operational efficiency. Warehouse
                        staff can use these glasses to quickly locate items,
                        track shipments, and ensure accurate order fulfillment.
                        The glasses also enhance safety by identifying potential
                        obstacles or hazards in the workspace, reducing
                        accidents. In fleet management, computer vision glasses
                        can provide drivers with real-time route updates and
                        help identify road hazards, ensuring timely and safe
                        deliveries. By enhancing speed, accuracy, and safety,
                        these glasses revolutionize logistics operations.
                      </p>
                      <h6 className="text-dark fw-bold">Manufacturing </h6>
                      <p className="text-muted indent">
                        In manufacturing, AI computer vision glasses play a
                        vital role in quality control and productivity
                        enhancement. Workers equipped with these glasses can
                        inspect products for defects in real-time, identifying
                        flaws that might go unnoticed during manual inspections.
                        This reduces waste and improves product quality. These
                        glasses also aid in assembly line monitoring, detecting
                        errors early in the process and minimizing downtime.
                        With their ability to overlay digital instructions, they
                        support workers in complex tasks, improving precision
                        and reducing training time. In terms of safety, computer
                        vision glasses can detect potential hazards, like
                        overheating machinery or unsafe movements, ensuring
                        worker safety in industrial settings.
                      </p>
                      <h6 className="text-dark fw-bold">Healthcare </h6>{" "}
                      <p className="text-muted indent">
                        AI computer vision glasses are driving advancements in
                        healthcare, enhancing diagnostic accuracy and patient
                        care. Doctors wearing these glasses can view medical
                        records, imaging data, and patient histories in
                        real-time, without breaking focus during consultations
                        or procedures. Surgeons benefit from augmented visual
                        aids during operations, receiving real-time feedback and
                        guidance for complex procedures. In patient care, the
                        glasses assist nurses by recognizing patients and
                        updating records on-the-go, improving efficiency and
                        reducing manual errors. For telemedicine, these glasses
                        facilitate remote consultations by enabling real-time
                        video sharing of patient conditions. By integrating data
                        and improving situational awareness, AI computer vision
                        glasses boost precision and care delivery in healthcare.
                      </p>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

export default AIML;
