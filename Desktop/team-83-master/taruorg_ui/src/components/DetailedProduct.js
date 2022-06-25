import React from 'react'
import { Outlet } from 'react-router-dom';
import image from "../images/hiiii.png";
function DetailedProduct() {
  return (
    <div>
      <div className="container-lg">
        <div className="row m-5">
          <div className="col-sm-4">
            <img src={image} alt="#" className="w-75 m-5" />
          </div>
          <div className="col-sm-8">
            <div className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              pariatur veritatis tempore facilis eligendi nulla neque eveniet
              excepturi molestiae ab quisquam facere quidem voluptates deserunt
              perferendis quia dolores modi animi, cum nobis nihil sequi?
              Repellat est magni molestiae earum explicabo iusto aspernatur
              dolores totam quos dolorum debitis temporibus consequatur, velit
              at voluptatem! Eaque quod, similique, assumenda ea impedit non
              repellendus sapiente qui quos harum velit odio eligendi error quia
              temporibus rerum! Consequuntur fuga aliquam excepturi aperiam
              repellat deserunt illum impedit eligendi quidem, ab sint
              repellendus explicabo natus, ad a officiis blanditiis vel.
              Blanditiis recusandae laudantium quo quae? Sit, aliquid
              architecto?
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-sm-4">
            <div className="bold display-5 border border-5 rounded bg-light margin margin-lg">$2000</div>
          </div>
          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-6">
                <button className='btn btn-primary'>Approve</button>
              </div>
              <div className="col-sm-6">
                <button className='btn btn-warning'>Reject</button>
              </div>
            </div>
          </div>
          <div>
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedProduct
