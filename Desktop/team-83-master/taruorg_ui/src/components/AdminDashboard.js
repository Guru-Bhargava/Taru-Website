import React from "react";
import { Link, Outlet } from "react-router-dom";
import image from "../images/hiiii.png";
function AdminDashboard() {
    return (
      <div>
        <div className="container-sm">
          <div className="row">
            <div className="col">
              <div className="card m-5 p-5 text-center">
                <img src={image} alt="" className="card-img-top" />
                <div className="card-title lead">Card-1</div>
                <Link
                  className="btn btn-success d-block mx-auto"
                  to="/approveOrder"
                >
                  Show details
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card m-5 p-5 text-center">
                <img src={image} alt="" className="card-img-top" />
                <div className="card-title lead">Card-1</div>
                <Link
                  className="btn btn-success d-block mx-auto"
                  to="/approveOrder"
                >
                  Show details
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card m-5 p-5 text-center">
                <img src={image} alt="" className="card-img-top" />
                <div className="card-title lead">Card-1</div>
                <Link
                  className="btn btn-success d-block mx-auto"
                  to="/approveOrder"
                >
                  Show details
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card m-5 p-5 text-center">
                <img src={image} alt="" className="card-img-top" />
                <div className="card-title lead">Card-1</div>
                <Link
                  className="btn btn-success d-block mx-auto"
                  to="/approveOrder"
                >
                  Show details
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card m-5 p-5 text-center">
                <img src={image} alt="" className="card-img-top" />
                <div className="card-title lead">Card-1</div>
                <Link
                  className="btn btn-success d-block mx-auto"
                  to="/approveOrder"
                >
                  Show details
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card m-5 p-5 text-center">
                <img src={image} alt="" className="card-img-top" />
                <div className="card-title lead">Card-1</div>
                <Link
                  className="btn btn-success d-block mx-auto"
                  to="/approveOrder"
                >
                  Show details
                </Link>
              </div>
            </div>
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    );
}

export default AdminDashboard;
