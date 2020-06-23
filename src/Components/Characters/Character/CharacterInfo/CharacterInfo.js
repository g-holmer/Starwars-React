import React from "react";

import classes from "./CharacterInfo.css";

const characterInfo = (props) => (
  <article className={classes.CharacterInfo}>
      <button onClick={props.clicked} className={classes.Btn}>Go Back</button>
      <p className={classes.info}>Name</p> <p>{props.name}</p>
      <p className={classes.info}>Gender</p> <p>{props.gender}</p>
      <p className={classes.info}>Height</p> <p>{props.height}</p>
      <p className={classes.info}>Skincolor</p> <p>{props.skin_color}</p>
      <p className={classes.info}>Mass</p> <p>{props.mass}</p>
      <p className={classes.info}>Hair Color</p> <p>{props.hair_color}</p>
  </article>
);

export default characterInfo;
