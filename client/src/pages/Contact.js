import React from "react";
import OuterLayout from "../components/layouts/OuterLayout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <OuterLayout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            {" "}
            <Link
              className="nav-link p-0 "
              to={"mailto:nirwalyogesh92@gmail.com"}
            >
              <BiMailSend />: www.help@ecommerceapp.com
            </Link>
          </p>
          <p className="mt-3">
            <Link className="nav-link p-0 " to={"tel:+91 7253017814"}>
              <BiPhoneCall />: 012-3456789
            </Link>
          </p>
          <p className="mt-3">
            {" "}
            <Link className="nav-link p-0 " to={"tel:+91 7253017814"}>
              <BiSupport /> : 1800-0000-0000 (toll free)
            </Link>
          </p>
        </div>
      </div>
    </OuterLayout>
  );
};

export default Contact;
