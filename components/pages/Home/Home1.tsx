import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [

  {
    label: 'Charika  ',
    imgPath:
'https://www.charika.ma/mosaic_img/LOGO_CHARIKA_P1.png'

},

  {
    label: 'Renault ',
    imgPath:
'3.png'  },
  {
    label: 'CloudVision',
    imgPath:
      'https://repository-images.githubusercontent.com/165748957/f8548780-e7a9-11ea-8a31-547927fb54e1 ',
  },
  {
    label: 'Charika  ',
    imgPath:
'https://www.charika.ma/mosaic_img/LOGO_CHARIKA_P1.png'

},
{
  label: 'Yazaki  ',
  imgPath:
'4.png'

},

{
  label: 'libre entreprise  ',
  imgPath:
'https://libreentreprise.ma/wp-content/uploads/2019/02/tmsa-LOGO.jpg'

},
{
  label: 'stg  ',
  imgPath:
'ttps://www.stg.ma/site2/images/logo.png'

},

];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    flexGrow: 1,
	
	marginLeft: theme.spacing(12),

  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(6),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 200,
    display: 'block',
    maxWidth: 600,
    overflow: 'hidden',
    width: '100%',

  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
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
    <div className={classes.root}>
      <Paper square elevation={0} >
        <Typography align="center" variant="h4" component="h5" >{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;
