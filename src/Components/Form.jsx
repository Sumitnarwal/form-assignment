import React, { useState } from "react";
import "../css/form.css"
import axios from "axios";
import { useEffect } from "react";
import bcrypt from "bcryptjs";
const Form = () => {
  const [mobilevel, setMobileVali] = useState(false);
  const [check, setCheck] = useState(false);
//  const [empty, setEmpty] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  
  

  useEffect(() => {
    if (
      formData.mobile.length !== 10 ||
      formData.name.length != 0 ||
      formData.email.length != 0 ||
      check == false
    ) {
      setMobileVali(false);
    
    }
    if (
      formData.mobile.length == 10 &&
      formData.name.length != 0 &&
      formData.email.length != 0 &&
      check == true
    ) {
      setMobileVali(true);
    
    }
    
    if (
      formData.mobile.length == 0 &&
      formData.name.length == 0 &&
      formData.email.length == 0 
     
    ) {
      setMobileVali(false)
   //   setEmpty(false);
      
      
    }
  }, [formData.name, formData.mobile, formData.email, check]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const postData = () => {
      const getMobile=formData.mobile
      const hashedPassword = bcrypt.hashSync(getMobile, 10);
      console.log(hashedPassword);
    axios({
      url: "http://localhost:8000/formData",
      method: "POST",
      data: {
        name: formData.name,
        Mobile: hashedPassword,
        Email: formData.email,
      },
    })
      .then((res) => {
        console.log(res.data);
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
        <input
          onChange={handleChange}
          type="tel"
          id="mobile"
          maxLength={"10"}
          value={formData.mobile}
          placeholder="Mobile No*"
        />
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
        
          disabled={mobilevel === false  }

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
