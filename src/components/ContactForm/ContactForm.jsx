import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
import { ErrorMessage } from "formik";

const ContactForm = ({ onAdd }) => {
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    onAdd({
      name: values.name,
      number: values.number,
      id: nanoid(),
    });
    console.log(values);
    actions.resetForm();
  };

  const nameId = useId();
  const phoneId = useId();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={s.container}>
        <div>
          <label htmlFor={nameId}>Name</label>
          <Field
            className={s.input}
            type="text"
            name="name"
            id={nameId}
          ></Field>
          <ErrorMessage name="name" component="span" className={s.error} />
        </div>

        <div>
          <label htmlFor={phoneId}>Number</label>
          <Field
            className={s.input}
            type="text"
            name="number"
            id={phoneId}
          ></Field>
          <ErrorMessage name="number" component="span" className={s.error} />
        </div>

        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
