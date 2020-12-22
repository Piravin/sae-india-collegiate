// React core
import React from "react";
// M-UI core
import Link from "@material-ui/core/Link";
import Hidden from "@material-ui/core/Hidden";
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import 'fontsource-roboto';

type NavProps = {
    chosen: string | null
};

type LinkProps = {
    chosen: boolean,
    children: React.ReactNode
};

const useStyles = makeStyles((theme: Theme) => createStyles({
    nav: {
        flexGrow: 1,
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
        fontWeight: 600,
        fontFamily: "Roboto, 'Sans sherif'",
        '&:hover': {
            color: "#4c4c4c",
            cursor: "pointer"
        }
    }
}));

const NavLink: React.FC<LinkProps> = ({chosen, children}: LinkProps) => {
    const style = {
        textDecoration: "none",
        color: chosen ? "#4c4c4c" : "#8f8f8f"
    }
    return(
      <Link style={style}>{children}</Link>
    );
};

export const Nav: React.FC<NavProps> = ( { chosen }: NavProps) => {
    const classes = useStyles();
    return(
        <div className={classes.nav}>
            <NavLink chosen={chosen==="news"}>
                <Typography
                    variant={"body1"}
                    className={classes.navLink}
                >News</Typography>
            </NavLink>
            <NavLink chosen={chosen==="events"}>
                <Typography
                    variant={"body1"}
                    className={classes.navLink}
                >Events</Typography></NavLink>
            <NavLink chosen={chosen==="teams"}>
                <Typography
                    variant={"body1"}
                    className={classes.navLink}
                >Teams</Typography></NavLink>
            <NavLink chosen={chosen==="members"}>
                <Typography
                    variant={"body1"}
                    className={classes.navLink}
                >Members</Typography></NavLink>
            <NavLink chosen={chosen==="contact-us"}>
                <Typography
                    variant={"body1"}
                    className={classes.navLink}
                >Contact Us</Typography></NavLink>
        </div>
    );
};