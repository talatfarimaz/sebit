import PostsStyles from "../Styles/PostsStyles";
import {Grid, Typography} from "@material-ui/core";
import moment from "moment";

function Date(props) {
    const classes = PostsStyles();
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];

    const handleGetDayName = () => {
        if (props.date !== null && props.date !== undefined) {
            const dateConvert = moment(props.date.toString());
            return days[dateConvert.day()];
        } else {
            return null;
        }
    }
    const handleGetMonthName = () => {
        if (props.date !== null && props.date !== undefined) {
            const dateConvert = moment(props.date.toString());
            return (<div>
                    <Typography className={classes.monthName}>{months[dateConvert.month()]}</Typography>
                    <Typography
                        className={classes.monthName}>{dateConvert.month() + nth(dateConvert.month())}</Typography>
                </div>
            );
        } else {
            return null;
        }

    }
    const nth = (d) => {
        if (d > 3 && d < 21) return 'TH';
        switch (d % 10) {
            case 1:
                return "ST";
            case 2:
                return "ND";
            case 3:
                return "RD";
            default:
                return "TH";
        }
    }
    return (
        <div>
            <Grid container>
                <Grid item xs={7} style={{margin: "auto"}}>
                    <Typography className={classes.dayName}>{handleGetDayName()}</Typography>
                </Grid>
                <Grid item xs={5} style={{margin: "auto"}}>
                    {handleGetMonthName()}
                </Grid>
            </Grid>
        </div>
    );
}

export default Date;