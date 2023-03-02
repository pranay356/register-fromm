import React from "react";
import FormGroup from "../../components/Form/formGroup";
import Button from "../../components/Button/button";
import "./login.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min (5, "username minimum 5 characters ")
        .max(20,"username maximum 20 characters ")
        .required('Required'),
      password: Yup.string().min(7, 'password must be 7 characters')
      .max(20,"password maximum 20 character").required('Required'),
       
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
 
  return (
    <div className="login">
      <h1>Login</h1>
    
        <form onSubmit={formik.handleSubmit}>
          <FormGroup
            label="username"
            type="text"
            id="username"
            value={formik.values.username}
            name="username"
            placeholder="Username"
            onChange={formik.handleChange}
            errors={formik.errors.username}
          />
         

          <FormGroup
            label="password"
            type="password"
            id="password"
            value={formik.values.Password}
            name="password"
            placeholder="password"
            onChange={formik.handleChange}
            errors={formik.errors.password}
          />
         

          <Button label="Login" />
        </form>
  
    </div>
  );
}

export default Login;