import React from "react";

import classes from "./Characters.css";
import Character from "./Character/Character";
const characters = (props) => {
  let showCharacters = null;

  if (props.chars.length) {
    showCharacters = (
      <div className={classes.Characters}>
        {props.chars.map((char, index) => (
          <Character
            name={char.name}
            key={index}
            clicked={() => props.showInfo(index)}
          />
        ))}
      </div>
    );
  } else {
    showCharacters = <div className={classes.Characters}><div className={classes.Error}>Nothing found</div></div>;
  }
  if(props.loading){
      showCharacters = <div className={classes.Characters}><div className={classes.Error}>Loading...</div></div>
  }
  return <div>{showCharacters}</div>;
};

export default characters;
