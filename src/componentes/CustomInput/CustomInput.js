import React from "react";

class CustomInput extends React.Component {
  state = {
    text: "",
    color: "#E8E8E8"
  };

  actualizar = event => {
    const text = event.target.value;
    let color = "green";
    if (text.trim() === "") {
      color = "E8E8E8";
    }

    if (text.trim() !== "" && text.trim().length < 2) {
      color = "red";
    }

    this.setState({ text, color });

    this.props.onChange(this.props.name,text);

    console.log(text);
  };

  render() {
    const styles = {
      border: `1px solid  ${this.state.color}`,
      padding: "0.3em 0.6em",
      outline: "none",
      borderRadius: "0.5em",
      margin: "1em"
    };

    return (
      <input
        placeholder={this.props.namePlaceholder}
        type="text"
        value={this.state.text}
        onChange={this.actualizar}
        style={styles}
      />
    );
  }
}



export default CustomInput;
