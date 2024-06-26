import React, { useContext } from 'react'
import styles from './home.module.css'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#424242",
    }
  },
});

function Home() {

  const { auth } = useContext(AuthContext);
  const VerifyUser = () => {
    if(auth) {
      return (
        <Link to='/editor' className={`${styles.link}`}>Create Resume</Link>
      )
    }
    else {
      return (
        <Link to='/login' className={`${styles.link}`}>Create Resume</Link>
      )
    }
  }
  return (
    <Container>
      <Typography
        align='center'
        className={`${styles.title}`}
        fontWeight={'900'}
        fontSize={'90px'}
        fontFamily={'SF Pro Display'}
        sx={{
          marginTop: '100px',
          fontSize: {
            xs: '50px',
            sm: '60px',
            md: '70px',
            lg: '80px',
            xl: '90px'
          }
        }}
      >
        Build resume for free
        <Typography color={'textSecondary'} variant="h5">
          Showcase your achievements and unique experiences with a stunning resume made using Resume Builder. Easily create the perfect resume for any job using our best-in-class resume builder platform.
        </Typography>
      </Typography>
      <Box className={`${styles.flex} ${styles.justifyCenter} ${styles.mt3}`}>
        <ThemeProvider theme={darkTheme}>
          <Button variant='contained'>
            <VerifyUser />
          </Button>
        </ThemeProvider>
      </Box>
    </Container>
  )
}

export default Home