import React from "react";
import PageContainer from "../../../components/container/Container";
import ServicesHeader from "../../../components/services/ServicesHeader";
import WhatWeOffer from "../../../components/services/WhatWeOffer";
import { cloudMigrationWhatWeOffer } from "../../../data/servicesOffered";
import HowItWorks from "../../../components/services/HowItWorks";
import { cloudMigrationHowItWorkData } from "../../../data/howServiceWorks";
import ExclusiveFeatures from "../../../components/services/ExclusiveFeatures";
import { cloudMigrationFeaturesData } from "../../../data/exclusiveFeatures";
import bg1 from "../../../assets/images/Banner_imgs/services_2.jpg";

function cloud_migration() {
  return (
    <PageContainer title="Cloud Migration" description="">
      <ServicesHeader title={"Cloud Migration"} bgImage={bg1} />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="text-muted mb-0 justify-text">
                {
                  "The Cloud Migration service at CodeElan empowers businesses to seamlessly transition their operations to the cloud, unlocking the numerous benefits of scalability, flexibility, and cost-efficiency. We understand that migrating to the cloud can be a complex and challenging process, which is why our team of experts is here to guide you every step of the way. With our proven methodologies and extensive experience, we ensure a smooth and successful migration, enabling you to leverage the full power of the cloud."
                }
              </p>
              <WhatWeOffer data={cloudMigrationWhatWeOffer} />
              <HowItWorks data={cloudMigrationHowItWorkData} />
              <ExclusiveFeatures data={cloudMigrationFeaturesData} />
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

export default cloud_migration;
