import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import image1 from '../images/Unknown-1.jpeg';
import image2 from '../images/Unknown.jpeg';
function AdminDash1() {
  return (
    <div>
      <div className="container m-5">
        <div className="row">
          <div className="col-sm-3">
            <div className="card text-center shadow shadow-lg">
              <div className="card-title h5 m-2">Unapproved orders</div>
              <div className="card-text">
                There are 120 orders to be approved
              </div>
              <Link
                className="btn btn-success d-block mx-auto m-2 "
                to="PendingApprovals"
              >
                Start Approving
              </Link>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card text-center shadow shadow-lg">
              <div className="card-title h5 m-2">Pending orders</div>
              <div className="card-text">
                There are 120 orders to be delivered yet
              </div>
              <div className="btn btn-success d-block mx-auto m-2">
                Check detailed status
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card text-center shadow shadow-lg">
              <div className="card-title h5 m-2">Returns </div>
              <div className="card-text">
                There are 12 return requests pending
              </div>
              <div className="btn btn-success d-block mx-auto m-2">
                View details
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card text-center shadow shadow-lg bg-light">
              <div className="card-title h5 m-2">Customer Feedback</div>
              <div className="card-text">There are 12 unread feedbacks</div>
              <div className="btn btn-success d-block mx-auto m-2">
                View Feedbacks
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 p-4">
          <div className="col-sm-6">
            <img
              src={image1}
              alt=""
              className="rounded w-100 shadow shadow-lg"
              style={{ height: "300px" }}
            />
          </div>
          <div className="col-sm-6">
            <img
              src={image2}
              alt=""
              className="rounded w-100 shadow shadow-lg"
              style={{ height: "300px" }}
            />
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDash1
