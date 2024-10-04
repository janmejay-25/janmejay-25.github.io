import React, { useEffect, useRef } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
import { Link, useNavigate } from "react-router-dom";
import bg1 from "../../assets/images/bg/corporate01.png";
import image1 from "../../assets/images/corporate01.png";
import BlogOne from "../../components/blog/blogOne";
import deepakImage from "../../assets/images/team/Deepak.png";
import rajeshImage from "../../assets/images/team/Rajesh-Kanade.png";
import shaileshImage from "../../assets/images/team/Shailesh.png";
import cdImage from "../../assets/images/team/chandrakant-dollin.jpg";
import banayanTreeLogo from "../../assets/images/client/BanyanTree-Logo.png";
import ideaBridgeLogo from "../../assets/images/client/Idea-bridge-Logo.png";
import plusInnovationLogo from "../../assets/images/client/PlusInnovation-Logo.png";
import acmeMindsLogo from "../../assets/images/client/ACMEMinds-Logo.png";
import {
  FiAirplay,
  AiOutlineEye,
  BiTachometer,
  BsPalette,
  FaFont,
  TbFileExport,
} from "../../assets/icons/vander";
import PageContainer from "../../components/container/Container";

export default function IndexCorporate() {
  const navigate = useNavigate();
  const sliderRef = useRef();

  useEffect(() => {
    const settings = tns({
      container: sliderRef.current,
      items: 3,
      controls: false,
      mouseDrag: true,
      loop: true,
      rewind: false,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 3000,
      navPosition: "bottom",
      nav: true,
      speed: 400,
      gutter: 10,
      responsive: {
        300: {
          items: 1,
        },
        640: {
          items: 2, // Number of items for screens 640px and up
        },
        900: {
          items: 3, // Number of items for screens 900px and up
        },
      },
    });

    return () => {
      settings.destroy();
    };
  }, []);

  const testimonialsData = [
    {
      icon: banayanTreeLogo,
      testimonial:
        "CodeElan Technologies has been our testing partner for the last couple of years and has been an integral part of our team. They are our go-to team when it comes to quality testing.",
      name: "Anant Kumar",
      designation: "Founder and Owner",
    },
    {
      icon: plusInnovationLogo,
      testimonial:
        "CodeElan Technologies has been our testing partner for the last couple of years and has been an integral part of our team. They are our go-to team when it comes to quality testing.",
      name: "Andre Cardoza",
      designation: "Co-Founder and CTO",
    },
    {
      icon: ideaBridgeLogo,
      testimonial:
        "CodeElan Technologies has been our testing partner for the last couple of years and has been an integral part of our team. They are our go-to team when it comes to quality testing.",
      name: "Samrat Sardesai",
      designation: "Co-Founder",
    },
    {
      icon: acmeMindsLogo,
      testimonial:
        "CodeElan Technologies has been our testing partner for the last couple of years and has been an integral part of our team. They are our go-to team when it comes to quality testing.",
      name: "Sandeep Mehra",
      designation: "Director at AcmeMinds Private Limited",
    },
  ];
  const servicesData = [
    {
      icon: FiAirplay,
      title: "Cloud Engineering",
      link: "/services/build-cloud-foundation",
      desc: "Before embarking on your cloud journey, it’s essential to lay a solid foundation that aligns with your business objectives.",
    },
    {
      icon: AiOutlineEye,
      title: "Prouct Development",
      link: "/services/product-development",
      desc: "Our Product Development service harnesses the power of cloud technology to enable rapid prototyping, agile development, and continuous delivery.",
    },
    {
      icon: BiTachometer,
      title: "Observability Engineering",
      link: "/services/observability-engineering",
      desc: "Embedding observability into your cloud infrastructure and applications provides crucial insights into performance, availability, and user experience.",
    },
    {
      icon: BsPalette,
      title: "AI/ML",
      link: "/solutions/AI-ML",
      desc: "This prevents repetitive patterns from impairing the overall facilitates the comparison.",
    },
    {
      icon: FaFont,
      title: "Computer Vision",
      desc: "This prevents repetitive patterns from impairing the overall facilitates the comparison.",
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
      desc: '" The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout. "',
      name: "Deepak Mathur",
      title: "Founder and Designated Partner",
    },
    {
      image: cdImage,
      desc: '" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. "',
      name: "Chandrakant Dollin",
      title: "Chief Executive Officer",
    },
    {
      image: shaileshImage,
      desc: '" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces. "',
      name: "Shailesh amdekar",
      title: "Consultant Strategic Business Partner",
    },
    {
      image: rajeshImage,
      desc: '" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces. "',
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
          <div className="container">
            <div className="row mt-5 align-items-center">
              <div className="col-lg-7 col-md-6">
                <div className="title-heading">
                  <h4 className="display-3 mb-4 fw-bold title-dark">
                    {" "}
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

        <section className="section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
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
                    <div className="features feature-primary feature-bg p-4 rounded shadow">
                      <div className="fea-icon rounded text-white title-dark">
                        <Icon className="icon text-white" />
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
          <div className="container mt-100">
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
                  <div ref={sliderRef}>
                    {testimonialsData.map((item, index) => {
                      return (
                        <div className="tiny-slide bg-light p-md-2" key={index}>
                          <div className="card text-center">
                            <img
                              src={item.icon}
                              className="rounded-pill mx-auto shadow w-50"
                              alt=""
                            />

                            <div className="card-body pb-0 content">
                              <p className="fw-normal text-muted fst-italic">
                                {item.testimonial}
                              </p>

                              <div className="name mt-4">
                                <small className="text-uppercase fw-semibold d-block">
                                  {item.name}
                                </small>
                                <small className="text-muted">
                                  {item.designation}
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-100">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title fw-semibold mb-3">About US</h4>
                  <h5>We are CodeElan Technologies</h5>
                  <p className="text-muted mx-auto mb-0">
                    CodeElan is a leading-edge engineering services provider
                    consistently recognized for delivering innovative and
                    scalable solutions to global enterprises, emerging
                    start-ups, and industry disruptors. As a trusted partner, we
                    deeply commit to quality, precision, and accelerated digital
                    transformation.
                  </p>
                  <h5 className="mt-5">Our Expertise</h5>
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-4">
                      <h6>Software Product Engineering</h6>
                      <p className="text-muted mx-auto mb-0">
                        Drive product development with end-to-end engineering
                        support, from initial concept design to rigorous quality
                        assurance and deployment.
                      </p>
                    </div>
                    <div className="col-12 col-md-4">
                      <h6>Global Talent Solutions</h6>
                      <p className="text-muted mx-auto mb-0">
                        Leverage top-tier engineering talent with flexible,
                        cost-effective outsourcing options—streamlining team
                        integration and reducing time-to-market.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-half-95 pb-0 d-table w-100"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="">
            <div className="row justify-content-center">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title fw-semibold mb-3">Leadership Team</h4>
                <p className="text-muted mx-auto mb-0 w-75">
                  Our leadership team brings together decades of experience
                  crafting sophisticated custom software solutions, pioneering
                  automation frameworks, and delivering superior-quality
                  engineering for enterprises worldwide. They are the architects
                  behind CodeElan’s commitment to excellence, ensuring every
                  solution is designed for real-world scalability and
                  innovation.
                </p>
              </div>
              <div className="col-12 py-5 rounded row justify-content-center">
                {ctaData.map((item, index) => {
                  return (
                    <div
                      className="col-12 col-md-4 col-lg-2 col- rounded shadow bg-light py-2 mx-md-4 my-2"
                      key={index}
                    >
                      <div className="text-center">
                        <img
                          src={item.image}
                          className="avatar avatar-large rounded-pill mx-auto"
                          alt=""
                        />

                        <div className="card-body pb-0 content">
                          <div className="name my-5">
                            <small className="text-uppercase fw-semibold d-block">
                              {item.name}
                            </small>
                            <small className="text-muted">{item.title}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <BlogOne />
          </div>
        </section>
      </PageContainer>
    </>
  );
}
