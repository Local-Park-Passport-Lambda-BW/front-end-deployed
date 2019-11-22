import React from "react";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import { withFormik, Form, Field, ErrorMessage } from "formik";

// Styling

const StyledDiv = styled.div`
  /* border: 1px solid blue; */
  width: 61.8%;
  /* border: 1px solid blue; */
  margin: 0 auto;
  /* height: 400px; */
  display: flex;
  flex-direction: column;
  justify-content: end;
  .form {
    /* border: 1px solid blue; */
    margin: 0 16.1%;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3);

    label {
      width: 100%;
      color: #555;
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 5px;
      padding-top: 10px;
      color: black;
      display: flex;
      flex-direction: column;
      font-size: 12px;
    }
    #first-name {
      margin-top: 9.6%;
    }
    .terms-checkbox {
      width: 95%;
      margin: 0 auto;
    }
    input {
      display: flex;
      flex-direction: column;
      width: 50%;
      margin: 0 auto;
      /* margin-right: 40px; */
      margin-bottom: 3px;
      text-align: center;
    }
    input[type="checkbox"] {
      width: 20px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    /* .check {
      margin-left: 3px;
    } */
    input[type="submit"] {
      margin: 0 auto;
      padding-top: 9.6%;
      width: 30%;
      height: 40px;
    }
  }
  button {
    margin: 0 auto 20px auto;
    width: 60px;
  }
  .error {
    color: red;
    font-size: 12px;
    font-weight: 600;
  }
`;
function RegistrationForm(props) {
  // console.log(props);
  return (
    <StyledDiv className="New-user-form">
      <h2>Sign Up</h2>
      <Form className="form">
        <ErrorMessage
          name="name"
          render={msg => <div className="error">{msg}</div>}
        />
        <label id="name">
          Name:
          <Field type="text" name="name" placeholder="Name" />
        </label>{" "}
        <ErrorMessage
          name="email"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          email:
          <Field type="email" name="email" placeholder="email " />
        </label>
        <ErrorMessage
          name="username"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          Username:
          <Field type="text" name="username" placeholder="Username" />
        </label>
        <ErrorMessage
          name="password"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          Password :
          <Field type="password" name="password" placeholder="Password " />
        </label>
        <ErrorMessage
          name="passwordConfirmation"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          Re-enter Password :
          <Field
            type="password"
            name="passwordConfirmation"
            placeholder="Re-enter password "
          />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </StyledDiv>
  );
}

const RegistrationFormWithFormik = withFormik({
  mapPropsToValues() {
    return {
      name: "",
      email: "",
      password: "",
      username: ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Please enter first name")
      .min(2, "Too Short!")
      .max(25, "Too Long!"),

    email: Yup.string()
      .required("Please enter email")
      .email("Invalid email"),
    password: Yup.string()
      .required("password is a required field")
      .min(5, "Too Short!")
      .max(25, "Too Long!")
      .matches(/(?=.*[0-9])/, "Must contain at least one number"),

    passwordConfirmation: Yup.string()
      .required("re-enter password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),

    username: Yup.string()
      .required("user name is a required field")
      .min(3, "Too Short!")
      .max(25, "Too Long!")
  }),

  handleSubmit(input, tools) {
    // from Lisa to prevent password confirmation from being returned
    // const { password_confirmation, ...rest } = formValues;
    // console.log("rest", rest);
    axios
      .post("https://park-pp.herokuapp.com/users/register", input)
      //https://park-pp.herokuapp.com/users/register
      // http://localhost:3300/users/register
      // https://reqres.in/api/users/
      // https://reqres.in/api/users/

      .then(res => {
        console.log(res.data);
        tools.resetForm();
      })
      .catch(err => {
        console.log(err);
      });
  }
})(RegistrationForm);

export default RegistrationFormWithFormik;
