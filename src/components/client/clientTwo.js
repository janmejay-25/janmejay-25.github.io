import React, { useEffect, useRef } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
import deeepakImage from "../../assets/images/team/Deepak.png";
import shaileshImage from "../../assets/images/team/Shailesh.png";
import cdImage from "../../assets/images/team/chandrakant-dollin.jpg";

export default function ClientTwo() {
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
      speed: 400,
      gutter: 0,
    });
    return () => {
      settings.destroy();
    };
  }, []);
  const clientData = [
    {
      image: cdImage,
      name: "Chandrakant Dollin (CD)",
      title: "C.E.O",
      desc: '" For over 25 years, Chandrakant Dollin, or CD, has been navigating the evolving world of technology with a vision far ahead of its time. After moving to Silicon Valley 15 years ago, CD became the driving force behind large-scale digital transformation projects for global enterprises. His leadership isn’t just about guiding strategy but crafting futures. At CodeElan, he combines deep technical knowledge with business foresight, turning challenges into growth opportunities and shaping a consulting powerhouse from the ground up. "',
    },
    {
      image: deeepakImage,
      name: "Deepak Mathur ",
      title: "COO",
      desc: '" In 2016, Deepak Mathur took a bold step into entrepreneurship, leaving behind his successful career in major IT conglomerates. Armed with automation, software quality, and project management expertise, he was determined to craft innovative and practical solutions. At CodeElan, Deepak’s leadership is defined by his deep understanding of client needs and unwavering focus on delivery excellence. His journey has been one of transformation—not just for the company but for the many businesses he helps navigate today’s complex digital landscape. "',
    },
    {
      image: shaileshImage,
      name: "Shailesh Amdekar ",
      title: "CSP",
      desc: '" Shailesh Amdekar’s 27-year career has been a masterclass in leadership, business acumen, and customer relationships. With an eye for operational excellence and a knack for risk management, Shailesh has helped numerous organizations thrive. His approach is analytical and profoundly human—he sees numbers and the people and stories behind them. As CodeElan’s CSP, he harnesses his wealth of experience and strong customer focus to ensure the company’s growth is built on trust, collaboration, and strategic foresight. "',
    },
  ];
  return (
    <>
      <div className="conatainer">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div ref={sliderRef}>
              {clientData.map((item, index) => {
                return (
                  <div className="tiny-slide px-md-5" key={index}>
                    <div className="card client-testi text-center">
                      <img
                        src={item.image}
                        className="avatar avatar-small rounded-pill mx-auto"
                        alt=""
                      />

                      <div className="card-body pb-0 content">
                        <p className="h5 fw-normal text-muted fst-italic">
                          {item.desc}
                        </p>

                        <div className="name mt-4">
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
      </div>
    </>
  );
}
