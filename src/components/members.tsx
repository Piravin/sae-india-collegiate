// React core
import React from 'react';
// M-UI core
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
// Contexts
import {NavContext} from '../contexts/navContext';

const Inba = process.env.PUBLIC_URL + "/images/inba.jpg";
const Hemanth = process.env.PUBLIC_URL + "/images/hemanth.jpg";
const Kadiresh = process.env.PUBLIC_URL + "/images/kadiresh.jpg";
const Kanagaraj = process.env.PUBLIC_URL + "/images/kanagaraj.jpg";
const Kural = process.env.PUBLIC_URL + "/images/kuralarasan.jpg";
const Me = process.env.PUBLIC_URL + "/images/me.jpg";

const useStyle = makeStyles((theme: Theme) => createStyles({
    members: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '20px',
        flexWrap: 'wrap',
        background:'#e8f2ff'

    },
    member: {
        width: '350px',
        height: 'auto',
        padding: '20px',
        margin: '20px',
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
            padding: '0',
            margin: "20px 0px"
        }
    },
    profile: {
        width: '100%',
        height: 'auto',
        borderRadius: "50%"
    },
    detail: {
        fontFamily: 'Roboto, Helvetica',
        textAlign: 'left',
        padding: '0 10px',
        fontWeight: 400,
        alignItems: 'start',
        justifyContent: 'flex-start',
        '& h1, h3': {
            margin: '5px',
            fontWeight: 400,
            color: '#222'
        }
    }
}));

const Members = React.forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
    const classes = useStyle();
    const members = React.useRef<HTMLDivElement>(null);
    const navValues = React.useContext(NavContext);
    React.useEffect(() => {
        navValues!.setValues(members.current!.offsetTop as number, "members");        
    },[]);
    return(
        <div className={classes.members} ref={members}>
            <div className={classes.member}>
                <Grid container>
                    <Grid item xs={4}>
                        <img className={classes.profile} src={Kadiresh} alt=""/>
                    </Grid>
                    <Grid item xs={8} className={classes.detail}>
                        <h1>Kadiresh</h1>
                        <h3>Chair Person</h3>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.member}>
                <Grid container>
                    <Grid item xs={4}>
                        <img className={classes.profile} src={Inba} alt=""/>
                    </Grid>
                    <Grid item xs={8} className={classes.detail}>
                        <h1>Inba Murugesan</h1>
                        <h3>Vice Chair Person</h3>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.member}>
                <Grid container>
                    <Grid item xs={4}>
                        <img className={classes.profile} src={Me} alt=""/>
                    </Grid>
                    <Grid item xs={8} className={classes.detail}>
                        <h1>Piravin K C M</h1>
                        <h3>Student Secratery</h3>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.member}>
                <Grid container>
                    <Grid item xs={4}>
                        <img className={classes.profile} src={Kanagaraj} alt=""/>
                    </Grid>
                    <Grid item xs={8} className={classes.detail}>
                        <h1>Kanagaraj</h1>
                        <h3>Treasurer</h3>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.member}>
                <Grid container>
                    <Grid item xs={4}>
                        <img className={classes.profile} src={Kural} alt=""/>
                    </Grid>
                    <Grid item xs={8} className={classes.detail}>
                        <h1>Kural Arasan</h1>
                        <h3>Program Chair Person</h3>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.member}>
                <Grid container>
                    <Grid item xs={4}>
                        <img className={classes.profile} src={Hemanth} alt=""/>
                    </Grid>
                    <Grid item xs={8} className={classes.detail}>
                        <h1>Hemanth</h1>
                        <h3>Publicity Chair Person</h3>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
});

export default Members;