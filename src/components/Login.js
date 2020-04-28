import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  // Defining states
  state = {
    email: "",
    password: "",
    client_id: ""
  };

  onChange = e => {
    // updating states
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.email,
      password: this.state.password,
      client_id: this.state.client_id,
      grant_type: "password"
    };
    // Request to the api
    axios
      .get("http://199.192.19.247:4501", user)
      .then(res => {
        console.log(res.data);
        this.props.history.push("dashboard");
      })
      .catch(err => {
        console.log("error", err);
      });
  };

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>

              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    name="email"
                    value={this.state.email}
                    placeholder="Email Address"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    name="password"
                    value={this.state.password}
                    placeholder="password"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="client_id"
                    value={this.state.client_id}
                    placeholder="Client id"
                    onChange={this.onChange}
                  />
                </div>

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
