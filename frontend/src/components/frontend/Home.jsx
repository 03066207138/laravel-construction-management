import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AboutImg from "../../assets/images/about-us.jpg";
import { default as NewAbout } from "../common/About.jsx";
import ServiceImg from "../../assets/images/construction1.jpg";
import ServiceImg1 from "../../assets/images/construction2.jpg";
import ServiceImg2 from "../../assets/images/construction3.jpg";
import ServiceImg3 from "../../assets/images/construction4.jpg";
import BlogImg from "../../assets/images/construction5.jpg";
import Header from "../common/Header.jsx";
import Footer from "../common/Footer.jsx";
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import AvtarImg from "../../assets/images/author-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Services from "../common/Services.jsx";
import Projects from "../common/Projects.jsx";
import { apiUrl, token } from "../common/http";
import { LatestServices } from "../common/LatestServices.jsx";

const Home = () => {
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
    <>
      <Header />
      {/* main section%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}

      <main>
        {/* section-1     %%%%%%%%%%%%%%%%%%% */}
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome Amazing Constructions</span>
                <h1>
                  Crafting Dreams with <br />
                  Precision and Excellence...
                </h1>
                <p>
                  We excel at transforming visions into reality through
                  outstanding craftmanship and precisions
                </p>
                <div className="mt-4">
                  <a className="btn btn-primary large">Contact Now</a>
                  <a className="btn btn-secondary ms-2 large">View Projects</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section-2    %%%%%%%%%%%%%%%%%%% */}
        <NewAbout />
        {/* Section 3 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
        <LatestServices />

        {/* Section 4 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
        <section className="section-4 p-5">
          <div className="container">
            <div className="section-header text-center">
              <span>Why Choose Us</span>
              <h2>Discover our wide variety of projects.</h2>
              <p>
                Created in close partnership with our clients and collaborators,
                this approach merges industry expertise, <br /> decades of
                experience, innovation, and flexibility to consistently deliver
                excellence.
              </p>

              <div className="container">
                <div className="row mt-5">
                  <div className="col-md-4">
                    <div className="card shadow border-0 p-4">
                      <div className="card-icon">
                        <img src={Icon1} alt="" />
                      </div>
                      <div className="card-title">
                        <h3>Experienced Team</h3>
                      </div>
                      <div>
                        <p>
                          Our team of skilled professionals brings years of
                          experience to every project, ensuring quality and
                          reliability.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card shadow border-0 p-4">
                      <div className="card-icon">
                        <img src={Icon2} alt="" />
                      </div>
                      <div className="card-title">
                        <h3>Cutting Edge Technology</h3>
                      </div>
                      <div>
                        <p>
                          Our team of skilled professionals brings years of
                          experience to every project, ensuring quality and
                          reliability.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card shadow border-0 p-4">
                      <div className="card-icon">
                        <img src={Icon3} alt="" />
                      </div>
                      <div className="card-title">
                        <h3>Experienced Team</h3>
                      </div>
                      <div>
                        <p>
                          Our team of skilled professionals brings years of
                          experience to every project, ensuring quality and
                          reliability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
        <Projects />
        {/* section 6%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
        <section className="section-5 py-3 mb-3">
          <div className="container">
            <div className="section-header text-center">
              <span>Testimonial</span>
              <h2>What Our Clients Say</h2>
              <p>
                Hear from our satisfied clients about their experiences working{" "}
                <br />
                with us and the quality of our construction services.
              </p>
            </div>

            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              grabCursor={true}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-4">
                    <div className="rating d-flex gap-1 text-warning">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="content mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis quidem voluptates ullam, ipsum, non qui repudiandae
                      sit ut modi velit, libero culpa vel corporis neque atque
                      quasi magnam. Tempore, iusto.
                    </div>
                    <hr />
                    <div className="d-flex meta">
                      <div>
                        <img src={AvtarImg} alt="" width={50} />
                      </div>
                      <div>
                        <div className="ps-3">John Doe</div>
                        <div className="name ps-3">CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-4">
                    <div className="rating d-flex gap-1 text-warning">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="content mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis quidem voluptates ullam, ipsum, non qui repudiandae
                      sit ut modi velit, libero culpa vel corporis neque atque
                      quasi magnam. Tempore, iusto.
                    </div>
                    <hr />
                    <div className="d-flex meta">
                      <div>
                        <img src={AvtarImg} alt="" width={50} />
                      </div>
                      <div>
                        <div className="ps-3">John Doe</div>
                        <div className="name ps-3">CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-4">
                    <div className="rating d-flex gap-1 text-warning">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="content mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis quidem voluptates ullam, ipsum, non qui repudiandae
                      sit ut modi velit, libero culpa vel corporis neque atque
                      quasi magnam. Tempore, iusto.
                    </div>
                    <hr />
                    <div className="d-flex meta">
                      <div>
                        <img src={AvtarImg} alt="" width={50} />
                      </div>
                      <div>
                        <div className="ps-3">John Doe</div>
                        <div className="name ps-3">CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-4">
                    <div className="rating d-flex gap-1 text-warning">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="content mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis quidem voluptates ullam, ipsum, non qui repudiandae
                      sit ut modi velit, libero culpa vel corporis neque atque
                      quasi magnam. Tempore, iusto.
                    </div>
                    <hr />
                    <div className="d-flex meta">
                      <div>
                        <img src={AvtarImg} alt="" width={50} />
                      </div>
                      <div>
                        <div className="ps-3">John Doe</div>
                        <div className="name ps-3">CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-4">
                    <div className="rating d-flex gap-1 text-warning">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L6.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="content mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis quidem voluptates ullam, ipsum, non qui repudiandae
                      sit ut modi velit, libero culpa vel corporis neque atque
                      quasi magnam. Tempore, iusto.
                    </div>
                    <hr />
                    <div className="d-flex meta">
                      <div>
                        <img src={AvtarImg} alt="" width={50} />
                      </div>
                      <div>
                        <div className="ps-3">John Doe</div>
                        <div className="name ps-3">CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* section 6 %%%%%%%%%%%%%%%%%%%%%%%%%% */}

        <section className="section-6">
          <div className="container bg-light p-5 mb-4">
            <div className="section-header text-center">
              <span>Blog & News</span>
              <h2>Latest Updates</h2>
              <p>
                Hear from our satisfied clients about their experiences working{" "}
                <br />
                with us and the quality of our construction services.
              </p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card border-0 shadow">
                  <div>
                    <img src={BlogImg} alt="" className="w-100" />
                  </div>
                  <div className="card-body p-4">
                    <h4>Blog Title One</h4>
                    <a href="http://" className="btn btn-primary1">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow">
                  <div>
                    <img src={BlogImg} alt="" className="w-100" />
                  </div>
                  <div className="card-body p-4">
                    <h4>Blog Title One</h4>
                    <a href="http://" className="btn btn-primary1">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow">
                  <div>
                    <img src={BlogImg} alt="" className="w-100" />
                  </div>
                  <div className="card-body p-4">
                    <h4>Blog Title One</h4>
                    <a href="http://" className="btn btn-primary1">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* footer section%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
      <Footer />
    </>
  );
};

export default Home;
