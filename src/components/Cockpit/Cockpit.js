import React from 'react';
import styles from '../Cockpit/Cockpit.module.css'


const Cockpit = (props) => {
    let classes = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = styles.red;
    }
    
    if (props.persons.length <= 2) {
        classes.push(styles.red);
    }
    if (props.persons.length <= 1) {
        classes.push(styles.bold);
    }
    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(" ")}>This is it!!</p>
            <button className={btnClass}
                onClick={props.clicked}>
                Switch Name
            </button>
        </div>
    );
}

export default Cockpit;
