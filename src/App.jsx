import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Papa from "papaparse";
import CSVReader from "react-csv-reader";
import axios from "axios";

function App() {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    // Replace 'fitness_exercises.csv' with the correct path to your CSV file
    const csvFilePath = "../src/fitness_exercises.csv";

    fetch(csvFilePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        Papa.parse(data, {
          header: true,
          complete: (res) => {
            setCsvData(res.data);
          },
          error: (err) => {
            console.log(err);
          },
        });

        // Parse CSV data into rows and columns
        // const rows = text.split("\n");
        // const csvData = [];
        // for (let i = 0; i < rows.length; i++) {
        //   const columns = rows[i].split(",");
        //   csvData.push(columns);
        // }
        // setCsvData(csvData);
      })
      .catch((error) => {
        console.error("Error fetching or parsing CSV:", error);
      });

    /////////////////////////////////////////////////////

    // .then((resData) => console.log(resData));
    // const fetchCSV = async () => {
    //   try {
    //     const response = await fetch(csvFilePath);
    //     const blob = await response.blob();
    //     const reader = new FileReader();

    //     reader.onload = () => {
    //       const text = reader.result;
    //       console.log("CSV Text:", text);
    //       // Parse CSV data into rows and columns
    //       const rows = text.split("\n");
    //       const csvData = [];
    //       for (let i = 0; i < rows.length; i++) {
    //         const columns = rows[i].split(",");
    //         csvData.push(columns);
    //       }
    //       setCsvData(csvData);
    //     };

    //     reader.readAsText(blob);
    //   } catch (error) {
    //     console.error("Error fetching CSV:", error);
    //   }
    // };

    // fetchCSV();
  }, []);

  console.log(csvData[0]);
  return (
    <>
      <div>
        {/* <CSVReader
          onFileLoaded={(data, fileInfo, originalFile) => console.log(data)}
        /> */}
        <img src={csvData[0].url}></img>
      </div>
    </>
  );
}

export default App;
