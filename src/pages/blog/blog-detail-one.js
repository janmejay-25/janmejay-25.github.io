import React from "react";
import { Link, useParams } from "react-router-dom";
import image1 from "../../assets/images/blog/single01.jpg";

import { AiOutlineCalendar, AiOutlineUser } from "../../assets/icons/vander";
import { blogData } from "../../data/data";
import PageContainer from "../../components/container/Container";

// export default function BlogDetailOne() {
//   const params = useParams();
//   const id = params.id;
//   const data = blogData.find((blog) => blog.id === parseInt(id));
//   return (
//     <>
//       <PageContainer title={data.title} description={data.desc}>
//         <section className="bg-half-80 d-table w-100 pb-0">
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-lg-12">
//                 <div className="title-heading">
//                   <ul className="list-inline">
//                     <li className="list-inline-item">
//                       <AiOutlineUser className="mb-0 me-1 text-dark h5" />
//                       <Link to="#" className="text-primary h6">
//                         {" "}
//                         {data.name}
//                       </Link>
//                     </li>
//                     <li className="list-inline-item text-muted h6 ms-3">
//                       <AiOutlineCalendar className="mb-0 me-1 text-dark h5" />{" "}
//                       {data.date}
//                     </li>
//                   </ul>

//                   <h3 className="mt-3"> {data.title}</h3>
//                   <p className="text-muted fw-normal mb-0">
//                     Today, when speed, accuracy and reliability remain the new
//                     pillars of creation,{" "}
//                     <span className="fw-bold text-dark">
//                       QA Test Automation
//                     </span>{" "}
//                     is becoming their binding force. With the global market for
//                     <span className="fw-bold text-dark">
//                       QA automation tools
//                     </span>{" "}
//                     projected to soar to $52.7 billion by 2027, the technology
//                     is already making goliath impacts on the industry.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="section">
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-9">
//                 <div className="card rounded h-50">
//                   <img
//                     src={data.image ? data.image : image1}
//                     className="img-fluid rounded shadow w-auto"
//                     alt=""
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="container mt-100 mt-60">
//             <div className="row justify-content-center">
//               <div className="col-lg-12">
//                 <div className="row">
//                   <div className="col-md-11">
//                     <p className="text-muted">
//                       <span className="dropcaps display-4 text-green me-2">
//                         QA
//                       </span>
//                       automation is not just a word; it's the Lionel Messi of
//                       Automation, The Conor McGregor of testing. It is a game
//                       changer that uses automation scripts to repeatedly test
//                       software, ensuring Fine-Tuned execution and faster time to
//                       market. As Agile and DevOps practices become the standard,
//                       the importance of QA automation in maintaining high
//                       product quality and reducing errors comes into play more
//                       and more daily.
//                     </p>
//                     <h4 className="heading fw-bolder">
//                       The Positive Impact of QA Automation on Software
//                       Development
//                     </h4>
//                     <h6 className="text-dark fw-bold">
//                       1. Speeding Up the Development Cycle
//                     </h6>{" "}
//                     <p className="text-muted">
//                       QA has sped up the development cycle so much that
//                       bottlenecks are becoming obsolete, making software updates
//                       easier. Testing, when integrated with automation, enables
//                       testing that never ends. This perfectly aligns with the
//                       Ideas of Continuous integration and continuous delivery
//                       pipelines. Any update can be tested rapidly with the
//                       market and deployed if found suitable.
//                     </p>
//                     <p className="text-muted">
//                       By running tests around the clock, QA automation ensures
//                       that development teams can push code changes into
//                       production faster without compromising quality.
//                     </p>{" "}
//                     <h6 className="text-dark fw-bold">
//                       2. Enhancing Product Quality
//                     </h6>{" "}
//                     <p className="text-muted">
//                       Automation will run thousands, if not millions, of scripts
//                       simultaneously and significantly increase the test
//                       coverage; manual testing is not feasible. One single
//                       tester, if he or she comes from the world of Bruce
//                       Almighty, can test multiple platforms for multiple
//                       configurations, but how long? Would that be accurate?
//                       Would that be precise? Not really.{" "}
//                     </p>
//                     <h6 className="text-dark fw-bold">
//                       3. Cost Efficiency in the Long Run
//                     </h6>{" "}
//                     <p className="text-muted">
//                       While setting up automation tools will take some
//                       resources, the long-run returns are well enough. QA
//                       automation will minimize the need for a specific testing
//                       team. Although these people will still be required to
//                       perform particular tasks, they will not be needed for the
//                       jobs before automated QA testing. Since the team will
//                       either be unnecessary or drastically reduced, the cost can
//                       be efficiently used to run continuous tests to address and
//                       detect the uses early in the development process. This is
//                       far less expensive than fixing bugs once the product is
//                       released.
//                     </p>
//                     <h6 className="text-dark fw-bold">
//                       4. Better Resource Utilization
//                     </h6>
//                     <p className="text-muted">
//                       With{" "}
//                       <span className="text-dark fw-bold">
//                         QA Test Automation
//                       </span>{" "}
//                       handling repetitive and time-consuming tests, human
//                       testers can focus on more complex and creative aspects of
//                       testing. This shift allows QA teams to leverage their
//                       expertise in identifying edge cases, developing innovative
//                       test scenarios, and improving overall testing strategies.
//                       Essentially, automation frees up valuable human resources
//                       to work on tasks that require critical thinking and
//                       ingenuity, which can lead to even greater improvements in
//                       product quality.
//                     </p>
//                     <p className="text-muted">
//                       Automation empowers human testers to concentrate on the
//                       more creative and complex aspects of testing. By freeing
//                       time from repetitive tasks, testers can focus on
//                       identifying critical cases, developing comprehensive test
//                       scenarios, and refining testing strategies. This shift in
//                       focus allows for a more strategic approach to quality
//                       assurance, ultimately resulting in higher-quality
//                       products.
//                     </p>{" "}
//                     <h6 className="text-dark fw-bold">
//                       5. Scalability and Flexibility
//                     </h6>{" "}
//                     <p className="text-muted">
//                       As projects grow and evolve, the testing requirements also
//                       become more complex. QA automation offers the scalability
//                       needed to handle this complexity. Whether running
//                       extensive regression tests or ensuring cross-platform
//                       compatibility, automated testing can scale to meet the
//                       demands of large and intricate software projects. This
//                       flexibility is crucial in today's dynamic environment,
//                       where software needs to adapt quickly to changes in
//                       technology and user requirements.
//                     </p>{" "}
//                     <h6 className="text-dark fw-bold">
//                       6. Round-the-clock testing with Quick Feedback
//                     </h6>{" "}
//                     <p className="text-muted">
//                       In the global market, where software development teams are
//                       often spread across different time zones, the ability to
//                       run tests around the clock is a major advantage. QA
//                       automation allows for 24/7 testing, ensuring the
//                       development process is continuous and uninterrupted. This
//                       also means that feedback on code changes is immediate,
//                       enabling developers to make necessary real-time
//                       adjustments. The quick feedback loop facilitated by
//                       automation speeds up the development process and enhances
//                       the overall quality of the software.
//                     </p>{" "}
//                     <h6 className="text-dark fw-bold">
//                       7. Improved Collaboration Across Teams
//                     </h6>{" "}
//                     <p className="text-muted">
//                       Automation in QA testing also promotes better
//                       collaboration among development, testing, and operations
//                       teams. Teams can easily share insights, track progress,
//                       and make data-driven decisions by providing a common
//                       platform for automated tests. This improved collaboration
//                       is a cornerstone of{" "}
//                       <span className="text-dark fw-bold">DevOps</span>{" "}
//                       practices, where integrating development and operations is
//                       critical to delivering high-quality software efficiently.
//                     </p>
//                     <h4 className="heading fw-bolder">
//                       Conclusion: Embracing the Future with QA Automation
//                     </h4>
//                     <p className="text-muted">
//                       The impact of{" "}
//                       <span className="text-dark fw-bold">
//                         QA Test Automation
//                       </span>{" "}
//                       on software development is profound and overwhelmingly
//                       positive. It not only speeds up the development cycle and
//                       enhances product quality but also offers long-term cost
//                       savings and better utilization of resources. As{" "}
//                       <span className="text-dark fw-bold">Agile</span> and
//                       <span className="text-dark fw-bold">DevOps</span>{" "}
//                       practices continue to dominate the industry,{" "}
//                       <span className="text-dark fw-bold">QA automation</span>{" "}
//                       will play an even more critical role in ensuring that
//                       software products are reliable, scalable, and ready for
//                       the market at lightning speed. In short, embracing QA Test
//                       Automation is not just an option—it's necessary for any
//                       company that wants to thrive in today's fast-paced digital
//                       world.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </PageContainer>
//     </>
//   );
// }

// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { caseStudies } from "../../data/caseStudies";
// import PageContainer from "../container/Container";
import { FiArrowLeft } from "react-icons/fi";

function BlogDetailOne() {
  const params = useParams();
  const id = params.id;
  const data = blogData.find((blog) => blog.id === parseInt(id));
  return (
    <PageContainer title={data.title}>
      <section className="py-5 d-table w-100 pb-5">
        <div className="container">
          <Link
            to="/blogs"
            id="back"
            className="bg-primary text-white rounded px-3 py-2"
          >
            <FiArrowLeft className="fea icon-sm align-middle" />
            Go Back
          </Link>
          <div className="row justify-content-center mt-0 justify-text">
            {data.description}
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

export default BlogDetailOne;
