import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {

  const items = props.tileItems;

  return (
    <div>
        {items.map((item,index)=><Tile key={index} item={item} />)}
    </div>
  );
};
