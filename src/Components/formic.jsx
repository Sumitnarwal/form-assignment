import { Formik, useFormik } from "formik";
import React from "react";
import { signpchema } from "../schemas";
import "../css/formik.css";
import axios from "axios";
import bcrypt from "bcryptjs";

const initialValues = {
  name: "",
  email: "",
  mobile: "",
  password: "",
  confirm_password: "",
};

const Register = () => {
  const {
    action,
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signpchema,
    onSubmit: (values, action) => {
      console.log(values);

      postData(values);
      action.resetForm();
    },
  });
  const postData = (values) => {
    const getMobile = values.mobile;
    const hasedMobile = bcrypt.hashSync(getMobile, 10);
    const GetPassord = values.password;
    const hashedPassword = bcrypt.hashSync(GetPassord, 10);

    axios({
      url: "http://localhost:8000/formData",
      method: "POST",
      data: {
        Name: values.name,
        Email: values.email,
        Mobile: hasedMobile,
        Password: hashedPassword,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error while post data");
      });
  };
  return (
    <div className="form_div1">
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="name" className="input-lable">
            Name
          </label>
          <br />
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
          <br />
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
            Mobile
          </label>
          <br />
          <input
            type="tel"
            maxLength={"10"}
            autoComplete="off"
            name="mobile"
            id="mobile"
            placeholder="Mobile"
            value={values.mobile}
            onChange={handleChange}
            onBlur={handleBlur}
          />{" "}
          {errors.mobile && touched.mobile ? (
            <p className="form-error">{errors.mobile}</p>
          ) : null}
          <br />
          <label htmlFor="name" className="input-lable">
            Password
          </label>
          <br />
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
          <br />
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
          <a href="/" className="alt_line">
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
