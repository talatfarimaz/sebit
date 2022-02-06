import {makeStyles} from "@material-ui/core/styles";

const BlogTitleStyles = makeStyles(theme => ({
    blogTitle: {
        fontWeight: "bolder !important",
        fontSize: "60px !important",
        margin: theme.spacing(3),
        [theme.breakpoints.down('lg')]: {
            fontSize: "50px !important",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "40px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "30px !important",
            margin: theme.spacing(1),
        },
    }
}));

export default BlogTitleStyles;