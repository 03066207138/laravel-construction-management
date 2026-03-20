import React from "react";
import Header from "../common/Header.jsx";
import Footer from "../common/Footer.jsx";
import Hero from "../common/Hero.jsx";
import {default as NewServices} from "../common/Services.jsx";


const Services = () => {
  return (
    <>
     <Header />
      <main>
<Hero preHeading="Quality, Integrity, Values" heading="Our Services" text="We excel at transforming visions into reality through <br/> outstanding craftmanship and precisions"/>

    <NewServices />

    
    </main>
    <Footer />
    </>
  );
};

export default Services;
