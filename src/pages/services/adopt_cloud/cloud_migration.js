import React from "react";
import PageContainer from "../../../components/container/Container";
import ServicesHeader from "../../../components/services/ServicesHeader";
import image from "../../../assets/images/build-cloud-foundation.avif";
import WhatWeOffer from "../../../components/services/WhatWeOffer";
import { cloudMigrationWhatWeOffer } from "../../../data/servicesOffered";
import HowItWorks from "../../../components/services/HowItWorks";
import { cloudMigrationHowItWorkData } from "../../../data/howServiceWorks";
import ExclusiveFeatures from "../../../components/services/ExclusiveFeatures";
import { cloudMigrationFeaturesData } from "../../../data/exclusiveFeatures";
import Testimonials from "../../../components/testimonials/Testimonials";

function cloud_migration() {
  return (    
      <PageContainer title="Cloud Migration" description="">
        <ServicesHeader
          title={"Cloud Migration"}
          description={
            "The Cloud Migration service at CodeElan empowers businesses to seamlessly transition their operations to the cloud, unlocking the numerous benefits of scalability, flexibility, and cost-efficiency. We understand that migrating to the cloud can be a complex and challenging process, which is why our team of experts is here to guide you every step of the way. With our proven methodologies and extensive experience, we ensure a smooth and successful migration, enabling you to leverage the full power of the cloud."
          }        
        /> 
        <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <img src={image} className="img-fluid rounded" alt="" />
              </div>
              <WhatWeOffer data={cloudMigrationWhatWeOffer} />
              <HowItWorks data={cloudMigrationHowItWorkData} />
              <ExclusiveFeatures data={cloudMigrationFeaturesData} />
              <Testimonials />
            </div>
          </div>
        </div>
      </section>
      </PageContainer>
  );
}

export default cloud_migration;
