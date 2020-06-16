import React from "react";
import { Route } from 'react-router-dom';
import Home from "../views/home";
import HomeAdd from "../views/home/add";
import UserArticle from "../views/user/article";
import UserPhoto from "../views/user/photo";
import UserShare from "../views/user/share";

class RRouter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <div>
          {/* exact 精确匹配 */}
          {/*<Redirect from="/" to="/home" />*/}
          <Route exact path="/home" component={Home} />
          <Route path="/home/add/:id" component={HomeAdd} />
          {/*<Route path="/home/add" component={HomeAdd} />*/}
          <Route path="/user/article" component={UserArticle} />
          <Route path="/user/photo" component={UserPhoto} />
          <Route path="/user/share" component={UserShare} />
        </div>
    );
  }
}

export default RRouter;
