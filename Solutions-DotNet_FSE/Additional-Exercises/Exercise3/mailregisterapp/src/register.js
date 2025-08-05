// src/register.js
import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      errors: {
        name: '',
        email: '',
        password: ''
      }
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    const errors = { ...this.state.errors };

    switch (name) {
      case 'name':
        errors.name = value.length < 5 ? 'Full Name must be 5 characters long!' : '';
        break;
      case 'email':
        errors.email = (!value.includes('@') || !value.includes('.')) ? 'Email is not valid!' : '';
        break;
      case 'password':
        errors.password = value.length < 8 ? 'Password must be 5 characters long!' : '';
        break;
      default:
        break;
    }

    this.setState({ [name]: value, errors });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, errors } = this.state;

    let valid = true;

    if (name.length < 5) {
      errors.name = 'Full Name must be 5 characters long!';
      valid = false;
      alert(errors.name);
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      errors.email = 'Email is not valid!';
      valid = false;
      alert(errors.email);
      return;
    }
    if (password.length < 8) {
      errors.password = 'Password must be 8 characters long!';
      valid = false;
      alert(errors.password);
      return;
    }

    if (valid) {
      alert('Registration Successful!');
    }
  };

  render() {
    const { name, email, password, errors } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1 style={{ color: "red", fontWeight: "bold" }}>
          Register Here!!!
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            Email:
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;