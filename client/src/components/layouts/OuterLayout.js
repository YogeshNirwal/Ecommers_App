import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
function OuterLayout({
  children,
  title = "DEEPECOM APP",
  description = "deep ecommers wabshite ",
  keywords = "ecommers,laptop,mobile,shoping matrial",
  author = "Yogesh Nirwal",
}) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <Toaster />
      <main style={{ minHeight: "54vh" }}>{children}</main>
      <Footer />
    </>
  );
}

// OuterLayout.defaultProps = {
//   title: "DEEPECOM APP",
//   description: "deep ecommers wabshite ",
//   keywords: "ecommers,laptop,mobile,shoping matrial",
//   author: "Yogesh Nirwal",
// };

export default OuterLayout;
