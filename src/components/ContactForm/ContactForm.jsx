import React from "react";
import { RiMailSendLine } from "react-icons/ri";
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
      if (!formik.isValid) {
        return;
      }
      console.log("Form submitted via Formik:", value);
      alert(`Thank you ${value.name} for your message !`);
      resetForm();
    },
  });

  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
      <div className={s.error}>
        {formik.touched.name && formik.errors.name
          ? formik.errors.name
          : "\u00A0"}
      </div>
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
      <div className={s.error}>
        {formik.touched.email && formik.errors.email
          ? formik.errors.email
          : "\u00A0"}
      </div>
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
      <div className={s.error}>
        {formik.touched.message && formik.errors.message
          ? formik.errors.message
          : "\u00A0"}
      </div>
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
      <button type="submit" className={s.formBt}>
        Send <RiMailSendLine className={s.formIcon} />
      </button>
    </form>
  );
};

export default ContactForm;
