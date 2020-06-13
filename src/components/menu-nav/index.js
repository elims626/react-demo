import React from "react";
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { AppstoreOutlined } from '@ant-design/icons';
import './menu-nav.css';

const { SubMenu } = Menu;

class MenuNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menu: [
        {
          id: '1',
          name: '首页',
          url: '/home',
          children: [],
        },
        {
          id: '2',
          name: '配置中心',
          url: '/setting',
          children: [
            {
              id: '21',
              name: '邮件设置',
              url: '/setting/mail',
              children: [],
            },
            {
              id: '22',
              name: '隐私设置',
              url: '/setting/owner',
              children: [],
            },
          ],
        },
        {
          id: '3',
          name: '个人中心',
          url: '/user',
          children: [
            {
              id: '31',
              name: '我的文章',
              url: '/user/article',
              children: [],
            },
            {
              id: '32',
              name: '图片',
              url: '/user/photo',
              children: [],
            },
            {
              id: '33',
              name: '分享',
              url: '/user/share',
              children: [],
            },
          ],
        },
      ],
      // defaultOpenKeys: [], // 初始展开SubMenu菜单的key
      openKeys: [], // 当前展开SubMenu菜单的key
      defaultSelectedKeys: [], //初始选中菜单的key
      // selectedKeys: ['1'], //当前选中菜单的key
      rootSubmenuKeys: [], // submenu keys of first leve;
    };
  };
  // 生命周期 - 在渲染前调用,客户端-服务端。
  componentWillMount() {
    this.defaultMenu();
  }
  // 生命周期 - 首次渲染后调用，客户端。
  componentDidMount() {
  };
  // 初始化菜单
  defaultMenu() {
    const { menu } = this.state;
    menu.forEach((e) => this.state.rootSubmenuKeys.push(e.id));
    const { location } = window;
    const { hash } = location;
    if (hash === '#/') return;
    const url = hash.split('/')[1];
    const openMenu = menu.find((e) => e.url === `/${url}`);
    const selected = openMenu.children && openMenu.children.length ? openMenu.children.find((e) => e.url=== hash.substring(1)).id :openMenu.id;
    this.setState({
      defaultSelectedKeys: [selected],
      openKeys: [openMenu.id],
    });
  };
  // SubMenu 展开/关闭的回调
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  // 子菜单/无子菜单的一级菜单
  renderMenuItem = (menu) => {
    return (
      <Menu.Item
        key={menu.id}
      >
        <Link to={menu.url}>{menu.name}</Link>
      </Menu.Item>
    )
  };
  // 菜单
  renderSubMenu = (menu) => {
    return (
      <SubMenu
        key={menu.id}
        title={menu.name}
        icon={<AppstoreOutlined />}
      >
        {
          menu.children.map((item) => (
              item.children && item.children.length ? this.renderSubMenu(item) : this.renderMenuItem(item)
          ))
        }
      </SubMenu>
    );
  };
  render() {
    const { openKeys, defaultSelectedKeys } = this.state;
    return (
      <Menu
        mode="inline"
        forceSubMenuRender
        defaultSelectedKeys={defaultSelectedKeys}
        openKeys={openKeys}
        onOpenChange={this.onOpenChange}
        className="menu-nav"
      >
        {
          this.state.menu.map((item) => (
            (item.children && item.children.length) ? this.renderSubMenu(item) : this.renderMenuItem(item)
          ))
        }
      </Menu>
    );
  }
}

export default MenuNav;
