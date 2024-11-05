// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { blogs } from "../../data/blogs";
// import PageContainer from "../container/Container";
// import { FiArrowLeft } from "react-icons/fi";

// function BlogsDetails() {
//   const params = useParams();
//   const id = params.id;
//   const data = blogs.find((blog) => blog.id === parseInt(id));
//   return (
//     <PageContainer title={"Blogs"}>
//       <section className="py-5 d-table w-100 pb-5">
//         <div className="container">
//           <Link
//             to="/blogs"
//             id="back"
//             className="bg-primary text-white rounded px-3 py-2"
//           >
//             <FiArrowLeft className="fea icon-sm align-middle" />
//             Go Back
//           </Link>
//           <div className="row justify-content-center">
//         <div className="col-12">
//           <div className="section-title text-center mb-4 pb-2">
//             <h4 className="title fw-semibold mt-2 mb-3">Latest Blog & News</h4>
//             <p className="text-muted para-desc mx-auto mb-0">
//               Our design projects are fresh and simple and will benefit your
//               business greatly. Learn more about our work!
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="row justify-content-center">
//         {blogData.slice(0, 3).map((item, index) => {
//           return (
//             <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
//               <div className="card blog blog-primary shadow rounded overflow-hidden">
//                 <div className="image position-relative overflow-hidden">
//                   <img src={item.image} className="img-fluid" alt="" />

//                   <div className="blog-tag">
//                     <Link to="#" className="badge text-bg-light">
//                       {item.tag}
//                     </Link>
//                   </div>
//                 </div>

//                 <div className="card-body content">
//                   <Link
//                     to={`/blog-detail/${item.id}`}
//                     className="h5 title text-dark d-block mb-0"
//                   >
//                     {item.title}
//                   </Link>
//                   <p className="text-muted mt-2 mb-2">{item.desc}</p>
//                   <Link
//                     to={`/blog-detail/${item.id}`}
//                     className="link text-dark"
//                   >
//                     Read More <FiArrowRight className="align-middle" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//         </div>
//       </section>
//     </PageContainer>
//   );
// }

// export default BlogsDetails;
