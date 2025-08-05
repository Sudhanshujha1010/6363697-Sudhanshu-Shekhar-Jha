import React from "react";

class ComplaintRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ename: "",
      complaint: "",
      NumberHolder: Math.floor(Math.random() * 100) + 1,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let msg =
      "Thanks " +
      this.state.ename +
      "\nYour Complaint was Submitted.\nTransaction ID is: " +
      this.state.NumberHolder;
    alert(msg);

  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1 style={{ color: "red", fontWeight: "bold" }}>
          Register your complaints here!!!
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name:&nbsp;
              <input
                type="text"
                name="ename"
                value={this.state.ename}
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              Complaint:&nbsp;
              <textarea
                name="complaint"
                value={this.state.complaint}
                onChange={this.handleChange}
                required
                rows="2"
                cols="25"
              />
            </label>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ComplaintRegister;