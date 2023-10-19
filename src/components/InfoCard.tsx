import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, IconButton } from '@mui/material';
import { onDownload } from '@/utils/download';
import { FileDownload } from '@mui/icons-material';

interface Props {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  link: string;
}

export default function InfoCard({ imageUrl, altText, description, title, link }: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={altText}
        />
        <CardContent sx={{ padding: '30px 50px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Button component="label" onClick={() => onDownload(link)} variant="text" startIcon={<FileDownload />}
            sx={{
              marginTop: '25px',
              transition: 'color 0.3s', // Aplicamos una transición al color
              '&:hover': {
                color: 'gray', // Cambia el color al hacer hover
                background: 'transparent', // Quita el fondo al hacer hover
              },
            }}
          />

        </CardContent>
      </CardActionArea>
    </Card>
  );
}