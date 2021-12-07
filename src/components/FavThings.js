import React from "react";
import cat from "../assets/images/cat.png";
import controller from "../assets/images/controller.png";
import map from "../assets/images/map.png";
import coffee from "../assets/images/coffee.png";

export default function FavThings() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 place-content-center m-5 gap-4 flex-grow-0">
      <img src={ cat } alt="Cat" className="row-start-1	row-end-2 col-start-1 col-end-2 max-h-full transform duration-500 ease-in-out hover:scale-110" />
      <img src={ controller } alt="Controller" className="row-start-1	row-end-2 col-start-2 col-end-3 max-h-full transform duration-500 ease-in-out hover:scale-110" />
      <img src={ coffee } alt="Coffee" className="row-start-2	row-end-3 col-start-1 col-end-2 max-h-full transform duration-500 ease-in-out hover:scale-110" />
      <img src={ map } alt="Map" className="row-start-2	row-end-3 col-start-2 col-end-3 max-h-full transform duration-500 ease-in-out hover:scale-110" />
    </div>
  )
}