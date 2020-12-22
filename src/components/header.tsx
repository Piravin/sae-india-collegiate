// React core
import React, { useState } from 'react';
// M-UI Core
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// Assets
import Logo from '../assets/sae-logo.png';
import Ham from '../assets/ham.svg';
// Custom Components
import {Nav} from './nav';
// Contexts
import {useNavContext} from '../contexts/navContext';

const useStyle = makeStyles((theme: Theme) => createStyles({
    appBar: {
        width: "100vw",
        height: "80px",
        background: "#fff",
        justifyContent: "center",
        boxShadow: "none"
    },
    toolbar: {
        justifyContent: "space-around",
        alignItems: "center"
    },
    logoDiv: {
        flexGrow: 1,
        alignItems: "start",
        height: "60px",
        justifyContent: "start"
    },
    logo: {
        height: "60px",
        width: "auto"
    }
}))

export const Header: React.FC = () => {
    const classes = useStyle();
    const [ham, setHam] = useState<boolean>(false);
    return(
        <React.Fragment>
            <CssBaseline/>
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.logoDiv}>
                        <img src={Logo} className={classes.logo}/>
                    </div>
                    <Hidden smDown>
                        <Nav chosen={"news"}/>
                    </Hidden>
                    <Hidden mdUp>
                        <img src={Ham} onClick={() => setHam(!ham)}/>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}