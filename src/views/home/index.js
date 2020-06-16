import React from "react";
import axios from '../../interceptor/index';
import { Message } from '../../utils/index';
import { FormattedMessage } from 'react-intl';
import { List, Typography, Divider, Button } from 'antd';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
      ],
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
  handleAdd() {
    console.log('Add');
  };
  render() {
    return (
      <div>
        <Button
          type="primary"
          onClick={this.handleAdd}
        >
          <FormattedMessage id="operate.add" />
        </Button>
        <Divider orientation="left">Default Size</Divider>
        <List
          header={<FormattedMessage id="operate.edit" />}
          footer={<div>Footer</div>}
          bordered
          dataSource={this.state.data}
          renderItem={item => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Home;
