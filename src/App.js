import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form";

class App extends Component {

  state = {
    persons: []
  }

  changeHandler = e => {
    let { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      value = checked;
    }

    this.setState({
      [name]: value
    });
  };

  addPerson = person => {
    const persons = [...this.state.persons, person]
    this.setState({
      persons: persons
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">

            { this.state.persons.map((person, index) => {
              return (
                <ul key={index}>
                  <li>{person.name}</li>
                  <li>{person.gender}</li>
                  <li>{person.favouriteFood}</li>
                  <li>{person.mainLanguage}</li>
                  <li>{person.isMystery}</li>
                </ul>
              )
            })
          }
          <img src={logo} className="App-logo" alt="logo" />
  
        {/* <Form submithandler={(e) => this.changeHandler(e)}/> */}
        <Form submithandler={person => this.addPerson(person)}/>

        </header>
      </div>
    );
  }
}

export default App;
