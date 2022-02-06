import {makeStyles} from "@material-ui/core/styles";

const PostsStyles = makeStyles(theme => ({
    dayName: {
        fontSize: "40px !important",
        color: "#bebcbc",
        [theme.breakpoints.down('lg')]: {
            fontSize: "35px !important",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "30px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "25px !important",
        },
    },
    quoteText: {
        fontSize: "30px !important",
        fontWeight: "bold !important",
        color: "#757575",
        marginLeft: theme.spacing(1.5),
        [theme.breakpoints.down('lg')]: {
            fontSize: "25px !important",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "20px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "18px !important",
        },
    },
    monthName: {
        fontSize: "15px !important",
        color: "#ececec",
        fontWeight: "bolder !important",
        backgroundColor: "#54a8e8",
        [theme.breakpoints.down('lg')]: {
            fontSize: "14px !important",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "13px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "12px !important",
        },
    },
    linkStyle: {
        color: "black",
        textDecoration: "underline",
        textAlign: "center",

    },
    linkStyle2: {
        color: "#ab2a2a",
        textDecoration: "underline",
        textAlign: "left",
    },
    linkText: {
        fontSize: "18px",
        fontWeight: "bold"
    }
    ,
    dividerStyle: {
        backgroundColor: "#54a8e8 !important"
    },
    dividerVertical: {
        width: "5px !important",
    },
    quouteSource: {
        display: "flex",
        paddingTop: theme.spacing(1),
    },
    quouteSourceText: {
        color: "black"
    },
    qaText: {
        fontSize: "13px"
    }
}));

export default PostsStyles;