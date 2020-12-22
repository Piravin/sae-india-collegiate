// React core
import React from 'react';
// M-UI core
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyle = makeStyles((theme: Theme) => createStyles({
    main: {
        height: "100vh",
        width: "100vw",
        backgroundColor: "#fff"
    }
}));

const Main: React.FC = () => {
    const classes = useStyle();
    return(<div className={classes.main}></div>);
};

export default Main;