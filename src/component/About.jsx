import React from 'react'
import { NavLink } from 'react-router-dom'
import about from "../images/about.png";

export default function About() {
  return (
    <div>
        <div className="container py-5 my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className='text-primary fw-bold mb-4'>About us</h1>
                    <p className="lea mb-4">
                        We appriciate your business
                    </p>
                    <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact us</NavLink>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={about} alt="aboutimage" height="500px" width="500px"/>
                </div>
            </div>
        </div>
    </div>
  )
}
