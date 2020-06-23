import React from "react";
import classes from './Character.css';

const character = (props) => (
    <div onClick={props.clicked} className={classes.Character}>
      {props.name}
  </div>
);


export default character;