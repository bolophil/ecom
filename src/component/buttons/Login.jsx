import React from "react";

export default function Login() {
  return (
    <form className="container-sm px-4 p-5 mt-5">
      <div className="container px-4 ms-2 mb-5">
        <div className="row gx-3">
          <div className="col">
            <div className="btn btn-primary ">
              <span className="fa fa-google me-2 p-3"></span> Sign in with
              Google
            </div>
          </div>
          <div className="col">
            <div className="btn btn-primary ">
              <span className="fa fa-twitter me-2 p-3"></span> Sign in with
              Twitter
            </div>
          </div>
          <div className="col">
            <div className="col btn btn-primary">
              <span className="fa fa-facebook me-2 p-3"></span> Sign in with
              Facebook
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
            User Name
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" for="exampleCheck1">
          Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-outline-primary">
        Login
      </button>
    </form>
  );
}
