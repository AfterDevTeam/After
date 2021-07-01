/** @format */
import React, { useEffect } from 'react';
import { Container, Typography, Button, Box } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { userInfoState } from '../slices/userInfoSlice';
import {
  planState,
  updateRitesPlanSummaryReducer,
} from '../slices/selectPlanSlice';
import { updateServiceSummaryReducer } from '../slices/chooseServiceSlice';
import { updateChecklistSummaryReducer } from '../slices/futureChecklistSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '20px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Summary = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector(userInfoState);
  const state2 = useSelector(planState);
  const classes = useStyles();

  useEffect(() => {
    getPlanInfo();
    getServiceInfo();
    getChecklistInfo();
  }, []);

  const getPlanInfo = () => {
    return axios
      .post('/api/planSummary', {
        userInfo: state.userInfo,
      })
      .then((res) => {
        // console.log(res);
        dispatch(updateRitesPlanSummaryReducer(res.data.burialPlan));
      });
  };

  const getServiceInfo = () => {
    return axios
      .post('/api/serviceSummary', {
        userInfo: state.userInfo,
      })
      .then((res) => {
        // console.log(res);
        dispatch(updateServiceSummaryReducer(res.data.service));
      });
  };

  const getChecklistInfo = () => {
    return axios
      .post('/api/checklistSummary', {
        userInfo: state.userInfo,
      })
      .then((res) => {
        // console.log(res);
        dispatch(updateChecklistSummaryReducer(res.data.checklist));
      })
      .then(() => {});
  };

  console.log('User Info State in Summary: ', state2);
  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography>First Name: {state.userInfo.firstName}</Typography>
              <Typography>Last Name: {state.userInfo.lastName}</Typography>
              <Typography>Email: {state.userInfo.email}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Typography>Burial/Rites Plan</Typography>
              <br></br>
              <Typography>Rite: {state.plan.rite}</Typography>
              <Typography>Funeral Home: {state.plan.funeralHome}</Typography>
              <Typography>
                Funeral Location: {state.plan.funeralLocation}
              </Typography>
              <Typography>
                Graveside Service Location: {state.plan.graveSideLocation}
              </Typography>
              <Typography>
                Memorial Service Location: {state.plan.memorialLocation}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Typography>Service Plan</Typography>
              <br></br>
              <Typography>Guest List: {state.service.guestList}</Typography>
              <Typography>
                Participants: {state.service.participants}
              </Typography>
              <Typography>
                Prayers/Readings: {state.service.prayersRead}
              </Typography>
              <Typography>Music: {state.service.musicPlayed}</Typography>
              <Typography>
                Catering Service: {state.service.cateringService}
              </Typography>
              <Typography>Extras {state.service.extras}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Typography>Future Checklist</Typography>
              <br></br>
              <Typography>Pets: {state.checklist.pets}</Typography>

              <Typography>Bills: {state.checklist.bills}</Typography>

              <Typography>Extras {state.checklist.extras}</Typography>
            </Paper>
          </Grid>
          <Box style={{ margin: '0 auto', display: 'flex' }}>
            <Button onClick={() => history.push('/edit')}>Edit</Button>
            <Button onClick={() => window.print()}>Print</Button>
          </Box>
        </Grid>
      </div>
    </Container>
  );
};

export default Summary;
