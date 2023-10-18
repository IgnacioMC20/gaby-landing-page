import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function InfoCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/nuke.jpeg"
          alt="imagen ejemplo"
        />
        <CardContent sx={{padding: '30px 50px'}}>
          <Typography gutterBottom variant="h5" component="div">
            Titulo ejemplo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sequi soluta vel quod
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}