import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsSkype } from "react-icons/bs";

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import { motion } from 'framer-motion';
import p from './Portfolio/Portfolio.module.css'
import { Close } from '@material-ui/icons';
import { IconButton } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  dialog: {
    position: 'relative',
    padding: theme.spacing(2),
  },
  // closeButton: {
  //   position: 'absolute',
  //   top: theme.spacing(1),
  //   right: theme.spacing(1),
  // },
}));

const PopupForm = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // ...

    handleClose();
  };


  return (
    <div className={p.div}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={p.dialog}><h2> Let's Talk</h2>
          <IconButton className={p.closeButton} onClick={handleClose}>
            <Close />
          </IconButton>
          <div className={`${p.us}.dlab-social-icon contact_dlab`}>
            <h5 id={p.header} >Reach Us On -</h5>
            <a id={p.head} className="fa fa-whatsapp con_whatsapp" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href="https://wa.me/+918696219723">
              <AiOutlineWhatsApp />
            </a>
            <a id={p.head} className="fa fa-skype con_whatsapp" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href="https://www.skype.com/dadhichtechnologies.com">
              <BsSkype />
            </a>

          </div>
        </DialogTitle>
        <DialogContent>
          <form className={p.formContainer} onSubmit={handleSubmit} method="POST" action="script/contact.php">
            {/* <TextField label="Name" variant="outlined" required />
            <TextField label="Email" variant="outlined" required />
            <TextField label="Message" variant="outlined" multiline rows={4} required /> */}
            <motion.div className="row"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div className="col-sm-12">
                <div className="input-group">
                  <input name="dzName" type="text" required className="form-control" placeholder="Full Name" />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="input-group">
                  <input name="dzEmail" type="text" required className="form-control" placeholder="Email Address" />
                </div>
              </div>
              <div className="col-sm-12" style={{
                display: 'flex'
              }}>
                <div className="input-group code_group" style={{
                  width: "20%"
                }}>
                  <input name="countrycode" type="text" required className="form-control code " placeholder="+91" style={{ 'border-top-right-radius': '0 !important;', minWidth: 'max-content !important' }} />
                </div>
                <div className="input-group phno_group" style={{
                  width: "80%"
                }}>
                  <input name="dzOther[phone]" type="text" required="" class="form-control phno" placeholder="Phone No." style={{
                    'border-bottom-left-radius': '0 !important;  '
                  }} />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="input-group">
                  <input name="dzOther[project_title]" type="text" required className="form-control" placeholder="Project Title" />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="input-group">
                  <textarea className="form-control" required placeholder="Explain Requirements"></textarea>
                </div>
              </div>

            </motion.div>
            <DialogActions>
              <Button type="submit" className={`${p.button2} btn btn-block btn-corner gradient  btn-primary" color="primary`}>
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PopupForm;
