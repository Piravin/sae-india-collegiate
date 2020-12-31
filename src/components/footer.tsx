// React Core
import React from 'react';
// M-UI Core
import {Theme} from'@material-ui/core';
import {makeStyles, createStyles} from '@material-ui/styles';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyle = makeStyles((theme: Theme) => createStyles({
    footer: {
        position: 'relative',
        padding: '3vh 3vw',
        color: '#ddd',
        backgroundColor: 'rgb(1, 0, 60)',
        textAlign: 'left',
        fontFamily: 'Roboto, Helvetica',
        '& h1': {
            fontWeight: 400
        },
        '& h1::after': {
            content: ``,
            position: 'absolute',
            width: '200px',
            height: '10px',
            backgroundColor: '#c5c5c5'
        },
        '& p': {
            fontWeight: 300,
            fontSize: '1rem',
            lineHeight: "26px",
        }
    },
    gh: {
        color:"#aaa",
        display: "flex",
        marginTop: "20px",
        marginBottom: "0px",
        paddingTop: "10px",
        paddingBottom: "0",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "0.5px solid rgba(256,256,256, 0.3)",
        '& a':{
            color:"#ccc",
            '&:hover': {
                color:"#fff"
            }
        }
    }
}));

const Footer: React.FC = () => {
    const classes = useStyle();
    return(
        <div className={classes.footer}>
            <h1 id="footerTitle">SAE India Collegiate SASTRA</h1>
            <p>
                Vishwa Karma Joth,<br/>
            SASTRA Deemed University,<br/>
            Tirumalaisamudram,<br/>
            Thanjavur - 613401,<br/>
            Tamilnadu, India.
            </p>
            <div className={classes.gh}>
                View page source in GitHub <pre> </pre><a href="https://github.com/piravin/sae-india-collegiate" rel="noreferrer" target="_blank"><GitHubIcon fontSize="small"/></a>
            </div>
        </div>
    );
}

export default Footer;