import React from "react";
import PageContainer from "../../../components/container/Container";
import ServicesHeader from "../../../components/services/ServicesHeader";
import WhatWeOffer from "../../../components/services/WhatWeOffer";
import { testingAutomationWhatWeOffer } from "../../../data/servicesOffered";
import HowItWorks from "../../../components/services/HowItWorks";
import { testingAutomationHowItWorkData } from "../../../data/howServiceWorks";
import ExclusiveFeatures from "../../../components/services/ExclusiveFeatures";
import { testingAutomationFeaturesData } from "../../../data/exclusiveFeatures";
import bg1 from "../../../assets/images/Banner_imgs/services_6.jpg";

export default function testing_automation() {
  return (
    <PageContainer title="Testing Automation" description="">
      <ServicesHeader title={"Testing Automation"} bgImage={bg1} />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {" "}
              <p className="text-muted mb-0">
                {
                  "Testing plays a vital role in delivering reliable, high-performing software that’s ready for the real world. Our Testing Automation services harness the power of cloud technologies and modern automation frameworks to simplify and enhance your testing processes.We work closely with your team to implement solid test automation frameworks, enable continuous testing, and create flexible, cloud-based testing environments. By minimizing manual work, speeding up test cycles, and improving overall coverage, we help you deliver top-quality software—faster and with less risk."
                }
              </p>
              <WhatWeOffer data={testingAutomationWhatWeOffer} />
              <HowItWorks data={testingAutomationHowItWorkData} />
              <ExclusiveFeatures data={testingAutomationFeaturesData} />
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
