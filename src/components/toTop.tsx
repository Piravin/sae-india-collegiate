import React from 'react';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const useStyle = makeStyles((theme: Theme) => createStyles({
    toTop: {
        position: "fixed",
        display: "none",
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
        transition: "color 0.3s ease",
        '&:hover': {
            color: "#15de02",
            trnasformOrigin: "bottom",
            transition: "color 0.3s ease"
        }
    }
}));

const ToTop: React.FC = () => {
    const classes = useStyle();
    const scroller = React.useRef<HTMLDivElement>(null);
    const goToTop = () => window.scrollTo(0,0);
    const handleScroll = () => {
        if(window.pageYOffset > window.innerHeight) scroller.current!.style.display = "block";
        else scroller.current!.style.display = "none";
    }
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    },[]);
    return(
        <div id="scroller" className={classes.toTop} ref={scroller} onClick={goToTop}>
            <ArrowUpwardRoundedIcon/>
        </div>
    );
}

export default ToTop;