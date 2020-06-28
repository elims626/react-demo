import React from "react";
import ReactDOM from "react-dom";
import { Breadcrumb } from 'antd';

class RBread extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
          <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
    );
  }
}

export default RBread;
