import React, { Fragment } from "react";

import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import MuiDialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function LocationMap({ maxWidth, button, buttonClass }) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <i className="ti-close"></i>
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Button className={`btn ${buttonClass}`} onClick={handleClickOpen}>
          {button}
          See Location
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          className="modalWrapper quickview-dialog"
          maxWidth={maxWidth}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Location Map
          </DialogTitle>
          <Grid className="modalBody modal-body">
            <Grid className="modalBody modal-body">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"></iframe>
            </Grid>
          </Grid>
        </Dialog>
      </Fragment>
    </ThemeProvider>
  );
}
