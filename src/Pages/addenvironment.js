import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider } from '@mui/material';

export default function AddEnvironment() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
    <Button variant="contained" onClick={handleClickOpen} sx={{textTransform:"none", backgroundColor:"#0831ff"}}><b>Add Environment</b></Button>
      
      <Dialog
        open={open}
        onClose={handleClose}
        

      >
        <DialogTitle>Add Environment</DialogTitle>
        <Divider/>
        <DialogContent >
          
          <TextField
            autoFocus
            required
            margin="dense"
            label="Name"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            label="Base url"
            fullWidth
            variant="standard"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
