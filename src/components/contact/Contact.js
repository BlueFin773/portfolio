import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { makeStyles, Typography, Button } from '@material-ui/core';

//status message on email send
const Result = () =>{
  return(<p>Your message was sent successfully.</p>);
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        width: '100%',
        backgroundColor: "#C93C67",
        flexDirection: 'column',
        paddingTop: 30,
        paddingBottom: 50,
    },
    form: {
        width: '75%',
        display: 'flex',
        maxWidth: 900,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 'auto',

    },
    input: {
        width: '100%',
        padding: '12px 20px',
        margin: '8px 0',
        boxSizing: 'border-box',
        resize: "vertical",
    },
    typographyTitle: {
        fontFamily: 'Roboto',
        color: 'white',
        fontSize: 30,
        fontWeight: 500,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 30,
      },
      label: {
        fontFamily: 'Roboto',
        color: 'white',
      },
      button: {
        color: "#C93C67",
        backgroundColor: "white",
        margin: "auto",
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        '&:hover': {
            backgroundColor: '#D3D3D3',
          },
      },
}));


export default function Contact() {

    //EmailJS
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5gh8ir9', 'template_60v56d4', e.target, 'user_3xpDozRf4IUQYcf7OYTxT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };
//hide status message after 5 seconds
  setTimeout(() => {
    showResult(false);
  },5000);

  const classes = useStyles();
  return (
    <div className={classes.root} id="contact">
        <Typography className={classes.typographyTitle}>Contact Me</Typography>
        <form className={classes.form} onSubmit={sendEmail}>
        <label className={classes.label}>Name</label>
        <input className={classes.input} type="text" name="fullName" required/>
        <label className={classes.label}>Email</label>
        <input className={classes.input} type="email" name="email" required/>
        <label className={classes.label}>Message</label>
        <textarea rows="6" className={classes.input} name="message" required/>
        <Button className={classes.button}  type="submit" value="Send">Send</Button>
        <div className=''>
          {result ? <Result/> : null}
        </div>
        </form>
    </div>
  );
}
