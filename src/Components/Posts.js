import {Grid} from "@material-ui/core";
import PostsStyles from "../Styles/PostsStyles";
import PostTypeEnum from "../Enums/PostTypeEnum";
import AudioPost from "./PostTypes/AudioPost";
import ConversationPost from "./PostTypes/ConversationPost";
import LinkPost from "./PostTypes/LinkPost";
import PhotoPost from "./PostTypes/PhotoPost";
import QuotePost from "./PostTypes/QuotePost";
import RegularPost from "./PostTypes/RegularPost";

function Posts(props) {
    const classes = PostsStyles();
    const handleGetPostType = () => {
        if (props.posts.length !== 0) {
            return props.posts.map((post) => {
                if (post.type === PostTypeEnum.audio) {
                    return (
                        <Grid item xs={12}>
                            <AudioPost post={post}/>
                        </Grid>
                    )
                } else if (post.type === PostTypeEnum.conversation) {
                    return (
                        <Grid item xs={12}>
                            <ConversationPost post={post}/>
                        </Grid>
                    )
                } else if (post.type === PostTypeEnum.link) {
                    return (
                        <Grid item xs={12}>
                            <LinkPost post={post}/>
                        </Grid>
                    )
                } else if (post.type === PostTypeEnum.photo) {
                    return (
                        <Grid item xs={12}>
                            <PhotoPost post={post}/>
                        </Grid>
                    )
                } else if (post.type === PostTypeEnum.quote) {
                    return (
                        <Grid item xs={12}>
                            <QuotePost post={post}/>
                        </Grid>
                    )
                } else if (post.type === PostTypeEnum.regular) {
                    return (
                        <Grid item xs={12}>
                            <RegularPost post={post}/>
                        </Grid>
                    )
                } else if (post.type === PostTypeEnum.conversation) {
                    return null;
                }
            })
        }
    }
    return (
        <div>
            <Grid container spacing={4}>
                {handleGetPostType()}
            </Grid>
        </div>
    );
}

export default Posts;