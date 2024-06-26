import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Link } from 'react-router-dom'
import styles from './css/editor.module.css'
import ResumeContext from '../../context/ResumeContext';

const defaultTheme = createTheme();
function Education(edu) {

    const { eduInfo, setEduInfo, addEduInfo } = React.useContext(ResumeContext);

    const addEducation = () => {
        setEduInfo([...eduInfo, { insName: "", tenure: "", qualification: "", scores: "" }])
    }

    const handleInputs = (index, e) => {
        const newEdu = [...eduInfo];
        newEdu[index][e.target.name] = e.target.value;
        setEduInfo(newEdu);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addEduInfo(eduInfo);
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        // marginTop: 8,
                        padding: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Education Qualification
                    </Typography>

                </Box>

                <Box component="form" noValidate sx={{ mb: 3 }}>
                    {eduInfo.map((edu, index) => (
                        <Grid container spacing={2} key={index} sx={{ mt: 3 }}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="insName"
                                    required
                                    fullWidth
                                    id="insName"
                                    label="Institution Name"
                                    onChange={(e) => handleInputs(index, e)}
                                    value={edu.insName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="tenure"
                                    required
                                    fullWidth
                                    id="tenure"
                                    label="Education Tenure"
                                    onChange={(e) => handleInputs(index, e)}
                                    value={edu.tenure}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="qualification"
                                    required
                                    fullWidth
                                    id="Qualification"
                                    label="Education Qualification"
                                    onChange={(e) => handleInputs(index, e)}
                                    value={edu.qualification}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="scores"
                                    // required
                                    fullWidth
                                    id="scores"
                                    label="Final Scores"
                                    onChange={(e) => handleInputs(index, e)}
                                    value={edu.scores}
                                />
                            </Grid>
                            <br />
                            <br />
                        </Grid>
                    ))}
                </Box>
                <div className={`${styles.flex}`}>
                    <Button variant='contained' onClick={addEducation}>Add Education Qualification</Button>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mx: 2}}
                        onClick={handleSubmit}
                    >
                        Save
                    </Button>
                </div>
            </Box>
        </ThemeProvider>
    );
}

export default Education