import PostsStyles from "../../Styles/PostsStyles";
import {Grid, Typography} from "@material-ui/core";
import Date from "../Date";
import React from "react";

function ConversationPost(props) {
    const classes = PostsStyles();
    const handleGetCoversation = () => {
        if (props.post["conversation-text"] !== null && props.post["conversation-text"] !== undefined) {
            const conversations=props.post["conversation-text"] .split("\n");

            return (
                <td style={{textAlign: "left"}}>
                    {
                        conversations
                            ? conversations.map((conv) =>{
                                if (conversations.indexOf(conv)%2===1 ) {
                                    return (
                                        <div style={{display: "flex"}}>
                                            <Typography className={classes.qaText} style={{color: "red"}}>{conv.split(":")[0]+" : "}</Typography>
                                            <Typography className={classes.qaText}>{conv.split(":")[1]}</Typography>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div style={{display: "flex"}}>
                                            <Typography className={classes.qaText} style={{color: "blue"}}>{conv.split(":")[0]+" : "}</Typography>
                                            <Typography className={classes.qaText}>{conv.split(":")[1]}</Typography>
                                        </div>
                                    )
                                }
                            })
                            : ""
                    }
                </td>
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
                        {handleGetCoversation()}

                    </Grid>
                    <Grid item xs={3}>

                    </Grid>
                </Grid>
            </div>

        </div>
    );
}

export default ConversationPost;