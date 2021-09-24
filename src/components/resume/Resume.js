import React from "react";
import { Typography, makeStyles, Grid, Divider } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#FFF",
        paddingTop: 50,
        paddingBottom: 50,

    },
    container: {
        width: "75%",
        margin: "auto",
        maxWidth: 900,
        paddingBottom: 30,
        paddingTop: 30,
    },
    sectionTitle: {
        fontFamily: 'Roboto',
        color: 'black',
        fontSize: 20,
        fontWeight: 500,
        borderBottom: "3px solid #C93C67",
        paddingBottom: 6,

    },
    title: {
        fontFamily: 'Roboto',
        color: 'black',
        fontSize: 24,
        fontWeight: 700,
        width:"100%",
    },
    subTitle: {
        fontFamily: 'Libre Baskerville',
        color: '#888',
        fontSize: 19,
        fontWeight: 500,
        fontStyle: "italic"

    },
    description: {
        fontFamily: 'Roboto',
        color: '#888',
        fontSize: 16,
    },
    divider: {
        width: '75%',
        maxWidth: 900,
        margin: 'auto',
    },

}));

const Resume = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} id="resume">
            <div className={classes.container}>
                <Grid container spacing={3} direction="row" justifyContent="flex-start" alignItems="baseline" xs={12}>
                    <Grid item xs={9} sm={3}>
                        <Typography ><span className={classes.sectionTitle}>EDUCATION</span></Typography>
                    </Grid>
                    <Grid container spacing={1} direction="column" sm={9} xs={12}>
                        <Grid item xs={12}>
                            <Typography className={classes.title}>Athabasca University</Typography>

                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.subTitle}>BSc Computing and Information Systems</Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </div>
            <Divider className={classes.divider}/>
            <div className={classes.container}>
                <Grid container spacing={3} direction="row" justifyContent="flex-start" alignItems="baseline" xs={12}>
                    <Grid item xs={9} sm={3}>
                        <Typography><span className={classes.sectionTitle}>EXPERIENCE</span></Typography>
                    </Grid>
                    <Grid container spacing={1} direction="column" sm={9} xs={12}>
                        <Grid item xs={12}>
                            <Typography className={classes.title}>Independent Contractor Remote</Typography>

                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.subTitle}>Appen Limited</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <Divider className={classes.divider}/>
            <div className={classes.container}>
                <Grid container spacing={3} direction="row" justifyContent="flex-start" alignItems="baseline" xs={12}>
                    <Grid item xs={9} sm={3}>
                        <Typography><span className={classes.sectionTitle}>VOLUNTEER</span></Typography>
                    </Grid>
                    <Grid container spacing={1} direction="column" sm={9} xs={12}>
                        <Grid item xs={12}>
                            <Typography className={classes.title}>Wordpress Developer</Typography>

                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.subTitle}>Volunteer</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

        </div>
    );
}

export default Resume;