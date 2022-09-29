import * as Yup from "yup";
console.log(Yup)
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const signpchema = Yup.object({
  name: Yup.string().min(2).max(25).required("please enter your name"),
  email: Yup.string().email().required("Please enter your email address"),
  mobile:  Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password:Yup.string().required().oneOf([Yup.ref("password"),null],"Password must match")
});
