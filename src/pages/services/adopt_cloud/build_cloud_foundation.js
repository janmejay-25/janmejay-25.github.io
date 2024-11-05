import React from "react";
import PageContainer from "../../../components/container/Container";
import ServicesHeader from "../../../components/services/ServicesHeader";
import WhatWeOffer from "../../../components/services/WhatWeOffer";
import { buildCloudFoundationWhatWeOffer } from "../../../data/servicesOffered";
import HowItWorks from "../../../components/services/HowItWorks";
import { buildCloudFoundationHowItWorkData } from "../../../data/howServiceWorks";
import ExclusiveFeatures from "../../../components/services/ExclusiveFeatures";
import { buildCloudFoundationFeatures } from "../../../data/exclusiveFeatures";
import bg1 from "../../../assets/images/Banner_imgs/services_1.jpg";

export default function Build_cloud_foundation() {
  return (
    <PageContainer title="Build Cloud Foundation" description="">
      <ServicesHeader title={"Build Cloud Foundation"} bgImage={bg1} />
      <section className="section">
        <div className="container justify-text">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <p className="text-muted mb-0">
                {
                  "A foundation aligned with your business goals. This is step one for a successful cloud journey. Our Build Cloud foundation services thoroughly assess your current infrastructure as an opening move toward the problem, crafting a secure and scalable architecture later.  With deep expertise, we ensure your cloud solution is built for today and ready to adapt to future growth, driving agility and resilience."
                }
              </p>
              <WhatWeOffer data={buildCloudFoundationWhatWeOffer} />
              <HowItWorks data={buildCloudFoundationHowItWorkData} />
              <ExclusiveFeatures data={buildCloudFoundationFeatures} />
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
