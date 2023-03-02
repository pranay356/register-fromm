import React from "react";
import "./register.css";
import {useFormik} from 'formik';
import * as Yup from "yup";


import FormGroup from "../../components/Form/formGroup";
import Button from "../../components/Button/button";

function Register() {
  const formik = useFormik({
    initialValues: {
     username:"",
     firstName:"",
     lastName:"",
     gender:"",
     password:"",
     confirmPassword:"", 
    },
    validationSchema:Yup.object({
      username:Yup.string()
      .min(5,"minimum 5 character")
      .max(20,"maximum 20 character")
      .required("required"),
      firstName:Yup.string()
      .min(10,"minimum 10 character")
      .required("required"),
      lastName:Yup.string()
      .min(15,"minimum 15 character")
      .required("required"),
      gender:Yup.string()
      .required("required"),
      password:Yup.string()
      .min(7,"maximum 7 character")
      .required("required"),
      confirmPassword:Yup.string()
      .required("required")
      .oneOf([Yup.ref("password")],"password does not match")

    }),
    onSubmit:values =>{
      alert(JSON.stringify(values,null ,2))
    },
  });
 
  

  return (
    <div className="register">
      <h1>Register</h1>
      <form className="form" onSubmit={formik.handleSubmit}>
        <FormGroup
          label="Username"
          type="text"
          id="username"
          value={formik.values.username}
          name="username"
          placeholder="Username"
          onChange={formik.handleChange}
          errors={formik.errors.username}
        />

        <FormGroup
          label="First Name"
          type="text"
          id="firstName"
          value={formik.values.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={formik.handleChange}
          errors={ formik.errors.firstName}
        />

        <FormGroup
          label="Last Name"
          type="text"
          id="lastName"
          value={formik.values.lastName}
          name="lastName"
          placeholder="last Name"
          onChange={formik.handleChange}
          errors={formik.errors.lastName}
        />

        <div className="label">
          <label>Gender</label>
        </div>
        <div className="gender " onClick={formik.handleChange}>
          <input type="radio" name="gender" value="male" />
          Male
          <input type="radio" name="gender" value="female" />
          Female
        </div>
        {formik.errors.gender && <div style={{ color: "red" }}>{formik.errors.gender}</div>}

        <FormGroup
          label="Password"
          type="password"
          id="password"
          value={formik.values.password}
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          errors={formik.errors.password}
        />

        <FormGroup
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          value={formik.values.confirmPassword}
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={formik.handleChange}
          errors={formik.errors.confirmPassword}
        />

        <Button label="Register" />
      </form>
    </div>
  );
}

export default Register;
