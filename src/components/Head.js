import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title} Squeak Cart</title>
    </Helmet>
  );
};

export default Head;
