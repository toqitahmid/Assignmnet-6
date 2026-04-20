import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import CardHead from "./components/cards/cardhead";
import Cards from "./components/cards/cards";
import Buytool from "./components/buytool";
import {useState } from "react";


function App() {
  const  [buyCard, setBuyCard] = useState([]);
  const [totalDoller, setTotalDoller] = useState(0);
  return (
    <>
      <Navbar 
      buyCard = {buyCard}
      totalDoller = {totalDoller}
      ></Navbar>
      <Banner></Banner>
      <CardHead></CardHead>
      <Cards
        buyCard = {buyCard}
        setBuyCard = {setBuyCard}
        totalDoller = {totalDoller}
        setTotalDoller = {setTotalDoller}
      ></Cards>
      <Buytool></Buytool>
    </>
  );
}

export default App;
