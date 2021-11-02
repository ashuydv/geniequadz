import React from "react";
import { Box, Grid, IconButton, Paper } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Link } from "react-router-dom";

const Conceptual = () => {
  return (
    <div>
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Test Yourself
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper
            elevation={3}
            className="p-5 flex items-center justify-between w-full mt-0 mb-4"
          >
            <Link class="text-gray-900 text-lg title-font font-medium" to="test">
              IOC- Test 1
            </Link>
            <IconButton>
              <CheckIcon className=' text-gray-300' />
            </IconButton>
          </Paper>
          <Paper
            elevation={3}
            className="p-5 flex items-center justify-between w-full mt-0 mb-4"
          >
            <Link class="text-gray-900 text-lg title-font font-medium" to="/">
               IOC- Test 2
            </Link>
            <IconButton>
              <CheckIcon className=' text-gray-300' />
            </IconButton>
          </Paper>
          <Paper
            elevation={3}
            className="p-5 flex items-center justify-between w-full mt-0 mb-4"
          >
            <Link class="text-gray-900 text-lg title-font font-medium" to="/">
              IOC- Test 3
            </Link>
            <IconButton>
              <CheckIcon className=' text-gray-300' />
            </IconButton>
          </Paper>
          <Paper
            elevation={3}
            className="p-5 flex items-center justify-between w-full mt-0 mb-4"
          >
            <Link class="text-gray-900 text-lg title-font font-medium" to="/">
              IOC- Test 4
            </Link>
            <IconButton>
              <CheckIcon className=' text-gray-300' />
            </IconButton>
          </Paper>
          <Paper
            elevation={3}
            className="p-5 flex items-center justify-between w-full mt-0 mb-4"
          >
            <Link class="text-gray-900 text-lg title-font font-medium" to="/">
              IOC- Test 5
            </Link>
            <IconButton>
              <CheckIcon className=' text-gray-300' />
            </IconButton>
          </Paper>
          <Paper
            elevation={3}
            className="p-5 flex items-center justify-between w-full mt-0 mb-4"
          >
            <Link class="text-gray-900 text-lg title-font font-medium" to="/">
              IOC- Test 6
            </Link>
            <IconButton>
              <CheckIcon className=' text-gray-300' />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper elevation={3} className=" p-5">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
              Shooting Stars
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              eos porro, consequatur illum vel explicabo nesciunt nobis
              perspiciatis reprehenderit provident.
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Conceptual;
