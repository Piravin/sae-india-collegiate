// React core
import React, { Component, ChangeEvent, ReactNode } from 'react';
// M-UI core
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import { Theme, withStyles, withTheme, makeStyles, createStyles } from '@material-ui/core/styles';
//Icons
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LanguageIcon from '@material-ui/icons/Language';
// Assets
import SRT from '../illustrations/srt.svg';
import TeamSVG from '../illustrations/teams.svg';
import SRTBicycle from '../illustrations/srt-bicycle.svg';
import ETWDC from '../illustrations/ETWDC.png';

const Styles = (theme: Theme) => ({
    tabs: {
        height: 'auto',
        '& button': {
            padding: "15px 20px"
        }
    },
    teams: {
        padding: '40px 0',
        background: "rgba(256,256,256,0.95)",
        backdropFilter: "blur(20px)",
        [theme.breakpoints.down('sm')]: {
            padding: '0'
        }
    },
    title: {
        width: '100vw',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& > div': {
            width: '150px',
            height: '50px',
            borderRadius: '25px',
            backgroundColor: '#137fce',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '5px 5px 10px rgba(0,0,0,0.12)',
            fontSize: '1.2rem',
            fontWeight: 500,
            color: "#f0f0f0"
        }
    }
});

const useStyle = makeStyles((theme: Theme) => createStyles({
    '@global': { 
        
    },
    '@keyframes jump': {
        "0%": {transform: "translate(0,-3px) scale(1.05)"},
        "50%": {transform: "translate(-6px,-18px) scale(1.3)"},
        "75%": {transform: "translate(-2px,-12px) scale(1.1)"},
        "100%": {transform: "translate(-4px, -15px) scale(1.3)"}
    },
    logo: {
        width: '100px',
        height: 'auto'
    },
    photo: {
        width: '100%',
        height: 'auto',
        borderRadius: "5px"
    },
    gridT: {
        padding: '20px',
        fontFamily: 'Roboto',
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            padding: '10px',
            order: 2
        },
        '& h1::before':{
            content: '-fasdf',
            position: 'absolute',
            height: '2px',
            width: '200px',
            backgroundColor: '#555555'
        },
        '& p': {
            padding: '10px 40px',
            fontWeight: 500,
            fontSize: '1.2rem',
            textIndent: "2rem",
            textAlign: "justify",
            [theme.breakpoints.down('sm')]: {
                padding: '5px',
                textIndent: "0"
            }
        }
    },
    gridB: {
        [theme.breakpoints.down('sm')]: {
            order: 1
        }
    },
    social: {
        float: "right",
        '& a': {
            color: "#444",
            margin: "10px", 
            '&:hover': {
                color: "#3659f5",
                '& svg': {                    
                    animation: "$jump 300ms ease forwards"
                }
            }
        }
    },
    insta: {
        '&:hover':{
            '& svg': {
                color: "#C13584"
            }
        }
    },
    yt: {
        '&:hover':{
            '& svg': {
                color: "#de0909"
            }
        }
    },
    web: {
        '&:hover':{
            '& svg': {
                color: "#008a02"
            }
        }
    }
}));

type teamsState = {
    selectedTeam: number
};
type teamProps = {
    props?: any,
    ref?: React.Ref<HTMLDivElement>,
    children?: ReactNode,
    classes: Record<keyof ReturnType<typeof Styles>, string>
}

const Team: React.FC<{teamId: number} | null> = ({teamId}: {teamId: number}) => {
    const classes = useStyle();
    return(
        <Grid container>
            <Grid item xs={12} md={8} className={classes.gridT}>
                <h1>SASTRA Racing Team - Baja</h1>
                <div>
                    <p>SASTRA Racing team, having been established in 2009, is
                    your typical "passion for life" kind team with a skilled , well filtered
                    out set of people inspired by excellence. The team has appeared in
                    leagues including SAE Baja and SUPRA with a best of its kind, in
                    house machined car. With aspiring engineers on the constant run
                    for the best drive, SRT is one of the university’s prominent clubs,
                    formed by engineers, for engineers.</p>

                    <p>We take pride in our close knit team along with the strong bonds of
                    friendship, we also learn to form a good network of people. This
                    networking is also a very important quality which is a boon in
                    disguise. We also take pride in our ability to further the excitement
                    of science, technology, engineering, and mathematics to both fellow
                    students as well as the community through our outreach programs
                    and events we take part in.</p>
                </div>
                <div className={classes.social}>
                    <a href="https://www.linkedin.com/company/sastra-racing-team/" rel="noreferrer" target="_blank"><LinkedInIcon fontSize="large"/></a>
                    <a href="https://www.facebook.com/SASTRARacingOfficial" rel="noreferrer" target="_blank"><FacebookIcon fontSize="large"/></a>
                    <a href="https://www.instagram.com/sastra_racing_team_baja/" rel="noreferrer" target="_blank" className={classes.insta}><InstagramIcon fontSize="large"/></a>
                    <a href="https://www.youtube.com/channel/UC6Tuvr4QA-T3ggvIZeJZP9Q" rel="noreferrer" target="_blank" className={classes.yt}><YouTubeIcon fontSize="large" /></a>
                    <a href="http://www.srtbaja.in" rel="noreferrer" target="_blank" className={classes.web}><LanguageIcon fontSize="large"/></a>
                </div>
            </Grid>
            <Grid item xs={12} md={4} className={classes.gridB}>
                <img className={classes.photo} src={process.env.PUBLIC_URL + "/images/srt_team.jpg"} alt="Team SRT"/>
            </Grid>        
        </Grid>
    );
}

const TeamBicycle: React.FC<{teamId: number} | null> = ({teamId}: {teamId: number}) => {
    const classes = useStyle();
    return(
        <Grid container>
            <Grid item xs={12} md={8} className={classes.gridT}>
                <h1>SASTRA Racing Team - Bicycle</h1>
                <div>
                    <p>SASTRA Racing Team - Bicycle started in 2018, is a team of enthusiastic and passionated undergraduate students who conceptualize, design and build bicycles for SAEINDIA competitions. The team consists of students from all the years of study across all branches to maintain the best knowledge transfer to build bicycles every year.</p>

                    <p>SRT Bicycle is one of the club's in SASTRA that helps and supports students to apply their theorical knowledge in designing and manufacturing to gain practical exposure.</p>
                </div>
            </Grid>
            <Grid item xs={12} md={4} className={classes.gridB}>
                <img className={classes.photo} src={process.env.PUBLIC_URL + "/images/srtx.png"} alt="Team SRT"/>
            </Grid>        
        </Grid>
    );
}

const TeamETWDC: React.FC<{teamId: number} | null> = ({teamId}: {teamId: number}) => {
    const classes = useStyle();
    return(
        <Grid container>
            <Grid item xs={12} md={8} className={classes.gridT}>
                <h1>Electric Two Wheeler Design Competition</h1>
                <div>
                    <p>ETWDC Prepares the students to be effective professional engineers. Provides a Platform for enhancing Skill Set, competency, Technical Know How in electrification of Two Wheelers</p>

                    <p>Electric Two Wheeler Design Competition tasks the students to think, analyse, design, develop, build, test and present in series of event.</p>
                </div>
            </Grid>       
        </Grid>
    );
}

const TeamAero: React.FC<{teamId: number} | null> = ({teamId}: {teamId: number}) => {
    const classes = useStyle();
    return(
        <Grid container>
            <Grid item xs={12} md={8} className={classes.gridT}>
                <h1>Aero-modelling club @ sastra</h1>
                <div><p>Aero-modelling is an interesting art of designing and making small powered or unpowered aerodynamic models. We are the students of Shanmugha Arts, Science, Technology & Research Academy (SASTRA Deemed to be University) Thanjavur, actively involved in making such working models.

                The objective of the club is to promote the students’ interest in aeromodelling by providing a platform to practically apply what they learn and to create an opportunity for them to interact and work with the people of same interest.

                We conduct events and workshops frequently on various aero-models such as hovercraft, glider, etc., We also participate in various competitions that happen throughout the year in several institutions.</p>
                    
                </div>
                <div className={classes.social}>
                    <a href="https://www.facebook.com/Aeromodelling-club-at-Sastra-547771182249359/" rel="noreferrer"   target="_blank"><FacebookIcon fontSize="large"/></a>
                    <a href="https://www.instagram.com/aeromodelling_club_sastra/" rel="noreferrer" target="_blank" className={classes.insta}><InstagramIcon fontSize="large"/></a>
                    <a href="https://www.youtube.com/channel/UC6W4_FBa4tB_pMbV_urkKsw" rel="noreferrer" target="_blank" className={classes.yt}><YouTubeIcon fontSize="large" /></a>
                    <a href="https://acssastra.wordpress.com/" rel="noreferrer" target="_blank" className={classes.web}><LanguageIcon fontSize="large"/></a>
                </div>
            </Grid>
            <Grid item xs={12} md={4} className={classes.gridB}>
                <img className={classes.photo} src={process.env.PUBLIC_URL + "/images/aero_team.jpg"} alt="Team Aero Modeling"/>
            </Grid>        
        </Grid>
    );
}

const Logo: React.FC = () => {
    const classes = useStyle();
    return(
        <img className={classes.logo} src={SRT} alt="SRT"/>
    );
}

const ETWDCLogo: React.FC = () => {
    const classes = useStyle();
    return(
        <img className={classes.logo} src={ETWDC} alt="SRT"/>
    );
}

const SRTBLogo: React.FC = () => {
    const classes = useStyle();
    return(
        <img className={classes.logo} src={SRTBicycle} alt="SRT"/>
    );
}

class Teams extends Component<teamProps, teamsState> {
    constructor(props?: any) {
        super(props);
        this.state = {
            selectedTeam: 0
        };
        this.teamChanger = this.teamChanger.bind(this);
    }

    teamChanger(event: ChangeEvent<{}>, team: number) {
        this.setState({ selectedTeam: team });
    }

    render(){
        const {classes} = this.props;
        const Aero = () => (<img style={{height: "50px", borderRadius: "10px"}} src={process.env.PUBLIC_URL + "/images/aero_logo.jpg"} alt="Aero team"></img>);
        return(
            <div className={classes.teams}>
                <div className={classes.title}><div>Teams <img src={TeamSVG} alt=""/></div></div>
                <Tabs
                    orientation="horizontal"
                    variant="scrollable"
                    indicatorColor="primary"
                    value={this.state.selectedTeam}
                    className={classes.tabs}
                    onChange={this.teamChanger}>
                        <Tab icon={<Logo/>} id="Team 1"/>
                        <Tab icon={<Aero/>} id="Team 2"/>
                        <Tab icon={<SRTBLogo/>} id="Team 3"/>
                        <Tab icon={<ETWDCLogo/>} id="Team 4"/>
                </Tabs>
                
                {this.state.selectedTeam === 0 && <Team teamId={0}/>}
                {this.state.selectedTeam === 1 && <TeamAero teamId={1}/>}
                {this.state.selectedTeam === 2 && <TeamBicycle teamId={2}/>}
                {this.state.selectedTeam === 3 && <TeamETWDC teamId={3}/>}
                
            </div>
        );
    }
}

export default withTheme(withStyles(Styles)(Teams));