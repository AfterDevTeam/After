/** @format */
import React from 'react';
import {
  Container,
  TextField,
  Typography,
  Button,
  Link,
} from '@material-ui/core';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { userInfoState } from '../slices/userInfoSlice';
import { planState } from '../slices/selectPlanSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Summary = () => {
  const history = useHistory();
  const state = useSelector(userInfoState);
  const classes = useStyles();
  const regex = /\w/g;

  const parse = (str) => {
    if (str === undefined || str.length === 0 || str === null) return null;
    const result = [];
    str.split('').forEach((char) => {
      if (char !== '{' && char !== '}' && char !== '"') {
        if (char === ',') char = ', ';
        result.push(char);
      }
    });
    console.log(result);
    return result.join('');
  };

  const { firstName, lastName, email } = state.userInfo;

  const {
    rite,
    funeralHome,
    funeralLocation,
    graveSideLocation,
    memorialLocation,
  } = state.plan;

  const { cateringService, serviceExtras } = state.service;

  const { checklistExtras } = state.checklist;

  const guestList = parse(state.service.guestList);
  const participants = parse(state.service.participants);
  const readings = parse(state.service.readings);
  const music = parse(state.service.musicPlayed);
  const pets = parse(state.checklist.pets);
  const bills = parse(state.checklist.bills);

  console.log('parsed?', parse(state.checklist.pets));

  console.log('User Info State in Summary: ', state);
  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography>First Name: {firstName}</Typography>
              <Typography>Last Name: {lastName}</Typography>
              <Typography>email: {email}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Typography>Burial/Rites Plan</Typography>
              <br></br>
              <Typography>Rite: {rite}</Typography>
              <Typography>Funeral Home: {funeralHome}</Typography>
              <Typography>Funeral Location: {funeralLocation}</Typography>
              <Typography>
                Graveside Service Location: {graveSideLocation}
              </Typography>
              <Typography>
                Memorial Service Location: {memorialLocation}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Typography>Service Plan</Typography>
              <br></br>
              <Typography>Guest List: {guestList}</Typography>
              <Typography>participants: {participants}</Typography>
              <Typography>Prayers/Readings: {readings}</Typography>
              <Typography>Music: {music}</Typography>
              <Typography>Catering Service: {cateringService}</Typography>
              <Typography>Extras {serviceExtras}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Typography>Future Checklist</Typography>
              <br></br>
              <Typography>Pets: {pets}</Typography>

              <Typography>Bills: {bills}</Typography>

              <Typography>Extras {checklistExtras}</Typography>
            </Paper>
          </Grid>
          <Button onClick={() => history.push('/edit')}>Edit</Button>
        </Grid>
      </div>
    </Container>
  );
};

export default Summary;
