import HomeStyles from "../Styles/HomeStyles";
import {Grid} from "@material-ui/core";
import BlogTitle from "./BlogTitle";
import data from "../Data/data.json"
import React, {useEffect} from "react";
import Posts from "./Posts";


function Home() {
    const classes = HomeStyles();
    const [posts, setPosts] = React.useState([]);
    useEffect(() => {
        setPosts(data.posts);
    }, [])
    const [blogInfo, setBlogInfo] = React.useState(null);
    useEffect(() => {
        setBlogInfo(data.tumblelog);
    }, null)

    return (
        <div className={classes.mainDiv}>
            <Grid container className={classes.mainGrid} spacing={2}>
                <Grid item xs={12}>
                    <BlogTitle blogInfo={blogInfo}/>
                </Grid>

                <Grid item xs={12}>
                    <Posts posts={posts}/>
                </Grid>


            </Grid>
        </div>
    );
}

export default Home;