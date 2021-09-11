import React from "react";


export default class Historia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    const {historia} = this.props

    return (
      <h1 className="historia">{historia}</h1>
    );
  }
}
