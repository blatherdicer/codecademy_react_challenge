import React from "react";


export const Tile = (props) => {

  const item = props.item;

  return (
    <div className="tile-container">
        {
          Object.keys(item).map((property,i)=>{
            return (
                <p 
                  className={ i===0 ? 'tile-title' : 'tile'}
                  key={i}>{item[property]}</p>
              )
          })
        }
    </div>
  );
};
