import React from "react";
import './header.css';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: {
        name: 'userTest',
        id: '001',
        gender: '男',
      },
    };
  }
  render() {
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
          <a href="#">
            { '退出' }
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
