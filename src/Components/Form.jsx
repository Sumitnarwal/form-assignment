import React, { useState } from "react";
import "../css/form.css";
import axios from "axios";
import { useEffect } from "react";
const Form = () => {
  const [mobilevel, setMobileVali] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
   
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const handeSubmit = (e) => {
      e.preventDefault();
      console.log("btn clicked")
    // if (
    //   formData.mobile.length == 10 &&
    //   formData.name != "" &&
    //   formData.email !== ""
    // ) {
    //   setMobileVali(true);
    //   console.log(mobilevel);
    //   postData();
    //   setMobileVali(false);
    // }
    console.log("data", formData);

  };
  const postData = () => {
    axios({
      url: "http://localhost:8000/formData",
      method: "POST",
      data: {
        name: formData.name,
        Mobile: formData.mobile,
        Email: formData.email,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error while post data");
      });
  };
  if (
    formData.mobile.length == 10 &&
    formData.name != "" &&
    formData.email != ""
  ) {
    setMobileVali(true);
    console.log(mobilevel);
    postData()
    setMobileVali(false);
  }
  return (
    <div className="form_div">
      <form //onSubmit={handeSubmit}
      >
        <input
          onChange={handleChange}
          type="text"
          value={formData.name}
          id="name"
          placeholder="Enter Name*"
        />{" "}
        <br />
        <input
          onChange={handleChange}
          type="email"
          id="email"
          value={formData.email}
          placeholder="Email Id*"
        />
        <br />
        <input
          onChange={handleChange}
          type="tel"
          id="mobile"
          maxLength={"10"}
          value={formData.mobile}
          placeholder="Mobile No*"
        />
        <br />
        <input type="checkbox" id="checkbox" />{" "}
        <label className="term_cond">
          I Agree to the <a id="term_cond">Terms & Conditions</a>{" "}
        </label>
        <br />
        <button
          onClick={handeSubmit}
       disabled={setFormData!==true}
          id="submit"
        >
          Get A Quick Quote
        </button>
        {/* <input disabled={setFormData ==false}
          className="createUser"
          type="submit"
          id="submit"
          value={"Get A Quick Quote"}
        /> */}
      </form>
    </div>
  );
};

export default Form;
