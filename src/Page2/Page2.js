import React from "react";
import axios from "axios";
import "./Page2.css";

class Page2 extends React.Component {
  state = {
    users: [],
    selectUser: {}
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/users`).then(res => {
      const users = res.data;
      console.log(users);
      this.setState({ users });
    });
  }

  handleClick = async() => {

    const idUser = this.state.selectUser
    const request = {
      nombre: this.state.selectUser.nombre,
      apellido: this.state.selectUser.apellido,
      procesado: true
    };

    await axios.put(`http://localhost:8080/users/${idUser.id}`, request).then(res => {
      const persons = res.data;
      console.log(persons);
    
    });
   await  axios.get(`http://localhost:8080/users`).then(res => {
        const users = res.data;
        console.log(users);
        this.setState({ users });
      });
  };

  select = (selectUser, event) => {
    this.setState({ selectUser });

    console.log(selectUser);
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

    return (
      <div style={stylesDiv}>
        <ul className="circle">
          {this.state.users.map(users => (
            <li
              key={users.id}
              onClick={this.select.bind(this, users)}
              style={{
                color: this.state.selectUser.id === users.id ? "red" : "#4A7EAB"
              }}
            >
              {users.nombre} {users.apellido}--- Procesado {'' + users.procesado}
            </li>
          ))}
        </ul>
        <button onClick={this.handleClick}className="myButton">Procesar</button>
      </div>
    );
  }
}

export default Page2;
