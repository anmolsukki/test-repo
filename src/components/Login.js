import React, { useState } from "react";
import axios from "axios";

const Login = React.memo(props => {
    const [login, setLogin] = useState({ email: '', password: '', client_id: '', grant_type: "password"});

    const onChange = (event) => {
      setLogin({...login, [event.target.name]: event.target.value})
    }

    const onSubmit = (e) => {
      e.preventDefault()
      axios.get('http://199.192.19.247:4501', login)
      .then(res => {
        if(res.status === 200){
          props.history.push("/dashboard");
        }
      })
      .catch(err => {
        console.log("error", err);
      });
    }
    
    /*
     * Considering validations for a later practice due to time constraints
     */

    return (
        <div className="login">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>

              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    name="email"
                    value={login.email}
                    placeholder="Email Address"
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    name="password"
                    value={login.password}
                    placeholder="password"
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="client_id"
                    value={login.client_id}
                    placeholder="Client id"
                    onChange={onChange}
                  />
                </div>

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
});

export default Login;
