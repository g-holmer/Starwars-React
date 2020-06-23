import React from "react";
import classes from './Search.css'
const search = (props) => (
    <div className={classes.Search}>
  <input placeholder="Search" className={classes.Input} onChange={props.filter}/>
  </div>
);

export default search;
