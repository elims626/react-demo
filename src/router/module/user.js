import React from "react";
import {Route} from "react-router-dom";
import UserArticle from "../../views/user/article";
import UserArticleDetail from "../../views/user/article-detail";
import UserPhoto from "../../views/user/photo";
import UserShare from "../../views/user/share";

class URouter extends React.Component{
  render() {
    return (
      <div>
        <Route path="/user" render={({history, location, match}) => (
          <div history={history} location={location} match={match}>
            <Route path="/user/article" render={({history, location, match}) => (
                <div history={history} location={location} match={match}>
                  <Route exact path="/user/article" component={UserArticle} />
                  <Route path="/user/article/detail/:aid" component={UserArticleDetail} />
                </div>
            )} />
            <Route exact path="/user/photo" component={UserPhoto} />
            <Route exact path="/user/share" component={UserShare} />
          </div>
        )} />
      </div>
    );
  }
}

export default URouter;
