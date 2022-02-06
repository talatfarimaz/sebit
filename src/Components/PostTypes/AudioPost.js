import PostsStyles from "../../Styles/PostsStyles";
import {Grid, Link, Typography} from "@material-ui/core";
import Date from "../Date";
import React from "react";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

function AudioPost(props) {
    const classes = PostsStyles();
    const [play, setPlay] = React.useState(true);
    const handleGetPlayPause = () => {
        if (play) {
            return (
                <PlayArrowIcon onClick={() => {
                    setPlay(false)
                }}/>
            )
        } else {
            return (
                <PauseIcon onClick={() => {
                    setPlay(true)
                }}/>
            )
        }
    }

    const handleGetAlbumTitle = () => {
        if (props.post["id3-artist"] !== null && props.post["id3-artist"] !== undefined && props.post["id3-title"] !== null && props.post["id3-title"] !== undefined) {
            return (
                <div style={{display: "flex"}}>
                    <Link href={"abc"} className={classes.linkStyle}><Typography> {props.post["id3-artist"]}</Typography></Link>
                    <Typography>{" - " +props.post["id3-title"]}</Typography>
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
                <Grid item xs={6}>
                    <Grid container spacing={2} style={{margin: "auto"}}>
                        <Grid item xs={12} style={{display: "flex"}}>
                            {handleGetPlayPause()}
                            <Typography>Listen</Typography>
                        </Grid>
                        <Grid item xs={12} style={{display: "flex"}}>
                            {handleGetAlbumTitle()}
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={3}>

                </Grid>
            </Grid>
        </div>
    );
}

export default AudioPost;