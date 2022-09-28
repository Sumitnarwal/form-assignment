import { Formik, useFormik } from "formik";
import React from "react";
import { signpchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Register = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signpchema,
      onSubmit: (values) => {
        console.log(values);
        action.resetForm();
      },
      
    });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="name" className="input-lable">
            Name
          </label>
          <input
            type={"name"}
            autoComplete="off"
            name="name"
            id="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />{" "}
          {errors.name && touched.name ? (
            <p className="form-error">{errors.name}</p>
          ) : null}
          <br />
          <label htmlFor="name" className="input-lable">
            Email
          </label>
          <input
            type={"email"}
            autoComplete="off"
            name="email"
            id="email"
            placeholder="Email Address"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
          <br />
          <label htmlFor="name" className="input-lable">
            Password
          </label>
          <input
            type={"password"}
            autoComplete="off"
            name="password"
            id="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
          <br />
          <label htmlFor="name" className="input-lable">
            Conform-Password
          </label>
          <input
            type={"password"}
            autoComplete="off"
            name="confirm_password"
            id="confirm_password"
            placeholder="confirm_password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p className="form-error">{errors.confirm_password}</p>
          ) : null}
        </div>
        <div className="model-buttons">
          <a href="#" className="">
            Want to rigister using Gmail
          </a>
          <br />
          <button className="input-button" type="submit">
            Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
