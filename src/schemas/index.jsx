import * as Yup from "yup";

export const signpchema = Yup.object({
  name: Yup.string().min(2).max(25).required("please enter your name"),
  email: Yup.string().email().required("Please enter your email address"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password:Yup.string().required().oneOf([Yup.ref("password"),null],"Password must match")
});
