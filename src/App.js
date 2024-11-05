import React from "react";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/style.scss";
import "./assets/css/materialdesignicons.min.css";
import IndexCorporate from "./pages/index/index-corporate";
import BlogList from "./pages/blog/blog-list";
import BlogDetailOne from "./pages/blog/blog-detail-one";
import AboutUs from "./pages/page-aboutus";
import Error from "./pages/spcial/page-error";
import Contact from "./pages/page-contact"; // CE routes
import PrivacyPolicy from "./pages/page-privacy_policy"; // CE routes

import {
  BuildCloudFoundation,
  CloudMigration,
  KubernetesAdoption,
} from "./pages/services/adopt_cloud";
import {
  DevOps,
  ProductDevelopment,
  TestingAutomation,
} from "./pages/services/build_in_cloud";
import {
  CloudOperations,
  ManageObservability,
  ObservabilityEngineering,
} from "./pages/services/operate_in_cloud";
import ComingSoon from "./pages/spcial/page-comingsoon";
import AIML from "./pages/solutions/AIML";
import TestAutoFramework from "./pages/solutions/TestAutoFramework";
import CaseStudies from "./pages/insights/CaseStudies";
import CaseStudyDetails from "./components/casestudy/CaseStudyDetails";
import CodeOfConduct from "./pages/page-code_of_conduct";
import ProductDemoVideos from "./pages/solutions/ProductDemoVideos";

function App() {
  return (
    <>
      <Routes>
        {/** Index Route */}
        <Route path="/" element={<IndexCorporate />} />

        {/** Services Routes */}
        <Route
          path="/services/build-cloud-foundation"
          element={<BuildCloudFoundation />}
        />
        <Route
          path="/services/kubernetes-adoption"
          element={<KubernetesAdoption />}
        />
        <Route path="/services/cloud-migration" element={<CloudMigration />} />
        <Route
          path="/services/product-development"
          element={<ProductDevelopment />}
        />
        <Route path="/services/devOps" element={<DevOps />} />
        <Route
          path="/services/testing-automation"
          element={<TestingAutomation />}
        />
        <Route
          path="/services/manage-observability"
          element={<ManageObservability />}
        />
        <Route
          path="/services/observability-engineering"
          element={<ObservabilityEngineering />}
        />
        <Route
          path="/services/cloud-operations"
          element={<CloudOperations />}
        />   

        {/**Solutions Routes */}
        <Route path="/solutions/AI-ML" element={<AIML />} />
        <Route
          path="/solutions/test-automation-framework"
          element={<TestAutoFramework />}
        />
        <Route
          path="/solutions/product-demo-videos"
          element={<ProductDemoVideos />}
        />
        
        {/** Blog Routes */}
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blog-detail/:id" element={<BlogDetailOne />} />


        {/** case studies Routes */}
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:id" element={<CaseStudyDetails />} />
        {/** About Us Routes */}
        <Route path="/aboutus" element={<AboutUs />} />

        {/** Contact Us Routes */}
        <Route path="/contactus" element={<Contact />} />

        {/** Privacy policy Routes */}
        <Route path="/page-privacy_policy" element={<PrivacyPolicy />} />
        {/** code of conduct Routes */}
        <Route path="/page-code_of_conduct" element={<CodeOfConduct />} />

        {/** Error Routes */}
        <Route path="/page-error" element={<Error />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
