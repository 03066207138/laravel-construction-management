import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Sidebar from "../../components/common/Sidebar";

const Dashboard = () => {
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
                <div
                  className="card-body d-flex justify-content-center align-items-center "
                  style={{ height: "400px" }}
                >
                  <h3>Welcome to Admin Console</h3>
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

export default Dashboard;
