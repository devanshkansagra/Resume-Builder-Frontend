import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GoogleIcon from '@mui/icons-material/Google';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import styles from './login.module.css';

import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';

import axios from 'axios';

function Login() {

  const navigate = useNavigate();
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: ""
  })

  const handleInputs = ((e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  })

  const {setAuth} = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post('/users/login',loginData);
      if(data.status === 200) {
        setAuth(true);
        navigate('/editor');
      }

      else if(data.status === 401) {
        window.alert("Invalid Credentials");
      }

      else if(data.status === 404) {
        window.alert("User Not found");
      }

      else if(data.status === 500) {
        window.alert('Server error');
      }

    } catch (error) {
      console.log(error);
    }
  }


  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInputs}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputs}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              <GoogleIcon />&nbsp;&nbsp;Sign In with Google
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/forgot" className={styles.link}>
                  {"Forgot Your Password?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Login