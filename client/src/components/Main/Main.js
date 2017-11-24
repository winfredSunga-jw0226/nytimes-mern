import React, { Component} from "react";
import Jumbotron from "../Jumbotron";
import Search from "../Search";
import Saved from "../Saved";

class Main extends Component {
  
  render() {
    return (
      <div >
        <div className="container-fluid">
          <Jumbotron />
          <Search />
          <Saved />
        </div>
      </div>
    );
  } 
}

export default Main;