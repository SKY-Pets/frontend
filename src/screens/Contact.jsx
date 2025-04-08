import React, { useRef, useState } from "react";
import { Container, Box, Typography, Button, TextField, Snackbar, IconButton,Divider } from "@mui/material";
import { motion } from "framer-motion";
import { Email, Instagram, WhatsApp } from "@mui/icons-material";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k3rz50i", // Cambia por tu ID de servicio
        "template_0zmvc87", // Cambia por tu ID de plantilla
        formRef.current,
        "CHl40qhYDkG3nJsEZ" // Cambia por tu clave pública
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
        },
        () => setError(true)
      );
  };

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        ¡Contáctanos!
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Estamos aquí para ayudarte. Usa el formulario para enviarnos un mensaje, o conecta con nosotros en nuestras redes.
      </Typography>

{/* Redes Sociales */}
<Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <IconButton
          href="https://api.whatsapp.com/send/?phone=543794404726&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          color="success"
        >
          <WhatsApp fontSize="large" />
        </IconButton>
        <IconButton
          href="https://www.instagram.com/skypetsctes"
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
        >
          <Instagram fontSize="large" />
        </IconButton>
        <IconButton
          href="mailto:sky.lb2020@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
        >
          <Email fontSize="large" />
        </IconButton>
      </Box>

      <Divider sx={{ backgroundColor: "black", height: 1, my: 2 }} />

      {/* Formulario */}
      <Box
        component="form"
        ref={formRef}
        onSubmit={sendEmail}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 3,
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <TextField name="name" label="Nombre" fullWidth required />
        <TextField name="email" label="Correo Electrónico" fullWidth required />
        <TextField
          name="message"
          label="Mensaje"
          multiline
          rows={4}
          fullWidth
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ alignSelf: "center" }}
        >
          Enviar
        </Button>
      </Box>

      

      {/* Notificaciones */}
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => setSuccess(false)}
        message="¡Mensaje enviado exitosamente!"
      />
      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={() => setError(false)}
        message="Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo."
      />
    </Container>
  );
};

export default Contact;
