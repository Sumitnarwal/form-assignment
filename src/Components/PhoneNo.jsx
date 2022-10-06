import React, { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
const PhoneNo = () => {
    const [value, setValue] = useState()
  console.log(value)
      return (
      <PhoneInput
        placeholder="Enter phone number"
        defaultCountry="IN"
        value={value}
        onChange={setValue}
      />
      )
};

export default PhoneNo;
