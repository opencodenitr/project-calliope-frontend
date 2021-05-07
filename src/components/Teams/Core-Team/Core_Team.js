import Core_Team_list_2019 from "./Core-Team_List _2019";
import React from 'react';
import {Core_Team_list_2019_final} from "./Core-Team_List _2019";
import Core_Team_list_2018 from "./Core-Team_List_2018";
import Core_Team_list_2017 from "./Core-Team_List_2017.js";
import Core_Team_list_2016 from "./Core-Team_List_2016";
import {Core_Team_list_2018_final} from "./Core-Team_List_2018.js";
import {Core_Team_list_2017_final} from "./Core-Team_List_2017.js";
import {Core_Team_list_2016_final} from "./Core-Team_List_2016.js";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    
    cardMedia: {
      paddingTop: '100%',
      marginTop:'5%',
      marginLeft: '5%',
      marginRight: '5%',
      borderRadius: '10%', // 16:9
  },
    cardContent: {
      flexGrow: 1,
    },
  }));
  const useStyles2 = makeStyles((theme) => ({
   
    card: {
      Left:'50%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto', /* Added */
      float: 'none',
    },
    
  }));

 
export default function CoreTeam(props) {

const classes = useStyles();
const classes1 = useStyles2();
var x = window.innerWidth;
var size=false;
console.log(x);
x= parseInt(x);
if((x>=600)&&(x<=930))
{
 size=true;
}
var array2;
var array1;
if(props.props==="2019")
{
array2 = Core_Team_list_2019.map(elem => elem);
array1 = Core_Team_list_2019_final.map(elem => elem);
}
else if(props.props==="2018")
{
  array2 = Core_Team_list_2018.map(elem => elem);
  array1 = Core_Team_list_2018_final.map(elem => elem);
  }
else if(props.props==="2017")
{
  array2 = Core_Team_list_2017.map(elem => elem);
  array1 = Core_Team_list_2017_final.map(elem => elem);
  }
else if(props.props==="2016")
{
  array2 = Core_Team_list_2016.map(elem => elem);
  array1 = Core_Team_list_2016_final.map(elem => elem);
  }
    return(
<Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
            Core Members
            </Typography>
          <Grid container spacing={5}>
            {array2.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}/>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" align="center" component="h2">
                      {card.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" align="center" component="h4">
                    {card.meaning}
                    </Typography>
                  </CardContent>
              
                </Card>
              </Grid>
            ))}
            
            </Grid>
           
            <Grid container spacing={3}>
            {size ? <></> : <Grid item xs={2}>
         
         </Grid>}
            
            {array1.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes1.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}/>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" align="center" component="h2">
                      {card.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" align="center" component="h4">
                    {card.meaning}
                    </Typography>
                  </CardContent>
              
                </Card>
              </Grid>
            ))}
            </Grid>
            
           
           
            </Container>
          
        
    )
        
            };