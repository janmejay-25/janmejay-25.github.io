import casestudy1 from "../assets/images/case_study/case-studies_1.jpg";
import casestudy2 from "../assets/images/case_study/case-studies_2.jpg";
import casestudy3 from "../assets/images/case_study/case-studies_3.jpg";
import casestudy4 from "../assets/images/case_study/case-studies_4.jpg";
import casestudy5 from "../assets/images/case_study/case-studies_5.jpg";
import casestudy6 from "../assets/images/case_study/case-studies_6.jpg";

import blog2 from "../assets/images/blog/02.jpg";

export const caseStudies = [
  {
    id: 1,
    image: casestudy1,
    tag: "Ecommerce",
    title: "Ecommerce Mobile App",
    content: (
      <section className="ms-3">
        <h5>Project Overview</h5>
        <p className=" text-muted fw-normal mb-4">
          <ul>
            <li className="text-align: justify ">
              The eCommerce mobile app offers a seamless platform for both
              sellers and consumers, enabling businesses to create online stores
              and reach a broader customer base.
            </li>
            <li className="text-align: justify ">
              Sellers can easily upload and manage extensive product catalogs,
              while consumers can browse, select products, and complete their
              purchases with just a few taps.
            </li>
          </ul>
        </p>
        <h5 className="mt-4">Implementation Approach</h5>
        <p className=" text-muted fw-normal mb-4">
          <ul>
            <li className="text-align: justify ">
              Leveraging advanced technology, the app intelligently analyzes
              customer preferences, location data, and order history to
              recommend nearby stores, streamlining the shopping experience and
              providing personalized recommendations.
            </li>
          </ul>
        </p>
        <h5 className="mt-4">Development Process</h5>
        <p className=" text-muted fw-normal mb-4">
          <ul>
            <li className="text-align: justify ">
              The app's successful launch was made possible through the efforts
              of a skilled team of developers and technical experts.
            </li>
            <li className="text-align: justify ">
              Comprehensive research and rigorous testing were conducted to
              ensure the app’s functionality, accuracy, and reliability,
              delivering a high-quality user experience.
            </li>
          </ul>
        </p>
        <h5 className="mt-4"> Results and Impact</h5>
        <p className="text-muted fw-normal mb-4">
          <ul>
            <li className="text-align: justify ">
              By helping users locate nearby stores, the app reduces unnecessary
              interactions with distant vendors, saving time and effort in the
              purchase process.
            </li>
            <li className="text-align: justify ">
              This feature has significantly improved customer satisfaction,
              offering a more efficient and convenient shopping experience.
            </li>
          </ul>
        </p>
      </section>
    ),
  },
  {
    id: 2,
    image: casestudy2,
    tag: "Automation",
    title: "Automation for Website and Mobile Application",
    content: (
      <section className="ms-3">
        <h5>Client Overview</h5>
        <p className=" text-muted fw-normal mb-4">
          <ul>
            <li className="text-align: justify ">
              Client deals with customized product development to manage Idea
              generation within an organization.
            </li>
            <li className="text-align: justify ">
              The objective of the portal is to effectively engage all Global
              employees to participate in the continuous improvement process by
              sharing an innovative idea and implementing the same if helpful
              for Business Unit.
            </li>
            <li className="text-align: justify ">
              For implemented ideas, projects and best practices, employees earn
              points which can be re-deemed after reaching a minimum level.
            </li>
            <li className="text-align: justify ">
              Client has its Website portal and native android Mobile
              application.
            </li>
          </ul>
        </p>
        <h5>Solution Details</h5>
        <p className="text-muted fw-normal mb-4 ">
          <ul>
            <li className="text-align: justify ">
              Understanding of the flows in the application.
            </li>
            <li className="text-align: justify ">
              Detailed Functional Test Cases for Automation.
            </li>
            <li className="text-align: justify ">
              Automation testing of Website and Mobile.
            </li>
          </ul>
        </p>
        <h5 className="mb-3">Automation Stack</h5>
        <div class=" col-md-4 ">
          <table class="table table-bordered ">
            <tbody>
              <tr class="indent">
                <td className="text-muted fw-bold ">Website</td>
                <td className="text-muted ">
                  <ul className="list-unstyled">
                    <li> Selenium + Java</li>
                    <li>Test NG</li>
                    <li>Eclipse</li>
                  </ul>
                </td>
              </tr>
              <tr class="indent">
                <td className="text-muted fw-bold ">Mobile</td>

                <td className="text-muted ">
                  <ul className="list-unstyled">
                    <li>Appium</li>
                    <li>Genymotion</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    ),
  },
  {
    id: 3,
    image: casestudy3,
    tag: "Automation",
    title: "Automation for Insurance Application",
    content: (
      <section className="ms-3">
        <h5>Client Overview</h5>
        <p className="text-muted fw-normal mb-4">
          <ul>
            <li className="text-align: justify ">
              A leading insurance company specializing in sales automation
              software for the life insurance and annuity sectors.
            </li>
            <li className="text-align: justify ">
              Their digital tools streamline key processes such as product
              illustrations, quoting, e-applications, and compliance management.
            </li>
            <li className="text-align: justify ">
              The company’s platforms enable advisors to efficiently manage
              insurance and retirement products across multiple channels.
            </li>
            <li className="text-align: justify ">
              Additionally, they promote innovation through a global
              idea-generation platform, where employees contribute improvements
              to products and operations, earning redeemable points via a
              dedicated web portal.
            </li>
          </ul>
        </p>
        <h5>Solution Details</h5>
        <p className="text-muted fw-normal mb-4  ">
          <ul>
            <li className="text-align: justify ">
              The project involved implementing a Cucumber Java BDD
              (Behavior-Driven Development) framework to automate testing and
              improve collaboration between developers, testers, and business
              stakeholders.
            </li>
            <li className="text-align: justify ">
              Using Gherkin, the team was able to write clear, understandable
              test scenarios, facilitating communication and enhancing
              reusability.
            </li>
            <li className="text-align: justify ">
              The framework integrated with tools such as Maven, JUnit, and
              Selenium WebDriver, allowing for robust automation, continuous
              testing, and integration with CI/CD pipelines (Azure DevOps).
            </li>
            <li className="text-align: justify ">
              The solution improved test coverage significantly and reduced
              testing time, enabling faster release cycles.
            </li>
          </ul>
        </p>
        <h5 className="mb-3">Tech Stack</h5>
        <div class=" col-md-5 ">
          <table class="table table-bordered ">
            <tbody>
              <tr class="indent">
                <td class="text-muted fw-bold pr-3">Programming Language</td>
                <td className="text-muted">Java</td>
              </tr>
              <tr class="indent">
                <td class="text-muted fw-bold pr-3">Test Framework</td>
                <td className="text-muted ">Cucumber(BDD)</td>
              </tr>
              <tr class="indent">
                <td className="text-muted fw-bold ">Build Tool</td>
                <td className="text-muted ">Maven</td>
              </tr>
              <tr class="indent">
                <td className="text-muted fw-bold ">Automation Tool</td>
                <td className="text-muted ">Selenium WebDriver</td>
              </tr>
              <tr class="indent">
                <td className="text-muted fw-bold ">IDE</td>
                <td className="text-muted ">IntelliJ IDEA </td>
              </tr>
              <tr class="indent">
                <td className="text-muted fw-bold ">Version Control</td>
                <td className="text-muted ">Git</td>
              </tr>
              <tr class="indent">
                <td className="text-muted fw-bold ">CI/CD</td>
                <td className="text-muted ">Azure DevOps</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    ),
  },
  {
    id: 4,
    image: casestudy4,
    tag: "Product",
    title: "Product Testing(Web)",
    content: (
      <section className="ms-3">
        <h5>Client Overview</h5>

        <p className="text-muted fw-normal mb-4  ">
          <ul>
            <li className="text-align: justify ">
              Client deals with customised product development to​ manage Idea
              generation within an organization.
            </li>
            <li className="text-align: justify ">
              The objective of​ the Client portal is to effectively engage all
              Global employees to participate in the continuous improvement
              process​ by: Client has its Web portal and native android Mobile​
              application Client Mobile application currently has a curtailed
              feature and will be enhances in upcoming releases.
            </li>
          </ul>
        </p>
        <h5>Solution Details</h5>
        <p className="text-muted fw-normal mb-4 ">
          KMDW provided Retail application - Performance testing solution which
          covered following stages:
          <ul>
            <li>Requirement Gathering - workflows and load model design.</li>
            <li>High Level Scenario identification​</li>
            <li>Test Script - creation​.</li>
            <li>Test execution as below:​</li>
            <ul>
              <li>​​Smoke or Baseline testing.</li>
              <li>100% or 1x level load testing.</li>
              <li>Endurance testing ( 0.5 x)</li>
            </ul>
            <li>Create detailed analysis report for each test execution</li>
            <li>Create comparison and test closure report.</li>
            <li>Mobile device level performance metrics as below:</li>
            <ul>
              <li>Battery</li>
              <li>Memory</li>
              <li>Network Send/Receive</li>
            </ul>
          </ul>
        </p>
        <h5 className="mb-3">Automation Stack</h5>
        <div class=" col-md-7">
          <table class="table table-bordered ">
            <tbody>
              <tr class="indent">
                <td className="text-muted fw-bold pr-3 ">
                  programming language
                </td>
                <td class="text-muted  ">C & Java</td>
              </tr>
              <tr class="indent">
                <td className="text-muted fw-bold pr-3">Debugging tool</td>
                <td class="text-muted ">Bean Shell and JavaScript</td>
              </tr>
              <tr class="indent">
                <td class="text-muted fw-bold pr-3">Browsers</td>
                <td className="text-muted ">Firefox, Google chrome and IE</td>
              </tr>
              <tr class="indent">
                <td class="text-muted fw-bold pr-3">
                  Test Scripting and Execution(Web)
                </td>
                <td className="text-muted ">Apache Jmeter 3.2​</td>
              </tr>
              <tr class="indent">
                <td class="text-muted fw-bold pr-3">
                  Test scripting and Execution(Mobile)
                </td>
                <td className="text-muted "> Perfecto & Apache Jmeter.​</td>
              </tr>
              <tr class="indent">
                <td class="text-muted fw-bold pr-3">Test Management</td>
                <td className="text-muted ">
                  <ul className="list-unstyled">
                    <li>Jira</li>
                    <li>Selenium + Web Driver</li>
                  </ul>
                </td>
              </tr>

              <tr class="indent">
                <td class="text-muted fw-bold pr-3">Monitoring</td>
                <td className="text-muted ">App Dynamics and Permon</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    ),
  },
  {
    id: 5,
    image: casestudy5,
    tag: "Automotive",
    title: "Designing a Modern UI/UX for an Automotive Car Resale Platform",
    content: (
      <section className="ms-3">
        <h5>Introduction</h5>
        <p className="text-muted fw-normal mb-4  ">
          <ul>
            <li className="text-align: justify ">
              This case study outlines the process of designing a contemporary,
              user-friendly UI/UX for an automotive car resale platform.
            </li>
            <li className="text-align: justify ">
              The primary objective was to create an intuitive interface that
              allows users to seamlessly list and search for used cars.
            </li>
            <li className="text-align: justify ">
              Key design priorities included simplicity, streamlined navigation,
              and an aesthetically pleasing layout to enhance both user
              engagement and satisfaction.
            </li>
          </ul>
        </p>
        <h5 className="mt-4">Research and Analysis</h5>{" "}
        <p className=" fw-normal mb-0 ">
          <ul>
            <li className="text-align: justify ">
              <h6 className="mt-2">User Persona Development :</h6>{" "}
              <p className="text-muted">
                We identified the target audience as individuals looking to buy
                or sell used cars, spanning both tech-savvy users and those with
                limited digital proficiency.
              </p>
            </li>
            <li>
              <h6 className="mt-2">Competitor Review :</h6>{" "}
              <p className="text-muted">
                We conducted a comprehensive analysis of existing car resale
                platforms to pinpoint common design patterns, pain points, and
                areas of improvement.
              </p>
            </li>
            <li>
              <h6 className="mt-2">User Journey Mapping:</h6>{" "}
              <p className="text-muted">
                By mapping out the user journey—from landing on the homepage to
                completing a purchase—we were able to identify key touchpoints
                and pain areas, allowing for a more seamless user experience.
              </p>
            </li>
          </ul>
        </p>
        <h5 className="mt-4">Design Approach:</h5>
        <p className="fw-normal mb-0  ">
          <ul>
            <li>
              <h6 className="mt-2">Simplicity :</h6>
              <p className="text-muted">
                The design aimed to be clean and minimalist, ensuring that users
                aren't overwhelmed by unnecessary elements.
              </p>
            </li>
            <li>
              <h6 className="mt-2">Consistency :</h6>{" "}
              <p className="text-muted">
                A uniform design language was maintained throughout the
                platform, covering typography, color schemes, icons, and
                buttons.
              </p>
            </li>
            <li>
              <h6 className="mt-2">User-Centered Focus :</h6>{" "}
              <p className="text-muted">
                Every design decision prioritized user needs, ensuring the
                interface was intuitive and easy to use.
              </p>
            </li>
            <li>
              <h6 className="mt-2">Mobile Responsiveness :</h6>{" "}
              <p className="text-muted">
                The platform was optimized for mobile, tablet, and desktop
                users, ensuring seamless experiences across all devices.
              </p>
            </li>
          </ul>
        </p>
        <h5 className="mt-4">Structuring Information :</h5>
        <p className="fw-normal mb-0  ">
          <ul>
            <li>
              <h6 className="mt-2">Homepage :</h6>
              <p className="text-muted text-start">
                A prominent search bar was placed at the forefront, enabling
                users to quickly search for vehicles. Additional sections
                showcased featured cars, popular listings, and easy-to-navigate
                menus.
              </p>
            </li>
            <li>
              <h6 className="mt-2">Car Listings :</h6>
              <p className="text-muted">
                Listings were organized with filters based on make, model,
                price, location, etc., supported by high-quality imagery and
                clear calls-to-action (CTAs).
              </p>
            </li>
            <li>
              <h6 className="mt-2">Car Details Page :</h6>
              <p className="text-muted">
                This page offered in-depth vehicle information, seller details,
                pricing, and an easy-to-use CTA for initiating purchases.
              </p>
            </li>
            <li>
              <h6 className="mt-2">User Accounts :</h6>{" "}
              <p className="text-muted">
                {" "}
                User profiles were designed to allow easy management of
                listings, inquiries, and account updates.
              </p>
            </li>
          </ul>
        </p>
        <h5 className="mt-4">Visual Design Elements :</h5>{" "}
        <p className=" fw-normal mb-0 ">
          <ul>
            <li>
              <h6 className="mt-2">Color Scheme :</h6>
              <p className="text-muted text-start">
                Automotive-inspired tones, such as metallic shades paired with
                neutral contrasts, were chosen to enhance visual appeal.
              </p>
            </li>
            <li>
              <h6 className="mt-2">Typography :</h6>
              <p className="text-muted">
                Modern, easy-to-read fonts were selected for both headings and
                body text, ensuring consistency with the platform's brand
                identity.
              </p>
            </li>
            <li>
              <h6 className="mt-2">Imagery :</h6>
              <p className="text-muted">
                High-resolution images from multiple angles were employed to
                accurately showcase vehicles and improve user engagement.
              </p>
            </li>
          </ul>
        </p>
        <h5 className="mt-4 text-muted">Enhancing User Experience (UX) :</h5>
        <p className=" fw-normal mb-0  text-start">
          <ul>
            <li>
              <h6 className="mt-2 text-muted">Search Bar :</h6>{" "}
              <p className="text-muted">
                A smart search bar with auto-suggestions and multiple filters
                helped users quickly find vehicles suited to their needs.{" "}
              </p>
            </li>
            <li>
              <h6 className="mt-2 text-muted">Advanced Filters & Sorting :</h6>
              <p className="text-muted">
                Users could refine their search results based on parameters like
                price, mileage, and year.
              </p>
            </li>
            <li>
              <h6 className="mt-2 text-muted">Intuitive Forms :</h6>
              <p className="text-muted">
                Listing forms were designed to be user-friendly, with clear
                input fields and validation to minimize errors.
              </p>
            </li>
            <li>
              <h6 className="mt-2 text-muted">Responsive Layout :</h6>
              <p className="text-muted">
                A fully responsive design was implemented to ensure an optimal
                user experience across different screen sizes and devices.
              </p>
            </li>
          </ul>
        </p>
        <h5 className="mt-4 text-muted">Prototype & User Testing :</h5>
        <p className=" fw-normal mb-0  ">
          <ul>
            <li>
              <h6 className="mt-2 text-muted">Wireframes :</h6>
              <p className="text-muted">
                Low-fidelity wireframes were developed to outline the layout and
                flow of the platform.
              </p>
            </li>
            <li>
              <h6 className="mt-2 text-muted">Interactive Prototype :</h6>
              <p className="text-muted">
                A clickable prototype was built using tools like Figma or Adobe
                XD, simulating user interactions and gathering initial feedback.
              </p>
            </li>
            <li>
              <h6 className="mt-2 text-muted">Usability Testing :</h6>
              <p className="text-muted">
                We conducted testing with real users to identify usability
                issues and gather actionable insights for refining the platform.
              </p>
            </li>
          </ul>
        </p>
        <h5>Conclusion</h5>
        <p className=" fw-normal mb-0 text-muted">
          <ul>
            <li className="text-align: justify ">
              Adopting a user-centric approach and leveraging modern UI/UX
              design principles has resulted in a highly engaging and intuitive
              automotive car resale platform.
            </li>
            <li className="text-align: justify ">
              The blend of a visually appealing interface, efficient search
              functionality, and user-friendly design has led to enhanced
              satisfaction, improved user engagement, and higher conversion
              rates.
            </li>
            <li className="text-align: justify ">
              Continuous monitoring and feedback will guide future iterations
              and improvements to the platform’s design.
            </li>
          </ul>
        </p>
      </section>
    ),
  },
  {
    id: 6,
    image: casestudy6,
    tag: "Automotive",
    title: "CRM Development in ASP.NET MVC",
    content: (
      <section className="ms-3">
        <h5> Project Overview</h5>
        <ul className="text-muted">
          <li className="text-align: justify mt-2">
            Title: Development of a Customer Relationship Management (CRM)
            System
          </li>
          <li className="text-align: justify mt-2">Duration: 8 months</li>
          <li className="text-align: justify mt-2">
            Team Size: 6 developers, 1 project manager, 1 QA engineer
          </li>
          <li className="text-align: justify mt-2">
            Technology Stack: ASP.NET MVC, C#, HTML, jQuery, CSS, Bootstrap, MS
            SQL Server
          </li>
        </ul>
        <h5>Objectives</h5>
        <p className=" fw-normal mb-0 ">
          The goal was to create a comprehensive CRM system that enables
          businesses to manage customer relationships effectively. Key
          objectives included:
          <ul>
            <li className="text-align: justify ">
              <h6 className="mt-2">Centralized Customer Data :</h6>
              <p className="text-muted">
                To store and manage customer interactions in one platform.
              </p>
            </li>
            <li className="text-align: justify ">
              <h6 className="mt-2">Sales Tracking and Management :</h6>{" "}
              <p className="text-muted">
                To provide tools for sales team tracking and management.{" "}
              </p>
            </li>
            <li className="text-align: justify ">
              <h6 className="mt-2">Reporting and Analytics :</h6>
              <p className="text-muted">
                To offer data analytics features for better decision-making.
              </p>
            </li>
            <li className="text-align: justify ">
              <h6 className="mt-2">Responsive User Interface :</h6>
              <p className="text-muted">
                To ensure an intuitive and mobile-friendly user experience{" "}
              </p>
            </li>
          </ul>
        </p>
        <h5 className="mt-4">Development Process :</h5>
        <p className=" fw-normal mb-0 ">
          <ul>
            <li>
              <h6 className="mt-2">Requirement Analysis :</h6>
              <p className="text-muted">
                Conducted stakeholder interviews to gather requirements.Created
                a detailed requirements document covering both functional and
                non-functional aspects.Developed use cases and user stories to
                guide development.
              </p>
            </li>
            <li>
              <h6 className="mt-2">System Architecture :</h6>
              <p className="text-muted">
                Chose ASP.NET MVC for a clear separation of concerns, allowing
                for modular development.Designed a relational database schema
                using MS SQL Server to store customer, sales, and user data.
              </p>
            </li>
            <li>
              <h6 className="mt-2">Database Design :</h6>
              <p className="text-muted">
                Developed normalized tables for customers, leads, interactions,
                and sales data.Implemented stored procedures for complex queries
                and transactions to optimize performance.
              </p>
            </li>
            <li>
              <h6 className="mt-2">Backend Development :</h6>
              <p className="text-muted">
                Utilized C# to create controllers for managing business logic
                and data flow.Integrated Entity Framework for ORM, enabling
                efficient data access and manipulation. Implemented
                authentication and authorization features using ASP.NET
                Identity.
              </p>
            </li>
            <li>
              <h6 className="mt-2">Frontend Development :</h6>{" "}
              <p className="text-muted">
                Developed a responsive user interface using Bootstrap, HTML, and
                CSS.Employed jQuery for dynamic content updates and AJAX calls
                to improve user experience.Created views for customer
                management, sales tracking, and reporting, ensuring intuitive
                navigation.
              </p>
            </li>

            <h6 className="mt-0">Feature Implementation :</h6>
            <ul className="text-muted">
              <li className="text-align: justify ">
                Customer Management : Developed features for adding, editing,
                and viewing customer details.
              </li>
              <li className="text-align: justify ">
                Contacts management : Created module for contacts management
                with adding, updating and deleting features.
              </li>
              <li className="text-align: justify ">
                E-mail management : Created email management module to manage
                email sending and receiving and display.
              </li>{" "}
              <li className="text-align: justify ">
                Sales Pipeline : Implemented functionality for tracking leads
                through different sales stages.
              </li>{" "}
              <li className="text-align: justify ">
                Reporting Module : Created dashboards with key metrics,
                leveraging charting libraries for visualization.
              </li>{" "}
              <li className="text-align: justify ">
                Search and Filter Options : Enabled robust search and filter
                capabilities across all modules.
              </li>
            </ul>
          </ul>
        </p>
        <h5 className="mt-4">Testing :</h5>
        <p className="text-muted fw-normal mb-0 text-start ">
          Conducted unit testing on individual components using MSTest.Performed
          integration testing to ensure seamless interactions between backend
          and frontend.Engaged users in UAT to gather feedback and validate
          features.
        </p>
        <h5 className="mt-4">Deployment :</h5>
        <p className="text-muted fw-normal mb-0 text-start ">
          Deployed the application on a local server for initial
          testing.Configured IIS for hosting the application and secured the
          database connection.Established a backup and recovery plan for the MS
          SQL Server database.
        </p>
        <h5 className="mt-4">Challenges Encountered :</h5>
        <p className=" fw-normal mb-0 ">
          <ul>
            <li>
              <h6 className="mt-2">Data Migration :</h6>
              <p className="text-muted">
                Migrating existing customer data from spreadsheets to the new
                system required careful validation and transformation.
              </p>
            </li>
            <li>
              <h6 className="mt-2">Performance Issues :</h6>{" "}
              <p className="text-muted">
                Initial load times were longer than expected; optimized queries
                and implemented caching strategies.
              </p>
            </li>
            <li>
              <h6 className="mt-2">User Training :</h6>{" "}
              <p className="text-muted">
                Resistance to change among users necessitated comprehensive
                training sessions and support documentation.
              </p>
            </li>
          </ul>
        </p>
        <h5>Results</h5>
        <p className="text-muted fw-normal mb-0 ">
          <ul>
            <li className="text-align: justify ">
              Successfully delivered the CRM system on schedule, enhancing
              customer data management by 50%.Increased sales tracking
              efficiency, leading to a 25% improvement in sales conversion
              rates.
            </li>
            <li className="text-align: justify ">
              Received positive user feedback regarding the interface and
              overall functionality, resulting in a smooth transition from
              legacy systems.
            </li>
          </ul>
        </p>
        <h5>Conclusion</h5>
        <p className="text-muted fw-normal mb-0 ">
          <ul>
            <li className="text-align: justify ">
              The development of the CRM system using ASP.NET MVC, C#, and
              modern web technologies proved to be a valuable experience.
            </li>
            <li className="text-align: justify ">
              By focusing on user requirements and employing best practices in
              software development, the project met its objectives and
              significantly improved business processes.
            </li>
            <li className="text-align: justify ">
              Future enhancements will include mobile app integration and
              advanced analytics features to further support user needs.
            </li>
          </ul>
        </p>
      </section>
    ),
  },
];
