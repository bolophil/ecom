import React from "react";
import background from "../images/background.png";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src={background} className="card-img" alt="Background" height="800px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container position-absolute top-0 start-0">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW ARRIVALS</h5>
                <NavLink to="/products" type="button" className="btn btn-lg btn-success ms-2">
                  SHOP NOW
                </NavLink> 
          </div>
        </div>
      </div>
    </div>
  );
}
