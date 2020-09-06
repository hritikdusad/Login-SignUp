import React, { useState } from 'react';
import Linkedin from './Linkedin';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logo from './dashboard.png';



export default function SignUpPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSignInPage, setShowSignInPage] = useState(false);


    const handleChange = (event) =>{
        console.log(event.currentTarget.value);
        if(event.currentTarget.value === "Signin"){
          setShowSignInPage(true);
        }
    }

    if(showSignInPage){
      return <Linkedin />
    }

    return (
        <Grid container item xs={3} spacing={3} style={{margin:'auto'}}>
        <Grid container spacing={2} alignItems="center" direction="column" justify="center">
          <Grid item style={{marginTop:'5rem'}}>
            <img src={logo} alt="Dashboard Logo"/>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom color="textPrimary" style={{fontWeight:'600'}}>
              Welcome to Dashboard
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
            <TextField label="Email" size="medium" required fullWidth onChange={handleChange} type="email" autoComplete="true" value={email}/>
        </Grid>
        <Grid item xs={12}>
            <TextField label="Password" size="medium" required fullWidth onChange={handleChange} type="password" autoComplete="true" value={password}/>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Remember Me"
            labelPlacement="end"

          />
        </Grid>
        <Grid item sm={12}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ExitToAppIcon/>}
            fullWidth
            size="large"
          >
            Sign Up
          </Button>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
            <Typography variant="subtitle2" gutterBottom color="textPrimary">
              Already have an Account?<Button color="primary" onClick={handleChange} value="Signin">Sign in</Button>
            </Typography>
        </Grid>
      </Grid>
    )
}
