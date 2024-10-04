import React from "react";

import PageContainer from "../../src/components/container/Container";

export default function CodeOfConduct() {
  return (
    <PageContainer title="Code Of Conduct" description="">
      <section className="section">
        <div className="container">
          <div className="col-lg-12">
            <div className="title-heading">
              <div className="h3 fw-bold text-decoration-underline mb-2">
                Code Of Conduct
              </div>
              <p className="indent text-muted h6 fw-normal mb-0">
                All participants of CodeElan Technologies are expected to abide
                by our Code of Conduct, both online and during in-person events
                that are hosted and/or associated with CodeElan Technologies.
              </p>
              <div className="h4 fw-bold">The Pledge</div>
              <p className="indent text-muted h6 fw-normal">
                In the interest of fostering an open and welcoming environment,
                we pledge to make participation in our project and our community
                a harassment-free experience for everyone, regardless of age,
                body size, disability, ethnicity, gender identity and
                expression, level of experience, nationality, personal
                appearance, race, religion, or sexual identity and orientation.
              </p>{" "}
              <div className="h4 fw-bold">The Standards</div>
              <p className="indent text-muted h6 fw-normal">
                Examples of behaviour that contributes to creating a positive
                environment include:
                <ul className="indent text-muted h6 fw-normal">
                  <li>Using welcoming and inclusive language</li>
                  <li>
                    Being respectful of differing viewpoints and experiences
                  </li>
                  <li>Gracefully accepting constructive criticism</li>
                  <li>
                    Referring to people by their preferred pronouns and using
                    gender-neutral pronouns when uncertain
                  </li>
                  Examples of unacceptable behaviour by participants include:
                  <li>
                    Trolling, insulting/derogatory comments, public or private
                    harassment
                  </li>
                  <li>
                    Publishing others’ private information, such as a physical
                    or electronic address, without explicit permission
                  </li>
                  <li>
                    Not being respectful to reasonable communication boundaries,
                    such as ‘leave me alone,’ ‘go away,’ or ‘I’m not discussing
                    this with you.’
                  </li>
                  The usage of sexualised language or imagery and unwelcome
                  sexual attention or advances
                  <li>Swearing, usage of strong or disturbing language</li>
                  <li>
                    Demonstrating the graphics or any other content you know may
                    be considered disturbing
                  </li>
                  <li>
                    Starting and/or participating in arguments related to
                    politics
                  </li>
                  <li>
                    Assuming or promoting any kind of inequality including but
                    not limited to: age, body size, disability, ethnicity,
                    gender identity and expression, nationality and race,
                    personal appearance, religion, or sexual identity and
                    orientation
                  </li>
                  <li>
                    Other conduct which you know could reasonably be considered
                    inappropriate in a professional setting
                  </li>
                </ul>
              </p>
              <div className="h4 fw-bold">Enforcement</div>
              <p className="indent text-muted h6 fw-normal">
                Violations of the Code of Conduct may be reported by sending an
                email to info@codeelan.com. All reports will be reviewed and
                investigated and will result in a response that is deemed
                necessary and appropriate to the circumstances. Further details
                of specific enforcement policies may be posted separately. We
                hold the right and responsibility to remove comments or other
                contributions that are not aligned to this Code of Conduct, or
                to ban temporarily or permanently any members for other
                behaviours that they deem inappropriate, threatening, offensive,
                or harmful.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
