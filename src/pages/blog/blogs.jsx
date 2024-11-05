// import React from "react";
// import PageContainer from "../../components/container/Container";
// import bg1 from "../../assets/images/Banner_imgs/blog.jpg";
//  import { blogs } from "../../data/blogs";
// import { Link } from "react-router-dom";
// import { FiArrowRight } from "react-icons/fi";

// function Blogs() {
//   return (
//     <PageContainer title={"Blogs"}>
//       <section
//         className="bg-half-170 d-table w-100"
//         style={{ backgroundImage: `url(${bg1})` }}
//       >
//         <div className="bg-overlay bg-gradient-overlay"></div>
//         <div className="container">
//           <div className="row mt-5 justify-content-center">
//             <div className="col-12">
//               <div className="title-heading text-center">
//                 <h5 className="heading fw-semibold page-heading text-white title-dark">
//                  Blogs
//                 </h5>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="section">
//         <div className="container">
//           <div className="row">
//             {blogs.map((item, index) => {
//               return (
//                 <div className="col-lg-4 col-md-6 mb-4 pb-2" key={index}>
//                   <div className="card blog blog-primary shadow rounded overflow-hidden">
//                     <div className="image position-relative overflow-hidden">
//                       <img src={item.image} className="img-fluid" alt="" />

//                       <div className="blog-tag">
//                         <Link to="#" className="badge text-bg-light">
//                           {item.tag}
//                         </Link>
//                       </div>
//                     </div>

//                     <div className="card-body content">
//                       <Link
//                         to={`/blog-detail/${item.id}`}
//                         className="h5 title text-dark d-block mb-0 "
//                       >
//                         {item.title}
//                       </Link>
//                       <p className="text-muted mt-2 mb-2">{item.desc}</p>
//                       <Link
//                         to={`/blog-detail/${item.id}`}
//                         className="link text-dark"
//                       >
//                         Read More <FiArrowRight className="align-middle" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </PageContainer>
//   );
// }

// export default Blogs;