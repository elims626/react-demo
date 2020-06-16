import React from "react";

class User extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        { this.props.match.params.id }
        {/*{ this.props.location.query.id }*/}
      </div>
    );
  }
}

export default User;
