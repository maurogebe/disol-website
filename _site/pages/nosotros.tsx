import React          from 'react'
import Head           from 'next/head';
import {DisolLayout}  from '../src/layout/DisolLayout'

import {Grid}         from "@material-ui/core";
import Typography     from "@material-ui/core/Typography";


function Nosotros(){
  return(
    <div>
      <Head>
        <title>Disol: Nosotros</title>
      </Head>

      <DisolLayout>
        <Grid container item md={12} >
          <div style={{width: '100%', height:'55vw', maxHeight:'95vh', backgroundImage: "url(/Portada2.png)", backgroundSize:'cover'}}/>
        </Grid>

        <Grid container item md={12} direction='column' alignItems='center' justify='center' id='ReasonsContainer' style={{backgroundColor: 'white', padding: 15}}>
          <Typography variant='h4' style={{color: '#FF6A13', fontWeight: 300, fontSize: '2.5rem', padding: '2% 2% 1% 2%', width: '100%', textAlign: 'center', margin:0}}>
            Disol Consulting en breve...
          </Typography>

          <Grid container direction='row-reverse' alignItems='center' justify='center' >
            <Grid container item sm={1}> </Grid>
            <Grid container item sm={6} direction='column' alignItems='center' justify='center'>
              <Typography variant='subtitle1' style={{textAlign: 'justify', padding: '2vh 1vh'}}>
                <span style={{fontWeight: 500, color: '#C8102E'}}> Diversity Solutions Consulting </span>
                es una Sociedad Civil (S.C) que tiene sus inicios en la Incubadora de Alto Impacto TEC LEAN. Disol fue una de las
                <span style={{fontWeight: 500, fontStyle: 'italic'}}> startups </span> creada en el 2016.
                Con la iniciativa de 2 estudiantes del Tecnológico de Monterrey junto con el emprendedor Ken Kimata, se creo Disol con
                el fin de proveer soluciones en el área de RH a las empresas japonesas establecidas en la región del Bajío.

                Comenzamos apoyando a dichas empresas con intérpretes y traductores especializados en diversas áreas
                para apoyar en actividades relacionadas a la industria y en asuntos de materia contable.
                Más tarde incorporamos cursos de capacitación relacionados a materia fiscal y legal en México.
                Actualmente Disol está registrada como Agente Capacitador Externo ante la STPS.
              </Typography>

              <Typography variant='subtitle1' style={{textAlign: 'justify', padding: '2vh 1vh'}}>
                De algo de lo que nos percatamos al proveer nuestros servicios es que la mejor manera para contribuir a disminuir
                las diferencias y diversos problemas que presentan las empresas japonesas en México es si ambas partes se esfuerzan
                en conocer un poco más sobre la cultura y el idioma del otro. Es por ello que en el 2018 comenzamos con un nuevo proyecto: {' '}
                <a href='/disolapp' style={{fontWeight: 500, color: '#FFB81C'}}>Aprende japonés con Disol App</a>. Con dicho proyecto buscamos generar
                un mayor interés en la población hispanohablante para aprender japonés y conocer más a fondo la cultura japonesa.
                Ha sido un largo camino desde que concebimos dicha idea, pero seguimos trabajando arduamente para cumplir nuestros objetivos.
              </Typography>
            </Grid>
            <Grid container item sm={3} direction='row'>
              <img src='/DisolLogo.png' style={{width: '100%', padding: '25px'}}/>
              <img src='/TecLean.png' style={{width: '50%', padding: '25px'}}/>
              <img src='/TecMty.jpg' style={{width: '50%', padding: '25px'}}/>
            </Grid>
            <Grid container item sm={1}> </Grid>
          </Grid>
        </Grid>

        <Grid container item md={12} direction='column' alignItems='center' justify='center' id='ReasonsContainer' style={{backgroundColor: 'white', padding: 15}}>
          <Typography variant='h4' style={{color: '#FF6A13', fontWeight: 300, fontSize: '2.5rem', padding: '2% 2% 1% 2%', width: '100%', textAlign: 'center', margin:0}}>
            Nuestro equipo
          </Typography>

          <Grid container direction='row' alignItems='center' justify='center' >
            <Grid container item sm={1}> </Grid>
            <Grid container item sm={9} direction='row' alignItems='stretch' justify='center'>
              <Grid container item sm={3} direction='column' alignItems='center' justify='center' id='ReasonsBox'>
                <img src='/Kimata2.jpg' style={{width: '88%',  margin:0, marginBottom: 25, borderRadius: '50%'}}/>
                <Grid container justify='center' id='ReasonTitle'>
                  Kenichi Kimata
                </Grid>
                <Grid container id='ReasonDescription'>
                  Kimatasan es un emprendedor nato que siempre busca nuevos caminos para innovar.
                  Él se encarga de atraer clientes potenciales y de cerrar negocios con ellos.
                  Ken es conocido entre la comunidad japonesa en México.
                </Grid>
              </Grid>

              <Grid container item sm={3} direction='column' alignItems='center' justify='center' id='ReasonsBox'>
                <img src='/Teresa.png' style={{width: '88%',  margin:0, marginBottom: 25, borderRadius: '50%'}}/>
                <Grid container justify='center' id='ReasonTitle'>
                  Teresa van Dam
                </Grid>
                <Grid container id='ReasonDescription'>
                  Tere tiene un máster en Data Science. Ella se encarga del manejo, administración y mejoras de la App.
                  Le fascina generar nuevas estrategias de negocio para Disol y coordina el marketing de nuestra nueva App.
                </Grid>
              </Grid>

              <Grid container item sm={3} direction='column' alignItems='center' justify='center' id='ReasonsBox'>
                <img src='/Gustavo2.jpg' style={{width: '88%',  margin:0, marginBottom: 25, borderRadius: '50%'}}/>
                <Grid container justify='center' id='ReasonTitle'>
                  Gustavo López
                </Grid>
                <Grid container id='ReasonDescription'>
                  Gus es Ingeniero Mecatrónico y actualmente estudia una maestría. Él se encarga de las finanzas en Disol.
                  Ama la cultura japoonesa, los animes, y el japonés. Lleva más de 8 años estudiando el idioma y le encanta
                  enseñar japonés.
                </Grid>
              </Grid>
            </Grid>
            <Grid container item sm={1}> </Grid>
          </Grid>
        </Grid>

        <Grid container item md={12} direction='column' alignItems='center' justify='center' id='ReasonsContainer' style={{backgroundColor: 'white', padding: 15}}>
          <Typography variant='h4' style={{color: '#FF6A13', fontWeight: 300, fontSize: '2.5rem', padding: '2% 2% 1% 2%', width: '100%', textAlign: 'center', margin:0}}>
            Nuestros aliados
          </Typography>

          <Grid container direction='row-reverse' alignItems='center' justify='center' >
            <Grid container item sm={1}> </Grid>
            <Grid container item sm={3} >
              <img src='/DCF_Logo.jpg' style={{width: '100%', padding: '35px'}}/>
            </Grid>
            <Grid container item sm={6} direction='column' alignItems='center' justify='center'>
              <Typography variant='subtitle1' style={{textAlign: 'justify', padding: '2vh 1vh'}}>
                Disol Consulting forma parte del grupo <span style={{fontWeight: 500, color: '#C8102E'}}> Dai Kigyo ® Consulting Firms</span>,
                el cual fue creado para atender la necesidad de las empresas de capital japonés en el sector automotriz. Dai Kigyo ® congrega
                profesionistas especializados en diversas áreas, no solo industriales u operativas, sino también personales y enfocadas a la
                enseñanza del idioma japonés a hispanohablantes. Es en ésta última área donde Diversity Solutions Consulting está más enfocado.
              </Typography>
            </Grid>
            <Grid container item sm={1}> </Grid>

            <Grid container item sm={6} justify='center'>
              <img src='/DaiKigyo.jpg' style={{width: '100%', padding: '2% 8%'}}/>
            </Grid>
          </Grid>
        </Grid>
      </DisolLayout>
    </div>
  )
}

export default Nosotros