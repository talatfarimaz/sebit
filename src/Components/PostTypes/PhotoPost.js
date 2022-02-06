import PostsStyles from "../../Styles/PostsStyles";
import {Grid} from "@material-ui/core";
import Date from "../Date";
import React from "react";

function PhotoPost(props) {
    const classes = PostsStyles();
    const handleGetPhoto = () => {
        if (props.post["photo-url-1280"] !== null && props.post["photo-url-1280"] !== undefined) {
            return (
                <img src={props.post["photo-url-1280"]} alt="" width={"100%"}/>
        )
        }
        else {
            return null;
        }
    }
    return (
        <div>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Date date={props.post.date}/>
                    </Grid>
                    <Grid item xs={6} style={{margin: "auto"}}>
                        {handleGetPhoto()}
                    </Grid>
                    <Grid item xs={3}>

                    </Grid>
                </Grid>
            </div>

        </div>
    );
}

export default PhotoPost;