import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CoreTeam from "../components/Teams/Core-Team/Core_Team"
import MembersName from "../components/Teams/Members/Members"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
      },

  }));
export default function MainTeam() {
    const [count, setCount] = useState("2019");
    const [button1, setbutton1] = useState("contained");
    const [button2, setbutton2] = useState("outlined");
    const [button3, setbutton3] = useState("outlined");
    const [button4, setbutton4] = useState("outlined");
    function y2019()
    {
        setCount("2019");
        setbutton1("contained");
        setbutton2("outlined");
        setbutton3("outlined");
        setbutton4("outlined");
    }
    function y2018()
    {
        setCount("2018");
        setbutton1("outlined");
        setbutton2("contained");
        setbutton3("outlined");
        setbutton4("outlined");
    }
    function y2017()
    {
        setCount("2017");
        setbutton3("contained");
        setbutton2("outlined");
        setbutton1("outlined");
        setbutton4("outlined");
    }
    function y2016()
    {
        setCount("2016");
        setbutton4("contained");
        setbutton2("outlined");
        setbutton3("outlined");
        setbutton1("outlined");
        
    }
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
    
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          The Team
            </Typography>
           
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant={button1} color="primary" onClick={y2019}>
                   2019-20
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant={button2} color="primary" onClick={y2018}>
                  2018-19
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant={button3} color="primary" onClick={y2017}>
                   2017-18
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant={button4} color="primary" onClick={y2016}>
                    2016-17
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
       <CoreTeam props={count}/>
       <MembersName props={count}/>
      </main>
    
    </React.Fragment>
  );
}
