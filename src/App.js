import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium,{ StyleRoot } from "radium";
// import StyleSheet from 'react-style';

// import UserInput from './UserInput/UserInput'
// import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    persons: [
      { id: "1ds", name: "Max", age: 28 },
      { id: "2ds", name: "Manu", age: 21 },
      { id: "3ds", name: "Raghu", age: 16 },
    ],
    showPersons: false,
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };
  switchNameHAndler = (newName) => {
    this.setState({
      persons: [
        {
          name: "Maxi",
          age: 20,
        },
        {
          name: "Ravi",
          age: 18,
        },
      ],
    });
  };
  togglePersonsHandler = () => {
    let Show = this.state.showPersons;
    this.setState({
      showPersons: !Show,
    });
  };
  deletePersonHandler = (personIndex) => {
    // const persons=this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "Green",
      color: "White",
      font: "inherit",
      border: "1px solid blue",
      borderShadow: "0 2px 2px solid blue",
      padding: "8px",
      cursor: "pointer",
      borderRadius: "5px",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };
    }
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <StyleRoot>
      <div className="App">
        <h1>React App</h1>
        <p className={classes.join(" ")}>This is it!!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}
export default Radium(App);
