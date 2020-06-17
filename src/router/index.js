import React from "react";
import { Route } from 'react-router-dom';
import Home from "../views/home/index";
import HomeAdd from "../views/home/add";
import UserArticle from "../views/user/article";
import UserArticleDetail from "../views/user/article-detail";
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
          <Route path="/home/detail/:id" component={HomeAdd} />
          {/*<Route path="/home/add" component={HomeAdd} />*/}
          <Route exact path="/user/article" component={UserArticle} />
          <Route path="/user/article/detail/:aid" component={UserArticleDetail} />
          <Route exact path="/user/photo" component={UserPhoto} />
          <Route exact path="/user/share" component={UserShare} />
        </div>
    );
  }
}

export default RRouter;
