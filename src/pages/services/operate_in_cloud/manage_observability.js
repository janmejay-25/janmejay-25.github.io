import React from "react";
import image from "../../../assets/images/build-cloud-foundation.avif";
import PageContainer from "../../../components/container/Container";
import ServicesHeader from "../../../components/services/ServicesHeader";
import WhatWeOffer from "../../../components/services/WhatWeOffer";
import { manageObservabilityWhatWeOffer } from "../../../data/servicesOffered";
import HowItWorks from "../../../components/services/HowItWorks";
import { manageObservabilityHowItWorkData } from "../../../data/howServiceWorks";
import ExclusiveFeatures from "../../../components/services/ExclusiveFeatures";
import { manageObservabilityFeaturesData } from "../../../data/exclusiveFeatures";
import Testimonials from "../../../components/testimonials/Testimonials";

export default function manage_observability() {
  return (
    <PageContainer title="Manage Observability" description="">
      <ServicesHeader
        title={"Manage Observability"}
        description={
"Deep visibility into your cloud infrastructure and applications is key to maintaining peak performance, detecting issues early, and ensuring smooth operations. Our Managed Observability service combines cutting-edge monitoring tools with expert analysis to deliver a full-spectrum view of your cloud environment.We proactively monitor critical metrics, identify anomalies, and provide actionable insights that help you optimize performance, enhance efficiency, and maintain a seamless user experience. By staying ahead of potential issues, we ensure your systems run smoothly and your operations remain uninterrupted."
        }
      />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <img src={image} className="img-fluid rounded" alt="" />
              </div>
              <WhatWeOffer data={manageObservabilityWhatWeOffer} />
              <HowItWorks data={manageObservabilityHowItWorkData} />
              <ExclusiveFeatures data={manageObservabilityFeaturesData} />
              <Testimonials />
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}  

