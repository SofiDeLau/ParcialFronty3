import React from "react";

export default class Opciones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    const {elecciones, opciones} = this.props


    return (
      <div className="opciones">
        <div className="opcion">
          <button id="A" className="botones" onClick={elecciones.A} >
            A
          </button>
          <h2>{opciones.a}</h2>
        </div>
        <div className="opcion">
          <button id="B" className="botones" onClick={elecciones.B}>
            B
          </button>
          <h2>{opciones.b}</h2>
        </div>
      </div>
    );
  }
}
