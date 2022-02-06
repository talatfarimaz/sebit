import {makeStyles} from "@material-ui/core/styles";

const HomeStyles = makeStyles(theme => ({
    mainGrid: {
        paddingTop: theme.spacing(8),
        width: "40% !important",
        [theme.breakpoints.down('lg')]: {
            width: "50% !important"
        },
        [theme.breakpoints.down('md')]: {
            width: "60% !important"
        },
        [theme.breakpoints.down('sm')]: {
            width: "80% !important"
        },
        [theme.breakpoints.only('xs')]: {
            width: "100% !important"
        },
    },
    mainDiv: {
        textAlign: "center",
        display: "flex",
        justifyContent: "center"
    }
}));

export default HomeStyles;