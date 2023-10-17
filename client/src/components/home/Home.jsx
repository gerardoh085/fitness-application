import React from "react";
import "./home.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";

const Home = () => {
  const defaultDate = new Date();
  const HandleCalendar = () => {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          orientation="portrait"
          defaultValue={dayjs(defaultDate)}
        />
      </LocalizationProvider>
    );
  };
  return (
    <div className="home-container">
      <div className="main-home">
        <div className="home-title">
          <p>Fitness Application</p>
        </div>
        <div className="item-horizontal-display">
          <div className="calendar-items">
            <HandleCalendar></HandleCalendar>
          </div>
          <div className="workout-recs">
            <div className="workout-rec-title">
              <h2>Workout Recommendations:</h2>
            </div>
            <div className="workout-screen">
              <div>Bench Presses</div>
              <div>Bench Presses</div>
              <div>Bench Presses</div>
              <div>Bench Presses</div>
              <div>Bench Presses</div>
              <div>Bench Presses</div>
              <div>Bench Presses</div>
              <div>Bench Presses</div>
            </div>
          </div>
          <div className="journal-display">
            <div className="journal-title">
              <h2>Journal:</h2>
            </div>
            <div className="journal-display">
              <ul>
                <li>item1</li>
                <li>item1</li>
                <li>item1</li>
                <li>item1</li>
                <li>item1</li>
                <li>item1</li>
                <li>item1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
