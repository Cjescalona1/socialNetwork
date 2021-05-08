import React from 'react'; 
import { Card } from '@material-ui/core';

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse'; 
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';  
import FavoriteIcon from '@material-ui/icons/Favorite';



const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 450,
    },
    media: {
      height: 600,
      width:600,
      margin:'0 10%',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    tags:{
        display: 'inline',
        color: 'white',
        backgroundColor:'lightblue',
        margin:5,
        padding:10,
        borderRadius:25,
        textDecoration: 0,
    },
    CardStyle:{
        backgroundColor:'red',
        margin:'10% 0 !important', 
    } 
  }));



function Posts(props){

    const classes = useStyles();
    let iterable; 
    if (props.data != null){
       console.log(props.data.data);
        iterable = props.data.data;
    
    return iterable.map((i)=>( 

            <Card className="CardStyle">  
                <CardHeader 
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                         <img   src={i.owner.picture} alt="Profile pi"></img>
                        </Avatar>
                      } 
                      title={i.owner.firstName + ' ' + i.owner.lastName}
                      subheader={i.publishDate}
                
                />
                <CardMedia
                    className={classes.media}
                    image={i.image}
                    title={i.owner.firstName + ' ' + i.owner.lastName}
                />

                <CardContent>
                    <Typography paragraph>
                    {i.text} 
                    </Typography>
                    { i.tags.map((t)=>{return <div className={classes.tags}><IconButton>{t}</IconButton></div>})}    
                    <br/>   
                    <h2> <FavoriteIcon/>  {i.likes} Likes </h2> 
                    <a href={i.link}>{i.link}</a>

                </CardContent>
 

            </Card>  
            ));

        } 
    else{ 
        return(<div>Loading...</div> )
    }    

};
export default Posts;




