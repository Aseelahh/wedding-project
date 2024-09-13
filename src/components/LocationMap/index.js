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

export default function LocationMap({ maxWidth, button, buttonClass, loc }) {
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
              <iframe src={loc}></iframe>
            </Grid>
          </Grid>
        </Dialog>
      </Fragment>
    </ThemeProvider>
  );
}
