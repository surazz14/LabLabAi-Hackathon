import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

interface ModelType {
  open?: boolean;
  handleClose?: () => void;
  title?: string;
  children?: any;
  otherProps?:any;
  fullWidth?:any
}

function Model({ open = false, handleClose, title, children, fullWidth }: ModelType) {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      {title && <DialogTitle >{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
export default Model;
