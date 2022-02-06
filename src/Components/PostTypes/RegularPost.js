import PostsStyles from "../../Styles/PostsStyles";
import {Grid} from "@material-ui/core";
import Date from "../Date";
import React from "react";

function RegularPost(props) {
    const classes = PostsStyles();
    const handleGetRegular = () => {
        if (props.post["regular-body"] !== null && props.post["regular-body"] !== undefined) {
            return (
                <div style={{textAlign: "left"}} dangerouslySetInnerHTML={{__html: props.post["regular-body"]}}/>
            )
        } else {
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
                    <Grid item xs={6}>
                        {handleGetRegular()}
                    </Grid>
                    <Grid item xs={3}>

                    </Grid>
                </Grid>
            </div>

        </div>
    );
}

export default RegularPost;