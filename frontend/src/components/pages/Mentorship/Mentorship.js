import { Button, Grid, Paper } from "@mui/material";
import React from "react";
import { InlineWidget } from "react-calendly";
import { Link } from "react-router-dom";

const Mentorship = () => {
  return (
    <div>
      <Paper elevation={3} className=" p-5 my-2">
        <div class="flex flex-wrap w-full">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Pitchfork Kickstarter Taxidermy
            </h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
      </Paper>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper elevation={3} className=" p-5 my-2">
            <p className=" pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa,
              impedit laborum laudantium perspiciatis ullam non sit dolore autem
              quo?
            </p>
            <Button variant="contained" className="mt-4">
              Clear Doubt
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} className=" p-5 my-2">
            <p className=" pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa,
              impedit laborum laudantium perspiciatis ullam non sit dolore autem
              quo?
            </p>
            <Button variant="contained" className="mt-4">
              Clear Doubt
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} className=" p-5 my-2">
            <p className=" pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa,
              impedit laborum laudantium perspiciatis ullam non sit dolore autem
              quo?
            </p>
            <Link to="/45mins">
              <Button variant="contained" className="mt-4">
                Clear Doubt
              </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
      <Paper elevation={3} className="my-4">
        <InlineWidget
          url="https://calendly.com/ashu-ydv2001/15min"
          styles={{ width: "1200px", height: "100vh" }}
        />
      </Paper>
    </div>
  );
};

export default Mentorship;
