import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Sidebar from "../../common/Sidebar";
import { apiUrl, token } from "../../common/http";
import { Link } from "react-router-dom";


const Show = () => {
  const [services, setServices] = useState([]);
  const fetchServices = async () => {
    const res = await fetch(apiUrl + "services", {
      method: "get",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
    });
    const result = await res.json();
    setServices(result.data);
  };

  useEffect(() => {
    fetchServices()
  }, []);
  return (
    <>
      <Header />

      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              {/* Sidebar */}
              <Sidebar />
            </div>
            <div className="col-md-9">
              {/* Main Content */}
              <div className="card shadow border-0">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between">
                    <h4>Services</h4>
                    <Link to="/admin/services/create" className="btn btn-primary1">
                     Create
                    </Link>
                  </div>
                  <hr />

                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Slug</td>
                        <td>Status</td>
                        <td>Action</td>
                      </tr>
                    </thead>
                    <tbody>
                      {services &&
                        services.map((services) => {
                          return (
                            <tr key= {`service-${services.id}`}>
                              <td>{services.id}</td>
                              <td>{services.title}</td>
                              <td>{services.slug}</td>
                              <td>{
                              (services.status)==1 ? 'Active':'Block'}</td>
                              <td>
                                <a href="http://" className="btn btn-primary1 btn-sm">Edit</a>
                                <a href="http://" className="btn btn-secondary1 btn-sm ms-2">Delete</a>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Show;
