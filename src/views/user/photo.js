import React from "react";
import { DateFormat } from '../../utils';

class User extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <div>
          Photo
          {DateFormat(1360013296000)}
        </div>
    );
  }
}

export default User;
