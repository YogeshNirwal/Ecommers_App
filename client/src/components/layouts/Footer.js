import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="footre text-bg-dark">
        <div className="container py-2">
          <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
            <div className="col mb-3">
              <div className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                <img
                  src="./images/Elogo.jpg"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </div>
              <p className="">© 2024</p>
            </div>
            <div className="col mb-3"></div>
            <div className="col mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/" className="text-white  nav-link p-0 ">
                    Home
                  </Link>
                </li>

                <li className="nav-item mb-2">
                  <Link to="/policy" className="nav-link p-0 text-white">
                    Policy
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/contact" className="nav-link p-0 text-white">
                    Contact
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/about" className="nav-link p-0 text-white">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-white">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-white">
                    Features
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-white">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-white">
                    FAQs
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-white">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-white">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-white">
                    contact
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-white">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-white">
                    FAQs
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-white">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Footer;
