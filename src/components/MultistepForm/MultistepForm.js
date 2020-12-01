import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './MultistepForm.css';
import UserInfo from './UserInfo';
import { ChevronLeftSharp } from '@material-ui/icons';
import PaymentStatus from './PaymentStatus';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['User Information', 'Payment Selection', 'Payment Status'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <UserInfo />;
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return <PaymentStatus />;
    default:
      return 'Unknown stepIndex';
  }
}

const MultistepForm = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div className="d-flex my-5 align-items-center justify-content-between">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                {activeStep !== steps.length - 1 && <ChevronLeftSharp />}{' '}
                {activeStep === 0
                  ? 'Return'
                  : activeStep === steps.length - 1
                  ? ''
                  : 'Back to user info'}
              </Button>
              {activeStep !== steps.length - 1 && (
                <Button
                  className="multistepForm__button"
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === 0
                    ? 'Continue to pay'
                    : activeStep === steps.length - 1
                    ? ' '
                    : 'Pay Now'}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultistepForm;
