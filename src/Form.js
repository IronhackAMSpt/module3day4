import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "Bob",
    gender: "",
    mainLanguage: "",
    isMystery: "",
    favouriteFood: ""
  };

  changeName = e => {
    this.setState({
      name: e.target.value
    });
  };

  changeLanguage = e => {
    this.setState({
      mainLanguage: e.target.value
    });
  };

  changeIsMystery = e => {
    console.log(e.target.checked);
    this.setState({
      isMystery: e.target.checked
    });
  };

  changeGender = e => {
    this.setState({
      gender: e.target.value
    });
  };

  handleChange = e => {
    let { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      value = checked;
    }

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          name="name"
          type="text"
          placeholder="name"
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />
        <input
          name="mainLanguage"
          type="text"
          placeholder="Main language"
          value={this.state.mainLanguage}
          onChange={e => this.handleChange(e)}
        />
        <input
          name="isMystery"
          type="checkbox"
          value={this.state.isMystery}
          onChange={e => this.handleChange(e)}
        />
        <div onChange={e => this.handleChange(e)}>
          <input type="radio" name="favouriteFood" value="soup" id="soup" />{" "}
          <label htmlFor="soup">Soup</label>
          <input
            type="radio"
            name="favouriteFood"
            value="rice"
            id="rice"
          />{" "}
          <label htmlFor="rice">rice</label>
          <input
            type="radio"
            name="favouriteFood"
            value="bread"
            id="bread"
          />{" "}
          <label htmlFor="bread">bread</label>
        </div>

        <select
          name="gender"
          value={this.state.gender}
          onChange={e => this.handleChange(e)}
        >
          <option value="" />
          <option value="male">MALE</option>
          <option value="female">FEMALE</option>
          <option value="other">OTHER</option>
        </select>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Form;
