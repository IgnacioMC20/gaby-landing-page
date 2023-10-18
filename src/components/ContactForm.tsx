import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid, CircularProgress } from '@mui/material';

function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
    }, 1500);
    // Aquí puedes enviar formData a tu servidor o realizar otras acciones
    console.log('enviar formulario');
  };

  return (
    <Container maxWidth="sm" sx={{
      padding: '25px 50px',
    }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom textAlign={'center'} marginBottom={5} fontSize={40}>
          Formulario de Contacto
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="name"
              label="Nombre"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="email"
              label="Correo Electrónico"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="message"
              label="Mensaje"
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} display={'flex'} justifyContent={'center'}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                fontSize: '1.2rem',
                width: '20%',
                height: '60px',
                // padding: '15px 30px',
                backgroundColor: isSending ? 'black' : 'black', // Color constante
                '&:hover': {
                  backgroundColor: isSending ? 'black' : 'black', // Color constante
                },
                '&:disabled': {
                  opacity: 1, // Opacidad completa
                  pointerEvents: 'none', // Desactiva los eventos
                },
              }}
              disabled={isSending}
            >
              <Grid padding={5} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                {isSending ? <CircularProgress size={30} color='info'/> : 'Enviar'}
              </Grid>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default ContactForm;
