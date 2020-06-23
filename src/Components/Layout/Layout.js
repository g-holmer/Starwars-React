import React from "react";
import classes from "./Layout.css";
const layout = (props) => (
  <div>
    <header className={classes.Header}>
      <div className={classes.Logo}></div>
    </header>
    <main className={classes.Content}>{props.children}</main>
  </div>
);

export default layout;
