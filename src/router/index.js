import React from "react";
import URouter from "./module/user";
import HRouter from "./module/home";

class RRouter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <HRouter />
        <URouter />
      </div>
    );
  }
}

export default RRouter;
