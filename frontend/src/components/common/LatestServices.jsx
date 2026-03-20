import React, { useState, useEffect } from "react";
import { apiUrl, fileUrl } from "./http";
import ServiceImg from "../../assets/images/construction1.jpg";

export const LatestServices = () => {
  const [services, setServices] = useState([]);
  const fetchLatestServices = async () => {
    const res = await fetch(apiUrl + "get-latest-services?limit=4", {
      method: "get",
    });
    const result = await res.json();
    console.log(result);
    setServices(result.data);
  };
  useEffect(() => {
    fetchLatestServices();
  }, []);

  return (
    <section className="section-3 bg-light p-5 mb-4">
      <div className="container-fluid">
        <div className="section-header text-center">
          <span>Services we Deliver</span>
          <h2>Our Services</h2>
          <p>
            Providing top-quality construction services with a commitment to
            <br />
            excellence and customer satisfaction.
          </p>
        </div>
        <div className="container my-5">
          <div className="row">
            {services &&
              services.map((services) => {
                return (
                  <div className="col-md-3 col-lg-3" key={services.id}>
                    <div className="item">
                      <div className="service-image">
                        <img
                          src={`${fileUrl}uploads/services/${services.image}`}
                          className="w-100"
                        />
                      </div>
                      <div className="service-body">
                        <div className="service-title">
                          <h3>{services.title}</h3>
                        </div>
                        <div className="service-content">
                          <p>{services.short_desc}</p>
                          <a href="" className="btn btn-primary">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};
