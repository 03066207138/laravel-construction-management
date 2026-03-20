import React from 'react'
import Header from "../common/Header.jsx";
import Footer from "../common/Footer.jsx";
import Hero from "../common/Hero.jsx";
import {default as NewProjects} from "../common/Projects.jsx";

const Projects = () => {
  return (
    <>
         <Header />
      <main>
    <Hero preHeading="Quality, Integrity, Values" heading="Our Projects" text="We excel at transforming visions into reality through <br/> outstanding craftmanship and precisions"/>

    <NewProjects />

    
    </main>
    <Footer />
    </>
  )
}

export default Projects