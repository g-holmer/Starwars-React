import React, { Component } from "react";
import Layout from "./Components/Layout/Layout";
import StarwarsBuilder from "./Containers/StarwarsBuilder/StarwarsBuilder";
import classes from "./App.css";
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <StarwarsBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
