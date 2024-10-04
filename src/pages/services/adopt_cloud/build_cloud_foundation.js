import React from "react";
import image from "../../../assets/images/build-cloud-foundation.avif";
import PageContainer from "../../../components/container/Container";
import ServicesHeader from "../../../components/services/ServicesHeader";
import WhatWeOffer from "../../../components/services/WhatWeOffer";
import { buildCloudFoundationWhatWeOffer } from "../../../data/servicesOffered";
import HowItWorks from "../../../components/services/HowItWorks";
import { buildCloudFoundationHowItWorkData } from "../../../data/howServiceWorks";
import ExclusiveFeatures from "../../../components/services/ExclusiveFeatures";
import { buildCloudFoundationFeatures } from "../../../data/exclusiveFeatures";
import Testimonials from "../../../components/testimonials/Testimonials";

export default function Build_cloud_foundation() {
  return (
    <PageContainer title="Build Cloud Foundation" description="">
      <ServicesHeader
        title={"Build Cloud Foundation"}
        description={
          "A foundation aligned with your business goals. This is step one for a successful cloud journey. Our Build Cloud foundation services thoroughly assess your current infrastructure as an opening move toward the problem, crafting a secure and scalable architecture later.  With deep expertise, we ensure your cloud solution is built for today and ready to adapt to future growth, driving agility and resilience."
        }
      />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <img src={image} className="img-fluid rounded" alt="" />
              </div>
              <WhatWeOffer data={buildCloudFoundationWhatWeOffer} />
              <HowItWorks data={buildCloudFoundationHowItWorkData} />
              <ExclusiveFeatures data={buildCloudFoundationFeatures} />
              <Testimonials />
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
