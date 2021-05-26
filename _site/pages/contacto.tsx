import React          from 'react'
import Head           from 'next/head';
import {DisolLayout}  from '../src/layout/DisolLayout'

import {Grid}         from "@material-ui/core";
import Typography     from "@material-ui/core/Typography";



function contacto(){
  return(
    <div>
      <Head>
        <title>Disol: Contacto</title>
      </Head>

      <DisolLayout>
        <Grid container item md={12} >
          <div style={{width: '100%', height:'55vw', maxHeight:'95vh', backgroundImage: "url(/Portada4.png)", backgroundSize:'cover'}}/>
        </Grid>

        <Grid container direction='row-reverse' alignItems='center' justify='center' style={{backgroundColor:'#ffffff', padding: 25}}>
          <Grid container item sm={1}> </Grid>
          <Grid container item sm={5} direction='column' alignItems='center' justify='center'>
            <Typography variant='subtitle1' style={{textAlign: 'justify', padding: '1vh', width:'100%'}}>
              En Disol estamos comprometidos a brindarte el mejor servicio y a ayudarte en todo momento.
              Puedes contactarnos siempre que tengas dudas, preguntas, comentarios y/o sugerencias relacionadas
              tanto a Disol Consulting como a Disol App. Siempre estaremos disponibles para ayudarte.
            </Typography>

            <Typography variant='subtitle1' style={{textAlign: 'justify', padding: '1vh', width:'100%'}}>
              En caso de tener dudas, comentatios, y/o sugerencias relacionadas a Disol Consulting puedes enviar un correo a: <br/>
              <a href='mailTo:lopez.teresa@disol.mx?subject=Entrar en contacto' style={{color: '#FF6A13', fontWeight: 400}}> lopez.teresa@disol.mx</a>
            </Typography>

            <Typography variant='subtitle1' style={{textAlign: 'justify', padding: '1vh', width:'100%'}}>
              Si necesitas ayuda y/o soporte técnico relacionado a Aprende japonés con Disol App puedes enviar un correo a: <br/>
              <a href='mailTo:soporte@disol.mx?subject=Necestio ayuda con mi Disol App' style={{color: '#FF6A13', fontWeight: 400}}> soporte@disol.mx</a>
            </Typography>
          </Grid>
          <Grid container item sm={1}> </Grid>
          <Grid container item sm={4} direction='row'>
            <img src='/Contacto.jpg' style={{width: '100%', padding: 15}}/>
          </Grid>
          <Grid container item sm={1}> </Grid>
        </Grid>

        <Grid container direction='row-reverse' alignItems='center' justify='center' style={{backgroundColor:'#ffffff', padding: 25}}>
          <Grid container item sm={1}> </Grid>
          <Grid container item sm={10} direction='row' alignItems='center' justify='center'>
            <Typography variant='h4' style={{color: 'gray', fontSize: '2.5rem', fontWeight: 300, padding: '1%', width: '100%', textAlign: 'center', margin:0, marginBottom:'2%'}}>
              ¡Síguenos en nuestras redes sociales!
            </Typography>

            <Grid container item sm={2} justify='center'>
              <a href="https://www.facebook.com/disol.consulting/" target="_blank">
                <img src='/FB.png' style={{width: '80%', padding:30}} alt='FB_Logo'/>
              </a>
            </Grid>

            <Grid container item sm={2} justify='center'>
              <a href="https://www.instagram.com/aprendejaponescondisol/" target="_blank">
                <img src='/IG.png' style={{width: '80%', padding:30}} alt='IG_Logo'/>
              </a>
            </Grid>

            <Grid container item sm={2} justify='center'>
              <a href="https://www.linkedin.com/company/dsl-diversity-solutions-consulting/" target="_blank">
                <img src='/Linkedin.png' style={{width: '80%', padding:30}} alt='LI_Logo'/>
              </a>
            </Grid>

            <Grid container item sm={2} justify='center'>
              <a href="https://www.youtube.com/channel/UC7BRBoIqPjJouO_716jUyPA/featured" target="_blank">
                <img src='/Youtube.png' style={{width: '80%', padding:30}} alt='YT_Logo'/>
              </a>
            </Grid>

          </Grid>
          <Grid container item sm={1}> </Grid>
        </Grid>
      </DisolLayout>
    </div>
  )
}

export default contacto