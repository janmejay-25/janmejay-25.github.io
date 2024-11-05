import React from "react";
import { Link, useNavigate } from "react-router-dom";
import bg1 from "../../assets/images/bg/corporate01.png";
import image1 from "../../assets/images/corporate01.png";
import { ReactComponent as icon1 } from "../../assets/images/website_icon.svg";
import deepakImage from "../../assets/images/team/Deepak.png";
import rajeshImage from "../../assets/images/team/RajeshImage.jpg";
import shaileshImage from "../../assets/images/team/Shailesh.png";
import cdImage from "../../assets/images/team/chandrakant-dollin.jpg";
// import banayanTreeLogo from "../../assets/images/client/BanyanTree-Logo.png";
// import ideaBridgeLogo from "../../assets/images/client/Idea-bridge-Logo.png";
// import plusInnovationLogo from "../../assets/images/client/PlusInnovation-Logo.png";
// import acmeMindsLogo from "../../assets/images/client/ACMEMinds-Logo.png";
import {
  FiAirplay,
  AiOutlineEye,
  BiTachometer,
  FaFont,
  TbFileExport,
} from "../../assets/icons/vander";
import PageContainer from "../../components/container/Container";
import Testimonials from "../../components/testimonials/Testimonials";

export default function IndexCorporate() {
  const navigate = useNavigate();

  //We can use these logos in testimonials or we can add persons pics
  // const testimonialsData = [
  //   {
  //     icon: banayanTreeLogo,
  //     testimonial:
  //       "CodeElan Technologies has been our testing partner for the last couple of years and has been an integral part of our team. They are our go-to team when it comes to quality testing.",
  //     name: "Anant Kumar",
  //     designation: "Founder and Owner",
  //   },
  //   {
  //     icon: plusInnovationLogo,
  //     testimonial:
  //       "CodeElan Technologies has been our testing partner for the last couple of years and has been an integral part of our team. They are our go-to team when it comes to quality testing.",
  //     name: "Andre Cardoza",
  //     designation: "Co-Founder and CTO",
  //   },
  //   {
  //     icon: ideaBridgeLogo,
  //     testimonial:
  //       "CodeElan Technologies has been our testing partner for the last couple of years and has been an integral part of our team. They are our go-to team when it comes to quality testing.",
  //     name: "Samrat Sardesai",
  //     designation: "Co-Founder",
  //   },
  //   {
  //     icon: acmeMindsLogo,
  //     testimonial:
  //       "CodeElan Technologies has been our testing partner for the last couple of years and has been an integral part of our team. They are our go-to team when it comes to quality testing.",
  //     name: "Sandeep Mehra",
  //     designation: "Director at AcmeMinds Private Limited",
  //   },
  // ];
  const servicesData = [
    {
      icon: icon1,
      title: "AI/ML",
      link: "/solutions/AI-ML",
      desc: "This prevents repetitive patterns from impairing the overall facilitates the comparison.",
    },
    {
      icon: FiAirplay,
      title: "Cloud Engineering",
      link: "/services/build-cloud-foundation",
      desc: "Before embarking on your cloud journey, it’s essential to lay a solid foundation that aligns with your business objectives.",
    },
    {
      icon: BiTachometer,
      title: "Observability Engineering",
      link: "/services/observability-engineering",
      desc: "Embedding observability into your cloud infrastructure and applications provides crucial insights into performance, availability, and user experience.",
    },
    {
      icon: FaFont,
      title: "Computer Vision",
      desc: "This prevents repetitive patterns from impairing the overall facilitates the comparison.",
    },
    {
      icon: AiOutlineEye,
      title: "Product Development",
      link: "/services/product-development",
      desc: "Our Product Development service harnesses the power of cloud technology to enable rapid prototyping, agile development, and continuous delivery.",
    },

    {
      icon: TbFileExport,
      title: "Test Automation",
      link: "/solutions/test-automation-framework",
      desc: "This prevents repetitive patterns from impairing the overall facilitates the comparison.",
    },
  ];
  const ctaData = [
    {
      image: deepakImage,
      desc: " Deepak, Founder and COO, with 24 years of experience, specializes in automation, software quality, project management, and AI/computer vision. He holds a Computer Science degree from Bharati Vidyapeeth, Pune, along with certifications in testing, AWS, Agile, and project management.",
      name: "Deepak Mathur",
      title: "Founder and Designated Partner",
    },
    {
      image: cdImage,
      name: "Chandrakant Dollin",
      desc: " CD, Partner and CEO of CodeElan Technologies, has 25+ years of experience in enterprise technology, AI, and computer vision, leading digital transformations. Based in Silicon Valley, he's a UC Berkeley engineering alumnus with a strong track record in growing tech consulting businesses.",
      title: "Chief Executive Officer",
    },
    {
      image: shaileshImage,
      desc: "Shailesh Amdekar, CSP, with 27-year career has been a masterclass in leadership, business acumen, and customer relationships. With an eye for operational excellence and a knack for risk management, Shailesh has helped numerous organizations thrive. His approach is analytical and profoundly human—he sees numbers and the people and stories behind them.",
      name: "Shailesh amdekar",
      title: "Consultant Strategic Business Partner",
    },
    {
      image: rajeshImage,
      desc: " Rajesh Kanade, 25+ years of industry experience in software development with 16+ years in leadership roles, primarily in Unified Communication, Contact centers & Cybersecurity and 1 US Patent granted.Thought Leader with a passion for building high-performing teams responsible for conceptualizing brand-new products and delivering them to market.",
      name: "Rajesh Kanade",
      title: "Chief Technical Officer",
    },
  ];
  return (
    <>
      <PageContainer
        title={"CodeElan Technologies - You Think IT We Deliver IT"}
        description={"This page is the home page for CodeElan technologies."}
      >
        <section
          className="bg-half-95 bg-light pb-0 d-table w-100"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="container ">
            <div className="row mt-5 align-items-center">
              <div className="col-lg-7 col-md-2">
                <div className="title-heading">
                  <h4 className="display-3 mb-2 fw-bold title-dark">
                    You Think <span className="text-green">IT</span> <br /> We
                    Deliver <span className="text-green">IT</span>{" "}
                  </h4>
                  <p className="para-desc text-muted">
                    From banking to wealth management and securities
                    distribution, we dedicated financial services the teams
                    serve all major sectors.
                  </p>
                  <div className="mt-4 pt-2">
                    <Link
                      to="contactus"
                      className="btn btn-lg btn-pills btn-primary"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 mt-5 mt-sm-0">
                <img src={image1} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="section mt-0 pt-4">
          <div className="container mt-0 pb-5">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-center pt-0">
                  <h4 className="title fw-semibold mb-3">Services</h4>
                  <h6>
                    We empower you to transform your vision into fully realized
                    technology tailored to your requirements.
                  </h6>

                  <p className="text-muted mx-auto mb-0">
                    At CodeElan, our expertise in AGILE software engineering
                    ensures seamless execution, from detailed software
                    blueprinting and wireframing to scalable, production-grade
                    deployments. We collaborate with global enterprises,
                    enabling them to embed innovation across every facet of
                    their digital journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              {servicesData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    className="col-lg-4 col-md-6 mt-4 pt-2 cursor-pointer"
                    key={index}
                    onClick={() => {
                      navigate(item.link);
                    }}
                  >
                    <div className="features feature-green feature-bg p-3 rounded shadow">
                      <div className="fea-icon rounded text-white title-dark">
                        <Icon
                          alt={item.title}
                          className="icon text-white"
                          src={item.icon}
                        />
                      </div>

                      <div className="content mt-3">
                        <Link
                          to="/page-single-service"
                          className="title h5 text-dark"
                        >
                          {item.title}
                        </Link>
                        <p className="text-muted para mt-2 mb-0 text-truncate">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-light mt-0 pt-2 pb-5 ">
            <div className="container mt-10 pt-4">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                    <h4 className="title fw-semibold mb-3">Testimonials</h4>
                    <h6>We value the feedback from our clients.</h6>

                    <p className="text-muted mx-auto mb-0">
                      Our success stories speak for themselves, showcasing why
                      clients trust us with their software development needs,
                      quality engineering projects, and digital transformation
                      initiatives.
                    </p>
                  </div>
                  <div className="col-12">
                    <Testimonials />
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-100">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="section-title text-center ">
                    <h4 className="title fw-semibold mb-3">About Us</h4>
                    <h5>We are CodeElan Technologies</h5>
                    <p className="text-muted mx-auto mb-0">
                      CodeElan is a leading-edge engineering services provider
                      consistently recognized for delivering innovative and
                      scalable solutions to global enterprises, emerging
                      start-ups, and industry disruptors. As a trusted partner,
                      we deeply commit to quality, precision, and accelerated
                      digital transformation.
                    </p>
                    <h4 className="mt-5 mb-3">Our Expertise</h4>
                    <div className="row justify-content-center">
                      <div className="col-12 col-md-4">
                        <div className="features feature-green feature-bg p-4 rounded shadow">
                          <div className="content mt-3">
                            <div className=" h5 text-dark para">
                              Software Product Engineering
                            </div>
                            <p className="text-muted para mt-2 mb-0 ">
                              Drive product development with end-to-end
                              engineering support, from initial concept design
                              to rigorous quality assurance and deployment.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="features feature-green feature-bg p-4 rounded shadow">
                          <div className="content mt-3">
                            <div className=" h5 title-dark para">
                              Global Talent Solutions
                            </div>
                            <p className="text-muted para mt-2 mb-0 ">
                              Leverage top-tier engineering talent with
                              flexible, cost-effective outsourcing
                              options—streamlining team integration and reducing
                              time-to-market.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-half-95 pb-5 d-table w-100 pt-2"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title fw-semibold mb-3">Leadership Team</h4>
                <p className="text-muted mx-auto mb-0 ">
                  Our leadership team brings together decades of experience
                  crafting sophisticated custom software solutions, pioneering
                  automation frameworks, and delivering superior-quality
                  engineering for enterprises worldwide. They are the architects
                  behind CodeElan’s commitment to excellence, ensuring every
                  solution is designed for real-world scalability and
                  innovation.
                </p>
              </div>
              <div class="row justify-content-between ">
                {ctaData.map((item, index) => (
                  <div class="col-12 col-md-6 col-lg-3 flip-container rounded-4 cursor-pointer">
                    <div class="flip-card shadow-xs features feature-green rounded-4">
                      <div class="text-center bg-light pt-5 card-front rounded-4">
                        <img
                          src={item.image}
                          className="avatar avatar-large rounded-pill mx-auto"
                          alt=""
                        />
                        <div className="features feature-green">
                          <div className="name my-5 ">
                            <small className="text-uppercase fw-semibold d-block">
                              {item.name}
                            </small>
                            <small className="text-muted">{item.title}</small>
                          </div>
                        </div>
                      </div>
                      <div class="text-start bg-green text-white p-4 card-back rounded-4 justify-text">
                        <small>{item.desc}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </PageContainer>
    </>
  );
}
