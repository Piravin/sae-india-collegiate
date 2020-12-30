// React core
import React, { useState, useContext } from 'react';
// M-UI Core
import Hidden from '@material-ui/core/Hidden';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
// Custom Components
import {Nav} from './nav';
// Contexts
import {NavContext} from '../contexts/navContext';
// Assets
import Logo from '../illustrations/sae-logo.png';
import Ham from '../illustrations/ham.svg';

const useStyle = makeStyles((theme: Theme) => createStyles({
    appBar: {
        position: "fixed",
        top: "0",
        zIndex: 10,
        maxWidth: "100%",
        width: "100vw",
        height: "80px",
        // background: "linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(179,179,179,0.7) 43%, rgba(30,30,30,0.1) 50%, rgba(0,0,0,0.1) 100%)",
        boxShadow: "none",
        padding: "20px",
        backdropFilter: "blur(1px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "0.3s ease",
        [theme.breakpoints.down('sm')]: {
            background: "rgba(0,0,0,0.05)",
            backdropFilter: "blur(1px)",
            width: "auto",
            height: "60px",
            borderRadius: "10px",
            right: "0"
        }
    },
    appBarScroll: {
        height: "60px",
        background: "rgba(256,256,256,0.7)",
        boxShadow: "0px 5px 10px rgba(40,40,40,0.05)",
        backdropFilter: "blur(10px)",
        justifyContent: "space-around",
        transition: "0.3s ease, justify-content 1s ease"
    },
    toolbar: {
        display: "flex!important",
        height: "100%",
        justifyContent: "space-between!important",
        alignItems: "center",
        width: "100%",
    },
    logoDiv: {
        alignItems: "start",
        height: "60px",
        justifyContent: "space-around"
    },
    logo: {
        height: "60px",
        width: "auto",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    close: {
        position: "absolute",
        top: "10px",
        right: "10px"
    }
}))

const Header: React.FC = () => {
    const classes = useStyle();
    const [ham, setHam] = useState<boolean>(false);
    const navValues = useContext(NavContext);

    const handleClose = () => setHam(!ham);

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            document.querySelector("#navBar")!.classList.add(classes.appBarScroll);
            if (window.scrollY === 0 ) document.querySelector("#navBar")!.classList.remove(classes.appBarScroll);
        });
    },[]);

    return(
        <div className={classes.appBar} id="navBar">
            <Dialog fullScreen open={ham} onClose={handleClose}>
                <IconButton className={classes.close} onClick={handleClose}><CloseIcon/></IconButton>
                <Nav chosen={navValues?.chosen ? navValues?.chosen : "main"} onClose={handleClose}/>
            </Dialog>
            <div className={classes.logoDiv}>
                <img src={Logo} alt="SAE India Colegiate SASTRA" className={classes.logo}/>
            </div>
            <Hidden smDown>
                <Nav chosen={navValues?.chosen ? navValues?.chosen : "main"}/>
            </Hidden>
            <Hidden mdUp>
                <img src={Ham} alt="" onClick={() => setHam(!ham)}/>
            </Hidden>
        </div>
    );
}

export default Header;