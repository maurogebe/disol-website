import React            from 'react'
import Head             from 'next/head';
import Link             from "next/link";
import {DisolLayout}    from "../src/layout/DisolLayout";

import Grid             from "@material-ui/core/Grid";
import Box              from "@material-ui/core/Box";
import Typography       from "@material-ui/core/Typography";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import ReviewsCarousel  from "../src/components/ReviewsCarousel";
import HowItWorks       from "../src/components/HowItWorks";



function HomePage(){
  return(
    <div>
      <Head>
        <title>Aprende japonés con Disol</title>
      </Head>

      <DisolLayout>
        <Grid container item md={12} >
          <div style={{width: '100%', height:'55vw', maxHeight:'95vh', backgroundImage: "url(/Portada1.png)", backgroundSize:'cover'}}/>
        </Grid>

        {/*POR QUÉ DISOL?*/}
        <Grid container item md={12} direction='column' alignItems='center' justify='center' id='ReasonsContainer'>
          <Typography variant='h4' style={{color: '#FF6A13', fontSize: '2.5rem', fontWeight: 300, padding: '1%'}}>
            ¿Por qué Disol App?
          </Typography>

          <Grid container item md={12}  alignItems='stretch' justify='center'>
            <Grid container item md={2} direction='column' alignItems='center' justify='center' id='ReasonsBox'>
              <img src='/expert.png' style={{height: 120,  margin:25}}/>
              <Grid container justify='center' id='ReasonTitle'>
                Tutores Expertos
              </Grid>
              <Grid container id='ReasonDescription'>
                Nuestros tutores son hablantes nativos o expertos en la enseñanza del idioma japonés.
              </Grid>
            </Grid>

            <Grid container item md={2} direction='column' alignItems='center' justify='center' id='ReasonsBox'>
              <img src='/classes.png' style={{width: 120,  margin:25}}/>
              <Grid container justify='center' id='ReasonTitle'>
                Clases a tu medida
              </Grid>
              <Grid container id='ReasonDescription'>
                Los tutores enseñan con las mejores didácticas para tu aprendizaje. Tu tutor siempre estará para ayudarte y resolver tus dudas.
              </Grid>
            </Grid>

            <Grid container item md={2} direction='column' alignItems='center' justify='center' id='ReasonsBox'>
              <img src='/savings.png' style={{width: 120,  margin:25}}/>
              <Grid container justify='center' id='ReasonTitle'>
                Excelente calidad al mejor precio
              </Grid>
              <Grid container id='ReasonDescription'>
                Disol App ofrece clases gratis, de paga y videollamadas con material de calidad
                y al mejor precio.
              </Grid>
            </Grid>

            <Grid container item md={2} direction='column' alignItems='center' justify='center' id='ReasonsBox'>
              <img src='/home.png' style={{width: 120,  margin:25}}/>
              <Grid container justify='center' id='ReasonTitle'>
                En cualquier lugar y momento
              </Grid>
              <Grid container id='ReasonDescription'>
                Toma tus clases en línea desde donde quieras y cuando quieras.
                Manejamos horarios flexibles.
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* POSTER: CLASES ONLINE */}
        <Grid container item md={12} direction='row' justify='flex-end' alignItems='flex-end' style={{position: 'relative'}}>
          <div id='ImgContainer1' style={{backgroundImage: "url(/disol_all_tutors.png)", backgroundPosition: 'bottom center'}}/>
          <div id='ImgContainer1Text'>
            <Grid container item lg={8}> </Grid>
            <Grid container item lg={4} direction='row' justify='flex-start' alignItems='flex-end' style={{padding: '1rem 0'}}>
              <Typography variant= 'h5' style={{textAlign: 'left', marginBottom: '0.5rem', color:'#C8102E', padding: '1.4rem'}} id='Text1Container'>
                ¡Aprendamos Japonés juntos!  <br/> <br/>

                <span style={{color: 'black', fontWeight:400, lineHeight: 1.75, fontSize:'1.1rem', textAlign: 'left'}} id='DescriptionTextBox'>
                  Nuestros tutores te ayudarán a que aprendas japonés de la mejor manera con clases divertidas y material didáctico de primera calidad.
                </span>
              </Typography>
            </Grid>
          </div>
        </Grid>

        {/*TUTORES*/}
        <Grid container item md={12} direction='column' alignItems='center' justify='center' id='ReasonsContainer' style={{backgroundColor: 'white'}}>
          <Typography variant='h4' style={{color: '#FFB81C', fontSize: '2.5rem', fontWeight: 300, padding: '1%'}}>
            Nuestro equipo de tutores
          </Typography>

          <Grid container item md={12} alignItems='stretch' justify='center'>
            {/*MAKOTO*/}
            <Grid container item md={3} direction='row' alignItems='stretch' id='TutorsBox' style={{borderBottom: '#FFB81C solid 2px'}}>
              <Grid container item md={6}>
                <img src='/Makoto.jpg' style={{width: '100%'}}/>
              </Grid>
              <Grid container item md={6} direction='column' alignItems='center' justify='center'>
                <Grid container justify='center' id='TutorsName'>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> 河野 慎 </p>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> (Makoto Kawano)</p>
                </Grid>

                <Grid container justify='center' id='TutorsDescription'>
                  <p style={{width: '100%', textAlign: 'center', margin:0, marginBottom:10, padding:0}}> ¡Aprender es divertido! </p>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> 学びは楽しい</p>
                </Grid>
              </Grid>
            </Grid>

            {/*GUS*/}
            <Grid container item md={3} direction='row' alignItems='stretch' id='TutorsBox' style={{borderBottom: '#FFB81C solid 2px'}}>
              <Grid container item md={6}>
                <img src='/Gustavo.jpg' style={{width: '100%'}}/>
              </Grid>
              <Grid container item md={6} direction='column' alignItems='center' justify='center'>
                <Grid container justify='center' id='TutorsName'>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> グスタボ </p>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> (Gustavo Iván López)</p>
                </Grid>

                <Grid container justify='center' id='TutorsDescription'>
                  <p style={{width: '100%', textAlign: 'center', margin:0, marginBottom:10, padding:0}}> Cae 7 veces y párate 8 </p>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> 七転び八起き </p>
                </Grid>
              </Grid>
            </Grid>

            {/*ANGELICA*/}
            <Grid container item md={3} direction='row' alignItems='stretch' id='TutorsBox' style={{borderBottom: '#FFB81C solid 2px'}}>
              <Grid container item md={6}>
                <img src='/Angelica.png' style={{width: '100%'}}/>
              </Grid>
              <Grid container item md={6} direction='column' alignItems='center' justify='center'>
                <Grid container justify='center' id='TutorsName'>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> アンへリカ </p>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> (Angélica Cabezas)</p>
                </Grid>

                <Grid container justify='center' id='TutorsDescription'>
                  <p style={{width: '100%', textAlign: 'center', margin:0, marginBottom:10, padding:0}}> El que persevera alcanza </p>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> 継続は力なり </p>
                </Grid>
              </Grid>
            </Grid>

            {/*PAOLO*/}
            <Grid container item md={3} direction='row' alignItems='stretch' id='TutorsBox' style={{borderBottom: '#C8102E solid 2px'}}>
              <Grid container item md={6}>
                <img src='/Paolo.png' style={{width: '100%'}}/>
              </Grid>
              <Grid container item md={6} direction='column' alignItems='center' justify='center'>
                <Grid container justify='center' id='TutorsName' style={{color: '#C8102E'}}>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> ひろしま パオロ</p>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> (Paolo Hiroshima)</p>
                </Grid>

                <Grid container justify='center' id='TutorsDescription'>
                  <p style={{width: '100%', textAlign: 'center', margin:0, marginBottom:10, padding:0}}> Un aprendizaje natural </p>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> 自然に学ぼう</p>
                </Grid>
              </Grid>
            </Grid>

            {/*SEIKI*/}
            <Grid container item md={3} direction='row' alignItems='stretch' id='TutorsBox' style={{borderBottom: '#C8102E solid 2px'}}>
              <Grid container item md={6}>
                <img src='/Seiki.png' style={{width: '100%'}}/>
              </Grid>
              <Grid container item md={6} direction='column' alignItems='center' justify='center'>
                <Grid container justify='center' id='TutorsName' style={{color: '#C8102E'}}>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> 藤本誠起 </p>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}>  (Juan Carlos Fujimoto) </p>
                </Grid>

                <Grid container justify='center' id='TutorsDescription'>
                  <p style={{width: '100%', textAlign: 'center', margin:0, marginBottom:10, padding:0}}> ¡Aprendamos de forma divertida! </p>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> 楽しく覚えましょう </p>
                </Grid>
              </Grid>
            </Grid>

            {/*MATEO*/}
            <Grid container item md={3} direction='row' alignItems='stretch' id='TutorsBox' style={{borderBottom: '#C8102E solid 2px'}}>
              <Grid container item md={6}>
                <img src='/Mateo.png' style={{width: '100%'}}/>
              </Grid>
              <Grid container item md={6} direction='column' alignItems='center' justify='center'>
                <Grid container justify='center' id='TutorsName' style={{color: '#C8102E'}}>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> マテオ </p>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> (Mateo Ruiz)</p>
                </Grid>

                <Grid container justify='center' id='TutorsDescription'>
                  <p style={{width: '100%', textAlign: 'center', margin:0, marginBottom:10, padding:0}}> Es hora de japonés con Mateo </p>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> 日本語の 時間 と マテオ </p>
                </Grid>
              </Grid>
            </Grid>

            {/*GILDARDO*/}
            <Grid container item md={3} direction='row' alignItems='stretch' id='TutorsBox' style={{borderBottom: '#FF6A13 solid 2px'}}>
              <Grid container item md={6}>
                <img src='/Gildardo.jpg' style={{width: '100%'}}/>
              </Grid>
              <Grid container item md={6} direction='column' alignItems='center' justify='center'>
                <Grid container justify='center' id='TutorsName' style={{color: '#FF6A13'}}>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> ペレス・ヒルダルド </p>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> (Gildardo Pérez) </p>
                </Grid>

                <Grid container justify='center' id='TutorsDescription'>
                  <p style={{width: '100%', textAlign: 'center', margin:0, marginBottom:10, padding:0}}> Si puedes imaginarlo, puedes lograrlo. </p>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> 何かが思い描ければ、そうできる </p>
                </Grid>
              </Grid>
            </Grid>

            {/*LORENA*/}
            <Grid container item md={3} direction='row' alignItems='stretch' id='TutorsBox' style={{borderBottom: '#FF6A13 solid 2px'}}>
              <Grid container item md={6}>
                <img src='/Lorena.png' style={{width: '100%'}}/>
              </Grid>
              <Grid container item md={6} direction='column' alignItems='center' justify='center'>
                <Grid container justify='center' id='TutorsName' style={{color: '#FF6A13'}}>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> ロレーナ </p>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> (Lorena Jiménez)</p>
                </Grid>

                <Grid container justify='center' id='TutorsDescription'>
                  <p style={{width: '100%', textAlign: 'center', margin:0, marginBottom:10, padding:0}}> Los errores son la base del éxito </p>
                  <p style={{width: '100%', textAlign: 'center', margin:0, padding:0}}> 失敗は成功のもと </p>
                </Grid>
              </Grid>
            </Grid>

            {/*CONOCE A LOS TUTORES*/}
            <Grid container item md={12} direction='row' justify='center' style={{padding: '2rem 0.5rem'}}>
              <Grid container item md={1}> </Grid>
              <Grid container item md={10} direction='column' justify='center' alignItems='center'>
                <Link href="/nuestrostutores">
                  <a id='Discover' style={{color:'#FFB81C'}}>
                    ¡Conoce un poco más sobre cada uno de nuestros tutores! <ArrowForwardIcon style={{color: '#FFB81C'}}/>
                  </a>
                </Link>
              </Grid>
              <Grid container item md={1}> </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* POSTER: TUTORES */}
        <Grid container item md={12} direction='row' justify='flex-end' alignItems='flex-end' style={{position: 'relative'}}>
          <div id='ImgContainer1' style={{backgroundImage: "url(/fondo_app.jpg)"}}/>
          <div id='ImgContainer1Text'>
            <Grid container item lg={4} direction='row' justify='flex-start' alignItems='flex-end' style={{padding: '1rem 0'}}>
              <Typography variant= 'h5' style={{textAlign: 'left', marginBottom: '0.5rem', color:'#C8102E', padding: '1.4rem'}} id='Text1Container'>
                ¡Encuentra a tu tutor! <br/> <br/>

                <span style={{color: 'black', fontWeight:400, lineHeight: 1.75, fontSize:'1.1rem', textAlign: 'left'}} id='DescriptionTextBox'>
                   En Disol App puedes tener acceso a una amplia variedad de cursos tanto gratuitos como de paga que ofrecen nuestros tutores.
                   ¡Elige al tutor que más te agrede y envíale un chat para agendar tu primera clase virtual!
                </span>
              </Typography>
            </Grid>
            <Grid container item lg={8}> </Grid>
          </div>
        </Grid>

        {/*DISOL APP*/}
        <Grid container item md={12} direction='column' alignItems='center' justify='center' id='ReasonsContainer'>
          <Typography variant='h4' style={{color: '#FF6A13', fontSize: '2.5rem', fontWeight: 300, padding: '1%'}}>
            ¿Cómo funciona Disol App?
          </Typography>

          <Grid container direction='row' alignItems='stretch' justify='center'>
            <Grid container item sm={1}> </Grid>
            <Grid container item sm={10} direction='column' alignItems='center' justify='center'>
              <HowItWorks />
            </Grid>
            <Grid container item sm={1}> </Grid>
          </Grid>

          <Grid container item md={12} direction='row' justify='center' style={{padding: '0,5rem'}}>
            <Grid container item md={1}> </Grid>
            <Grid container item md={10} direction='column' justify='center' alignItems='center'>
              <Link href="/disolapp">
                <a id='Discover' style={{color:'#FF6A13'}}>
                  ¡Descubre más sobre nuestra app! <ArrowForwardIcon style={{color: '#FF6A13'}}/>
                </a>
              </Link>
            </Grid>
            <Grid container item md={1}> </Grid>
          </Grid>
        </Grid>

        {/* POSTER: CLASES ONLINE */}
        <Grid container item md={12} direction='row' justify='flex-end' alignItems='center' style={{position: 'relative'}}>
          <div id='ImgContainer1' style={{backgroundImage: "url(/clases_online.jpg)"}}/>
          <div id='ImgContainer1Text'>
            <Grid container item lg={8}> </Grid>
            <Grid container item lg={4} direction='row' justify='flex-start' alignItems='flex-end' style={{padding: '1rem 0'}}>
              <Typography variant= 'h5' style={{textAlign: 'left', marginBottom: '0.5rem', color:'#C8102E', padding: '1.4rem'}} id='Text1Container'>
                ¡Cursos grupales desde casa! <br/> <br/>

                <span style={{color: 'black', fontWeight:400, lineHeight: 1.75, fontSize:'1.1rem', textAlign: 'left'}} id='DescriptionTextBox'>
                  Aprende Japonés de una manera divertida desde la comodidad de tu casa junto con más personas que al igual que tú les fascina Japón y su cultura.
                  Recibe atención personalizada de parte de nuestros tutores. Nuestros alumnos son lo más importante para nosotros.
                </span>
              </Typography>
            </Grid>
          </div>
        </Grid>

        {/*CLASES GRUPALES*/}
        <Grid container item md={12} direction='column' alignItems='center' justify='center' id='ReasonsContainer'>
          <Typography variant='h4' style={{color: '#C8102E', fontSize: '2.5rem', fontWeight: 300, padding: '1%'}} id='clasesgrupales'>
            Nuestras clases grupales
          </Typography>

          <Grid container direction='row' alignItems='center' justify='center' style={{padding: '3.5rem 0 0'}}>
            <Grid container item sm={1}> </Grid>
            <Grid container item md={5} alignItems='center' justify='center'>
              <img src='/clase_grupal.jpg' style={{width: '100%'}}/>
            </Grid>

            <Grid container item md={5} alignItems='center' justify='flex-start' style={{padding: '1rem 3rem'}}>
              <Typography variant='subtitle1' id='TextGroupLessons'>
                En nuestras clases grupales podrás aprender japonés junto con otras personas de una manera única y divertida. Nuestros cursos son intensivos
                y te ayudarán a aprender japonés rápidamente a través de actividades, tareas, quizzes y dinámicas pensadas para ti. Te ofrecemos: <br/>

                <ul style={{marginTop: '1rem'}}>
                  <li style={{color:'#C8102E'}}>Niveles para todas las edades desde básico hasta avanzado.</li>
                  <li style={{color:'#C8102E'}}>Clases divertidas.</li>
                  <li style={{color:'#C8102E'}}>Grupos reducidos.</li>
                  <li style={{color:'#C8102E'}}>Precios accesibles.</li>
                  <li style={{color:'#C8102E'}}>Material didáctico de excelente calidad.</li>
                  <li style={{color:'#C8102E'}}>Excelentes técnicas de aprendizaje.</li>
                  <li style={{color:'#C8102E'}}>Certificado de nivel.</li>
                </ul>
              </Typography>
            </Grid>
            <Grid container item sm={1}> </Grid>
          </Grid>
        </Grid>

        {/*HISTORIAS DE EXITO*/}
        <Grid container item md={12} direction='column' alignItems='center' justify='center' id='ReasonsContainer' style={{backgroundColor: 'ghostWhite'}}>
          <Typography variant='h4' style={{color: '#FFB81C', fontSize: '2.5rem', fontWeight: 300, padding: '1%'}}>
            Nuestras historias de éxito
          </Typography>

          <Grid container direction='row' alignItems='stretch' justify='center'>
            <Grid container item sm={1} style={{backgroundColor: 'ghostWhite'}}> </Grid>
            <Grid container item sm={10} direction='column' alignItems='center' justify='center' style={{backgroundColor: 'ghostWhite'}}>
              <ReviewsCarousel />
            </Grid>
            <Grid container item sm={1} style={{backgroundColor: 'ghostWhite'}}> </Grid>
          </Grid>
        </Grid>
      </DisolLayout>
    </div>
  )
}

export default HomePage