import React, { useState } from "react";
import "../css/form.css";
import axios from "axios";
import { useEffect } from "react";
const Form = () => {
  const [mobilevel, setMobileVali] = useState(false);
  const [check, setCheck] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  // console.log(formData.mobile.length)

  useEffect(() => {
    if (
      formData.mobile.length == 10 &&
      formData.name.length != 0 &&
      formData.email.length != 0 && check == true
    ) {
      setMobileVali(true);
      console.log(mobilevel);

    }

  }, [formData.name, formData.mobile, formData.email, check])
  const handleChange = (e) => {

    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
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
        setFormData({
          name: "",
          mobile: "",
          email: "",
        })
        setCheck(false)
      })
      .catch((err) => {
        console.log("error while post data");
      });
  };
  const handeSubmit = (e) => {
    e.preventDefault();
    postData()
  };
  const selectFun = () => {
    setCheck(!check)
    console.log(check)
  }
  return (
    <div className="form_div">
      <form
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
        <input type="checkbox" id="checkbox" onChange={() => selectFun()} />{" "}
        <label className="term_cond">
          I Agree to the <a id="term_cond">Terms & Conditions</a>{" "}
        </label>
        <br />
        <button
          disabled={ mobilevel?false:true}

          className={mobilevel?"colorback":"disabled"}
          
          onClick={handeSubmit}

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
