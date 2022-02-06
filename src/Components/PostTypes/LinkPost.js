import PostsStyles from "../../Styles/PostsStyles";
import {Grid, Link, Typography} from "@material-ui/core";
import Date from "../Date";
import React from "react";

function LinkPost(props) {
    const classes = PostsStyles();
    const handleGetLinkTitle = () => {
        if (props.post["link-text"] !== null && props.post["link-text"] !== undefined && props.post["link-description"] !== null && props.post["link-description"] !== undefined ){
            return (
                <div style={{textAlign: "left"}}>
                    <Link href={""} className={classes.linkStyle2}>
                        <Typography className={classes.linkText}>{props.post["link-text"] }</Typography>
                    </Link>
                    <div dangerouslySetInnerHTML={{__html: props.post["link-description"]}}/>
                </div>
            )
        }
        else  {
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
                        {handleGetLinkTitle()}
                    </Grid>
                    <Grid item xs={3}>

                    </Grid>
                </Grid>
            </div>

        </div>
    );
}

export default LinkPost;