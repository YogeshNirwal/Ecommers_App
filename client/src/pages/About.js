import React from "react";
import OuterLayout from "../components/layouts/OuterLayout";

const About = () => {
  return (
    <OuterLayout title={"About Deepecom"}>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://www.trickyenough.com/wp-content/uploads/2020/11/Ecommerce-42e61b1a.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              About Deepecom
            </h1>
            <p className="lead">
              Welcome to Deepecom! We are your go-to online store for the latest
              in fashion, electronics, and home essentials, all at unbeatable
              prices. Our mission is to simplify and enhance your shopping
              experience with high-quality products, excellent customer service,
              and swift delivery. Founded in 2023, Deepecom started with a
              vision to revolutionize e-commerce. Today, we proudly serve a
              growing community of satisfied customers. We stand for integrity,
              quality, and sustainability, striving to be a leader in the global
              e-commerce market. Join us by following on social media,
              subscribing to our newsletter, and be part of the Deepecom family
              for exclusive updates and offers.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
                fdprocessedid="dv64pj"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
                fdprocessedid="cuoxj"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
    </OuterLayout>
  );
};

export default About;
