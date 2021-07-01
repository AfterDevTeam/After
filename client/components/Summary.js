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

  // useEffect(() => {
  //   getPlanInfo();
  //   getServiceInfo();
  //   getChecklistInfo();
  // }, []);

  //retrieve plan information for summary from database
  const getPlanInfo = () => {
    return axios
      .post('/api/planSummary', {
        userInfo: state.userInfo,
      })
      .then((res) => {
        console.log('res in burialPlan', res);
        dispatch(updateRitesPlanSummaryReducer(res.data.burialPlan));
      });
  };

  //retrieve service information for summary from database
  const getServiceInfo = () => {
    return axios
      .post('/api/serviceSummary', {
        userInfo: state.userInfo,
      })
      .then((res) => {
        dispatch(updateServiceSummaryReducer(res.data.service));
      });
  };

  //retrieve checklist information for summary from database
  const getChecklistInfo = () => {
    return axios
      .post('/api/checklistSummary', {
        userInfo: state.userInfo,
      })
      .then((res) => {
        // console.log(res);
        dispatch(updateChecklistSummaryReducer(res.data.checklist));
      });
  };

  let { guestList, participants, prayersRead, musicPlayed, cateringService } =
    state.service;

  let { pets, bills } = state.checklist;
  const parser = (str) => {
    const result = [];

    const regex = /\w+/g;
    if (str === undefined || str === null || str.length < 1) {
      console.log(str, typeof str);
      return null;
    } else {
      console.log(str + 'is not undefined');
      str.split('').forEach((char) => {
        if (char.match(regex)) result.push(char);
        else if (char === ',') result.push(char + ' ');
      });
      console.log('result', result);
      return result.join('');
    }
  };

  console.log('parsedGuestlist', guestList);
  console.log('parsedParticipants', participants);
  // useEffect(() => {
  //   // guestList = parser(guestList);
  //   // participants = parser(participants);
  //   console.log('guestLIst in useEffect', guestList);
  //   console.log('participants in useEffect', participants);

  //   // musicPlayed = parser(musicPlayed);
  //   // prayersRead = parser(prayersRead);
  //   // pets = parser(pets);
  // }, [state]);
  guestList = parser(guestList);
  participants = parser(participants);

  pets = parser(pets);
  bills = parser(bills);

  // musicPlayed = parser(musicPlayed);
  // prayersRead = parser(prayersRead);
  // console.log('parsedParticipants', musicPlayed);
  // console.log('parsedMusic', pets);
  // console.log('parsedPrayers', prayersRead);

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
              <Typography>Guest List: {guestList}</Typography>
              <Typography>Participants: {participants}</Typography>
              <Typography>Prayers/Readings: {prayersRead}</Typography>
              <Typography>Music: {musicPlayed}</Typography>
              <Typography>Catering Service: {cateringService}</Typography>
              <Typography>Extras {state.service.extras}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Typography>Future Checklist</Typography>
              <br></br>
              <Typography>Pets: {pets}</Typography>

              <Typography>Bills: {bills}</Typography>

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
