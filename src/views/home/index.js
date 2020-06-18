import React from "react";
import axios from '../../interceptor/index';
import { Message } from '../../utils/index';
import { FormattedMessage } from 'react-intl';
import { List, Typography, Divider, Button } from 'antd';
import DialogForm from '../../components/form/dialog-form';
// import RForm from '../../components/form';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      data: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
      ],
      formData: {
        username: 'testuser001',
        open: true,
      },
      formDefault: [
        {
          name: '用户名',
          key: 'username',
          type: 'input',
          message: '用户名不能为空',
          required: true,
        },
        // {
        //   name: '密码',
        //   key: 'password',
        //   type: 'password',
        //   message: '密码不能为空',
        //   required: true,
        // },
        // {
        //   name: '应用',
        //   key: 'appid',
        //   type: 'select',
        //   message: '应用不能为空',
        //   required: true,
        // },
        {
          name: '日期范围',
          key: 'dateRange',
          type: 'dataRange',
          showTime: false,
          message: '日期不能为空',
          required: true,
        },
        // {
        //   name: '登录方式',
        //   key: 'app',
        //   type: 'radio',
        //   message: '登录方式不能为空',
        //   required: true,
        // },
        // {
        //   name: '开关',
        //   key: 'open',
        //   type: 'switch',
        //   message: '开关不能为空',
        //   required: true,
        // },
        // {
        //   name: '每周',
        //   key: 'week',
        //   type: 'checkbox',
        //   message: '不能为空',
        //   required: true,
        // },
      ],
      bigFormObj: {
        week: [
          {
            label: '周一',
            value: 'monday',
          },
          {
            label: '周二',
            value: 'Tu',
          },
          {
            label: '周三',
            value: 'Wed',
          },
          {
            label: '周四',
            value: 'Ta',
          },
        ],
        appid: [
          {
            label: '应用A',
            value: 'a',
          },
          {
            label: '应用B',
            value: 'b',
          },
          {
            label: '应用C',
            value: 'c',
          },
        ],
        app: [
          {
            label: '微信',
            value: 'wx',
          },
          {
            label: 'QQ',
            value: 'qq',
          },
          {
            label: '手机号',
            value: 'mobile',
          },
        ],
      },
    };
  }
  // 生命周期 - 在渲染前调用,客户端-服务端。
  componentWillMount() {
  }
  // 生命周期 - 首次渲染后调用，客户端。
  componentDidMount() {
    this.syncTableData();
  };
  syncTableData() {
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
    // axios({
    //   method: 'POST',
    //   url: '/application/group/listByPage',
    //   data: {},
    // }).then((res) => {
    //   if(res.data.code === '0') {
    //     Message({
    //       type: 'success',
    //       content: res.data.msg,
    //     });
    //   }
    // });
  };
  handleAdd = () => {
    console.log('Add');
    this.setState({
      visible: true,
    });
    // this.props.history.push('/home/detail/67');
    // 该方法页面跳转后刷新页面query参数会丢失
    // this.props.history.push({
    //   pathname: '/home/detail',
    //   query: {
    //     id: 567,
    //   },
    // });
  };
  // 参数回调
  handleUpdate = (val) => {
    this.setState({
      visible: false,
    });
    if (val) {
      console.log(val);
    }
  };
  render() {
    const { formDefault, bigFormObj, formData, visible } = this.state;
    return (
      <div>
        <DialogForm
          visible={visible}
          formData={formData}
          formDefault={formDefault}
          bigFormObj={bigFormObj}
          handleUpdate={this.handleUpdate}
        />
        {/*<RForm*/}
        {/*  formData={formData}*/}
        {/*  formDefault={formDefault}*/}
        {/*  bigFormObj={bigFormObj}*/}
        {/*  handleUpdate={this.handleUpdate}*/}
        {/*/>*/}
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
