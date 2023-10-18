import Image from 'next/image'
import { Layout } from '@/Layout'
import { Card, Grid, Paper, SvgIcon, Typography } from '@mui/material'
import Logo from '../../public/logo.png';
import InfoCard from '@/components/InfoCard'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  // 
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
                <Grid item xs={12} md={3} display="flex" justifyContent="start" ></Grid>
                <Grid item xs={12} md={9} display="flex" justifyContent="center" alignContent={'center'} flexDirection={'column'} sx={{ padding: '0px 20px 0px 0px' }}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '15px' }}>
                    Descripción de la empresa
                  </Typography>
                  <Typography variant="body1" paddingRight={3}>
                    Aquí puedes introducir tu texto ficticio que resalte la descripción de la empresa.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita consequatur itaque exercitationem nihil saepe alias animi delectus? Quas quam perspiciatis non architecto officiis, deserunt cumque similique nisi doloremque provident incidunt.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
            <Image src={Logo} alt="Picture of the author" />
          </Grid>
        </Grid>
      </Paper >
      <Paper elevation={0} square style={{ background: 'white', padding: '100px 50px', }}>
        <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'}>
          Seccion 2
        </Grid>
      </Paper>
      <Paper elevation={0} square style={{ background: '#003f88', padding: '100px 50px', }}>
        <Grid container display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <Grid item xs={12} md={4} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <InfoCard />
          </Grid>
          <Grid item xs={12} md={4} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <InfoCard />
          </Grid>
          <Grid item xs={12} md={4} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <InfoCard />
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={0} square style={{ background: `url(/wave.svg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundColor: '#f1f2f6', padding: '100px 50px', }}>
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
    </Layout >
  )
}
