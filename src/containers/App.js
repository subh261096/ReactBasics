import React , { Component } from "react";
import styles from "./App.module.css";
// import Person from "../components/Persons/Person/Person";
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons'
import Cockpit from "../components/Cockpit/Cockpit";

// import Radium ,{ StyleRoot } from "radium";
// import StyleSheet from 'react-style';

// import UserInput from './UserInput/UserInput'
// import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  constructor(props){
    super(props);
    console.log("[App.js] constructor");
    
  }

  state = {
      persons: [
        { id: "1ds", name: "Max", age: 28 },
        { id: "2ds", name: "Manu", age: 21 },
        { id: "3ds", name: "Raghu", age: 16 },
      ],
      showPersons: false,
    };

  static getDerivedStateFromProps(props,state){
    console.log("[App.js] getDerivedStateFromProps",props);
    return state;
  }
  componentDidMount(){
    console.log("[App.js] Did Mount")
  }
  getSnapshotBeforeUpdate(){
    console.log("[App.js] getSnapshotBeforeChange");
  }

  componentDidUpdate(){
    console.log("ComponentDidUpdate")
  }
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
    console.log("[App.js] render");
    let persons = null;
    if (this.state.showPersons) {
      persons = 
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          />
    }
    
    return (
        <div className={styles.App}>
          <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          />
          {persons}
        </div>

    );
  }
}
export default App;
