import React from "react";

class User extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="text-align-center">
        { this.props.match.params.id }
        {/*{ this.props.location.query.id }*/}
      </div>
    );
  }
}

export default User;
