import React from "react";

export default class EleccionesPrevias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    const {eleccionesPrevias, arrayElecciones} = this.props;
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {eleccionesPrevias}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <ul>
          {
            this.props.arrayElecciones.map((elemento, index)=>{
              return <li key={index}>{elemento}</li>
            })
          }
        </ul>
      </div>
    );
  }
}
