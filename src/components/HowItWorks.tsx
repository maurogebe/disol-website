import React        from "react";
import {Grid}       from "@material-ui/core";
import Typography   from "@material-ui/core/Typography";
import Box          from "@material-ui/core/Box";


function HowItWorks() {
  return(
    <Grid container item md={12} direction='column' alignItems='center' justify='center' style={{padding: 20}}>
      <Grid container direction='row' alignItems='center' justify='center' style={{padding: 15}}>
        <Grid container item sm={2}> </Grid>
        <Grid container item sm={4} direction='column' alignItems='center' justify='center' style={{padding: 25}}>
          <Typography variant='h5' id='TitleHowItWorks'>
            <img src='/1.png' style={{width: 25, marginRight: 5}}/> Elige el tutor perfecto para ti
          </Typography>
          <Box id='DescriptionHowItWorks'>
            Escoge de entre los tutores disponibles en Disol App.
            Puedes hacer click aquí para ver sus videos de presentación
            en los que puedes ver lo que te puede ofrecer cada uno de ellos.
          </Box>
        </Grid>
        <Grid container item sm={4} direction='column' alignItems='center' justify='center'>
          <img src='/tutor.png' id='ImgHowItWorks'/>
        </Grid>
        <Grid container item sm={2}> </Grid>
      </Grid>

      <Grid container direction='row-reverse' alignItems='stretch' justify='center' style={{padding: 15}}>
        <Grid container item sm={2}> </Grid>
        <Grid container item sm={4} direction='column' alignItems='center' justify='center' style={{padding: 25}}>
          <Typography variant='h5' id='TitleHowItWorks'>
            <img src='/2.png' style={{width: 25}}/> Elige el tema y modalidad de clase
          </Typography>
          <Box id='DescriptionHowItWorks'>
            Utiliza el Chat de Disol App y consulta con tu tutor la mejor opción para aprender
            y poder lograr tus metas: curso en línea o una clase virtual (videollamada).
          </Box>
        </Grid>
        <Grid container item sm={4} direction='column' alignItems='center' justify='center'>
          <img src='/chat.png' id='ImgHowItWorks'/>
        </Grid>
        <Grid container item sm={2}> </Grid>
      </Grid>

      <Grid container direction='row' alignItems='stretch' justify='center' style={{padding: 15}}>
        <Grid container item sm={2}> </Grid>
        <Grid container item sm={4} direction='column' alignItems='center' justify='center' style={{padding: 25}}>
          <Typography variant='h5' id='TitleHowItWorks'>
            <img src='/3.png' style={{width: 25, marginRight: 5}}/> Disfruta de tu curso o clase virtual
          </Typography>
          <Box id='DescriptionHowItWorks'>
            Descarga el curso del tema que hayas elegido o agenda una  clase virtual con tu tutor.
            Aprende al máximo, resuelve tus dudas y obtén retroalimentación profesional cuando lo necesites!
          </Box>
        </Grid>
        <Grid container item sm={4} direction='column' alignItems='center' justify='center'>
          <img src='/videocall.png' id='ImgHowItWorks'/>
        </Grid>
        <Grid container item sm={2}> </Grid>
      </Grid>
    </Grid>
  )
}

export default HowItWorks