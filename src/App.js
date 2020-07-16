import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Bootstrap.css";

function App() {
  return (
    <div className="App">
      <div class="container shadow-lg py-3 mt-5">
        <div class="row">
          <div class="col text-center h1">Form Login</div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="h3 text-left">Welcome Back</div>
            <form>
              <div class="form-group text-left">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" class="form-text text-muted">
                  <a href="">Forgot Password</a>
                </small>
              </div>
              <div class="form-group text-left">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" class="btn btn-success">
                Submit
              </button>
            </form>
          </div>
          <div class="col-4 bg-primary text-white p-3">
            <div class="h3">Some Heading</div>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              dolore totam optio asperiores tenetur, perferendis rem unde,
              reiciendis voluptatibus dolorem aliquid! Eius doloribus
              accusantium, assumenda nesciunt facere laborum nulla! In.\
            </div>
            <button type="submit" class="btn btn-outline-light mt-3 mx-4">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
