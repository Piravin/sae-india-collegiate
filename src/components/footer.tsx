// React Core
import React from 'react';
// M-UI Core
import {Theme} from'@material-ui/core';
import {makeStyles, createStyles} from '@material-ui/styles';

const useStyle = makeStyles((theme: Theme) => createStyles({
    footer: {
        position: 'relative',
        padding: '3vh 3vw',
        color: '#fff',
        backgroundColor: 'rgb(1, 0, 60)',
        textAlign: 'left',
        fontFamily: 'Roboto mono, Helvetica',
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
            lineHeight: "24px",
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
        </div>
    );
}

export default Footer;