import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {NavContext} from '../contexts/navContext';

const useStyle = makeStyles((theme: Theme) => createStyles({
    about: {
        margin: "0 10vw",
        marginBottom: "30px",
        padding: "2vw",
        width: "80vw",
        backgroundColor: "rgba(256,256,256,0.8)",
        backdropFilter: "blur(10px)",
        alignItems: "center",
        // boxShadow: "0px 0px 25px rgba(0,0,0,0.07)",
        borderRadius: "20px",
        [theme.breakpoints.down('sm')]: {
            margin: "1vh 1vw",
            padding: "1vw",
            width: "98vw"
        }
    },
    aboutContent: {
        display: "flex",
        textAlign: "justify",
        fontFamily: "Roboto, Helvetica",
        color: "#555555",
        fontSize: "1.3rem",
        lineHeight: "2.2rem",
        fontWeight: 500,
        [theme.breakpoints.down('sm')]: {
            width: "100vw",
            fontSize: "1.2rem",
            padding: "0 2rem",
            lineHeight: "2rem",
            maxWidth: "100%",
            margin: "0px"
        }
    },
    title: {
        fontFamily: "Rubik",
        fontWeight: 500,
        display: "flex",
        marginBottom: "0px",
        justifyContent: "center",
        padding: "0px",
        color: "#444",
        fontSize: "36px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.5rem",
            lineHeight: "1rem"
        }
    }
}));

const About: React.FC = () => {
    const classes = useStyle();
    const about = React.useRef<HTMLDivElement>(null);
    const navValues = React.useContext(NavContext);
    React.useEffect(() => {
        navValues!.setValues(about.current!.offsetTop as number, "about");
    },[]);
    return(
        <div className={classes.about} ref={about}>
            <h1 className={classes.title} id="about-title">ABOUT SAE SASTRA</h1>    
            <div className={classes.aboutContent}>
                <p>
                    With more than 50,000 members in more than 480 collegiate clubs all across the country, SAEINDIA has been one of the leading student clubs in India.
                
                    The collegiate club initiative provided a path for SAE to promote practical learning and provide sound engineering principles at the grassroots level. 
    Collegiate clubs provide practical exposure to a professional engineering society as well as a focal point for campus engineering programs and projects.
    The SAE collegiate club of SASTRA Deemed University was formed during the academic year 2009-2010. During the course of these 11 years, the SAE SASTRA collegiate club has grown in number while showing true mettle.
                </p>
            </div>
        </div>
    );
}

export default About;