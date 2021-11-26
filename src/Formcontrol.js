import React, { Component } from "react";
import ReactPhoneInput from "react-phone-input-2"
import './Form.css'

class App extends Component {
  state = {
    fullName: "",
    email: "",
    businesstype: "",
    phonenumber: "",
    businesstype: "",
    password: "",
    radio1: "male",
    check1: false,
  };

  onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onRadioChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onCheckChange = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };

  onHandleDropdownChange = (e) => {
    this.setState({
      state: e.target.value,
    });
  };
  onHandleSubmit = (e) => {
    e.preventDefault();
    const data = {
      fullName: this.state.fullName,
      email: this.state.email,
      businesstype: this.state.businesstype,
      businessname: this.state.businessname,
      mobilenumber: this.state.mobilenumber,
      password: this.state.password,
      businesslocation: this.state.businesslocation,
      radio1: this.state.radio1,
      check1: this.state.check1,
    };
    console.log(data);
  };
  render() {
    return (
      <>
       <div class="split right">
                    <div class="centered">
        <div className="my-4">
          <h4 className="text-center">Start your <strong>14-days trail</strong></h4>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-10 ">
              <form className="needs-validation" onSubmit={this.onHandleSubmit}>
                <div className="form-row my-4">
                  <div className="form-group col-md-10">

                    <input

                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Enter full name"
                      name="fullName"
                      onChange={this.onHandleChange}
                      value={this.state.fullName}
                      required

                    />


                  </div>
                </div>
                <div className="form-group ">

                  <input
                    type="string"
                    className="form-control"
                    placeholder="Enter email"
                    id="name"
                    name="email"
                    onChange={this.onHandleChange}
                    value={this.state.email}
                  />
                </div>
                <div className="form-group my-5">
                  <input
                    type="businesstype"
                    className="form-control"
                    placeholder="Business Type"
                    name="businesstype"
                    onChange={this.onHandleChange}
                    value={this.state.businesstype}
                  />
                </div>
                <div className="form-group my-5">
                  <ReactPhoneInput
                  />
                </div>
                <div className="form-group my-5">
                  <input
                    type="businessname"
                    className="form-control"
                    placeholder="Business Name"
                    name="businessname"
                    onChange={this.onHandleChange}
                    value={this.state.businessname}
                  />
                </div>
                <div className="form-group my-5">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={this.onHandleChange}
                    value={this.state.password}
                  />
                </div>
                <div className="form-group my-5">
                  <input
                    type="businesslocation"
                    className="form-control"
                    placeholder="Business Location"
                    name="businesslocation"
                    onChange={this.onHandleChange}
                    value={this.state.businesslocation}
                  />
                </div>

                <div className="form-group">
                  <br />
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="check1"
                      checked={this.state.check1}
                      onChange={this.onCheckChange}
                    />
                    <label className="form-check-label">I Agree to all statements include <a href="http://">Term & Condition</a></label>
                  </div>
                </div>
                <div class="d-grid gap-2">
                  <button class="btn btn-primary" type="button">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
        </div>
      </>
    );
  }
}
export default App;
