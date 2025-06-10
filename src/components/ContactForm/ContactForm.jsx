import React from "react";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter your name"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Enter you message"),
    }),

    onSubmit: (value, { resetForm }) => {
      console.log("Form submitted via Formik:", value);
      alert("Thank you for your message!");
      resetForm();
    },
  });

  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Enter your name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={s.input}
        required
      />
      {formik.touched.name && formik.errors.name && (
        <div className={s.error}>{formik.errors.name}</div>
      )}
      <input
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={s.input}
        required
      />
      {formik.touched.email && formik.errors.email && (
        <div className={s.error}>{formik.errors.email}</div>
      )}
      <textarea
        name="message"
        type="text"
        placeholder="Enter your message"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={s.textarea}
        required
      />
      {formik.touched.message && formik.errors.message && (
        <div className={s.error}>{formik.errors.message}</div>
      )}
      <button type="submit" className={s.formBt}>
        Send
      </button>
    </form>
  );
};

export default ContactForm;
