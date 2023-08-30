import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, moreSushi, eatSushi, eatenSushi}) {

  const renderSushi = sushis.map(sushi => {
    return <Sushi 
      key={sushi.id} 
      {...sushi}
      eatSushi={eatSushi}
      eatenSushi={eatenSushi}
     />
  })

  return (
    <div className="belt">
      {renderSushi}
      <MoreButton moreSushi={moreSushi}/>
    </div>
  );
}

export default SushiContainer;
