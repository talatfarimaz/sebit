import HomeStyles from "../Styles/HomeStyles";
import BlogTitleStyles from "../Styles/BlogTitleStyles";
import {Divider, Typography} from "@material-ui/core";

function BlogTitle(props) {
    const classes = BlogTitleStyles();
    return (
        <div>
            <Typography className={classes.blogTitle}>{props.blogInfo?.title}</Typography>
            <Divider variant={"fullWidth"}/>
        </div>
    );
}

export default BlogTitle;