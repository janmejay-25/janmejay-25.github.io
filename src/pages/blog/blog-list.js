import React from "react";
import { Link } from "react-router-dom";
// import bg1 from "../../assets/images/bg/blog01.jpg";
import bg1 from "../../assets/images/Banner_imgs/blog.jpg";

import { blogData } from "../../data/data";
import { FiArrowRight } from "../../assets/icons/vander";
import PageContainer from "../../components/container/Container";

export default function BlogList() {
  return (
    <>
      <PageContainer
        title={"Blogs"}
        description={
          "This Page shows all the blogs uploaded by the code elan technologies"
        }
      >
        <section
          className="bg-half-170 d-table w-100"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div className="bg-overlay bg-gradient-overlay"></div>
          <div className="container">
            <div className="row mt-5 justify-content-center">
              <div className="col-12">
                <div className="title-heading text-center">
                  <p className="text-white-50 para-desc mx-auto mb-0">
                    Our Latest Blogs
                  </p>
                  <h5 className="heading fw-semibold page-heading text-white title-dark">
                    Blogs
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="row">
              {blogData.map((item, index) => {
                return (
                  <div className="col-lg-6 mb-4 pb-2" key={index}>
                    <div className="card blog blog-primary shadow rounded overflow-hidden">
                      <div className="row align-items-center g-0">
                        <div className="col-md-6">
                          <div className="image card-img position-relative overflow-hidden">
                            <img
                              src={item.image}
                              className="img-fluid"
                              alt=""
                            />
                            <div className="card-overlay"></div>
                            <div className="blog-tag">
                              <Link to="#" className="badge text-bg-light">
                                {item.tag}
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="card-body content">
                            <Link
                              to={`/blog-detail/${item.id}`}
                              className="h5 title text-dark d-block mb-0"
                            >
                              {item.title}
                            </Link>
                            <p className="text-muted mt-2 mb-2 text-truncate">
                              {item.desc}
                            </p>
                            <Link
                              to={`/blog-detail/${item.id}`}
                              className="link text-dark"
                            >
                              Read More{" "}
                              <FiArrowRight className="align-middle" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </PageContainer>
    </>
  );
}
