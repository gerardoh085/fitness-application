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
              <h2>Workout Recommendations:</h2>
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
              <ul>
                <li className="journal-entry-item">item1</li>
                <li className="journal-entry-item">item1</li>
                <li className="journal-entry-item">item1</li>
                <li className="journal-entry-item">item1</li>
                <li className="journal-entry-item">item1</li>
                <li className="journal-entry-item">item1</li>
                <li className="journal-entry-item">item1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
