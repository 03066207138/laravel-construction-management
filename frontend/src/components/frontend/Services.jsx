import React, { useState, useEffect } from "react";
import { apiUrl, fileUrl } from "../common/http";
import Header from "../common/Header.jsx";
import Hero from "../common/Hero.jsx";
import Footer from "../common/Footer.jsx";
import {default as NewServices} from "../common/Services.jsx";


const Services = () => {
  const [services, setServices] = useState([]);
    const fetchAllServices = async () => {
      const res = await fetch(apiUrl + "get-services", {
        method: "get",
      });
      const result = await res.json();
      console.log(result);
      setServices(result.data);
    };
    useEffect(() => {
      fetchAllServices();
    }, []);

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
