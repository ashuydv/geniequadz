import React from "react";
import "./Dashboard.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";
import { IconButton } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const dataMock = [
  { title: "Live Sessions Attended", value: 10, color: "#E38629" },
  { title: "Recorded Sessions", value: 15, color: "#C13C37" },
];

const defaultLabelStyle = {
  fontSize: "8px",
  fontFamily: "sans-serif",
  fill: "#fff",
};

const Dashboard = () => {

  const shiftSize = 1;

  return (
    <div>
      <div className="dashboard">
        <div class="container">
          <h1 class="title-font font-medium text-3xl text-gray-900">
            Hello, AY
          </h1>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid xs={6}>
              <Paper elevation={3} className="p-5 mt-5 mr-5">
                <PieChart
                  data={dataMock}
                  radius={PieChart.defaultProps.radius - shiftSize}
                  segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
                  label={({ dataEntry }) => dataEntry.value}
                  labelStyle={{
                    ...defaultLabelStyle,
                  }}
                  style={{ height: '250px' }}
                />
              </Paper>
              <Paper elevation={3} className="p-5 mt-5 mr-5">
                <h2 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Join Live Sessions
                </h2>
                <Badge color="error" badgeContent="Live">
                  <img
                    class="rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/600x400"
                    alt="content"
                  />
                </Badge>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam nemo corrupti odio commodi voluptas, minus aperiam eos
                  enim delectus eius.
                </p>
                <Link to="live">
                  <button class="flex mx-auto mt-6 text-white bg-gradient-to-br from-yellow-400 to-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
                    Join Now
                  </button>
                </Link>
              </Paper>
              <Paper elevation={3} className="p-5 mt-5 mr-5">
                <h2 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Rankings
                </h2>
                <section class="text-gray-600 body-font">
                  <div class="container mt-6 mx-auto">
                    <div class="flex flex-col -m-2">
                      <div class="p-2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                            src="https://dummyimage.com/80x80"
                          />
                          <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium">
                              Holden Caulfield
                            </h2>
                            <p class="text-gray-500">UI Designer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </Paper>
            </Grid>
            <Grid xs={6}>
              <Paper elevation={3} className="p-5 mt-5 mr-5">
                <div className=" flex items-start justify-between">
                <h2 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Resume Your Course
                </h2>
                <IconButton>
                  <PlayArrowIcon/>
                </IconButton>
                </div>
                <h3>Web Development</h3>
                <input
                  className="custom-input w-full mt-3"
                  type="range"
                  min="0"
                  max="100"
                  value="20"
                />
              </Paper>
              <Paper elevation={3} className="p-5 mt-5 mr-5">
                <h2 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Courses Enrolled
                </h2>
                <div class="h-1 w-28 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded my-3"></div>
                <ol>
                  <li class="my-5">
                    <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                      Course 1
                    </h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Itaque quisquam, in quod aliquam repudiandae voluptas
                      corporis obcaecati aut, facere at quam! Illo, qui
                      molestias eveniet cum natus repellat animi.
                    </p>
                    <button class="flex text-white bg-gradient-to-br from-yellow-400 to-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-sm mt-4">
                      Start
                    </button>
                  </li>
                  <hr />
                  <li class="my-5">
                    <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                      Course 2
                    </h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Itaque quisquam, in quod aliquam repudiandae voluptas
                      corporis obcaecati aut, facere at quam! Illo, qui
                      molestias eveniet cum natus repellat animi.
                    </p>
                    <button class="flex text-white bg-gradient-to-br from-yellow-400 to-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-sm mt-4">
                      Start
                    </button>
                  </li>
                  <hr />
                  <li class="my-5">
                    <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                      Course 3
                    </h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Itaque quisquam, in quod aliquam repudiandae voluptas
                      corporis obcaecati aut, facere at quam! Illo, qui
                      molestias eveniet cum natus repellat animi.
                    </p>
                    <button class="flex text-white bg-gradient-to-br from-yellow-400 to-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-sm mt-4">
                      Start
                    </button>
                  </li>
                  <hr />
                  <li class="my-5">
                    <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                      Course 4
                    </h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Itaque quisquam, in quod aliquam repudiandae voluptas
                      corporis obcaecati aut, facere at quam! Illo, qui
                      molestias eveniet cum natus repellat animi.
                    </p>
                    <button class="flex text-white bg-gradient-to-br from-yellow-400 to-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-sm mt-4">
                      Resume
                    </button>
                  </li>
                </ol>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
