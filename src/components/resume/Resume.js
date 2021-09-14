import React from "react";
import { Typography, makeStyles } from '@material-ui/core';
import ResumeComponent from "./ResumeComponent";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#FFF",
        paddingBottom: 50,
    },
}));

const Resume = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>

        </div>
    );
}

export default Resume;