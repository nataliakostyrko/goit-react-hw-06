
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";

import css from "./ContactForm.module.css";

const ContactForm = () => {
const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const FeedbackSchema = Yup.object({
    name: Yup.string()
      .required('This field is required!')
      .min(3, 'Name must be more than 3 characters!')
      .max(50, 'Name must be less than 50 characters!'),
      
    
    number: Yup.string()
      .required('This field is required!')
      .min(3, 'Number must be more than 3 characters!')
      .max(50, 'Number must be less than 50 characters!'),    
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    dispatch(addContacts(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor="name" className={css.label}>
          <span>Name</span>
          <Field name="name" className={css.input} type="text" />
          <ErrorMessage name="name" component="p" className={css.error} />
        </label>
        <label htmlFor="number" className={css.label}>
          <span>Number</span>
          <Field name="number" className={css.input} type="text" />
          <ErrorMessage name="number" component="p" className={css.error} />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

