import React from "react";
import PageContainer from "../../../components/container/Container";
import ServicesHeader from "../../../components/services/ServicesHeader";
import WhatWeOffer from "../../../components/services/WhatWeOffer";
import { productDevWhatWeOffer } from "../../../data/servicesOffered";
import HowItWorks from "../../../components/services/HowItWorks";
import { productionHowItWorkData } from "../../../data/howServiceWorks";
import ExclusiveFeatures from "../../../components/services/ExclusiveFeatures";
import { productDevFeaturesData } from "../../../data/exclusiveFeatures";
import bg1 from "../../../assets/images/Banner_imgs/services_4.jpg";

export default function Product_development() {
  return (
    <PageContainer title="Product Development" description="">
      <ServicesHeader title={"Product Development"} bgImage={bg1} />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {" "}
              <p className="text-muted mb-0">
                {
                  "Our Product Development service harnesses the power of cloud technology to enable rapid prototyping, agile development, and continuous delivery. We work closely with your team to understand your product vision, design scalable architectures, and build robust, cloud-native applications.With a focus on collaboration, agility, and cutting-edge technology, our experienced team supports you through every phase of the product development lifecycle, from concept to launch. We help you accelerate time-to-market and achieve your business goals, ensuring a seamless and successful journey."
                }
              </p>
              <WhatWeOffer data={productDevWhatWeOffer} />
              <HowItWorks data={productionHowItWorkData} />
              <ExclusiveFeatures data={productDevFeaturesData} />
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
