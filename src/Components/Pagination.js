import React from "react";
import classes from './Pagination.css'
const pagination = (props) => (
    <div className={classes.Pagination}>
  <button className={classes.Btn} onClick={props.previous}>Previous</button>
  <button className={classes.Btn} onClick={props.next}>Next</button>
  </div>
);

export default pagination;
