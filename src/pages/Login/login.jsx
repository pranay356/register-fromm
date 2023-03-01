import React from "react";
import { useState } from "react";
import FormGroup from "../../components/Form/formGroup"
import Button from "../../components/Button/button";
import "./login.css";

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
  };
  const Validation = (values) => {
    let errors = {};
    if (!values.username) {
      errors.username = "please enter a username";
    } else if (values.username.length < 5) {
      errors.username = "username must be at least 5 characters";
    } else if (values.username.length >= 5) {
      errors.username = "great";
    }

    if (!values.password) {
      errors.password = "please enter a password";
    } else if (values.username.length < 9) {
      errors.password = "password must be at least 9 characters";
    } else if (values.password.length >= 9) {
      errors.password = "great";
    }
    return errors;
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup
          label="username"
          type="text"
          id="username"
          value={values.username}
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />

       
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

        <FormGroup
          label="password"
          type="password"
          id="password"
          value={values.Password}
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <Button label="Login"/>
      </form>
    </div>
  );
}

export default Login;
