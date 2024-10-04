import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import NavbarTwo from "../navbar/navbarTwo";
import FooterSeven from "../footer/footerSeven";
import ScrollTop from "../scrollTop";

const PageContainer = ({ title, description, children }) => (
  <HelmetProvider>
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <NavbarTwo
        navClass="defaultscroll sticky"
        manuClass="navigation-menu nav-light nav-right"
      />
      <div style={{marginTop:"76px"}}>{children}</div>
      <FooterSeven />
      <ScrollTop />
    </div>
  </HelmetProvider>
);

export default PageContainer;
