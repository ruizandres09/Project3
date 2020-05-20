import React, { Component, createContext } from "react";
import PropTypes from "prop-types";

export default class auth0Context extends Component {
    state = {
        auth0Client = null,
    isAuthenticated = false
}
config = {}
initauth0 = async()=>{
    const auth0Client = await createAuth0Client(this.config);

}
  render() {
    return <div></div>;
  }
}
