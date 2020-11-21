import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function MaterialUI() {
  const [open, setOpen] = useState(false);
  const [answerStyle, setAnswerStyle] = useState('none');
	const [answerBG, setAnswerBG] = useState('red')
  const [answerText, setAnswerText] = useState('Zla odpowiedz')

  const styles = {
      display: answerStyle,
			backgroundColor: answerBG,
			color: '#FFFFFF',
			fontSize: 40,
			marginTop: 25
  }

  useEffect(() => {
    if (answerStyle !== 'none') {
        setTimeout(() => {
            setAnswerStyle('none')
        }, 2500);
    }
  }, [answerStyle])


  const handleClickOpen = () => {
    setOpen(true);
  };

  const falseAnswer = () => {
    setOpen(false);
    setAnswerStyle('block');
		setAnswerBG('red');
		setAnswerText('Zla odpowiedz');

  };

  const rightAnswer = () => {
  setOpen(false);
	setAnswerStyle('block');
	setAnswerBG('green');
  setAnswerText('Dobra Odpowiedz');
};

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Otwórz mnie
      </Button>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">HODOR IPSUM</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor...
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Jaka jest prawidłowa odpowiedz?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={falseAnswer} color="primary">
          HARRY POTTER
          </Button>
          <Button onClick={rightAnswer} color="primary" >
            GRA O TRON
          </Button>
          <Button onClick={falseAnswer} color="primary">
            PULP FICTION
          </Button>
          <Button onClick={falseAnswer} color="primary">
            FORREST GUMPT
          </Button>
        </DialogActions>
      </Dialog>
        <div className="MuiButton-root" style={styles}>{answerText}</div>
    </div>
  );
}

export default MaterialUI
