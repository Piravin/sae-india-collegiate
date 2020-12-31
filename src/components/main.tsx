import React from 'react';
// import MainIllu from '../illustrations/main.svg';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Title from '../illustrations/sae-title.svg';

const MemberSVG = process.env.PUBLIC_URL + '/images/members.svg';
const Map = process.env.PUBLIC_URL + '/images/map.svg';
const images = [
    process.env.PUBLIC_URL + `/images/srt_team.jpeg`,
    process.env.PUBLIC_URL + `/images/1.jpg`,
    process.env.PUBLIC_URL + `/images/2.jpg`,
    process.env.PUBLIC_URL + `/images/team_aero_plane.jpg`,
    process.env.PUBLIC_URL + `/images/3.jpg`,
    process.env.PUBLIC_URL + `/images/4.jpg`,
];

const useStyle = makeStyles((theme: Theme) => createStyles({
    main: {
        height: "100vh",
        width: "100vw",
        paddingTop: "80px",
        [theme.breakpoints.down('sm')]: {
            paddingTop: "20px"
        },
        "& div img": {
            width: "80%",
            height: "auto",
            [theme.breakpoints.down('sm')]: {
                width: "50%"
            }
        }
    },
    left: {
        '& h1': {
        color:"#003471",
        fontWeight: 400,
        fontFamily: "Roboto",
        fontSize: "36px",
        padding: "0",
        margin: "0",
        [theme.breakpoints.down('sm')]: {
            fontSize: "24px"
        }
    }
    },
    center: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down('sm')]: {
            minHeight: "380px",
            minWidth: "100vw",
            '& > img': {
                width: "90%!important",
                height: "auto"
            }
        }
    },
    right: {
        '& > div h1': {
            color:"#003471",
            fontWeight: 400,
            fontFamily: "Roboto",
            fontSize: "36px",
            padding: "0",
            margin: "0",
            [theme.breakpoints.down('sm')]: {
                color: "#fff",
                fontSize: "24px"
            }
        }
    },
    slideShow: {
        width: "100%!important",
        height: "0"
    },
    slideContainer: {
        borderRadius: "10px",
        overflow: "hidden",
        width: "90%",
        height: "auto",
        boxShadow: "5px 5px 15px rgba(0,0,0,0.1), 0px 0px 25px rgba(0,0,0,0.13), -5px -10px 15px rgba(140, 180, 255, 0.2)",
        [theme.breakpoints.down('sm')]: {
            height: "auto",
            width: "100vw",
            borderRadius: "0",
            '& > img': {
                width: "100vw!important"
            }
        }
    },
    mobile: {
        color: "#333",
        '& h1': {
            fontWeight: 400
        }
    },
    insideCenter: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around"
    },
    title: {
        width: "40vw",
        paddingBottom: "30px",
        [theme.breakpoints.down('sm')]: {
            width: "90vw!important"
        }
    }
}));

const Main: React.FC = () => {
    const classes = useStyle();
    const [img, setImg] = React.useState(0);
    const [offset, setOffset] = React.useState(0);
    const handleScroll = () => setOffset(window.pageYOffset);
    React.useEffect(() => {
        let interval = setInterval(() => setImg((img + 1) % 5),5000);
        return () => clearInterval(interval);
    });
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[]);
    return(
        <Grid container className={classes.main}>
            <Hidden smDown>
            <Grid item xs={12} md={3} className={classes.left}>
                <div style={{transform: `translateY(${offset * 0.6}px)`}}>
                    <img src={Map} alt="Over 480 Collegiates World Wide"/>
                    <h1>Over 480 Collegiates World Wide</h1>
                </div>
            </Grid>
            </Hidden>
            <Grid item xs={12} md={6} className={classes.center}>
                <div className={classes.insideCenter}>
                <div className={classes.title}>
                    <img className={classes.title} src={Title} alt="SAE India Collegiate at SASTRA"/>
                </div>
                <SwitchTransition>
                    <CSSTransition
                        key={img}
                        timeout={500}
                        classNames={"slide"}
                        >
                            <div className={classes.slideContainer}>
                                <img className={classes.slideShow} src={images[img]} alt="Slide images"/>
                            </div>
                        </CSSTransition>
                </SwitchTransition>
                </div>
            </Grid>
            <Hidden smDown>
            <Grid item xs={12} md={3} className={classes.right}>
                <div style={{transform: `translateY(${offset * 0.6}px)`, zIndex: -1}}>
                    <img src={MemberSVG} alt="Over 50000 Members"/>
                    <h1>Over 50000 Members</h1>
                </div>
            </Grid>
            </Hidden>
            <Hidden mdUp>
                <Grid item container>
                    <Grid item xs={6}>
                        <div className={classes.mobile}>
                            <img src={Map} alt="Over 480 Collegiates World Wide"/>
                            <h1>Over 480 Collegiates World Wide</h1>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.mobile} style={{paddingTop: "10px"}}>
                            <img src={MemberSVG} alt="Over 50000 Members"/>
                            <h1>Over 50000 Members</h1>
                        </div>
                    </Grid>
                </Grid>
            </Hidden>
        </Grid>
    );
}

export default Main;

