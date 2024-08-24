import React from "react";
import { Alert } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";

interface NotificationType {
  open: boolean;
  onClose: () => void;
  severity: any;
  children: any;
}

function Notification({ open, onClose, severity, children }: NotificationType) {
  return (
    <>
      <Snackbar open={open} autoHideDuration={2000} onClose={onClose}>
        <Alert variant="filled" severity={severity}>
          {children}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Notification;
