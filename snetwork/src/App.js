import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './components/posts';

import { makeStyles } from '@material-ui/core/styles';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '6095ba695f614fd4495ef91b';




const useStyles = makeStyles((theme) => ({
  container:{
    margin:"0 30%",
  }
}));






const App = () => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState(null);
    const classes = useStyles();
 


    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}/post`, { headers: { 'app-id': APP_ID } })
            .then(({ data }) => setPosts(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);
    
 
    return (
        <div className={classes.container}>
          {loading && "Loading..."}
          <Posts data={posts}></Posts>
          {
          //JSON.stringify(posts)
          }
        </div>
    );
};

export default App;