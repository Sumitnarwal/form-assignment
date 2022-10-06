// import { Base64 } from "js-base64";

// import React, { useState } from "react";

// const Home = () => {
//   const [inputText, setInputText] = useState();
//   const [encPwd, setEncPwd] = useState();
//   const [decPwd, setDecPwd] = useState();
//   return <div className="form_div">
// <input placeholder="enter_passowrd" onChange={(text)=>setInputText(text)} type={"text"} id="name"/><br/><br/>
// <button id="submit_btn" onClick={()=>{setEncPwd(Base64.encode(inputText))}}>Encrypt password</button><br/> <br/><hr/>
// <h3>{encPwd}</h3><br/><br/>
// <input placeholder="enter_passowrd" value={decPwd} type={"text"} id="email"/><br/><br/>
// <button onClick={()=>{setDecPwd(Base64.decode(encPwd))}}>Encrypt password</button>

//   </div>;
// };

// export default Home;
import React, { useRef } from "react";
import  bcrypt  from "bcryptjs";
const Home = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const SignUpForm = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    const hashedPassword = bcrypt.hashSync(password, 10);
    console.log(hashedPassword);

    //You can call post api here also

    window.localStorage.setItem(
      "login",
      JSON.stringify({ email, hashedPassword })
    );
  };
  const LoginForm = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    const getHashedPassword = JSON.parse(
      window.localStorage.getItem("login")
    ).hashedPassword;
    console.log(getHashedPassword);
    //Match password
    bcrypt.compare(password, getHashedPassword, function (err, isMatch) {
      if (err) {
        throw err;
      } else if (!isMatch) {
        console.log("Password doesn't match!");
      } else {
        console.log("Password matches!");
      }
    });
  };
  return (
    <div>
      <form>
        <input
          type={"email"}
          placeholder="email"
          ref={emailInputRef}
          style={{ padding: "15px", borderRadius: "10px", margin: "10px" }}
        />
        <input
          type={"password"}
          placeholder="password"
          ref={passwordInputRef}
          style={{ padding: "15px", borderRadius: "10px", margin: "10px" }}
        />
        <button
          type="submit"
          onClick={(e) => SignUpForm(e)}
          style={{ padding: "15px", borderRadius: "10px", margin: "10px" }}
        >
          Sign up
        </button>
        <button
          type="submit"
          onClick={(e) => LoginForm(e)}
          style={{ padding: "15px", borderRadius: "10px", margin: "10px" }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Home;
