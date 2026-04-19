import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import CardHead from "./components/cards/cardhead";
import Cards from "./components/cards/cards";
import { Suspense } from "react";

const fetchingJson = async () => {
  const res = await fetch("../public/data.json");
  const resJson = res.json();
  return resJson;
};

function App() {
  const cardJson = fetchingJson();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <CardHead></CardHead>
      <Suspense fallback = {<h1>loading...</h1>}>
        <Cards cardJson = {cardJson}></Cards>
      </Suspense>
    </>
  );
}

export default App;
