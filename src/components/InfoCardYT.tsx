import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Typography } from '@mui/material';

export default function InfoCardYT() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="iframe" // Usamos "iframe" en lugar de "img" para el componente de medios
          height="200" // Ajusta la altura según tus preferencias
          src="https://www.youtube.com/embed/dRjMlrjJm_0?si=ysSOMSsm21vlohOs"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <CardContent sx={{ padding: '30px 50px' }}>
          <Typography gutterBottom variant="h5" component="div">
            Videos relacionados
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Se explica cómo realizar la localización de una planta por el método de centro de gravedad.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}