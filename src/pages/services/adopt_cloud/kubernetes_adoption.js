import React from "react";
import PageContainer from "../../../components/container/Container";
import ServicesHeader from "../../../components/services/ServicesHeader";
import WhatWeOffer from "../../../components/services/WhatWeOffer";
import { kubernetWhatWeOffer } from "../../../data/servicesOffered";
import HowItWorks from "../../../components/services/HowItWorks";
import { kubernetHowItWorkData } from "../../../data/howServiceWorks";
import ExclusiveFeatures from "../../../components/services/ExclusiveFeatures";
import { kubernetFeaturesData } from "../../../data/exclusiveFeatures";
import bg1 from "../../../assets/images/Banner_imgs/services_3.jpg";

function kubernetes_adoption() {
  return (
    <>
      <PageContainer title="Kubernetes Adoption" description="">
        <ServicesHeader title={"Kubernetes Adoption"} bgImage={bg1} />
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="text-muted mb-0">
                  {
                    "We empower businesses to unlock the full potential of Kubernetes, the leading container orchestration platform for seamless cloud-based application management. Navigating Kubernetes can be complex, but with our tailored solutions and expertise, we simplify the adoption process for you.Our comprehensive services ensure smooth deployment, effortless scaling, and efficient management of containerized applications—enhancing your business's agility, scalability, and reliability in the cloud."
                  }
                </p>
                <WhatWeOffer data={kubernetWhatWeOffer} />
                <HowItWorks data={kubernetHowItWorkData} />
                <ExclusiveFeatures data={kubernetFeaturesData} />
              </div>
            </div>
          </div>
        </section>
      </PageContainer>
    </>
  );
}

export default kubernetes_adoption;
