import React from 'react';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const useStyle = makeStyles((theme: Theme) => createStyles({
    toTop: {
        position: "fixed",
        // display: "none",
        bottom: "20px",
        right: "20px",
        cursor: "pointer",
        color: "#fff",
        backgroundColor: "rgba(1, 0, 60,0.5)",
        backdropFilter: "blur(10px)",
        dicplay: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "10px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        boxShadow: "5px 5px 15px rgba(1, 0, 60,0.3)",
        '&:hover': {
            color: "#15de02",
            trnasformOrigin: "bottom",
            transition: "color 0.5s ease"
        }
    }
}));

const ToTop: React.FC = () => {
    const classes = useStyle();
    return(
        <div className={classes.toTop}>
            <ArrowUpwardRoundedIcon/>
        </div>
    );
}

export default ToTop;