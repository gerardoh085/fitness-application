import { useEffect, useState } from "react";

import "./style.css";

import axios from "axios";

import Navbar from "./components/navbar/Navbar";
import { useParams } from "react-router-dom";

import Home from "./components/home/Home";
import FooterInfo from "./components/footer/FooterInfo";
import JournalEntry from "./components/journal/JournalEntry";

function App() {
  // const [data, setData] = useState([]);
  // const header = {
  //   method: "GET",
  //   limit: "10",
  //   offset: "10",
  // };
  // const fUrl = "https://wger.de/api/v2/exerciseimage/?limit=20&offset=20";
  // useEffect(() => {
  //   fetch(fUrl, header)
  //     .then((res) => res.json())
  //     .then((resdata) => setData(resdata.results));
  // }, []);

  const [backend, setBackend] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((res) => res.json())
      .then((resdata) => {
        setBackend(resdata.tests);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(backend);
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        {name === "home" ? (
          <Home></Home>
        ) : name === "journal" ? (
          <JournalEntry></JournalEntry>
        ) : (
          <Home></Home>
        )}
        
        <FooterInfo></FooterInfo>
      </div>
    </>
  );
}

export default App;
