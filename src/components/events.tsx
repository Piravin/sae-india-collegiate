// React core
import React from 'react';
// M-UI core
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// Contexts
import {NavContext} from '../contexts/navContext';
// Assets
import EventsIllustration from "../illustrations/Events.svg";

const useStyle = makeStyles((theme: Theme) => createStyles({
    events: {
        backgroundColor: "rgb(243, 245, 249)",
        padding: "20px 0",
        alignItems: "center"
    },
    eventFrame: {
        display: "flex",
        padding: "40px",
        [theme.breakpoints.down('lg')]: {
            overflowX: "scroll",
            flexWrap: "nowrap",
            padding: "20px"
        },
        '&::-webkit-scrollbar': {
            width: "1px",
            height: "7px",
            margin: "10px"

        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            backgroundColor: 'rgba(0,0,0, 0.1)'
        },
        '&::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.3)',
            backgroundColor: '#F5F5F5',
            margin: "10px"
        }
    },
    title: {
        fontSize: "1rem",
        fontFamily: "Roboto, Sans Sherif",
        display: "flex",
        justifyContent: "center",
        '& div': {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "150px",
            padding: "10px",
            borderRadius: "25px",
            background: "#137fce",
            boxShadow: '5px 5px 10px rgba(0,0,0,0.12)',
            fontSize: '1.2rem',
            fontWeight: 500,
            color: "#f0f0f0",
            '& img': {
                marginLeft: "5px",
                width: "50px",
                height: "auto"
            }
        }
    },
    card: {
        backgroundColor: "#fff",
        minWidth: "300px",
        maxWidth: "300px",
        boxShadow: "5px 5px 15px rgba(0,0,0,0.1), -5px -5px 15px rgba(191, 216, 255,0.3)",
        marginLeft: "40px",
        marginRight: "40px"
    },
    media: {
        width: "100%",
        height: "auto"
    },
    more: {
        justifyContent: "flex-end"
    },
    eventAbt: {
        display: "flex",
        margin: "20px 10vw",
        textAlign: "justify",
        width: "80vw",
        padding: "2vw",
        fontFamily: "Roboto, Helvetica",
        color: "#505050",
        fontSize: "1.6rem",
        lineHeight: "2.8rem",
        fontWeight: 500,
        // background: "#fafafa",
        [theme.breakpoints.down('sm')]: {
            [theme.breakpoints.down('sm')]: {
            width: "100vw",
            fontSize: "1.2rem",
            padding: "2rem",
            lineHeight: "2rem",
            maxWidth: "100%",
            margin: "0px"
        }
        }
    }
}));

const Events = React.forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
    const classes = useStyle();
    const events = React.useRef<HTMLDivElement>(null);
    const navValues = React.useContext(NavContext);
    React.useEffect(() => {
        navValues!.setValues(events.current!.offsetTop as number, "events");
        navValues!.setValues( (events.current!.offsetTop as number) + (events.current!.offsetHeight as number), "teams");
    },[]);
    return(
        <div className={classes.events} ref={events}>
            <div className={classes.title}>
                <div>Events<img src={EventsIllustration} alt=""/></div>    
            </div>
            <div className={classes.eventAbt}>
                    SAE SASTRA hosts a variety of events for the benefit of it’s student community. From lectures delivered by Industry experts to collegiate events that promote the spirit of engineering, SAE SASTRA and it’s members have constantly proved their hunger to learn.
            </div>
            <div className={classes.eventFrame}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        src={process.env.PUBLIC_URL + "/images/srtx.png"}
                        component="img"
                        title="News1"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        SRT X
                        </Typography>
                        
                        <Typography variant="body2" color="textSecondary" component="p">
                        The Dream Bike || The Crew ||
SAEISS Bicycle Designing Competition 2k19
                        </Typography>
                    </CardContent>
                    
                </Card>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        src={process.env.PUBLIC_URL + "/images/join_sae.jpg"}
                        component="img"
                        title="News1"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        Join Us
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        We invite everyone for the lecture on 'Engineering Design' by Mr. S. Shanmugam, Chairman of SAEISS
                        </Typography>
                    </CardContent>
                    
                </Card>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        src={process.env.PUBLIC_URL + "/images/host_sae.jpg"}
                        component="img"
                        title="News1"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">

                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        SASTRA Deemed to be University will be Hosting the Thanjavur Division of SAEINDIA Southern Section.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        src={process.env.PUBLIC_URL + "/images/srt_baja.jpg"}
                        component="img"
                        title="News1"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        NATRAX- Pithampur
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        From being one of the heaviest cars in the competition during our first year(284.6 kg) to building a car that cleared the Technical Inspection and competed in the endurance round during our second year(157 kg), we as a team have learnt that there is no substitute for hardwork.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
});

export default Events;