import React, { useEffect, useRef } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
import client1 from "../../assets/images/client/01.jpg";
import client2 from "../../assets/images/client/01.jpg";
import client3 from "../../assets/images/client/01.jpg";

function Testimonials() {
  const sliderRef = useRef();

  useEffect(() => {
    const settings = tns({
      container: sliderRef.current,
      items: 1,
      controls: true,
      mouseDrag: true,
      loop: true,
      rewind: true,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 3000,
      navPosition: "bottom",
      controlsText: [
        '<i class="mdi mdi-chevron-left "></i>',
        '<i class="mdi mdi-chevron-right"></i>',
      ],
      nav: false,
      speed: 500,
      gutter: 0,
    });
    return () => {
      settings.destroy();
    };
  }, []);

  const ctaData = [
    {
      image: client1,
      desc: '"We engaged CodeElan Technologies for QA for our product IdeaBridge. It has been a great experience working with them. Without a doubt, we are happy to recommend CodeElan Technologies for their work ethics and professionalism."',
      name: "Samraat Sardesai",
      title: "(Co-Founder)",
    },
    {
      image: client2,
      desc: '"CodeElan Technologies team as they were very good in understanding existing application and suggested best automation framework for the project. I highly recommend CodeElan Technologies team and would collaborate with them for future projects."',
      name: "Sandeep Mehra",
      title: "Director at AcmeMinds Private Limited",
    },
    {
      image: client3,
      desc: '"CodeElan Technologies has been our testing partner for the last couple of years and has been an integral part of our team. They are our go-to team when it comes to quality testing.',
      name: "Anant Kumar",
      title: "(Founder and Owner)",
    },
    {
      image: client3,
      desc: '"I am writing to recommend the services of CodeElan Technologies. CodeElan testing team has been working for our company for the last 3 years as our Testing Team.  I am confident in recommending CodeElan Technologies.',
      name: "Andre Cardozo",
      title: "(Co-founder and CTO)",
    },
  ];
  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-12">
          <div className="section-title text-center pb-2">
            <h4 className="title fw-semibold mb-3">Reviews</h4>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <div className="card py-5 px-4 border-0 rounded bg-primary bg-gradient shadow-lg">
                <div ref={sliderRef}>
                  {ctaData.map((item, index) => {
                    return (
                      <div className="tiny-slide" key={index}>
                        <div className="card client-testi text-center">
                          
                          <div className="card-body pb-0 content">
                            <p className="h6 fw-normal text-white fst-italic">
                              {item.desc}
                            </p>

                            <div className="name mt-4">
                              <small className="text-uppercase text-white fw-semibold d-block">
                                {item.name}
                              </small>
                              <small className="text-white">{item.title}</small>
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
      </div>
    </>
  );
}

export default Testimonials;
