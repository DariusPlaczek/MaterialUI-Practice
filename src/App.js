import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './App.css';

import { Form, Input } from './Components/Form';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">DIALOG</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <Input margin="dense"/>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            X
          </Button>
          <Button onClick={handleClose} color="primary">
            SUBMIT
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;



// 1. Okno dialogowe
// Przygotuj komponent okna dialogowego (Dialog), który będzie się wyświetlał np. po kliknięciu w przycisk (komponent Button. Okno powinno mieć możliwość ustawienia tytułu oraz treści. Powinno zawierać też przycisk pozwalający na zamknięcie (np. czarny X lub button OK).

// Tips: Podejrzyj, jak może wyglądać taki komponent na podstawie Material UI: https://material-ui.com/components/dialogs/#customized-dialogs

// Modyfikacja
// Dodaj w oknie dwa przyciski: Confim oraz Abort. Po kliknięciu w każdy z nich powinna uruchomić się akcja (handler) przekazany z zewnątrz do tego komponentu. Na razie może to być zwykły console.log.