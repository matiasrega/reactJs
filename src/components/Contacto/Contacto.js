import React from "react";
import { Formik, Field, Form } from "formik";
import "./contacto.css";
import swal from "sweetalert";

const FormularioContacto = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      onSubmit={async (values) => {
        await new Promise((res) => setTimeout(res, 500));
        if (!values.name || !values.email || !values.message) {
          swal({
            icon: "error",
            text: "Por favor complete todos los campos",
            className: "my-custom-alert",
          });
        } else {
          alert(JSON.stringify(values, null, 2));
        }
      }}
    >
      <Form className="formulario">
        <p className="formularioTitle">Dejanos tu consulta</p>
        <label htmlFor="name"></label>
        <Field id="name" name="name" placeholder="Nombre y Apellido" />

        <label htmlFor="email"></label>
        <Field
          id="email"
          name="email"
          placeholder="Correo Electronico"
          type="email"
        />

        <label htmlFor="message"></label>
        <Field
          className="textArea"
          id="message"
          name="message"
          as="textarea"
          placeholder="Ingresa tu mensaje"
        />

        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
};

export default FormularioContacto;
