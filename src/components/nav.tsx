// React core
import React from "react";
// M-UI core
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
// Contexts
import {NavContext} from '../contexts/navContext';

type NavProps = {
    chosen: string | null,
    onClose?: any
};

type Scroller = {
    about: number | null,
    events: number | null,
    teams: number | null,
    members: number | null
}

type LinkProps = {
    label: keyof Scroller,
    onClose?: any
};


const useStyles = makeStyles((theme: Theme) => createStyles({
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        [theme.breakpoints.down('sm')]: {
            height: "100vh",
            width: "100vw",
            right: "0",
            top: "0",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "space-around"
        }
    },
    navLink: {        
        padding: "0 30px",
        '&:hover h5': {
            color: "#553bff!important"
        }
    }
}));

const NavLink: React.FC<LinkProps> = ({label, onClose}: LinkProps) => {
    const classes = useStyles();
    const {chosen, setChosen, about, events, teams, members} = React.useContext(NavContext)!;
    const scroller: Scroller = {
        about: about,
        events: events,
        teams: teams,
        members: members
    }
    const isChosen = chosen === String(label).toLowerCase();
    const clickHandler = (choice: keyof typeof scroller ) => {
        window.scrollTo(0, scroller[choice]!);
        console.log((scroller[choice])+ "    " + choice);
        setChosen(choice);
        if(onClose != null || onClose !== undefined) onClose();
    }

    const style = {
        color: isChosen ? "#553bff" : "#444444",
        cursor: "pointer",
        fontFamily: "Roboto medium, Sans sheruf, Helvetica",
        fontSize: '1.2rem'  
    }
    return(
      <div className={classes.navLink} onClick={e => clickHandler(String(label).toLowerCase() as keyof Scroller)}><h5 style={style}> {label} </h5></div>
    );
};

export const Nav: React.FC<NavProps> = ( { chosen, onClose }: NavProps) => {
    const classes = useStyles();
    
    return(
        <div className={classes.nav}>
            <NavLink label={"About" as keyof Scroller} onClose={onClose}/>                
            <NavLink label={"Events" as keyof Scroller} onClose={onClose}/>
            <NavLink label={"Teams" as keyof Scroller} onClose={onClose}/>
            <NavLink label={"Members" as keyof Scroller} onClose={onClose}/>
        </div>
    );
};