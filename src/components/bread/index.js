import React from "react";
import { Breadcrumb } from 'antd';
import { withRouter } from 'react-router-dom';

class RBread extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      breadMenu: [],
    };
  }
  componentDidMount() {
    console.log(this.props.location.pathname, '$$');
  }
  componentWillReceiveProps(next) {
    if (next.location.pathname !== this.props.location.pathname) {
      console.log(next, '@@');
    }
  }

  render() {
    return (
      <Breadcrumb separator=">">
        {
          this.state.breadMenu.map((item) => {
            return (<Breadcrumb.Item>
                {item.name}
              </Breadcrumb.Item>);
          })
        }
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
        <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default withRouter(RBread);
