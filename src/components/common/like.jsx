import React, { Component } from "react";

class Like extends Component {
 
  render() {
    console.log(this.props);
    const {liked, onLikeClick} = this.props;

let classes = "fa fa-heart";
  if(!liked) classes += "-o" 
    return (
      <div>
            <i className={classes} 
              onClick={() => onLikeClick(liked)}
              style={{ cursor : "pointer" }}
            aria-hidden="true"></i>
      </div>
    );
  }
}

export default Like;
