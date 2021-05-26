import React          from 'react'
import Head           from 'next/head';
import {DisolLayout}  from '../src/layout/DisolLayout'

import Grid             from "@material-ui/core/Grid";
import Box              from "@material-ui/core/Box";
import Typography       from "@material-ui/core/Typography";


function Disolapp(){
  return(
    <div>
      <Head>
        <title>Nuestros Tutores</title>
      </Head>

      <DisolLayout>
        <Grid container item md={12} >
          <div style={{width: '100%', height:'55vw', maxHeight:'95vh', backgroundImage: "url(/Portada7.png)", backgroundSize:'cover'}}/>
        </Grid>

        {/*NUESTROS TUTORES*/}
        <Grid container item md={12} direction='row' alignItems='center' justify='center' className='basicFormat'>
          <Grid container item sm={1}> </Grid>
          <Grid container item sm={10} direction='column' alignItems='center' justify='center'>
            <Typography variant='h4' style={{color: '#FF6A13', fontSize: '2.5rem', fontWeight: 300, padding: '2rem 0',  width: '100%'}}>
              Nuestros Tutores
            </Typography>

            {/*MAKOTO*/}
            <Grid container item md={12} direction='row' alignItems='center' justify='center'>
              <Grid container item md={6} style={{padding: '1rem'}}>
                <video width='100%' autoPlay={false} controls={true} poster="/Makoto_thumbnail.png">
                  <source src='/Makoto.mp4' type="video/mp4"/>
                </video>
              </Grid>
              <Grid container item md={6} direction='column' alignItems='center' justify='center' style={{padding: '1rem'}}>
                <Typography variant='h5' style={{color: '#FF6A13', fontWeight: 300, padding: '1rem 0.5rem'}}>
                  Makoto-sensei
                </Typography>
                <Typography variant='subtitle1' style={{color: 'black', fontWeight: 300, padding: '1rem 0.5rem', width: '100%', textAlign: 'left'}}>
                  <span style={{fontWeight:500}}> Hobbys:</span> fotografía y viajes <br/>
                  <span style={{fontWeight:500}}> Comida japonesa favorita:</span> Sashimi y Soba <br/>
                  <span style={{fontWeight:500}}> Lugar favorito de Japón:</span> Takasaki (ciudad natal) y Yokohama <br/>
                  <span style={{fontWeight:500}}> Tradición o costumbre favorita de Japón:</span> Respetar a otros y convivir con la naturaleza <br/>
                  <span style={{fontWeight:500}}> Palabra o frase japonesa favorita: </span> Kore de ii noda (Así está bien) <br/>
                </Typography>
              </Grid>
            </Grid>

            {/*GUS*/}
            <Grid container item md={12} direction='row-reverse' alignItems='center' justify='center'>
              <Grid container item md={6} style={{padding: '1rem'}}>
                <video width='100%' autoPlay={false} controls={true} poster="/Gus_thumbnail.png">
                  <source src='/Gus.mp4' type="video/mp4"/>
                </video>
              </Grid>
              <Grid container item md={6} direction='column' alignItems='center' justify='center' style={{padding: '1rem'}}>
                <Typography variant='h5' style={{color: 'red', fontWeight: 300, padding: '1%'}}>
                  Gus-sensei
                </Typography>
                <Typography variant='subtitle1' style={{color: 'black', fontWeight: 300, padding: '1rem 0.5rem', width: '100%', textAlign: 'left'}}>
                  <span style={{fontWeight:500}}> Hobbys:</span> Cine, videojuegos, actuación, rompecabezas.  <br/>
                  <span style={{fontWeight:500}}> Comida japonesa favorita:</span> ramen y takoyaki <br/>
                  <span style={{fontWeight:500}}> Lugar favorito de Japón:</span> Akihabara, Shibuya <br/>
                  <span style={{fontWeight:500}}> Tradición o costumbre favorita de Japón:</span> Festival O-bon, Tanabata <br/>
                  <span style={{fontWeight:500}}> Palabra o frase japonesa favorita: </span> Yoroshiku onegaishimasu <br/>
                </Typography>
              </Grid>
            </Grid>

            {/*SEIKI*/}
            <Grid container item md={12} direction='row' alignItems='center' justify='center'>
              <Grid container item md={6} style={{padding: '1rem'}}>
                <video width='100%' autoPlay={false} controls={true} poster="/Seiki_thumbnail.png">
                  <source src='/Seiki.mp4' type="video/mp4"/>
                </video>
              </Grid>
              <Grid container item md={6} direction='column' alignItems='center' justify='center' style={{padding: '1rem'}}>
                <Typography variant='h5' style={{color: '#FFB81C', fontWeight: 300, padding: '1%'}}>
                  Seiki-sensei
                </Typography>
                <Typography variant='subtitle1' style={{color: 'black', fontWeight: 300, padding: '1rem 0.5rem', width: '100%', textAlign: 'left'}}>
                  <span style={{fontWeight:500}}> Hobbys:</span> lectura <br/>
                  <span style={{fontWeight:500}}> Comida japonesa favorita:</span> Sushi, Ramen, sokisoba <br/>
                  <span style={{fontWeight:500}}> Lugar favorito de Japón:</span> Yokohama <br/>
                  <span style={{fontWeight:500}}> Tradición o costumbre favorita de Japón:</span> Las de año nuevo <br/>
                  <span style={{fontWeight:500}}> Palabra o frase japonesa favorita: </span> 春夏秋冬 <br/>
                </Typography>
              </Grid>
            </Grid>

            {/*PAOLO*/}
            <Grid container item md={12} direction='row-reverse' alignItems='center' justify='center'>
              <Grid container item md={6} direction='column' alignItems='center' justify='center' style={{padding: '1rem'}}>
                <video width='100%' autoPlay={false} controls={true} poster="/Paolo_thumbnail.png">
                  <source src='/Paolo.mp4' type="video/mp4"/>
                </video>
              </Grid>
              <Grid container item md={6} direction='column' alignItems='center' justify='center' style={{padding: '1rem'}}>
                <Typography variant='h5' style={{color: '#FF6A13', fontWeight: 300, padding: '1%'}}>
                  Paolo-sensei
                </Typography>
                <Typography variant='subtitle1' style={{color: 'black', fontWeight: 300, padding: '1rem 0.5rem', width: '100%', textAlign: 'left'}}>
                  <span style={{fontWeight:500}}> Hobbys:</span> Basketball. Fanático de la NBA. Leer sobre Japón e Ingeniería <br/>
                  <span style={{fontWeight:500}}> Comida japonesa favorita:</span> El ramen, especialmente el Tonkatsu ramen <br/>
                  <span style={{fontWeight:500}}> Lugar favorito de Japón:</span> Prefectura de Mie <br/>
                  <span style={{fontWeight:500}}> Tradición o costumbre favorita de Japón:</span> "No incomodar a nadie"<br/>
                  <span style={{fontWeight:500}}> Palabra o frase japonesa favorita: </span> 練習すればするほど上達する (Mejorarás mientras practiques más) <br/>
                </Typography>
              </Grid>
            </Grid>

            {/*ANGELICA*/}
            <Grid container item md={12} direction='row' alignItems='center' justify='center'>
              <Grid container item md={6} style={{padding: '1rem'}}>
                <video width='100%' autoPlay={false} controls={true} poster="/Angelica_thumbnail.png">
                  <source src='/Angelica.mp4' type="video/mp4"/>
                </video>
              </Grid>
              <Grid container item md={6} direction='column' alignItems='center' justify='center' style={{padding: '1rem'}}>
                <Typography variant='h5' style={{color: 'red', fontWeight: 300, padding: '1%'}}>
                  Angélica-sensei
                </Typography>
                <Typography variant='subtitle1' style={{color: 'black', fontWeight: 300, padding: '1rem 0.5rem', width: '100%', textAlign: 'left'}}>
                  <span style={{fontWeight:500}}> Hobbys:</span> Aprender idiomas y ver dramas coreanos y japoneses<br/>
                  <span style={{fontWeight:500}}> Comida japonesa favorita:</span> Sushi y Udon <br/>
                  <span style={{fontWeight:500}}> Lugar favorito de Japón:</span> Kioto <br/>
                  <span style={{fontWeight:500}}> Tradición o costumbre favorita de Japón:</span> Shodou (caligrafía japonesa) <br/>
                  <span style={{fontWeight:500}}> Palabra o frase japonesa favorita: </span> 継続は力なり (La perseverancia es poder) <br/>
                </Typography>
              </Grid>
            </Grid>

            {/*MATEO*/}
            <Grid container item md={12} direction='row-reverse' alignItems='center' justify='center'>
              <Grid container item md={6} style={{padding: '1rem'}}>
                <video width='100%' autoPlay={false} controls={true} poster="/Mateo_thumbnail.png">
                  <source src='/Mateo.mp4' type="video/mp4"/>
                </video>
              </Grid>
              <Grid container item md={6} direction='column' alignItems='center' justify='center' style={{padding: '1rem'}}>
                <Typography variant='h5' style={{color: '#FFB81C', fontWeight: 300, padding: '1%'}}>
                  Mateo-sensei
                </Typography>
                <Typography variant='subtitle1' style={{color: 'black', fontWeight: 300, padding: '1rem 0.5rem', width: '100%', textAlign: 'left'}}>
                  <span style={{fontWeight:500}}> Hobbys:</span> viajar, y aprender nuevos idiomas <br/>
                  <span style={{fontWeight:500}}> Comida japonesa favorita:</span> Ramen <br/>
                  <span style={{fontWeight:500}}> Lugar favorito de Japón:</span> Osaka <br/>
                  <span style={{fontWeight:500}}> Tradición o costumbre favorita de Japón:</span> Vestimenta tradicional y luchas de sumo <br/>
                  <span style={{fontWeight:500}}> Palabra o frase japonesa favorita: </span> がんって  (esfuérzate) <br/>
                </Typography>
              </Grid>
            </Grid>

            {/*LORENA*/}
            <Grid container item md={12} direction='row' alignItems='center' justify='center'>
              <Grid container item md={6} style={{padding: '1rem'}}>
                <video width='100%' autoPlay={false} controls={true}>
                  <source src='/Lorena.mp4' type="video/mp4"/>
                </video>
              </Grid>
              <Grid container item md={6} direction='column' alignItems='center' justify='center' style={{padding: '1rem'}}>
                <Typography variant='h5' style={{color: '#FF6A13', fontWeight: 300, padding: '1%'}}>
                  Lorena-sensei
                </Typography>
                <Typography variant='subtitle1' style={{color: 'black', fontWeight: 300, padding: '1rem 0.5rem', width: '100%', textAlign: 'left'}}>
                  <span style={{fontWeight:500}}> Hobbys:</span> cine y viajes <br/>
                  <span style={{fontWeight:500}}> Comida japonesa favorita:</span> curry <br/>
                  <span style={{fontWeight:500}}> Lugar favorito de Japón:</span> Tokio <br/>
                  <span style={{fontWeight:500}}> Tradición o costumbre favorita de Japón:</span> Tanabata <br/>
                  <span style={{fontWeight:500}}> Palabra o frase japonesa favorita: </span> 頑張る (ganbaru: esforzarse) <br/>
                </Typography>
              </Grid>
            </Grid>

            {/*GILDARDO*/}
            <Grid container item md={12} direction='row-reverse' alignItems='center' justify='center'>
              <Grid container item md={6} style={{padding: '1rem'}}>
                <video width='100%' autoPlay={false} controls={true} poster="/Gildardo_thumbnail.png">
                  <source src='/Gildardo.mp4' type="video/mp4"/>
                </video>
              </Grid>
              <Grid container item md={6} direction='column' alignItems='center' justify='center' style={{padding: '1rem'}}>
                <Typography variant='h5' style={{color: '#FFB81C', fontWeight: 300, padding: '1%'}}>
                  Gildardo-sensei
                </Typography>
                <Typography variant='subtitle1' style={{color: 'black', fontWeight: 300, padding: '1rem 0.5rem', width: '100%', textAlign: 'left'}}>
                  <span style={{fontWeight:500}}> Hobbys:</span> cocinar, y aprender nuevos idiomas <br/>
                  <span style={{fontWeight:500}}> Comida japonesa favorita:</span> maguro natto <br/>
                  <span style={{fontWeight:500}}> Lugar favorito de Japón:</span> Tokyo <br/>
                  <span style={{fontWeight:500}}> Tradición o costumbre favorita de Japón:</span> el baile Bon <br/>
                  <span style={{fontWeight:500}}> Palabra o frase japonesa favorita: </span> 真の達人学び続けるものだ <br/>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item sm={1}> </Grid>
        </Grid>

        {/*WANNA BE TUTOR*/}
        <Grid container item md={12} direction='row' alignItems='center' justify='center' id='quierosertutordedisol'>
          <Grid container item sm={2}> </Grid>
          <Grid container item sm={8} direction='row' alignItems='center' justify='center'>
            <Typography variant='h4' style={{color: '#FFB81C', fontSize: '2.5rem', fontWeight: 300, padding: '1%', width: '100%', textAlign: 'center', margin:0, marginBottom:'4%'}}>
              ¿Cómo ser tutor en Disol?
            </Typography>

            <Grid container item md={5}>
              <img src='/WannaBeTutor.png' style={{width: '100%', padding: '2rem'}}/>
            </Grid>
            <Grid container item md={1}> </Grid>
            <Grid container item md={6} direction='column' alignItems='center' justify='center' style={{padding: '0 20px'}}>
              <Box id='WannaBeTutorDescription'>
                En Disol App estamos comprometidos con brindar a nuestros estudiantes el acceso a
                tutores profesionales y expertos en la enseñanza del idioma japonés. Cada uno de
                nuestros tutores está especializado en diferentes ámbitos y enseña diversos temas.
              </Box>
              <Box id='WannaBeTutorDescription'>
                Por este motivo siempre estamos en busca de nuevo talento, por lo que si estás interesad@
                y motivad@ para formar parte de nuestro equipo de tutores, mándanos un correo dando click {' '}
                <a href='mailTo:lopez.teresa@disol.mx?subject=Quiero ser un tutor de japonés en Disol App' style={{color: '#FF6A13', fontWeight: 400}}>aquí</a>
                {' '} y cuéntanos sobre ti y sobre tu experiencia como tutor de japonés.
                No te quedes con las ganas de formar parte de este increíble y nuevo proyecto. ¡Te esperamos!
              </Box>
            </Grid>
          </Grid>
          <Grid container item sm={2}> </Grid>
        </Grid>
      </DisolLayout>
    </div>
  )
}

export default Disolapp