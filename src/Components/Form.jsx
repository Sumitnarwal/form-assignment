import React, { useState } from "react";
import "../css/form.css";
import axios from "axios";
import { useEffect } from "react";
import bcrypt from "bcryptjs";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import PhoneNo from "./PhoneNo";
const Form = () => {
  const [mobilevel, setMobileVali] = useState(false);
  const [check, setCheck] = useState(false);
  const [value, setValue] = useState("");
  //  const [empty, setEmpty] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  // console.log(value.length)

  const handlePhoneNo = (val) => {
    setValue(val);
    setFormData({ ...formData, mobile: value });
  };

  useEffect(() => {
    if (
      formData.mobile.length !== 12 ||
      formData.name.length != 0 ||
      formData.email.length != 0 ||
      check == false
    ) {
      console.log("first if", formData.mobile.length);
      setMobileVali(false);
    }
    if (
      formData.mobile.length == 12 &&
      formData.name.length != 0 &&
      formData.email.length != 0 &&
      check == true
    ) {
      console.log("sec if", formData.mobile.length);
      setMobileVali(true);
    }
    if (
      formData.mobile.length == 0 &&
      formData.name.length == 0 &&
      formData.email.length == 0
    ) {
      console.log("third if", formData.mobile.length);
      setMobileVali(false);
      //   setEmpty(false);
    }
    console.log(mobilevel);
  }, [formData.name, formData.mobile, formData.email, check]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const postData = () => {
    const getMobile = formData.mobile;
    const hashedMobile = bcrypt.hashSync(getMobile, 10);
    console.log(hashedMobile);
    axios({
      url: "http://localhost:8000/formData",
      method: "POST",
      data: {
        Name: formData.name,
        Mobile: hashedMobile,
        Email: formData.email,
      },
    })
      .then((res) => {
        console.log(res.data);
        setValue("");
        setFormData({
          name: "",
          mobile: "",
          email: "",
        });
        setCheck(false);
        setMobileVali(false);
      })
      .catch((err) => {
        console.log("error while post data");
      });
  };
  const handeSubmit = (e) => {
    e.preventDefault();
    postData();
    setCheck(false);
  };
  const selectFun = () => {
    setCheck(!check);
    // setMobileVali(check)
    console.log(check);
  };
  return (
    <div className="form_div">
      <form>
        <input
          onChange={handleChange}
          type="text"
          value={formData.name}
          id="name"
          placeholder="Enter Name*"
        />{" "}
        <br />
        {/* <span id="empty_error" hidden={empty==false}>Please enter name</span> */}
        <br />
        <input
          onChange={handleChange}
          type="email"
          id="email"
          value={formData.email}
          placeholder="Email Id*"
        />
        <br />
        {/* <span id="empty_error"  hidden={empty==false}>Please enter email</span> */}
        <br />
        <div>
          {/* <PhoneNo/> */}
          <PhoneInput
            placeholder="Enter phone number"
            defaultCountry="IN"
            style={{width:"80%"}}
            type="tel"
            id="mobile"
            maxLength={"11"}
            value={value}
            onChange={(e) => handlePhoneNo(e)}
          />
          {/* <input
            onChange={handleChange}
            type="tel"
            id="mobile"
            maxLength={"10"}
            value={formData.mobile}
            placeholder="Mobile No*"
          /> */}
        </div>
        <br />
        {/* <span id="empty_error"  hidden={empty==false}>Please enter mobile</span> */}
        <br />
        <input
          type="checkbox"
          id="checkbox"
          checked={check}
          onChange={() => selectFun()}
        />{" "}
        <label className="term_cond">
          I Agree to the <a id="term_cond">Terms & Conditions</a>{" "}
        </label>
        <br />
        <button
          disabled={mobilevel === false}
          className={mobilevel ? "colorback" : "disabled"}
          onClick={handeSubmit}
          id="submit"
        >
          Get A Quick Quote
        </button>
      </form>
    </div>
  );
};

export default Form;
