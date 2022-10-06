import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Form from "./Form";
import Register from "./formic";

const Navbar = () => {
  const [value, setValue] = useState(" Form 1");
  return (
    <div>
      <div className="Navbar">
        <div onClick={() => setValue(" Form 1")}>
          <Link className="Register" to={"/"}>
            Form 1
          </Link>
        </div>
        <div onClick={() => setValue(" Form 2")}>
          <Link className="Login" to={"/Login"}>
            Form 2
          </Link>
        </div>
        <div onClick={() => setValue("All Register Users")}>
          <Link className="Login" to={"/users"}>
           All Users
          </Link>
        </div>
      </div>
      <div className="top_value">{value}</div>
    </div>
  );
};

export default Navbar;
