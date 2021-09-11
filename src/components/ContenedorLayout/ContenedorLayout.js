import React from "react";
import EleccionesPrevias from "../EleccionesPrevias/EleccionesPrevias";
import Historia from "../Historia/Historia";
import Opciones from "../Opciones/Opciones";
import data from "../data.json"

export default class ContenedorLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
      id: "1",
      eleccionPrev: [],
    };
  }

  componentDidUpdate = (prevProp, prevState) => {
    const { key, id, eleccionPrev } = this.state;

    if (prevState.key !== key && key <= 5) {
      eleccionPrev.push(id.substring(1).toUpperCase());
    }
  };

  elegirOpcionA = () => {
    const { key } = this.state;

    if (key <= ((data.length)/2)) {
      this.setState({
        key: key + 1,
        id: key + 1 + "a",
      });
    } else {
        alert("Ha llegado el final de la historia")
    }
  };

  elegirOpcionB = () => {
    const { key } = this.state;

    if (key <= ((data.length)/2)) {
      this.setState({
        key: key + 1,
        id: key + 1 + "b",
      });
    } else {
        alert("Ha llegado el final de la historia")
    }
  };

  render() {

    const {key, id, eleccionPrev} = this.state

    const filtroDeData = data.find((objeto) => objeto.id.includes(id))
    

    let elecciones = {
        A: this.elegirOpcionA,
        B: this.elegirOpcionB,
    }

    return (
        <div className="layout">
          <Historia historia={filtroDeData.historia} />
          <Opciones elecciones={elecciones} opciones={filtroDeData.opciones} />
          <EleccionesPrevias eleccionesPrevias={id.substring(1).toUpperCase()} arrayElecciones={eleccionPrev}/>
     </div>
    )
  }
}
