import React from "react";
import image from "../../../assets/images/build-cloud-foundation.avif";
import PageContainer from "../../../components/container/Container";
import ServicesHeader from "../../../components/services/ServicesHeader";
import WhatWeOffer from "../../../components/services/WhatWeOffer";
import { observabilityEngineeringWhatWeOffer } from "../../../data/servicesOffered";
import HowItWorks from "../../../components/services/HowItWorks";
import { observabilityEngineeringHowItWorkData } from "../../../data/howServiceWorks";
import ExclusiveFeatures from "../../../components/services/ExclusiveFeatures";
import { observabilityEngineeringFeaturesData } from "../../../data/exclusiveFeatures";
import Testimonials from "../../../components/testimonials/Testimonials";

export default function observability_engineering() {
  return (
    <PageContainer title="Observability Engineering" description="">
      <ServicesHeader
        title={"Observability Engineering"}
        description={
"Embedding observability into your cloud infrastructure and applications provides crucial insights into performance, availability, and user experience. Our Observability Engineering services are tailored to design and implement solutions that fit your unique requirements. By integrating advanced monitoring, tracing, and logging techniques, we help you understand system behavior, pinpoint performance bottlenecks, and drive continuous improvement for seamless cloud operations." 
       }
      />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <img src={image} className="img-fluid rounded" alt="" />
              </div>
              <WhatWeOffer data={observabilityEngineeringWhatWeOffer} />
              <HowItWorks data={observabilityEngineeringHowItWorkData} />
              <ExclusiveFeatures data={observabilityEngineeringFeaturesData} />
              <Testimonials />
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}  

