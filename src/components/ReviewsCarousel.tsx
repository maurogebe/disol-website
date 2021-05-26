import React                    from 'react';
import MobileStepper            from '@material-ui/core/MobileStepper';
import {Grid}                   from "@material-ui/core";

import Typography               from '@material-ui/core/Typography';
import Button                   from '@material-ui/core/Button';
import KeyboardArrowLeft        from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight       from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews           from 'react-swipeable-views';
import { autoPlay }             from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const tutorialSteps = [
  {
    title: 'Los tutores son geniales y enseñan de la mejor manera',
    description: 'Super a gusto con las clases en línea de Disol, una manera fácil de aprender y super divertida. Los maestros son geniales y siempre procuran que aprendas bien y de la mejor manera. Sin dudarlo recomiendo las clases en línea de Disol. Es una oportunidad que no pueden dejar ir. ¡Felicitaciones, y gracias por su excelente trabajo!',
    person: '- Alejandra',
    imgPath:
      '/review_ale.jpg',
  },
  {
    title: 'Me encantan las clases grupales con mi sensei',
    description: 'Me gustan las clases virtuales de Disol pues se ajustan a mi horario y mi sensei me brinda herramientas que me facilitan el aprendizaje del idioma. Para cualquier nivel siempre tendrán algo que te ayude a mejorar tus habilidades de lectura y escritura. El material de estudio, herramientas y retroalimentación siempre están al alcance de todos los alumnos.',
    person: '- Wendy',
    imgPath:
      '/review_wendy.jpg',
  },
  {
    title: '¡La mejor app para prepararme para el JLPT!',
    description: 'Siempre aclaro mis dudas y aprendo cosas nuevas con técnicas excelentes. Después de unos meses ya me siento preparada para tomar el examen N4. ¡Deséenme éxito!',
    person: '- Ana',
    imgPath:
      '/Review1.jpg',
  },
  {
    title: 'Me encanta Disol App, es algo diferente...',
    description: 'Nada de sistemas robotizados. El buen trato de los profesores es genuino y el material de los cursos es de calidad. Sin duda fue una buena herramienta para alistarme para visitar Japón. ¡Gracias por todo!',
    person: '- Marie',
    imgPath:
      '/Review2.jpg',
  },
];

function ReviewsCarousel() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div id='CarouselBox'>
      <Grid container id='CarouselText' justify='center'>
        <Typography variant='h5' id='CarouselTitle'>
          {tutorialSteps[activeStep].title}
        </Typography>
      </Grid>
      <AutoPlaySwipeableViews
        axis={'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        interval={10000}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.title}>
            {Math.abs(activeStep - index) <= 2 ?
              (
                <Grid container item md={12} direction='row' justify='center' className='carouselContainer'>
                  <Grid container item sm={6} justify='center' alignItems='center' style={{padding: 10}}>
                    <Typography variant='subtitle1' style={{fontWeight: 300}} id='CarouselTextDescription'>
                      {tutorialSteps[activeStep].description}
                    </Typography>

                    <Typography variant='subtitle1' style={{fontWeight: 500}} id='CarouselTextDescription'>
                      {tutorialSteps[activeStep].person}
                    </Typography>
                  </Grid>
                  <Grid container item sm={5} justify='center' alignItems='center' style={{padding: 10, backgroundColor: 'ghostWhite'}}>
                    <img src={step.imgPath} className='imgCarousel'/>
                  </Grid>
                </Grid>
              )
              : null
            }
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        style={{backgroundColor: 'ghostWhite', padding: 20, borderBottom: '2px solid #FFB81C'}}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
          </Button>
        }
      />
    </div>
  );
}

export default ReviewsCarousel;
