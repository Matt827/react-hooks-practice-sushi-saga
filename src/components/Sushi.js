import React from "react";

function Sushi({id, name, img_url, price, eatSushi, eatenSushi}) {

  return (
    <div className="sushi">
      <div className="plate" onClick={() => eatSushi(id)}>
        {eatenSushi.includes(id) ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}


export default Sushi;
