import React from "react";
import "./Dashboard.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

const data = {
  labels: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  datasets: [
    {
      label: "Rainfall",
      lineTension: 0.5,
      backgroundColor: "blue",
      borderWidth: 1,
      borderColor: "black",
      data: [
        30, 45, 60, 90, 30, 45, 60, 90, 30, 45, 60, 90, 30, 45, 60, 90, 30, 45,
        60, 90, 60, 90, 30, 45, 75,
      ],
    },
  ],
};

const Dashboard = () => {
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
                <Line
                  data={data}
                  options={{
                    title: {
                      display: true,
                      text: "Average Rainfall per month",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
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
                <h2 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Resume Your Course
                </h2>
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
