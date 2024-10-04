import React from "react";
import image from "../../../assets/images/build-cloud-foundation.avif";
import PageContainer from "../../../components/container/Container";
import ServicesHeader from "../../../components/services/ServicesHeader";
import WhatWeOffer from "../../../components/services/WhatWeOffer";
import { productDevWhatWeOffer } from "../../../data/servicesOffered";
import HowItWorks from "../../../components/services/HowItWorks";
import { productionHowItWorkData } from "../../../data/howServiceWorks";
import ExclusiveFeatures from "../../../components/services/ExclusiveFeatures";
import { productDevFeaturesData } from "../../../data/exclusiveFeatures";
import Testimonials from "../../../components/testimonials/Testimonials";

export default function Product_development() {
  return (
    <PageContainer title="Product Development" description="">
      <ServicesHeader
        title={"Product Development"}
        description={
"Our Product Development service harnesses the power of cloud technology to enable rapid prototyping, agile development, and continuous delivery. We work closely with your team to understand your product vision, design scalable architectures, and build robust, cloud-native applications.With a focus on collaboration, agility, and cutting-edge technology, our experienced team supports you through every phase of the product development lifecycle, from concept to launch. We help you accelerate time-to-market and achieve your business goals, ensuring a seamless and successful journey."        }
      />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <img src={image} className="img-fluid rounded" alt="" />
              </div>
              <WhatWeOffer data={productDevWhatWeOffer} />
              <HowItWorks data={productionHowItWorkData} />
              <ExclusiveFeatures data={productDevFeaturesData} />
              <Testimonials />
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}  

