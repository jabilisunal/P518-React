import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1>Here is About Page</h1>
    </div>
  );
};

export default About;
