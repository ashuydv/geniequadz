import {
  Grid,
  Paper,
  IconButton,
  CardActions,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";
import "./Live.css";
import Card from "@mui/material/Card";
import MicIcon from "@mui/icons-material/Mic";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallEndIcon from "@mui/icons-material/CallEnd";
import SendIcon from "@mui/icons-material/Send";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

const Live = () => {
  return (
    <div>
      <Grid container className="flex" spacing={2}>
        <Grid item xs={8} className=" w-full">
          <Paper elevation={3} className="p-5">
            <h1 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-5 md:w-2/5">
              Live Session
            </h1>
            <Card
              className="m-auto"
              style={{ background: "#333", height: "70vh" }}
            >
              <div className="w-full ">
                <img
                  className="w-full object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/300x300"
                  style={{ height: "59vh" }}
                />
              </div>
              <CardActions className="m-2 flex items-center justify-center">
                <IconButton style={{ color: "white", background: "#222" }}>
                  <MicIcon />
                </IconButton>
                <IconButton
                  style={{ color: "white", background: "#f00000" }}
                  size="large"
                >
                  <CallEndIcon />
                </IconButton>
                <IconButton style={{ color: "white", background: "#222" }}>
                  <VideocamIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={4} className=" w-full chats m-auto">
          <Paper elevation={3} className="p-5 w-full h-auto">
            <h1 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-5 md:w-2/5">
              Live Chats
            </h1>
            <div
              className=" bg-gray-100 p-2 mb-2 overflow-y-scroll"
              style={{ height: "63vh", width: "100%" }}
            >
              <Card className=" p-2 w-80 sender my-2 float-left" elevation={0}>
                <small className="font-medium text-yellow-500">
                  Anwesh Biswas
                </small>
                <p>Chat 1</p>
              </Card>
              <Card
                className=" p-2 w-80 reciever my-2 float-right"
                elevation={0}
              >
                <small className="font-medium text-purple-500">
                  Mainak Shah
                </small>
                <p>Chat 1</p>
              </Card>
              <Card className=" p-2 w-80 sender my-2 float-left" elevation={0}>
                <small className="font-medium text-yellow-500">
                  Akanksha Wagh
                </small>
                <p>Chat 1</p>
              </Card>
              <Card
                className=" p-2 w-80 reciever my-2 float-right"
                elevation={0}
              >
                <small className="font-medium text-purple-500">
                  Ashtosh Yadav
                </small>
                <p>Chat 1</p>
              </Card>
              <Card className=" p-2 w-80 sender my-2 float-left" elevation={0}>
                <small className="font-medium text-yellow-500">
                  Ashtosh Yadav
                </small>
                <p>Chat 1</p>
              </Card>
              <Card
                className=" p-2 w-80 reciever my-2 float-right"
                elevation={0}
              >
                <small className="font-medium text-purple-500">
                  Ashtosh Yadav
                </small>
                <p>Chat 1</p>
              </Card>
              <Card className=" p-2 w-80 sender my-2 float-left" elevation={0}>
                <small className="font-medium text-yellow-500">
                  Ashtosh Yadav
                </small>
                <p>Chat 1</p>
              </Card>
              <Card
                className=" p-2 w-80 reciever my-2 float-right"
                elevation={0}
              >
                <small className="font-medium text-purple-500">
                  Ashtosh Yadav
                </small>
                <p>Chat 1</p>
              </Card>
              <Card className=" p-2 w-80 sender my-2 float-left" elevation={0}>
                <small className="font-medium text-yellow-500">
                  Ashtosh Yadav
                </small>
                <p>Chat 1</p>
              </Card>
              <Card
                className=" p-2 w-80 reciever my-2 float-right"
                elevation={0}
              >
                <small className="font-medium text-purple-500">
                  Ashtosh Yadav
                </small>
                <p>Chat 1</p>
              </Card>
              <Card className=" p-2 w-80 sender my-2 float-left" elevation={0}>
                <small className="font-medium text-yellow-500">
                  Ashtosh Yadav
                </small>
                <p>Chat 1</p>
              </Card>
              <Card
                className=" p-2 w-80 reciever my-2 float-right"
                elevation={0}
              >
                <small className="font-medium text-purple-500">
                  Ashtosh Yadav
                </small>
                <p>Chat 1</p>
              </Card>
              <Card className=" p-2 w-80 sender my-2 float-left" elevation={0}>
                <small className="font-medium text-yellow-500">
                  Ashtosh Yadav
                </small>
                <p>Chat 1</p>
              </Card>
              <Card
                className=" p-2 w-80 reciever my-2 float-right"
                elevation={0}
              >
                <small className="font-medium text-purple-500">
                  Ashtosh Yadav
                </small>
                <p>Chat 1</p>
              </Card>
              <Card className=" p-2 w-80 sender my-2 float-left" elevation={0}>
                <small className="font-medium text-yellow-500">
                  Ashtosh Yadav
                </small>
                <p>Chat 1</p>
              </Card>
              <Card
                className=" p-2 w-80 reciever my-2 float-right"
                elevation={0}
              >
                <small className="font-medium text-purple-500">
                  Ashtosh Yadav
                </small>
                <p>Chat 1</p>
              </Card>
              <Card className=" p-2 w-80 sender my-2 float-left" elevation={0}>
                <small className="font-medium text-yellow-500">
                  Ashtosh Yadav
                </small>
                <p>Chat 1</p>
              </Card>
              <Card
                className=" p-2 w-80 reciever my-2 float-right"
                elevation={0}
              >
                <small className="font-medium text-purple-500">
                  Ashtosh Yadav
                </small>
                <p>Chat 1</p>
              </Card>
            </div>
            <TextField
              fullWidth
              id="filled-start-adornment"
              autoComplete="off"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SendIcon className=" text-blue-500" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="filled"
            />
          </Paper>
        </Grid>
        <Grid item xs={4} className=" w-full chats m-auto">
          <Paper elevation={3} className="p-5 w-full h-auto">
            Hello
          </Paper>
        </Grid>
        <Grid item xs={4} className=" w-full chats m-auto">
          <Paper elevation={3} className="p-5 w-full h-auto">
            Hello
          </Paper>
        </Grid>
        <Grid item xs={4} className=" w-full chats m-auto">
          <Paper elevation={3} className="p-5 w-full h-auto">
            Hello
          </Paper>
        </Grid>
        <Grid item xs={4} className=" w-full chats m-auto">
          <Paper elevation={3} className="p-5 w-full h-auto">
            Hello
          </Paper>
        </Grid>
        <Grid item xs={4} className=" w-full chats m-auto">
          <Paper elevation={3} className="p-5 w-full h-auto">
            Hello
          </Paper>
        </Grid>
        <Grid item xs={4} className=" w-full chats m-auto">
          <Paper elevation={3} className="p-5 w-full h-auto">
            Hello
          </Paper>
        </Grid>
      </Grid>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "sticky", bottom: 16, right: 0, float: 'right' }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </div>
  );
};

export default Live;
