import PostsStyles from "../../Styles/PostsStyles";
import {Divider, Grid, Typography} from "@material-ui/core";
import Date from "../Date";
import React from "react";

function QuotePost(props) {
    const classes = PostsStyles();
    const handleGetQuote = () => {
        if (props.post["quote-text"] !== null && props.post["quote-text"] !== undefined) {
            return (
                <div style={{display: "flex"}}>
                    <Divider orientation={"vertical"} flexItem
                             classes={{
                                 root: classes.dividerStyle,
                                 vertical: classes.dividerVertical
                             }}
                    />
                    <Typography className={classes.quoteText}
                    >
                        {props.post["quote-text"]}
                    </Typography>
                </div>
            )
        } else {
            return null;
        }
    }
    const handleGetQuoteSource = () => {
        if (props.post["quote-source"] !== null && props.post["quote-source"] !== undefined) {
            return (
                <div className={classes.quouteSource}>
                    <Typography>{"-"}</Typography>
                    <div className={classes.quouteSourceText} dangerouslySetInnerHTML={{__html: props.post["quote-source"]}}/>
                </div>
            )
        } else {
            return null;
        }
    }
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Date date={props.post.date}/>
                </Grid>
                <Grid item xs={6} style={{textAlign: "left", margin: "auto"}}>
                    {handleGetQuote()}
                    {handleGetQuoteSource()}
                </Grid>
                <Grid item xs={3}>

                </Grid>
            </Grid>
        </div>
    );
}

export default QuotePost;