import React from "react";
// import axios from 'axios';
import axios from '../../interceptor/index';
import { Message } from '../../utils/index';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }
  // 生命周期 - 在渲染前调用,客户端-服务端。
  componentWillMount() {
  }
  // 生命周期 - 首次渲染后调用，客户端。
  componentDidMount() {
    this.syncTabeData();
  };
  syncTabeData() {
    // 本地json
    axios({
      method: 'GET',
      url: '/home.json',
      params: {},
    }).then((res) => {
      if(res.data.code === '0') {
        Message({
          type: 'success',
          content: res.data.msg,
        });
      }
    });
    // 服务器
    axios({
      method: 'POST',
      url: '/application/group/listByPage',
      data: {},
    }).then((res) => {
      if(res.data.code === '0') {
        Message({
          type: 'success',
          content: res.data.msg,
        });
      }
    });
  };
  render() {
    return (
      <div>
        首页
      </div>
    );
  }
}

export default Home;
