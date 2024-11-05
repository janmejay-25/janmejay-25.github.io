import React from "react";
import PageContainer from "../../../components/container/Container";
import ServicesHeader from "../../../components/services/ServicesHeader";
import WhatWeOffer from "../../../components/services/WhatWeOffer";
import { cloudOperationWhatWeOffer } from "../../../data/servicesOffered";
import HowItWorks from "../../../components/services/HowItWorks";
import { cloudOperationsHowItWorkData } from "../../../data/howServiceWorks";
import ExclusiveFeatures from "../../../components/services/ExclusiveFeatures";
import { cloudOperationsFeaturesData } from "../../../data/exclusiveFeatures";
import bg1 from "../../../assets/images/Banner_imgs/services_9.jpg";

export default function cloud_operations() {
  return (
    <PageContainer title="Cloud Operations" description="">
      <ServicesHeader title={"Cloud Operations"} bgImage={bg1} />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {" "}
              <p className="text-muted mb-0">
                {
                  "Effective cloud operations are essential for maintaining performance, security, and efficiency. Our Cloud Operations service delivers comprehensive management and support to ensure the smooth functioning, high availability, and optimal performance of your cloud infrastructure and applications. From provisioning and configuration to performance tuning and incident management, our cloud experts handle every aspect of your operations—allowing you to focus on your core business and drive innovation."
                }
              </p>
              <WhatWeOffer data={cloudOperationWhatWeOffer} />
              <HowItWorks data={cloudOperationsHowItWorkData} />
              <ExclusiveFeatures data={cloudOperationsFeaturesData} />
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
