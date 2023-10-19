import Image from 'next/image'
import { Layout } from '@/Layout'
import { Button, Card, CardContent, Grid, IconButton, Paper, SvgIcon, Typography } from '@mui/material'
import Logo from '../../public/logo.png';
import loca from '../../public/loca.jpeg';
import techos from '../../public/techos.webp';
import InfoCard from '@/components/InfoCard'
import ContactForm from '@/components/ContactForm'
import { FileDownload } from '@mui/icons-material';
import InfoCardYT from '@/components/InfoCardYT';
import { onDownload } from '@/utils/download';
import { FabButton } from '@/components/FabButton';

export default function Home() {

  return (
    <Layout pageDescription='Main' title='Main'>
      <Paper elevation={0} square style={{ background: '#fbf5f2' }}>
        <Grid container display="flex" justifyContent="center" alignItems="center" >
          <Grid item xs={12} md={6} display="flex" justifyContent="start" sx={{ height: '100%', }}>
            <Card
              sx={{
                padding: '50px 0px',
                background: 'white',
                width: '100%',
                height: '330px',
                transform: 'translateX(-5%)',
                // boxShadow: 'none',
                borderRadius: '0px',
              }}
            >
              <Grid container display="flex" justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
                <Grid item xs={12} md={3} display="flex" justifyContent="start" />
                <Grid item xs={12} md={9} display="flex" justifyContent="center" alignContent={'center'} flexDirection={'column'} sx={{ padding: '0px 20px 0px 0px' }}>
                  <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '15px' }}>
                    Tu solución en ingeniería de plantas
                  </Typography>
                  <Typography variant="body1" paddingRight={3}>
                    Proporcionamos recursos y asesoramiento de alta calidad para profesionales e industrias. Nuestra plataforma en desarrollo está diseñada para atraer, innovar y retener a nuestros usuarios. Colaboramos con expertos y valoramos la retroalimentación de la comunidad. Únete a nosotros en este emocionante viaje hacia la excelencia en la ingeniería de plantas.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
            <Image src={Logo}  alt="Picture of the author" />
          </Grid>
        </Grid>
      </Paper >


      {/* localizacion */}
      <Paper elevation={0} square style={{ background: 'white', padding: '100px 100px', }}>
        <Grid container display="flex" justifyContent="center" alignItems="center">
          <Card sx={{ background: '#f1f2f6', width: '75%' }}>
            <CardContent>
              <Grid
                container
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="row" // Asegura una disposición en fila
                sx={{ padding: '25px', }}
              >
                <Grid item xs={12} md={6} sx={{ marginX: '15px', width: '50%', }}>
                  <Image src={loca} layout='responsive' alt="Localizacion" style={{ borderRadius: '5px' }} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={5}
                  display="flex"
                  justifyContent="center"
                  flexDirection="column" // Asegura una disposición en columna
                  alignItems="start"
                  sx={{ height: '100%', width: '50%', marginX: '15px', paddingLeft: '25px' }}
                >
                  <Typography variant="h3" marginBottom={2}>Localización Industrial</Typography>
                  <Typography variant="body2">
                  <span id='localizacion'></span>
                    La localización industrial se define como el análisis de los factores de localización para determinar la ubicación óptima de una empresa industrial.
                    Consta de la evaluación de las diversas variables que intervienen en el éxito de una empresa de carácter industrial.
                  </Typography>
                  <Grid width={'100%'} display={'flex'} justifyContent={'center'}>
                    <Button onClick={() => onDownload('LOCALIZACIÓN-INDUSTRIAL.docx')} variant='contained' color='primary' sx={{ padding: '15px', marginTop: '25px' }} startIcon={<FileDownload />}>
                      Mas información
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Paper>


      {/* techos */}
      <Paper elevation={0} square style={{ background: '#f1f2f6', padding: '100px 100px', }}>
        <Grid container display="flex" justifyContent="center" alignItems="center">
          <Card sx={{ background: 'white', width: '75%' }}>
            <CardContent>
              <Grid
                container
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="row" // Asegura una disposición en fila
                sx={{ padding: '25px', }}
              >
                <Grid
                  item
                  xs={12}
                  md={5}
                  display="flex"
                  justifyContent="center"
                  flexDirection="column" // Asegura una disposición en columna
                  alignItems="start"
                  sx={{ height: '100%', width: '50%', marginX: '15px' }}
                >
                  <Typography variant="h3" marginBottom={2}>Techos Industriales</Typography>
                  <Typography variant="body2">
                    <span id='techos'></span>
                    Más allá de ser simples coberturas protectoras contra los elementos, constituyen sistemas complejos meticulosamente diseñados para cumplir con una diversidad de requisitos funcionales y de seguridad.
                  </Typography>
                  <Grid width={'100%'} display={'flex'} justifyContent={'center'}>
                    <Button onClick={() => onDownload('techos-prueba.docx')} variant='contained' color='primary' sx={{ padding: '15px', marginTop: '25px' }} startIcon={<FileDownload />}>
                      Mas información
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6} sx={{ marginX: '15px', width: '50%', }}>
                  <Image src={techos} layout='responsive' priority alt="Localizacion" style={{ borderRadius: '5px' }} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Paper>
      <Paper elevation={0} square style={{ background: '#003f88', padding: '75px 50px', }}>
        <Typography variant="h3" sx={{ color: 'white', marginBottom: '50px', textAlign: 'center' }}>
          Descarga nuestras plantillas
          <span id='plantillas'></span>
        </Typography>
        <Grid container display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <Grid item xs={12} md={4} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <InfoCard altText='Plantilla 1' imageUrl='/plantilla1.png'
              title='Localizacion Industrial'
              description='Plantilla de Excel de Localización están diseñadas para simplificar y agilizar los procesos de planificación y diseño en la ingenería de plantas.'
              link='LOCALIZACIÓN-INDUSTRIAL..docx.xlsx'
            />
          </Grid>
          <Grid item xs={12} md={4} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <InfoCard altText='Plantilla 2' imageUrl='/plantilla2.png'
              title='Techos Industriales'
              description='Plantilla de Excel de techos están diseñadas para simplificar y agilizar los procesos de planificación y diseño en la ingenería de plantas.'
              link='Techos2.xltm'
            />
          </Grid>
          <Grid item xs={12} md={4} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <InfoCardYT />
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={0} square style={{ background: `url(/wave.svg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundColor: '#f1f2f6', padding: '50px 50px', }}>
        <Grid container display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Grid item xs={12} md={8} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Card sx={{ /* boxShadow: '2px 2px 12px 5px rgba(0,0,0,0.2)', */ padding: '35px', margin: '50px' }}>
              <ContactForm />
            </Card>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={0} square style={{
        padding: '20px',
        // background: '#fbf5f2',
        // backgroundSize: 'cover',
      }}>
        <div>
          <Typography variant="body1" color="textSecondary">
            © 2023 - IngeniaNet | Todos los derechos reservados
          </Typography>
        </div>
      </Paper>
      <FabButton />
    </Layout >
  )
}
