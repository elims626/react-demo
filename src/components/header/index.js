import React from "react";
import './header.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ReactDOM from "react-dom";
import {IntlProvider} from "react-intl";
import {locale} from "../../i18n";
import App from "../../App";

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: {
        name: 'userTest',
        id: '001',
        gender: '男',
      },
      lang: window.localStorage.getItem('lang') || 'zh',
      i18n: [
        {
          label: '中文',
          value: 'zh',
        },
        {
          label: '英文',
          value: 'en',
        },
      ],
    };
  }
  // 语言切换
  handleChange = (val) => {
    const { key } = val;
    this.setState({
      lang: key,
    });
    window.localStorage.setItem('lang', key);
    ReactDOM.render(
      <IntlProvider
        locale={key}
        messages={locale(key)}
      >
        <App />
      </IntlProvider>,
      document.getElementById('root')
    );
  };
  render() {
    const renderDropdown = (<Menu onClick={this.handleChange}>
      {
        this.state.i18n.map((item) => (
          <Menu.Item key={item.value}>
            <span>
              { item.label }
            </span>
          </Menu.Item>
        ))
      }
    </Menu>);
    return (
      <div className="header">
        <img
          src=""
          alt=""
        />
        <div className="fr">
          <span className="mr-10">
            { this.state.user.name}
          </span>
          <Dropdown
            overlay={renderDropdown}
            trigger={['click']}
          >
            <span onClick={e => e.preventDefault()}>
              {(this.state.i18n.find((e) => e.value === this.state.lang)).label} <DownOutlined />
            </span>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default Header;
