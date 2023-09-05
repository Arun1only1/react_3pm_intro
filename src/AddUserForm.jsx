import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      //   schema/rules
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(3, "FirstName must be at least 3 characters.")
          .required("First name is required."),
        lastName: Yup.string()
          .min(3, "Last name must be at least 3 characters.")
          .required("Last name is required."),

        email: Yup.string()
          .required("Email is required.")
          .email("Please enter valid email."),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            maxWidth: "500px",
          }}
        >
          <label>First name</label>
          <input type="text" {...formik.getFieldProps("firstName")} />

          {formik.touched.firstName && formik.errors.firstName ? (
            <div style={{ color: "red" }}>{formik.errors.firstName}</div>
          ) : null}

          <label>Last name</label>
          <input type="text" {...formik.getFieldProps("lastName")} />

          {formik.touched.lastName && formik.errors.lastName ? (
            <div style={{ color: "red" }}>{formik.errors.lastName}</div>
          ) : null}

          <label>Email</label>
          <input type="text" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}

          <button type="submit">Add user</button>
        </form>
      )}
    </Formik>
  );
};

export default SignupForm;
