import React from "react";
import {Route} from "react-router-dom";
import Home from "../../views/home/index";
import HomeAdd from "../../views/home/add";

class HRouter extends React.Component{
  render() {
    return (
      <div>
        {/* exact 精确匹配 */}
        {/*<Redirect from="/" to="/home" />*/}
        <Route exact path="/home" component={Home} />
        <Route path="/home/detail/:id" component={HomeAdd} />
        {/*<Route path="/home/add" component={HomeAdd} />*/}
      </div>
    );
  }
}

export default HRouter;
