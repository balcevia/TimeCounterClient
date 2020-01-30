import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const DialogComponent = ({isOpen, onClose, children, title, actions}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{cursor: 'move'}} id="draggable-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        {actions}
      </DialogActions>
    </Dialog>
  )
};

export default DialogComponent;