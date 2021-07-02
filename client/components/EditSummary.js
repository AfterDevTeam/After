/** @format */
//Node Modules
import React, { useState } from 'react';
import axios from 'axios';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
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
import { useSelector, useDispatch } from 'react-redux';

//Other Components
import { userInfoState } from '../slices/userInfoSlice';
import {
  updateRitesPlanLoginReducer,
  updateRitesPlanSummaryReducer,
} from '../slices/selectPlanSlice';
import {
  musicPlayedReducer,
  updateServiceSummaryReducer,
} from '../slices/chooseServiceSlice';
import { updateChecklistSummaryReducer } from '../slices/futureChecklistSlice';

const useStyles = makeStyles((theme) => ({
  root2: {
    flexGrow: 1,
    marginTop: '20px',
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const EditSummary = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector(userInfoState);

  const [userInfoSummary, setUserInfoSummary] = useState(state.userInfo);
  const [planSummary, setPlanSummary] = useState(state.plan);
  const [serviceSummary, setServiceSummary] = useState(state.service);
  const [checklistSummary, setChecklistSummary] = useState(state.checklist);

  const handleUserInfoSummaryChange = (prop) => (e) => {
    setUserInfoSummary({ ...userInfoSummary, [prop]: e.target.value });
  };

  const handlePlanSummaryChange = (prop) => (e) => {
    setPlanSummary({ ...planSummary, [prop]: e.target.value });
  };

  const handleServiceSummaryChange = (prop) => (e) => {
    setServiceSummary({ ...serviceSummary, [prop]: e.target.value });
  };

  const handleChecklistSummaryChange = (prop) => (e) => {
    setChecklistSummary({ ...checklistSummary, [prop]: e.target.value });
  };

  const sendToDB = () => {};

  const updateUserInfo = () => {
    axios
      .put('/user/update', { userInfo: { ...userInfoSummary } })
      .catch((err) => console.log(err));
  };

  const updatePlanInfo = () => {
    return axios
      .put('/api/plan', {
        plan: planSummary,
        userInfo: userInfoSummary,
      })
      .catch((err) => console.log(err));
  };

  const updateServiceInfo = () => {
    return axios
      .put('/api/service', {
        service: serviceSummary,
        userInfo: userInfoSummary,
      })
      .catch((err) => console.log(err));
  };

  const updateChecklistInfo = () => {
    axios
      .put('/api/future', {
        checklist: checklistSummary,
        userInfo: userInfoSummary,
      })
      .catch((err) => console.log(err));
  };
  const classes = useStyles();

  let { guestList, participants, prayersRead, musicPlayed, cateringService } =
    serviceSummary;

  let { pets, bills } = checklistSummary;

  console.log('plan', planSummary);
  const parser = (str) => {
    const result = [];

    const regex = /\w+/g;
    if (str === undefined || str === null || str.length < 1) {
      return null;
    } else {
      str.split('').forEach((char) => {
        if (char.match(regex)) result.push(char);
        else if (char === ',') result.push(char + ' ');
      });

      return result.join('');
    }
  };

  guestList = parser(guestList);
  participants = parser(participants);
  pets = parser(pets);
  bills = parser(bills);
  return (
    <Container>
      <div className={classes.root2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper2}>
              <Typography>First Name: {state.userInfo.firstName}</Typography>

              <Typography>Last Name: {state.userInfo.lastName}</Typography>

              <Typography>email: {state.userInfo.email}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper2}>
              <Typography>Burial/Rites Plan</Typography>
              <br></br>
              <Typography>Rite: {state.plan.rite}</Typography>
              <FormControl component='fieldset'>
                <FormLabel component='legend'>Select your rites.</FormLabel>
                <RadioGroup aria-label='select-your-rites'>
                  <FormControlLabel
                    value='Casket'
                    rite='Casket'
                    id='rite'
                    control={<Radio />}
                    label='Casket'
                    onClick={handlePlanSummaryChange('rite')}
                  />
                  <FormControlLabel
                    value='Cremation'
                    rite='Cremation'
                    id='rite'
                    control={<Radio />}
                    label='Cremation'
                    onClick={handlePlanSummaryChange('rite')}
                  />
                  <FormControlLabel
                    value='other'
                    id='rite'
                    rite='rite'
                    control={<Radio />}
                    label={
                      <TextField
                        placeholder='Other'
                        onChange={(e) => {
                          handlePlanSummaryChange('Other: ' + e.target.value);
                        }}
                      />
                    }
                  />
                </RadioGroup>
              </FormControl>
              <Typography>Funeral Home: {state.plan.funeralHome}</Typography>
              <TextField
                onChange={handlePlanSummaryChange('funeralHome')}
                funeralHome='funeralHome'
                id='funeralHome'
                label='Funeral Home'
                value={planSummary.funeralHome}
                variant='outlined'
              />
              <Typography>
                Funeral Location: {state.plan.funeralLocation}
              </Typography>
              <TextField
                onChange={handlePlanSummaryChange('funeralLocation')}
                funeralLocation='funeralLocation'
                id='funeralLocation'
                label='Funeral Location'
                value={planSummary.funeralLocation}
                variant='outlined'
              />
              <Typography>
                Graveside Service Location: {state.plan.graveSideLocation}
              </Typography>
              <TextField
                onChange={handlePlanSummaryChange('graveSideLocation')}
                graveSideService='graveSideLocation'
                id='graveSideLocation'
                label='Location'
                value={planSummary.graveSideLocation}
                variant='outlined'
              />
              <Typography>
                Memorial Service Location: {state.plan.memorialLocation}
              </Typography>
              <TextField
                onChange={handlePlanSummaryChange('memorialLocation')}
                memorialLocation='memorialLocation'
                id='memorialLocation'
                label='Location'
                value={planSummary.memorialLocation}
                variant='outlined'
              />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper2}>
              <Typography>Service Plan</Typography>
              <br></br>
              <Typography>Guest List: {guestList}</Typography>
              <TextField
                onChange={handleServiceSummaryChange('guestList')}
                guestList='guestList'
                id='guestList'
                label='Guest List'
                value={guestList}
                variant='outlined'
              />
              <Typography>Participants: {participants}</Typography>
              <TextField
                onChange={handleServiceSummaryChange('participants')}
                participants='participants'
                id='participants'
                label='Participants'
                value={participants}
                variant='outlined'
              />
              <Typography>Prayers/Readings: {prayersRead}</Typography>
              <TextField
                onChange={handleServiceSummaryChange('prayersRead')}
                prayersRead='prayersRead'
                id='prayersRead'
                label='Prayers/Readings'
                value={prayersRead}
                variant='outlined'
              />
              <Typography>Music: {musicPlayed}</Typography>
              <TextField
                onChange={handleServiceSummaryChange('musicPlayed')}
                musicPlayed='musicPlayed'
                id='musicPlayed'
                label='Music Played'
                value={musicPlayed}
                variant='outlined'
              />
              <Typography>Catering Service: {cateringService}</Typography>
              <TextField
                onChange={handleServiceSummaryChange('cateringService')}
                cateringService='cateringService'
                id='cateringService'
                label='Catering Service'
                value={cateringService}
                variant='outlined'
              />
              <Typography>Extras {state.service.extras}</Typography>
              <TextField
                onChange={handleServiceSummaryChange('extras')}
                extras='extras'
                id='serviceExtras'
                label='Extras'
                value={serviceSummary.extras}
                variant='outlined'
              />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper2}>
              <Typography>Future Checklist</Typography>
              <br></br>
              <Typography>Pets: {state.checklist.pets}</Typography>
              <TextField
                onChange={handleChecklistSummaryChange('pets')}
                pets='pets'
                id='pets'
                label='Pets'
                value={pets}
                variant='outlined'
              />

              <Typography>Bills: {bills}</Typography>
              <TextField
                onChange={handleChecklistSummaryChange('bills')}
                bills='bills'
                id='bills'
                label='Bills'
                value={bills}
                variant='outlined'
              />
              <Typography>Extras {state.checklist.extras}</Typography>
              <TextField
                onChange={handleChecklistSummaryChange('extras')}
                extras='extras'
                id='checklistExtras'
                label='Extras'
                value={checklistSummary.extras}
                variant='outlined'
              />
            </Paper>
          </Grid>
          <Button
            onClick={() => {
              dispatch(updateRitesPlanSummaryReducer(planSummary));
              dispatch(updateServiceSummaryReducer(serviceSummary));
              dispatch(updateChecklistSummaryReducer(checklistSummary));
              //updateUserInfo();
              updatePlanInfo();
              updateServiceInfo();
              updateChecklistInfo();
              history.push('/summary');
            }}
            style={{ margin: '0 auto', display: 'flex' }}
          >
            Submit
          </Button>
        </Grid>
      </div>
    </Container>
  );
};
export default EditSummary;
