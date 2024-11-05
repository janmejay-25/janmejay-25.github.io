import React from "react";
import PageContainer from "../../../components/container/Container";
import ServicesHeader from "../../../components/services/ServicesHeader";
import WhatWeOffer from "../../../components/services/WhatWeOffer";
import { observabilityEngineeringWhatWeOffer } from "../../../data/servicesOffered";
import HowItWorks from "../../../components/services/HowItWorks";
import { observabilityEngineeringHowItWorkData } from "../../../data/howServiceWorks";
import ExclusiveFeatures from "../../../components/services/ExclusiveFeatures";
import { observabilityEngineeringFeaturesData } from "../../../data/exclusiveFeatures";
import bg1 from "../../../assets/images/Banner_imgs/services_8.jpg";

export default function observability_engineering() {
  return (
    <PageContainer title="Observability Engineering" description="">
      <ServicesHeader title={"Observability Engineering"} bgImage={bg1} />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {" "}
              <p className="text-muted mb-0">
                {
                  "Embedding observability into your cloud infrastructure and applications provides crucial insights into performance, availability, and user experience. Our Observability Engineering services are tailored to design and implement solutions that fit your unique requirements. By integrating advanced monitoring, tracing, and logging techniques, we help you understand system behavior, pinpoint performance bottlenecks, and drive continuous improvement for seamless cloud operations."
                }
              </p>
              <WhatWeOffer data={observabilityEngineeringWhatWeOffer} />
              <HowItWorks data={observabilityEngineeringHowItWorkData} />
              <ExclusiveFeatures data={observabilityEngineeringFeaturesData} />
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
