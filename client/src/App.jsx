import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./style.css";

import Papa from "papaparse";
import CSVReader from "react-csv-reader";
import axios from "axios";

import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState([]);
  const API_KEY = "dfe5654b3738db5031f5178cfeaf4826e99ef713";
  const header = {
    method: "GET",
    limit: "10",
    offset: "10",
  };
  const fUrl = "https://wger.de/api/v2/exerciseimage/?limit=20&offset=20";
  useEffect(() => {
    fetch(fUrl, header)
      .then((res) => res.json())
      .then((resdata) => setData(resdata.results));
  }, []);

  console.log(data);
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        {/* <CSVReader
          onFileLoaded={(data, fileInfo, originalFile) => console.log(data)}
        /> */}
        {/* <img src={data[0].image}></img> */}
      </div>
    </>
  );
}

export default App;
