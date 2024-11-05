import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ceLogo from "../../assets/images/ce-logo.png";
import { IoIosArrowDown } from "../../assets/icons/vander";

export default function NavbarTwo({ navClass, manuClass, navDark }) {
  // const [scroll, setScroll] = useState(false);
  const [isMenu, setisMenu] = useState(false);

  useEffect(() => {
    activateMenu();
    window.addEventListener("scroll", () => {
      // setScroll(window.scrollY > 50);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });

    // const handleClickOutside =()=>{
    //     setSearchBox(false)
    // }
    // document.addEventListener("mousedown", handleClickOutside);
  }, []);

  var mybutton = document.getElementById("back-to-top");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (mybutton != null) {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  }

  // Toggle menu
  const toggleMenu = () => {
    setisMenu(!isMenu);
    if (document.getElementById("navigation")) {
      const anchorArray = Array.from(
        document.getElementById("navigation").getElementsByTagName("a")
      );
      anchorArray.forEach((element) => {
        element.addEventListener("click", (elem) => {
          const target = elem.target.getAttribute("href");
          if (target !== "") {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle("open");
            }
          }
        });
      });
    }
  };

  //Menu Active
  function getClosest(elem, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(
              s
            ),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  }

  function activateMenu() {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");

        var immediateParent = getClosest(matchingMenuItem, "li");

        if (immediateParent) {
          immediateParent.classList.add("active");
        }

        var parent = getClosest(immediateParent, ".child-menu-item");
        if (parent) {
          parent.classList.add("active");
        }

        var parent = getClosest(parent || immediateParent, ".parent-menu-item");

        if (parent) {
          parent.classList.add("active");

          var parentMenuitem = parent.querySelector(".menu-item");
          if (parentMenuitem) {
            parentMenuitem.classList.add("active");
          }

          var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        } else {
          var parentOfParent = getClosest(
            matchingMenuItem,
            ".parent-parent-menu-item"
          );
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        }
      }
    }
  }

  // Clickable Menu
  if (document.getElementById("navigation")) {
    var elements = document
      .getElementById("navigation")
      .getElementsByTagName("a");
    for (var i = 0, len = elements.length; i < len; i++) {
      elements[i].onclick = function (elem) {
        if (elem.target.getAttribute("href") === "#") {
          var submenu = elem.target.nextElementSibling.nextElementSibling;
          submenu.classList.toggle("open");
        }
      };
    }
  }
  return (
    <>
      <header id="topnav" className={`nav-sticky ${navClass}`}>
        <div className="container">
          {navDark === true ? (
            <Link className="logo w-25" to="/">
              <img src={ceLogo} className="logo-light-mode w-75" alt="" />
              <img src={ceLogo} className="logo-dark-mode w-75" alt="" />
            </Link>
          ) : (
            <Link className="logo w-25" to="/">
              <span className="logo-light-mode">
                <img src={ceLogo} className="l-dark w-75" alt="" />
                <img src={ceLogo} className="l-light w-75" alt="" />
              </span>
              <img src={ceLogo} className="logo-dark-mode w-75" alt="" />
            </Link>
          )}
          <div className="menu-extras">
            <div className="menu-item">
              <Link
                to="#"
                className={`navbar-toggle ${isMenu ? "open" : ""}`}
                id="isToggle"
                onClick={() => toggleMenu()}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>

          <div id="navigation" style={{ display: isMenu ? "block" : "none" }}>
            <ul className={manuClass}>
              <li className="has-submenu parent-parent-menu-item">
                <Link to="#">
                  Services <IoIosArrowDown className="d-none d-md-inline" />
                </Link>
                <span className="menu-arrow"></span>
                <ul className="submenu megamenu">
                  <li>
                    <ul>
                      <li className="text-decoration-underline">
                        <Link to="#" className="megamenu-head">
                          Adopt Cloud
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/build-cloud-foundation"
                          className="sub-menu-item"
                        >
                          Build Cloud Foundation
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/cloud-migration"
                          className="sub-menu-item"
                        >
                          Cloud Migration
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/kubernetes-adoption"
                          className="sub-menu-item"
                        >
                          Kubernetes Adoption
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li className="text-decoration-underline">
                        <Link to="#" className="megamenu-head">
                          Build in Cloud
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/product-development"
                          className="sub-menu-item"
                        >
                          Product Development
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/devOps" className="sub-menu-item">
                          DevOps
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/testing-automation"
                          className="sub-menu-item"
                        >
                          Testing Automation
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li className="text-decoration-underline">
                        <Link
                          // to="/services/operate-in-cloud"
                          className="megamenu-head"
                        >
                          Operate in Cloud
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/manage-observability"
                          className="sub-menu-item"
                        >
                          Manage Observability
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/observability-engineering"
                          className="sub-menu-item"
                        >
                          Observability Engineering
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/cloud-operations"
                          className="sub-menu-item"
                        >
                          Cloud Operations
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <Link to="#">
                  Solutions <IoIosArrowDown className="d-none d-md-inline" />
                </Link>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li>
                    <ul>
                      <li>
                        <Link to="/solutions/AI-ML" className="sub-menu-item">
                          AI/ML
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/solutions/test-automation-framework"
                          className="sub-menu-item"
                        >
                          Test Automation Framework
                        </Link>
                      </li>
                      {/*<li>
                        <Link
                          to="/solutions/product-demo-videos"
                          className="sub-menu-item"
                        >
                          Product Demo Videos
                        </Link>
                      </li>*/}
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <Link to="#">
                  Insights <IoIosArrowDown className="d-none d-md-inline" />
                </Link>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li>
                    <ul>
                      <li>
                        <Link to="/case-studies" className="sub-menu-item">
                          Case Study
                        </Link>
                      </li>
                      <li>
                        <Link to="/comingsoon" className="sub-menu-item">
                          Press Release
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/blogs" className="sub-menu-item">
                  Blogs
                </Link>
              </li>

              <li>
                <Link to="/aboutus" className="sub-menu-item">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/contactus" className="sub-menu-item">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
