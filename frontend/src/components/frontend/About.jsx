import React from "react";
import Header from "../common/Header.jsx";
import Footer from "../common/Footer.jsx";
import AboutImg from "../../assets/images/about-us.jpg";
import AuthorImg from "../../assets/images/author-2.jpg";
import Hero from "../common/Hero.jsx";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <Hero preHeading="Quality, Integrity, Values" heading="About Us" text="We excel at transforming visions into reality through <br/> outstanding craftmanship and precisions"/>
        {/* section-2    %%%%%%%%%%%%%%%%%%% */}
        <section className="section-2 p-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6">
                <img src={AboutImg} alt="About Us" className="w-100" />
              </div>
              <div className="col-md-6">
                <span>About us</span>
                <h2>Crafting structures that last a lifetime</h2>
                <p>
                  Building enduring structures requires a comprehensive approach
                  that combines advanced materials, resilient design, routine
                  maintenance, and sustainable practices. By drawing on
                  historical insights and utilizing modern technology.
                </p>
                <p>
                  Designing structures that stand the test of time involves a
                  seamless blend of cutting-edge materials, durable design,
                  ongoing upkeep, and eco-friendly practices. By combining
                  lessons from the past with the power of modern technology.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
        <section className="section-8">
          <div className="container bg-light mb-3 p-5">
            <div className="section-header text-center">
              <span>Team</span>
              <h2>Our Team</h2>
              <p>
                Hear from our satisfied clients about their experiences working{" "}
                <br />
                with us and the quality of our construction services.
              </p>
            </div>
            <div className="row ">
              <div className="col-md-3">
                <div className="card border-0 shadow">
                  <div>
                    <img src={AuthorImg} alt="" className="w-100" />
                  </div>
                  <div className="card-body">
                    <h4>Member 1</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card border-0 shadow">
                  <div>
                    <img src={AuthorImg} alt="" className="w-100" />
                  </div>
                  <div className="card-body">
                    <h4>Member 2</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card border-0 shadow">
                  <div>
                    <img src={AuthorImg} alt="" className="w-100" />
                  </div>
                  <div className="card-body">
                    <h4>Member 3</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card border-0 shadow">
                  <div>
                    <img src={AuthorImg} alt="" className="w-100" />
                  </div>
                  <div className="card-body">
                    <h4>Member 3</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
