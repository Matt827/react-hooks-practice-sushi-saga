import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";
const url = "http://localhost:3000/"

function App() {
  const [sushis, setSushis] = useState([])
  const [index, setIndex] = useState(0)
  const [eatenSushi, setEatenSushi] = useState([])

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(setSushis)
  }, [])

  const fourSushi = sushis.slice(index, index + 4);

  function moreSushi () {
    setIndex(index + 4)
  }

  function eatSushi (id) {
    setEatenSushi([...eatenSushi, id])
  }


  return (
    <div className="app">
      <SushiContainer 
        sushis={fourSushi} 
        moreSushi={moreSushi}
        eatSushi={eatSushi}
        eatenSushi={eatenSushi}/>
      <Table />
    </div>
  );
}

export default App;
