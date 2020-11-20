import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function MaterialUI() {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('Tytuł');
    const [content, setContent] = useState('Zmien swoj Tytuł i Treści ');
    const [cacheTitle, setCacheTitle] = useState('');
    const [cacheContent, setCacheContent] = useState('');

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
      setCacheTitle('');
      setCacheContent('');
    };

    const handleChange = () => {
      setOpen(false);
      setTitle(cacheTitle);
      setContent(cacheContent);
    };

    return (
        <>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Dialog
       </Button>
        <Dialog open={open} onClose={handleChange} aria-labelledby="form-dialog-title">
         <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <DialogContent>
            <DialogContentText>
                {content}
            </DialogContentText>
            <Input
                autoFocus
                id="title"
                margin="dense"
                label="Tytuł"
                type="title"
                onChange={(event) => setCacheTitle(event.target.value)}
            />
            <TextField
                margin="dense"
                id="conten"
                label="Treści"
                type="content"
                onChange={(event) => setCacheContent(event.target.value)}
                fullWidth
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleChange} color="primary">
                SUBMIT
            </Button>
            <Button onClick={handleClose} color="primary">
                X
            </Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default MaterialUI
