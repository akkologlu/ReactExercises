import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email!")
    .required("Email is required"),
  age: yup
    .number()
    .positive("Please enter a positive number")
    .integer("Please enter a integer number")
    .required("Age is required"),
  password: yup
    .string()
    .min(5, "Please enter minimum 5 character")
    .matches(passwordRules, {
      message:
        "Please enter at least 1 uppercase letter, 1 lowercase letter and 1 number",
    })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match.")
    .required("Re-entering the password is mandatory."),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Please enter at least 3 characters")
    .required("Username is required"),
  university: yup
    .string()
    .oneOf(["bogazici", "gsü", "odtü", "itü"], "Please select your university")
    .required("Please select your university"),
  isAccepted: yup
    .boolean()
    .oneOf([true], "Please accept the terms of use.")
    .required(),
});
