import React            from 'react'
import Head             from 'next/head';
import {DisolLayout}    from '../src/layout/DisolLayout'

import Grid             from "@material-ui/core/Grid";
import Typography       from "@material-ui/core/Typography";



function presskit(){
  return(
    <div>
      <Head>
        <title>Disol: Presskit</title>
      </Head>

      <DisolLayout>
        <Grid container item md={12} >
          <div style={{width: '100%', height:'55vw', maxHeight:'96vh', backgroundImage: "url(/Portada6.png)", backgroundSize:'cover'}}/>
        </Grid>

        <Grid container item md={12} direction='column' alignItems='center' justify='center' style={{backgroundColor: 'white', padding: 15}}>
          <Typography variant='h4' style={{color: '#C8102E', fontSize: '2.5rem', fontWeight: 300, padding: '1%'}}>
            Presskit de Diversity Solutions Consulting
          </Typography>

          <Grid container direction='row' alignItems='stretch' justify='center'>
            <Grid container item sm={1}> </Grid>
            <Grid container item sm={10} direction='column' alignItems='flex-start' justify='center' style={{padding: '1%'}}>
              <Typography variant='h5' style={{color: '#FF6A13', fontWeight: 400, margin: '1% 0'}}>
                Logo
              </Typography>

              <Grid container item sm={12} direction='row'>
                <Grid container item sm={8}>
                  <img src='/DisolLogo.png' style={{width: '100%', padding: '5rem'}}/>
                </Grid>
                <Grid container item sm={4}>
                  <img src='/LogoDisolOnly.png' style={{width: '100%', padding: '5rem'}}/>
                </Grid>
              </Grid>

              <Typography variant='h5' style={{color: '#FF6A13', fontWeight: 400, margin: '1% 0'}}>
                Créditos
              </Typography>

              <Typography variant='body1' style={{textAlign: 'justify', padding: '0 0 2% 0'}}>
                Algunas de las imágenes que utilizamos tanto en nuestro sitio web como en nuestras distintas redes sociales han sido tomadas
                de Freepik, por lo cual queremos acreditar a los respectivos autores de las imágenes que se han utilizado para dichos fines: <br/><br/>

                Imágenes de los banner: <a href="http://www.freepik.com">Designed by drobotdean / Freepik</a> <br/><br/>
                Imagen de call center: <a href="http://www.freepik.com">Designed by rawpixel.com / Freepik</a> <br/><br/>
                Imágenes de mock ups de teléfono Android: <a href="http://www.freepik.com">Designed by zlatko_plamenov / Freepik</a> <br/><br/>
              </Typography>
            </Grid>
            <Grid container item sm={1}> </Grid>
          </Grid>
        </Grid>
      </DisolLayout>
    </div>
  )
}

export default presskit