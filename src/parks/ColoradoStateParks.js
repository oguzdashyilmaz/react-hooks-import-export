import React from "react";
import howManyParks from "./howManyParks";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}

export default  ColoradoStateParks;