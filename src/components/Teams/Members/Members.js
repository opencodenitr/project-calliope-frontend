import Members_list_2019 from "./Members_List_2019";
import Members_list_2018 from "./Members_List_2018";
import Members_list_2017 from "./Members_List_2017";
import Members_list_2016 from "./Members_List_2016";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(3),
    },
    
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      paddingLeft: theme.spacing(1),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      width :'100%',
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
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));
  
export default function MembersName(props) {

const classes = useStyles();
var array2;
if(props.props==="2019")
array2 =Members_list_2019.map(elem => elem);
else if(props.props==="2018")
array2 =Members_list_2018.map(elem => elem);
else if(props.props==="2017")
array2 =Members_list_2017.map(elem => elem);
else if(props.props==="2016")
array2 =Members_list_2016.map(elem => elem);
    return(
<Container className={classes.cardGrid} maxWidth="md">
          <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
            Members
            </Typography>
          <Grid container spacing={5}>
            {array2.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={3}>
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
           
           
            </Container>
          
        
    )
        
            };