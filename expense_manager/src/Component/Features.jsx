import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Paper,Typography} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper1: {
      height: 300,
      minWidth:450,
      background:"#AB47BC"
    },
    paper2: {
        height: 300,
        minWidth:450,
        background:"#FF7043"
      },
      paper3: {
        height: 300,
        minWidth:450,
        background:"#26C6DA"
      },
      paperLayout:{
        display:"flex"
      },
    control: {
      padding: theme.spacing(2),
    },
  }));

const Features =()=>{
    const classes = useStyles()
    return(
        <div id="features">
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                 <Grid container justify="center" spacing={0}>
                        <Grid  item className={classes.paperLayout} >
                            <Paper className={classes.paper1} style={{color:"white"}} >
                                <Grid item align="center">
                                    <Grid item align="center"  style={{border:"1px solid white",maxWidth:"70px",marginTop:"10px",padding:"10px"}}>
                                        <Icon className="fas fa-fire" style={{fontSize:50,color :"white"}}/>
                                    </Grid>
                                </Grid>
                                <Typography align="center" gutturbottom style={{padding:10}}>
                                    Easy to manage
                                </Typography>
                                <Typography align="center" gutturbottom style={{padding:10}}>
                                    Easy to track all details
                                </Typography>
                                <Typography align="center" gutturbottom style={{padding:10}}>
                                    Best Tetchnical Support
                                </Typography>
                                <Typography align="center" gutturbottom style={{padding:10}}>
                                    Best Privacy Protection
                                </Typography>
                            </Paper>
                            <Paper className={classes.paper2} style={{color:"white"}}>
                            <Grid item align="center">
                                    <Grid item align="center"  style={{border:"1px solid white",maxWidth:"70px",marginTop:"10px",padding:"10px"}}>
                                        <Icon className="far fa-gem" style={{fontSize:50,color :"white"}}/>
                                    </Grid>
                                </Grid>
                                <Typography align="center" gutturbottom style={{padding:10}}>
                                    Easy to manage
                                </Typography>
                                <Typography align="center" gutturbottom style={{padding:10}}>
                                    Easy to track all details
                                </Typography>
                                <Typography align="center" gutturbottom style={{padding:10}}>
                                    Best Tetchnical Support
                                </Typography>
                                <Typography align="center" gutturbottom style={{padding:10}}>
                                    Best Privacy Protection
                                </Typography>
                            </Paper>
                            <Paper className={classes.paper3} style={{color:"white"}} >
                            <Grid item align="center">
                                    <Grid item align="center"  style={{border:"1px solid white",maxWidth:"70px",marginTop:"10px",padding:"10px"}}>
                                        <Icon className="fas fa-certificate" style={{fontSize:50,color :"white"}}/>
                                    </Grid>
                                </Grid>
                                <Typography align="center" gutturbottom style={{padding:10}}>
                                    Easy to manage
                                </Typography>
                                <Typography align="center" gutturbottom style={{padding:10}}>
                                    Easy to track all details
                                </Typography>
                                <Typography align="center" gutturbottom style={{padding:10}}>
                                    Best Tetchnical Support
                                </Typography>
                                <Typography align="center" gutturbottom style={{padding:10}}>
                                    Best Privacy Protection
                                </Typography>
                            </Paper>
                         </Grid>
                 </Grid>
            </Grid>
        </Grid>
        </div>        
   
    )
    

  }
  

  export default Features