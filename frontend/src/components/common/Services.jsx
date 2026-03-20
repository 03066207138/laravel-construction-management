import React from 'react'
import ServiceImg from "../../assets/images/construction1.jpg";
import ServiceImg1 from "../../assets/images/construction2.jpg";
import ServiceImg2 from "../../assets/images/construction3.jpg";
import ServiceImg3 from "../../assets/images/construction4.jpg";

const Services = () => {
  return (
            <section className="section-3 bg-light p-5 mb-4">
              <div className="container-fluid">
                <div className="section-header text-center">
                  <span>Services we Deliver</span>
                  <h2>Our Services</h2>
                  <p>
                    Providing top-quality construction services with a commitment to<br/>
                    excellence and customer satisfaction.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-3 col-lg-3">
                    <div className="item">
                      <div className="service-image">
                        <img src={ServiceImg} alt="" className="w-100" />
                      </div>
                      <div className="service-body">
                        <div className="service-title">
                          <h3>Construction Service</h3>
                        </div>
                        <div className="service-content">
                          <p>
                            Specialty construction services tailored to meet unique
                            project requirements and industry standards.
                          </p>
                          <a href="" className="btn btn-primary">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-3">
                    <div className="item">
                      <div className="service-image">
                        <img src={ServiceImg1} alt="" className="w-100" />
                      </div>
                      <div className="service-body">
                        <div className="service-title">
                          <h3>Renovation</h3>
                        </div>
                        <div className="service-content">
                          <p>
                            Specialty construction services tailored to meet unique
                            project requirements and industry standards.
                          </p>
                          <a href="" className="btn btn-primary">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-3">
                    <div className="item">
                      <div className="service-image">
                        <img src={ServiceImg2} alt="" className="w-100" />
                      </div>
                      <div className="service-body">
                        <div className="service-title">
                          <h3>Construction</h3>
                        </div>
                        <div className="service-content">
                          <p>
                            Specialty construction services tailored to meet unique
                            project requirements and industry standards.
                          </p>
                          <a href="" className="btn btn-primary">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-3">
                    <div className="item">
                      <div className="service-image">
                        <img src={ServiceImg3} alt="" className="w-100" />
                      </div>
                      <div className="service-body">
                        <div className="service-title">
                          <h3>Custom</h3>
                        </div>
                        <div className="service-content">
                          <p>
                            Specialty construction services tailored to meet unique
                            project requirements and industry standards.
                          </p>
                          <a href="" className="btn btn-primary">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  )
}

export default Services