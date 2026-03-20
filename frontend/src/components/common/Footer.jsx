import React from 'react'

const Footer = () => {
  return (
    <div>      <footer className="py-3">
        <div className="container py-3">
          <div className="row">
            <div className="col-md-3">
              <h3>UrbanEdge Construction</h3>
              <div className="pe">
                <p>
                  Our post-construction services gives you peace of mind knowing
                  that we are still here for you even after.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <h3 className="mb-3">Our Services</h3>
              <ul>
                <li>
                  <a href="http://">Specialized Construction</a>
                </li>
                <li>
                  <a href="http://">Renovation</a>
                </li>
                <li>
                  <a href="http://">Customized Construction</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3 className="mb-3">Quick Links</h3>
              <ul>
                <li>
                  <a href="http://">About Us</a>
                </li>
                <li>
                  <a href="http://">Services</a>
                </li>
                <li>
                  <a href="http://">Projects</a>
                </li>
                <li>
                  <a href="http://">Blogs</a>
                </li>
                <li>
                  <a href="http://">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3 className="mb-3">Contact us</h3>
              <ul>
                <li>
                  <a href="http://">0300-0000000</a>
                </li>
                <li>
                  <a href="http://">info@urbanedge.com</a>
                </li>
                <p>
                  House #123, Street # 4,
                  <br /> City, Country
                </p>
              </ul>
            </div>
            <hr style={{ borderTop: "1px solid #ffffff", opacity: 0.3 }} />
            <div className="text-center mt-3">
              <p>&copy; 2024 UrbanEdge Construction. All rights reserved.</p>
              </div>
          </div>
        </div>
      </footer></div>
  )
}

export default Footer