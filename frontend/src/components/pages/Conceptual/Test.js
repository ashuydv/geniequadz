import React from "react";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Button,
  Radio,
} from "@mui/material";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 5,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper text-center font-semibold">
      <div className="time text-3xl">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;

const Test = () => {
  const startTime = Date.now() / 1000;
  const endTime = startTime + 243248;

  const remainingTime = endTime - startTime;
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper elevation={3} className="p-5 w-full mt-0 mb-4">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              MCQ 1
            </h2>
            <p className="leading-relaxed mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              ducimus animi repellendus a, porro quae aliquid exercitationem
              veritatis architecto excepturi?
            </p>
            <Divider />
            <FormGroup>
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
            </FormGroup>
          </Paper>
          <Paper elevation={3} className="p-5 w-full mt-0 mb-4">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              MCQ 1
            </h2>
            <p className="leading-relaxed mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              ducimus animi repellendus a, porro quae aliquid exercitationem
              veritatis architecto excepturi?
            </p>
            <Divider />
            <FormGroup>
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
            </FormGroup>
          </Paper>
          <Paper elevation={3} className="p-5 w-full mt-0 mb-4">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              MCQ 1
            </h2>
            <p className="leading-relaxed mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              ducimus animi repellendus a, porro quae aliquid exercitationem
              veritatis architecto excepturi?
            </p>
            <Divider />
            <FormGroup>
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
            </FormGroup>
          </Paper>
          <Paper elevation={3} className="p-5 w-full mt-0 mb-4">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              MCQ 1
            </h2>
            <p className="leading-relaxed mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              ducimus animi repellendus a, porro quae aliquid exercitationem
              veritatis architecto excepturi?
            </p>
            <Divider />
            <FormGroup>
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
            </FormGroup>
          </Paper>
          <Paper elevation={3} className="p-5 w-full mt-0 mb-4">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              MCQ 1
            </h2>
            <p className="leading-relaxed mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              ducimus animi repellendus a, porro quae aliquid exercitationem
              veritatis architecto excepturi?
            </p>
            <Divider />
            <FormGroup>
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
            </FormGroup>
          </Paper>
          <Paper elevation={3} className="p-5 w-full mt-0 mb-4">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              MCQ 1
            </h2>
            <p className="leading-relaxed mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              ducimus animi repellendus a, porro quae aliquid exercitationem
              veritatis architecto excepturi?
            </p>
            <Divider />
            <FormGroup>
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
            </FormGroup>
          </Paper>
          <Paper elevation={3} className="p-5 w-full mt-0 mb-4">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              MCQ 1
            </h2>
            <p className="leading-relaxed mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              ducimus animi repellendus a, porro quae aliquid exercitationem
              veritatis architecto excepturi?
            </p>
            <Divider />
            <FormGroup>
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
            </FormGroup>
          </Paper>
          <Paper elevation={3} className="p-5 w-full mt-0 mb-4">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              MCQ 1
            </h2>
            <p className="leading-relaxed mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              ducimus animi repellendus a, porro quae aliquid exercitationem
              veritatis architecto excepturi?
            </p>
            <Divider />
            <FormGroup>
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
            </FormGroup>
          </Paper>
          <Paper elevation={3} className="p-5 w-full mt-0 mb-4">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              MCQ 1
            </h2>
            <p className="leading-relaxed mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              ducimus animi repellendus a, porro quae aliquid exercitationem
              veritatis architecto excepturi?
            </p>
            <Divider />
            <FormGroup>
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
            </FormGroup>
          </Paper>
          <Paper elevation={3} className="p-5 w-full mt-0 mb-4">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              MCQ 1
            </h2>
            <p className="leading-relaxed mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              ducimus animi repellendus a, porro quae aliquid exercitationem
              veritatis architecto excepturi?
            </p>
            <Divider />
            <FormGroup>
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
              <FormControlLabel control={<Radio />} label="Label" />
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} className=" p-5 w-full mt-0 mb-4">
            <Box className=" flex items-center justify-around py-4">
              <CountdownCircleTimer
                {...timerProps}
                colors={[["#EF798A"]]}
                className=" text-center"
                duration={hourSeconds}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={(totalElapsedTime) => [
                  remainingTime - totalElapsedTime > minuteSeconds,
                ]}
              >
                {({ elapsedTime }) =>
                  renderTime(
                    "minutes",
                    getTimeMinutes(hourSeconds - elapsedTime)
                  )
                }
              </CountdownCircleTimer>
              <CountdownCircleTimer
                {...timerProps}
                colors={[["#218380"]]}
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => [
                  remainingTime - totalElapsedTime > 0,
                ]}
              >
                {({ elapsedTime }) =>
                  renderTime("seconds", getTimeSeconds(elapsedTime))
                }
              </CountdownCircleTimer>
            </Box>
            <Divider className=" my-4" />
            <List>
              <ListItem button className=" flex items-center justify-between">
                <ListItemText>Questions Attempted</ListItemText>
                <ListItemText>07</ListItemText>
              </ListItem>
              <ListItem button className=" flex items-center justify-between">
                <ListItemText>Questions Attempted</ListItemText>
                <ListItemText>07</ListItemText>
              </ListItem>
              <ListItem button className=" flex items-center justify-between">
                <ListItemText>Questions Attempted</ListItemText>
                <ListItemText>07</ListItemText>
              </ListItem>
            </List>
            <Divider className=" my-4" />
            <Box className=" flex items-center justify-around">
              <IconButton>
                <p className="text-sm">1</p>
              </IconButton>
              <IconButton>
                <p className="text-sm">2</p>
              </IconButton>
              <IconButton>
                <p className="text-sm">3</p>
              </IconButton>
              <IconButton>
                <p className="text-sm">4</p>
              </IconButton>
              <IconButton>
                <p className="text-sm">5</p>
              </IconButton>
              <IconButton>
                <p className="text-sm">6</p>
              </IconButton>
              <IconButton>
                <p className="text-sm">7</p>
              </IconButton>
              <IconButton>
                <p className="text-sm">8</p>
              </IconButton>
              <IconButton>
                <p className="text-sm">9</p>
              </IconButton>
              <IconButton>
                <p className="text-sm">10</p>
              </IconButton>
            </Box>
            <Divider className=" my-4" />
            <button class="flex mx-auto mt-4 text-white bg-gradient-to-br from-yellow-400 to-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
              Way to Coding Playground
            </button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Test;
