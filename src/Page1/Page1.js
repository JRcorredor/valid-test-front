import React from "react";
import CustomInput from "../componentes/CustomInput/CustomInput";
import axios from "axios";
import "./page1.css";


class Page1 extends React.Component {
    state = {
      nombre: "",
      apellido: "",
      disabled: true
    };
  
    actualizar = (name, text) => {
      this.setState({ [name]: text });
      console.log(text);
    };
  
    handleClick = () => {
      const request = {
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        procesado: false
      };
      console.log(request);
  
      axios.post(`http://localhost:8080/users`,request).then(res => {
        const persons = res.data;
        console.log(persons);
      });
    };
  
    render() {
      const stylesDiv = {
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        borderRadius: "0.5em",
        padding: "1em",
        color: "#000",
        background: "linear-gradient(45deg,#4A7EAB,#CFDEEB)"
      };
  
      const stylesdiv2 = {
        display: "flex",
        flexDirection: "column"
      };
  
      const stylesh1 = {
        textAlign: "center"
      };
  
      return (
        <div style={stylesDiv}>
          <h1 style={stylesh1}> Formulario de Registro </h1>
          <div style={stylesdiv2}>
            <CustomInput
              name="nombre"
              onChange={this.actualizar}
              namePlaceholder="Nombre "
            ></CustomInput>
            <CustomInput
              name="apellido"
              onChange={this.actualizar}
              namePlaceholder="Apellido "
            ></CustomInput>
          </div>
          <h4>
            Nombre Completo : {this.state.nombre} {this.state.apellido}
          </h4>
          <button className="myButton" onClick={this.handleClick}>
            Registrar
          </button>
        </div>
      );
    }
  }


  export default Page1