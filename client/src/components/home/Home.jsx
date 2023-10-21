import React, { useState } from "react";
import "./home.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Home = () => {
  const sampleData = [
    { year: 2016, count: 15 },
    { year: 2017, count: 25 },
    { year: 2018, count: 35 },
    { year: 2019, count: 45 },
    { year: 2020, count: 55 },
    { year: 2021, count: 25 },
    { year: 2022, count: 75 },
    { year: 2023, count: 15 },
  ];
  const [userData, setUserData] = useState({
    labels: sampleData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: sampleData.map((data) => data.count),
      },
    ],
  });
  console.log(userData);

  const defaultDate = new Date();
  const HandleCalendar = () => {
    return (
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            orientation="portrait"
            defaultValue={dayjs(defaultDate)}
          />
        </LocalizationProvider>
      </div>
    );
  };

  return (
    <div className="home-container">
      <div className="main-home">
        <div className="home-title">
          <h2>Fitness Application</h2>
        </div>
        <div className="item-horizontal-display">
          <div className="calendar-items">
            <div className="calendar-title">
              <h2>Calendar</h2>
            </div>
            <HandleCalendar></HandleCalendar>
          </div>
          <div className="workout-recs">
            <div className="workout-rec-title">
              <h2>Workouts:</h2>
            </div>
            <div className="workout-screen">
              <div className="workout-item">Bench Presses</div>
              <div className="workout-item">Bench Presses</div>
              <div className="workout-item">Bench Presses</div>
              <div className="workout-item">Bench Presses</div>
              <div className="workout-item">Bench Presses</div>
              <div className="workout-item">Bench Presses</div>
              <div className="workout-item">Bench Presses</div>
              <div className="workout-item">Bench Presses</div>
            </div>
          </div>
          <div className="journal-display">
            <div className="journal-title">
              <h2>Journal:</h2>
            </div>
            <div className="journal-display">
              <div className="journal-list">
                <div className="journal-entry-item">item1</div>
                <div className="journal-entry-item">item1</div>
                <div className="journal-entry-item">item1</div>
                <div className="journal-entry-item">item1</div>
                <div className="journal-entry-item">item1</div>
                <div className="journal-entry-item">item1</div>
                <div className="journal-entry-item">item1</div>
              </div>
            </div>
          </div>
        </div>
        {/* --chart display:-- */}
        <div className="chart-main-container">
          <Line
            className="bar-chart"
            data={userData}
            // options={}
          ></Line>
        </div>
      </div>
    </div>
  );
};

export default Home;
