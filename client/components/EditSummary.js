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
import {
  userInfoState,
  updateUserInfoSummaryReducer,
} from '../slices/userInfoSlice';
import { updateRitesPlanSummaryReducer } from '../slices/selectPlanSlice';
import { updateServiceSummaryReducer } from '../slices/chooseServiceSlice';
import { updateChecklistSummaryReducer } from '../slices/futureChecklistSlice';

const useStyles = makeStyles((theme) => ({
  root2: {
    flexGrow: 1,
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
    console.log('prop', prop);
    console.log('event in plan summary change', e.target.value);
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
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const updatePlanInfo = () => {
    return axios
      .put('/api/plan', {
        plan: { ...planSummary },
        userInfo: { ...userInfoSummary },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const updateServiceInfo = () => {
    return axios
      .put('/api/service', {
        service: serviceSummary,
        userInfo: userInfoSummary,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const updateChecklistInfo = () => {
    axios
      .put('/api/future', {
        checklist: checklistSummary,
        userInfo: userInfoSummary,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const classes = useStyles();
  console.log('userInfoSummary: ', userInfoSummary);
  console.log('planSummary: ', planSummary);
  console.log('serviceSummary: ', serviceSummary);
  console.log('checklistSummary: ', checklistSummary);
  return (
    <Container>
      <div className={classes.root2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper2}>
              <Typography>First Name: {state.userInfo.firstName}</Typography>
              <TextField
                onChange={handleUserInfoSummaryChange('firstName')}
                firstName='firstName'
                id='firstName'
                label='First Name'
                value={userInfoSummary.firstName}
                variant='outlined'
              />
              <Typography>Last Name: {state.userInfo.lastName}</Typography>
              <TextField
                onChange={handleUserInfoSummaryChange('lastName')}
                lastName='lastName'
                id='lastName'
                label='Last Name'
                value={userInfoSummary.lastName}
                variant='outlined'
              />
              <Typography>email: {state.userInfo.email}</Typography>
              <TextField
                onChange={handleUserInfoSummaryChange('email')}
                email='email'
                id='email'
                label='email'
                value={userInfoSummary.email}
                variant='outlined'
              />
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
                    value='casket'
                    rite='Casket'
                    id='rite'
                    control={<Radio />}
                    label='Casket'
                    onClick={handlePlanSummaryChange('rite')}
                  />
                  <FormControlLabel
                    value='cremation'
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
                        placeholder='Other: Write your wishes here.'
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
                label='Graveside Service Location'
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
                label='Memorial Service Location'
                value={planSummary.memorialLocation}
                variant='outlined'
              />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper2}>
              <Typography>Service Plan</Typography>
              <br></br>
              <Typography>Guest List: {state.service.guestList}</Typography>
              <TextField
                onChange={handleServiceSummaryChange('guestList')}
                guestList='guestList'
                id='guestList'
                label='Guest List'
                value={serviceSummary.guestList}
                variant='outlined'
              />
              <Typography>
                Participants: {state.service.participants}
              </Typography>
              <TextField
                onChange={handleServiceSummaryChange('participants')}
                participants='participants'
                id='participants'
                label='Participants'
                value={serviceSummary.participants}
                variant='outlined'
              />
              <Typography>
                Prayers/Readings: {state.service.prayersRead}
              </Typography>
              <TextField
                onChange={handleServiceSummaryChange('prayersRead')}
                prayersRead='prayersRead'
                id='prayersRead'
                label='Paryers/Readings'
                value={serviceSummary.prayersRead}
                variant='outlined'
              />
              <Typography>Music: {state.service.musicPlayed}</Typography>
              <TextField
                onChange={handleServiceSummaryChange('musicPlayed')}
                musicPlayed='musicPlayed'
                id='musicPlayed'
                label='Music Played'
                value={serviceSummary.musicPlayed}
                variant='outlined'
              />
              <Typography>
                Catering Service: {state.service.cateringService}
              </Typography>
              <TextField
                onChange={handleServiceSummaryChange('cateringService')}
                cateringService='cateringService'
                id='cateringService'
                label='Catering Service'
                value={serviceSummary.cateringService}
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
                value={checklistSummary.pets}
                variant='outlined'
              />

              <Typography>Bills: {state.checklist.bills}</Typography>
              <TextField
                onChange={handleChecklistSummaryChange('bills')}
                bills='bills'
                id='bills'
                label='Bills'
                value={checklistSummary.bills}
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
              dispatch(updateUserInfoSummaryReducer(userInfoSummary));
              dispatch(updateRitesPlanSummaryReducer(planSummary));
              dispatch(updateServiceSummaryReducer(serviceSummary));
              dispatch(updateChecklistSummaryReducer(checklistSummary));
              updateUserInfo();
              updatePlanInfo();
              // updateServiceInfo();
              // updateChecklistInfo();
              history.push('/summary');
            }}
          >
            Submit
          </Button>
        </Grid>
      </div>
    </Container>
  );
};
export default EditSummary;
