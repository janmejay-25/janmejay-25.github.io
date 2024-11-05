import React from "react";
import PageContainer from "../../../components/container/Container";
import ServicesHeader from "../../../components/services/ServicesHeader";
import WhatWeOffer from "../../../components/services/WhatWeOffer";
import { devOpsWhatWeOffer } from "../../../data/servicesOffered";
import HowItWorks from "../../../components/services/HowItWorks";
import { devOpsHowItWorkData } from "../../../data/howServiceWorks";
import ExclusiveFeatures from "../../../components/services/ExclusiveFeatures";
import { devOpsFeaturesData } from "../../../data/exclusiveFeatures";
import bg1 from "../../../assets/images/Banner_imgs/services_5.jpg";

export default function devOps() {
  return (
    <PageContainer title="DevOps" description="">
      <ServicesHeader title={"DevOps"} bgImage={bg1} />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="text-muted mb-0">
                {
                  "Our DevOps service integrates cutting-edge cloud infrastructure with agile methodologies to optimize development, deployment, and operations. We streamline your workflows by implementing CI/CD pipelines, automating infrastructure provisioning, and utilizing advanced configuration management tools. By fostering collaboration between development and operations teams, we break down silos and accelerate release cycles, ensuring higher-quality outcomes and greater agility for your business. The result? Faster, more efficient processes that drive innovation and responsiveness."
                }
              </p>
              <WhatWeOffer data={devOpsWhatWeOffer} />
              <HowItWorks data={devOpsHowItWorkData} />
              <ExclusiveFeatures data={devOpsFeaturesData} />
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
