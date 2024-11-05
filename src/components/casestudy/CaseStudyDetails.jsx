import React from "react";
import { Link, useParams } from "react-router-dom";
import { caseStudies } from "../../data/caseStudies";
import PageContainer from "../container/Container";
import { FiArrowLeft } from "react-icons/fi";

function CaseStudyDetails() {
  const params = useParams();
  const id = params.id;
  const data = caseStudies.find((blog) => blog.id === parseInt(id));
  return (
    <PageContainer title={"Case Studies"}>
      <section className="py-5 d-table w-100 pb-5">
        <div className="container">
          <Link
            to="/case-studies"
            id="back"
            className="bg-primary text-white rounded px-3 py-2"
          >
            <FiArrowLeft className="fea icon-sm align-middle" />
            Go Back
          </Link>
          <div className="row justify-content-center mt-3">
            <div className="col-lg-12 justify-text">
              <h3 className="heading mb-4">{data.title}</h3>
              {data.content}
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

export default CaseStudyDetails;
