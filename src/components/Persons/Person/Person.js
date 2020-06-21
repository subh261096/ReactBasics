import React, { Component } from 'react';
// import Radium from 'radium';
import styles from './Person.module.css';

class Person  extends Component {
    // const rnd = Math.random();
    // if (rnd > 0.7) {
    //     throw new Error("something went wrong!");
    // }
    render(){
        console.log("[Person.js] Rendering")
        return (
            
            <div className={styles.Person}>
                <p onClick={this.props.click}>I am {this.props.name} of age {this.props.age}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }
}

export default Person;
